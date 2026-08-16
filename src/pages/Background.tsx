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
      </div>
    </div>
  );
};

export default Background;
