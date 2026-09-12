import type { ComponentType } from "react";
import {
  FiCompass,
  FiCpu,
  FiGlobe,
  FiLayers,
  FiShield,
  FiZap,
} from "react-icons/fi";

export interface ServiceItem {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

export const navItems = ["Services", "Work", "Process"];

export const services: ServiceItem[] = [
  {
    title: "Website Design & Development",
    description:
      "New builds or redesigns—clean structure, clear messaging, and built to convert visitors into customers.",
    icon: FiLayers,
  },
  {
    title: "Branding & UI/UX",
    description:
      "Logo design, brand identity, and user experience that makes your business feel professional and trustworthy.",
    icon: FiCompass,
  },
  {
    title: "SEO & CRM Integration",
    description:
      "Get found on Google. Connect your forms, pipelines, and follow-ups so leads don't slip through.",
    icon: FiCpu,
  },
  {
    title: "AI Integration & Growth Support",
    description:
      "Add AI for support flows, automation, and lead handling—plus ongoing strategy to help you grow.",
    icon: FiZap,
  },
];

export const metrics = [
  { value: "12x", label: "faster launches" },
  { value: "98%", label: "retention rate" },
  { value: "4.9/5", label: "client satisfaction" },
];

export const featuredWork = [
  {
    slug: "nova-tech-solutions",
    title: "Nova Tech Solutions",
    category: "AI SaaS",
    tagline: "Product-led website and dashboard experience for an AI operations platform.",
    summary:
      "Their product was strong but the website was confusing. We clarified the story and tripled demo requests in 30 days.",
    gradient: "from-[#2A211D] to-[#806C5D]",
    previewHeadline: "AI operations, made effortless.",
    clientName: "Aarav Mehta",
    clientRole: "Founder, Nova Tech Solutions",
    timeline: "4 weeks · Q3 2024",
    challenge:
      "A technically strong platform had a dense, feature-led website that made it difficult for decision-makers to understand its value quickly. The homepage tried to explain everything at once — integrations, pricing tiers, API docs — and in doing so explained nothing clearly. Prospective clients were bouncing before they ever reached the demo CTA.",
    solution:
      "We simplified the product story into a clear conversion path, paired it with confident product visuals, and gave each capability room to breathe. A structured hero with a single CTA, a benefit-led feature walkthrough, and an interactive dashboard preview replaced the old wall of text.",
    result: "A clearer first impression designed to build product trust and support qualified demo requests — delivering measurable results within the first 30 days of launch.",
    requirements: [
      "Clearly communicate platform value to non-technical decision-makers",
      "Drive demo booking requests as the primary conversion action",
      "Show product visuals that build trust without full source access",
      "Mobile-first, fast-loading (Core Web Vitals green across the board)",
      "Structured pricing page that reduces back-and-forth sales calls",
    ],
    approach: [
      "Ran a brand and product positioning workshop to uncover the single clearest value statement",
      "Designed a conversion-focused homepage — bold hero, feature walkthrough, social proof, then CTA",
      "Built custom interactive dashboard mockups to demonstrate the product without sharing credentials",
      "Implemented progressive disclosure: high-level overview first, technical depth available on demand",
      "Optimised for Core Web Vitals with Next.js, image compression, and deferred animations",
    ],
    resultMetrics: [
      { value: "3×", label: "more demo requests in 30 days" },
      { value: "1.2s", label: "load time (was 4.8s)" },
      { value: "68%", label: "lower bounce rate" },
    ],
  },
  {
    slug: "bloom-wellness",
    title: "Bloom Wellness",
    category: "Healthcare",
    tagline: "Warm, booking-first website and visual identity for a wellness clinic.",
    summary:
      "Visitors were not booking. We improved trust and booking flow, and online appointments grew 4.2x.",
    gradient: "from-[#AFC4CE] to-[#DCE7EA]",
    previewHeadline: "Wellness, on your terms.",
    clientName: "Priya Sharma",
    clientRole: "Owner, Bloom Wellness Clinic",
    timeline: "3 weeks · Q2 2024",
    challenge:
      "Prospective patients had to navigate scattered service information across three different pages before they could confidently take the next step and book a visit. The old site had no consistent visual language — each page felt like a different website. Returning visitors were not converting, and new visitors left without booking.",
    solution:
      "We created a calm, reassuring visual system with service-led navigation, clear practitioner cues, and prominent booking moments at every scroll depth. A persistent booking CTA, practitioner profiles, and a trust-first homepage replaced the fragmented layout.",
    result: "A more welcoming digital front door that makes services easier to explore and appointments significantly easier to start — with measurable booking and traffic improvements in the first two months.",
    requirements: [
      "Make it immediately clear what services are offered and who they are for",
      "Integrate an online booking widget that patients can use on mobile",
      "Create a warm, trustworthy visual identity that reassures first-time patients",
      "Improve local SEO to appear in 'wellness clinic near me' searches",
      "Showcase practitioner credentials and patient testimonials prominently",
    ],
    approach: [
      "Designed a calm editorial layout with soft tones, generous whitespace, and serif-meets-sans typography",
      "Built service-led page architecture so patients land directly in relevant content",
      "Integrated a real-time booking widget with persistent CTA visible throughout the scroll",
      "Implemented local SEO schema markup with location keywords and Google Business signals",
      "Designed a practitioner spotlight section and a testimonials carousel to anchor trust",
    ],
    resultMetrics: [
      { value: "4.2×", label: "more online bookings" },
      { value: "+52%", label: "organic traffic in 60 days" },
      { value: "4.9/5", label: "patient satisfaction rating" },
    ],
  },
  {
    slug: "rk-interiors",
    title: "RK Interiors",
    category: "Interior Design",
    tagline: "Website design and digital presence for a premium interior design studio.",
    summary:
      "The work looked premium, the website did not. We rebuilt the portfolio and lifted lead quality 5x.",
    gradient: "from-[#806C5D] to-[#F4EFE7]",
    previewHeadline: "Spaces with a point of view.",
    clientName: "Rohan Kapoor",
    clientRole: "Director, RK Interiors",
    timeline: "5 weeks · Q4 2024",
    challenge:
      "The studio's previous website did not reflect the craft, scale, or editorial quality of its interior projects. Photography was compressed, navigation felt corporate, and the enquiry form was buried at the bottom. High-value prospects were visiting but not enquiring — the site simply did not match the premium positioning of the work.",
    solution:
      "We used an image-forward, editorial layout with purposeful whitespace so the portfolio could lead the experience and enquiries felt premium. Full-bleed photography, a project filter by room type, and a refined lead flow replaced the cluttered layout.",
    result: "A refined online portfolio that gives every project the presence it deserves — dramatically increasing the quality and volume of inbound enquiries from the first month.",
    requirements: [
      "Portfolio-first website where photography leads the entire experience",
      "Filter projects by room type (living, bedroom, kitchen, commercial)",
      "Enquiry flow that qualifies prospects and captures project budget upfront",
      "A luxury, editorial visual identity with intentional whitespace",
      "Fast-loading even with high-resolution full-bleed images",
    ],
    approach: [
      "Designed an image-first editorial grid with full-bleed photography and restrained typographic styling",
      "Built a JavaScript-free CSS filter grid for instant project filtering by category",
      "Created a multi-step enquiry form with project type, budget range, and timeline selectors",
      "Paired a curated serif/sans typography system to signal editorial credibility",
      "Implemented Next.js Image with automatic WebP conversion and lazy loading for all portfolio imagery",
    ],
    resultMetrics: [
      { value: "5×", label: "increase in enquiry quality" },
      { value: "+78%", label: "time-on-site improvement" },
      { value: "12", label: "new project enquiries in first month" },
    ],
  },
];

export const process = [
  {
    step: "01",
    title: "Tell us what you need",
    description:
      "Share your business, your goals, and what's not working. We'll suggest the best path forward.",
  },
  {
    step: "02",
    title: "We build it with you",
    description:
      "Design, development, branding, integrations—we handle the work and keep you in the loop.",
  },
  {
    step: "03",
    title: "You own it",
    description:
      "After launch, we give you 1 month of free support to teach you how to manage and update it yourself.",
  },
];

//export const trustedBy = ["OpenAI", "Vercel", "Framer", "Stripe", "Apple"];

/*export const values = [
  {
    title: "100% Custom Design",
    description:
      "Every website is crafted specifically for your business. No templates. No shortcuts.",
    icon: FiShield,
  },
  {
    title: "Built to Convert",
    description:
      "Designed to build trust, generate leads, and turn visitors into paying customers.",
    icon: FiGlobe,
  },
];*/

export interface PricingTier {
  name: string;
  price: string;
  description?: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
  ctaAction?: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Standard",
    price: "₹7,999",
    features: [
      "Up to 5 Pages",
      "Premium Responsive Design",
      "Basic SEO Setup",
      "Contact Form",
      "WhatsApp Integration",
      "Google Maps Integration",
      "7 Days Free Support",
    ],
    ctaText: "Choose Standard",
    ctaAction: "contact",
  },

  {
    name: "Pro",
    price: "₹14,999",
    highlighted: true,
    description: "Most Popular",
    features: [
      "Everything in Standard",
      "Up to 10 Pages",
      "Premium Animations",
      "Blog / CMS",
      "Advanced SEO",
      "Google Analytics",
      "Performance Optimization",
      "30 Days Free Support",
    ],
    ctaText: "Choose Pro",
    ctaAction: "contact",
  },

  {
    name: "Ultra",
    price: "₹24,999",
    features: [
      "Everything in Pro",
      "Custom UI/UX",
      "Booking or Payment Integration",
      "Advanced Animations",
      "Speed Optimization",
      "Priority Support",
      "Training Session",
    ],
    ctaText: "Choose Ultra",
    ctaAction: "contact",
  },

  {
    name: "Enterprise",
    price: "Custom",
    description: "Let's discuss your project",
    features: [
      "Completely Custom Solution",
      "Unlimited Pages",
      "API Integrations",
      "Custom Dashboard",
      "Dedicated Support",
      "Scalable Architecture",
    ],
    ctaText: "Book a Free Call",
    ctaAction: "contact",
  },
];

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Aarav Mehta",
    role: "Founder",
    company: "NovaTech Solutions",
    content:
      "The team understood exactly what we wanted. The website feels premium, loads incredibly fast, and perfectly represents our brand.",
    avatar: "AM",
  },
  {
    name: "Priya Sharma",
    role: "Owner",
    company: "Bloom Wellness Clinic",
    content:
      "From the first consultation to the final launch, everything was smooth and professional. We've already started receiving compliments from our clients.",
    avatar: "PS",
  },
  {
    name: "Rohan Kapoor",
    role: "Director",
    company: "RK Interiors",
    content:
      "Our previous website looked outdated. Lumora completely transformed our online presence with a modern design that truly reflects our business.",
    avatar: "RK",
  },
  {
    name: "Sarah Anderson",
    role: "CEO",
    company: "TechFlow Ventures",
    content:
      "An outstanding experience from start to finish. Beautiful design, excellent communication, and attention to every detail.",
    avatar: "SA",
  },
  {
    name: "Marcus Chen",
    role: "Founder",
    company: "Aurora AI Labs",
    content:
      "The balance between creativity and functionality is exceptional. Our new website finally feels like a premium technology brand.",
    avatar: "MC",
  },
  {
    name: "Neha Verma",
    role: "Marketing Head",
    company: "Vertex Digital",
    content:
      "Professional, responsive, and incredibly easy to work with. The final website exceeded every expectation our team had.",
    avatar: "NV",
  },
];


export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What does Lumora do?",
    answer:
      "We design and develop websites, create branding and logos, build UI/UX, integrate SEO and CRM, add AI where it helps, and provide ongoing growth support. Everything from one team.",
  },
  {
    question: "Do you build websites from scratch?",
    answer:
      "Yes. We handle strategy, design, development, and launch. You don't need to manage multiple freelancers or agencies.",
  },
  {
    question: "Can you redesign or fix my existing website?",
    answer:
      "Yes. If your site looks outdated, confuses visitors, or doesn't convert, we rebuild it with better structure, clearer messaging, and stronger trust signals.",
  },
  {
    question: "What happens after my website launches?",
    answer:
      "You get 1 month of free support where we teach you how to manage, update, and confidently own your website. After that, any additional changes or support are optional and chargeable. We don't keep you dependent—we give you full control.",
  },
  {
    question: "Will I be able to manage my website myself?",
    answer:
      "Yes. That's the goal. During the free 1-month support period, we train you on how to make updates, manage content, and handle basic changes. You'll have full ownership and confidence to run it on your own.",
  },
  {
    question: "Do I have to pay for ongoing support after the first month?",
    answer:
      "Only if you want it. The first month is free and focused on teaching you independence. After that, ongoing support, updates, or new features are optional and charged separately. You're never locked in.",
  },
  {
    question: "Do you handle branding and logo design?",
    answer:
      "Yes. We create logos, brand identity, visual direction, and apply it consistently across your website and digital presence.",
  },
  {
    question: "Can you help with SEO and getting found on Google?",
    answer:
      "Yes. We build SEO foundations into every website and can provide ongoing SEO support for long-term organic growth.",
  },
  {
    question: "Can you integrate CRM, forms, and automation?",
    answer:
      "Yes. We connect your forms, CRM pipelines, email follow-ups, and automation so leads don't slip through and your team does less manual work.",
  },
  {
    question: "Do you add AI to websites?",
    answer:
      "Yes, but only when it solves a real problem—like support flows, lead handling, or automation. We don't add AI just for the sake of it.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Simple websites can launch in a few days. Custom builds with branding, integrations, and strategy usually take 2-4 weeks. We'll give you a clear timeline upfront.",
  },
  {
    question: "How do I start a project with Lumora?",
    answer:
      "Message us on WhatsApp or email with your current website or a brief description of what you need. We'll respond quickly with a clear next step and recommendation.",
  },
];
