import { ReactNode } from "react";

function BackgroundRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-[4.5rem_minmax(0,1fr)] items-start gap-x-3 border-b border-border/55 py-2.5 first:pt-0 last:border-0 last:pb-0 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:gap-x-4">
      <div className="whitespace-nowrap pt-0.5 font-sans text-xs font-medium leading-relaxed text-muted-foreground">{label}</div>
      <div className="min-w-0 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

const affiliations = [
  { year: "2026–Now", role: "Staff Research Scientist", organization: "Google Research", url: "https://research.google/" },
  { year: "2023–2025", role: "Director of AI Research", organization: "FPT Software AI Center", url: "https://www.linkedin.com/company/fpt-software-ai-center/", location: "Vietnam" },
  { year: "2021–2023", role: "Senior Research Scientist", organization: "Salesforce AI Research", url: "https://www.salesforceairesearch.com/" },
  { year: "2019–2021", role: "Principal Research Scientist", organization: "Huawei Ireland Research Center", url: "https://www.linkedin.com/company/huawei-ireland-research-center/" },
];

const services = [
  { name: "NeurIPS", entries: [
    ["Area Chair", "Evaluations and Datasets Track, 2026"],
    ["Reviewer", "Main Track, 2023 and 2026"],
    ["Reviewer", "Position Paper Track, 2026"],
    ["Reviewer", "Datasets and Benchmarks Track, 2024"],
    ["Reviewer", "DL4C Workshop, 2025"],
  ] },
  { name: "ICLR", entries: [
    ["Area Chair", "2027"],
    ["Reviewer", "Main Conference, 2022, 2023, 2025, and 2026"],
    ["Reviewer", "DL4C Workshop, 2025"],
    ["Program Committee", "DL4C Workshop, 2022"],
  ] },
  { name: "ACL / ARR", entries: [["Reviewer", "ACL Rolling Review, 2022–2026, including ACL 2024 and EMNLP 2024"]] },
  { name: "EMNLP", entries: [["Reviewer", "2023 and 2024"]] },
  { name: "MSR", entries: [["Program Committee", "Technical Track, 2025"]] },
];

const Background = () => (
  <div className="main-content">
    <h1 className="mb-5 text-2xl font-bold">Background</h1>
    <div className="space-y-5">
      <section aria-labelledby="education-heading">
        <h2 id="education-heading" className="mb-3 text-lg font-semibold">Education</h2>
        <div className="py-1">
          <BackgroundRow label="2020">
            <p className="font-medium">PhD in Computer Science</p>
            <a href="https://computing.smu.edu.sg/" target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-xs">Singapore Management University (SMU)</a>
          </BackgroundRow>
        </div>
      </section>
      <section aria-labelledby="affiliations-heading">
        <h2 id="affiliations-heading" className="mb-3 text-lg font-semibold">Past Affiliations</h2>
        <div className="py-1">
          {affiliations.map((affiliation) => (
            <BackgroundRow key={affiliation.year} label={affiliation.year}>
              <p className="font-medium">{affiliation.role}</p>
              <p className="mt-1 text-xs text-muted-foreground"><a href={affiliation.url} target="_blank" rel="noopener noreferrer">{affiliation.organization}</a>{affiliation.location && `, ${affiliation.location}`}</p>
            </BackgroundRow>
          ))}
        </div>
      </section>
      <section aria-labelledby="service-heading">
        <h2 id="service-heading" className="mb-3 text-lg font-semibold">Academic Service</h2>
        <div className="py-1">
          {services.map((service) => (
            <BackgroundRow key={service.name} label={service.name}>
              <ul className="ml-3 list-disc space-y-1 pl-1 text-[13px] marker:text-accent/80">
                {service.entries.map(([role, detail]) => (
                  <li key={`${role}-${detail}`} className="pl-0.5"><span className="font-medium text-foreground">{role}</span><span className="text-muted-foreground"> — {detail}</span></li>
                ))}
              </ul>
            </BackgroundRow>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default Background;
