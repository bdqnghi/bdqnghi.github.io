const Background = () => {
  return (
    <div className="main-content">
      <h1 className="text-2xl font-bold mb-4">Background</h1>

      <div className="space-y-5">
        <div>
          <h2 className="text-lg font-semibold mb-3">Education</h2>
          <ul className="space-y-2">
            <li className="grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-0.5">
              <span className="text-xs font-medium text-muted-foreground">2020</span>
              <span className="text-sm">PhD in Computer Science, <a href="https://computing.smu.edu.sg/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Singapore Management University (SMU)</a></span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Past Affiliations</h2>
          <ul className="space-y-2">
            <li className="grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-0.5">
              <span className="text-xs font-medium text-muted-foreground">2026-Now</span>
              <span className="text-sm">Staff Research Scientist, <a href="https://research.google/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Google Research</a></span>
            </li>
            <li className="grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-0.5">
              <span className="text-xs font-medium text-muted-foreground">2023-2025</span>
              <span className="text-sm">Director of AI Research, <a href="https://www.linkedin.com/company/fpt-software-ai-center/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">FPT Software AI Center</a>, Vietnam</span>
            </li>
            <li className="grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-0.5">
              <span className="text-xs font-medium text-muted-foreground">2021-2023</span>
              <span className="text-sm">Senior Research Scientist, <a href="https://www.salesforceairesearch.com/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Salesforce AI Research</a></span>
              <span className="col-start-2 text-xs text-muted-foreground">Worked with <a href="https://sites.google.com/view/stevenhoi/home" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Prof. Steven Hoi</a></span>
            </li>
            <li className="grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-0.5">
              <span className="text-xs font-medium text-muted-foreground">2019-2021</span>
              <span className="text-sm">Principal Research Scientist, <a href="https://www.linkedin.com/company/huawei-ireland-research-center/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Huawei Ireland Research Center</a></span>
              <span className="col-start-2 text-xs text-muted-foreground">Worked with <a href="https://scholar.google.com/citations?user=E5Z63aUAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Prof. Yijun Yu</a></span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Academic Service</h2>
          <div className="space-y-4">
            <div className="grid gap-1 sm:grid-cols-[5.5rem_1fr] sm:gap-x-3">
              <h3 className="text-sm font-semibold leading-relaxed">NeurIPS</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed marker:text-accent">
                <li><span className="font-semibold">Area Chair</span> — Evaluations and Datasets Track, 2026</li>
                <li><span className="font-medium">Reviewer</span> — Main Track, 2023 and 2026</li>
                <li><span className="font-medium">Reviewer</span> — Position Paper Track, 2026</li>
                <li><span className="font-medium">Reviewer</span> — Datasets and Benchmarks Track, 2024</li>
                <li><span className="font-medium">Reviewer</span> — DL4C Workshop, 2025</li>
              </ul>
            </div>
            <div className="grid gap-1 sm:grid-cols-[5.5rem_1fr] sm:gap-x-3">
              <h3 className="text-sm font-semibold leading-relaxed">ICLR</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed marker:text-accent">
                <li><span className="font-semibold">Area Chair</span> — 2027</li>
                <li><span className="font-medium">Reviewer</span> — Main Conference, 2022, 2023, 2025, and 2026</li>
                <li><span className="font-medium">Reviewer</span> — DL4C Workshop, 2025</li>
                <li><span className="font-medium">Program Committee</span> — DL4C Workshop, 2022</li>
              </ul>
            </div>
            <div className="grid gap-1 sm:grid-cols-[5.5rem_1fr] sm:gap-x-3">
              <h3 className="text-sm font-semibold leading-relaxed">ACL / ARR</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed marker:text-accent">
                <li><span className="font-medium">Reviewer</span> — ACL Rolling Review, 2022–2026, including ACL 2024 and EMNLP 2024</li>
              </ul>
            </div>
            <div className="grid gap-1 sm:grid-cols-[5.5rem_1fr] sm:gap-x-3">
              <h3 className="text-sm font-semibold leading-relaxed">EMNLP</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed marker:text-accent">
                <li><span className="font-medium">Reviewer</span> — 2023 and 2024</li>
              </ul>
            </div>
            <div className="grid gap-1 sm:grid-cols-[5.5rem_1fr] sm:gap-x-3">
              <h3 className="text-sm font-semibold leading-relaxed">MSR</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm leading-relaxed marker:text-accent">
                <li><span className="font-medium">Program Committee</span> — Technical Track, 2025</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
