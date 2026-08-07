import { google } from "googleapis";

export type Lead = {
  full_name?: string;
  email?: string;
  phone?: string;
  business_name?: string;
  website?: string;
  business_type?: string;
  country?: string;
  selected_plan?: string;
  budget?: string;
  message?: string;
};

let sheetsClient: ReturnType<typeof google.sheets> | null = null;

function getSheetsClient() {
  if (sheetsClient) return sheetsClient;

  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!email || !rawKey) {
    throw new Error(
      "Google Sheets env vars (GOOGLE_SERVICE_ACCOUNT_EMAIL / GOOGLE_PRIVATE_KEY) are not set",
    );
  }

  // Private keys stored in env vars have their newlines escaped as "\n".
  const privateKey = rawKey.replace(/\\n/g, "\n");

  const auth = new google.auth.JWT({
    email,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  sheetsClient = google.sheets({ version: "v4", auth });
  return sheetsClient;
}

/**
 * Appends a lead as a new row to the configured Google Sheet.
 * Column order must match the header row in the sheet (see setup notes).
 */
export async function appendLeadToSheet(lead: Lead): Promise<void> {
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  if (!spreadsheetId) {
    throw new Error("GOOGLE_SHEET_ID is not set");
  }

  const sheets = getSheetsClient();
  const timestamp = new Date().toISOString();

  const row = [
    timestamp,
    lead.full_name ?? "",
    lead.email ?? "",
    lead.phone ?? "",
    lead.business_name ?? "",
    lead.website ?? "",
    lead.business_type ?? "",
    lead.country ?? "",
    lead.selected_plan ?? "",
    lead.budget ?? "",
    lead.message ?? "",
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Leads!A1",
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [row] },
  });
}
