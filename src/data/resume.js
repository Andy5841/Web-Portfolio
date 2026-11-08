// Resume section. To update the resume:
//   1. Replace public/resume/Andy-Huynh-Resume.pdf with the new PDF (keep the file name).
//   2. Replace public/resume/resume-preview.png with a picture of its first page
//      (see the README for a one-line way to make it).
//   3. If the preview's pixel size changes, update previewWidth and previewHeight.
export const resume = {
  file: "/resume/Andy-Huynh-Resume.pdf",
  preview: "/resume/resume-preview.png",
  previewWidth: 1105,
  previewHeight: 1430,
};

// "Quick overview" next to the resume. Keep it high level: no proprietary
// details, source code, or internal drawings.
export const overview = {
  recent: {
    label: "Most recent work",
    role: "QA Summer Intern, Phoenix Electric Corp.",
    meta: "Canton, MA, May – July 2026",
    summary:
      "I designed an AI-assisted workflow that analyzes local control cabinet (LCC) electrical drawings and estimates the wire connections in each cabinet. It reduced manual counting time by approximately 75%.",
    points: [
      "Tested across 20+ cabinet drawings and 40,000+ connections.",
      "Generates highlighted review PDFs so engineers can verify counts and investigate flagged results.",
      "Prototyped a separate workflow that extracts cabinet nameplate and device-label data from exported drawings into CSV files.",
    ],
  },
  earlier: {
    label: "Before that",
    role: "Research Assistant, Northeastern University",
    meta: "Boston, MA, February – May 2026",
    summary:
      "I used structured prompts with ChatGPT to process biotechnology and pharmaceutical market data, then cross-checked inconsistent results against the original sources.",
  },
};
