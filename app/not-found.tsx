import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-slate-900">404</h1>

        <h2 className="mt-4 text-3xl font-semibold">
          Page not found
        </h2>

        <p className="mt-4 max-w-md text-slate-600">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-xl bg-slate-900 px-6 py-3 text-white transition hover:opacity-90"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}