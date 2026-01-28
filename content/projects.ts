export interface Project {
  title: string;
  href: string;
  description: string;
  status?: "Active" | "Archived" | "Building";
  date?: string;
  video?: string;
}

export const projects: Project[] = [
  {
    title: "Daisy Skill: Admission Status Review",
    href: "https://github.com/daisyai-ai/daisy-skill-1",
    description:
      "Claude Code skill for evaluating hospital admission status (inpatient vs observation) against clinical evidence and payer criteria",
    status: "Active",
    date: "Jan 2026",
  },
  {
    title: "Daisy AI",
    href: "https://daisyai.ai",
    description: "Healthcare automation: utilization management, clinical review, documentation",
    status: "Active",
    date: "Nov 2025",
    video: "/daisy-demo.mp4",
  },
  {
    title: "Polymarket Arbitrage Research",
    href: "https://github.com/thomasstartz111/polymarket-arb-research",
    description: "Can you find exploitable inefficiencies in prediction markets? I scanned 51K snapshots across 3,335 markets. Short answer: No.",
    status: "Archived",
    date: "Jan 2026",
  },
];
