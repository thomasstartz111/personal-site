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
    title: "Daisy AI",
    href: "https://daisyai.ai",
    description: "Healthcare automation: utilization management, clinical review, documentation",
    status: "Active",
    date: "Nov 2025",
    video: "/daisy-demo.mp4",
  },
];
