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
            </li>
            <li className="grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-0.5">
              <span className="text-xs font-medium text-muted-foreground">2019-2021</span>
              <span className="text-sm">Principal Research Scientist, <a href="https://www.linkedin.com/company/huawei-ireland-research-center/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Huawei Ireland Research Center</a></span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Academic Service</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold mb-1.5">NeurIPS</h3>
              <ul className="space-y-1 text-sm">
                <li>NeurIPS 2026 — Area Chair, Evaluations and Datasets Track</li>
                <li>NeurIPS 2026 — Reviewer, Main Track</li>
                <li>NeurIPS 2026 — Reviewer, Position Paper Track</li>
                <li>NeurIPS 2025 — Reviewer, DL4C Workshop</li>
                <li>NeurIPS 2024 — Reviewer, Datasets and Benchmarks Track</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-1.5">ICLR</h3>
              <ul className="space-y-1 text-sm">
                <li>ICLR 2026 — Reviewer</li>
                <li>ICLR 2025 — Reviewer</li>
                <li>DL4C @ ICLR 2025 — Reviewer</li>
                <li>DL4C @ ICLR 2022 — Program Committee Member</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-1.5">ACL / ARR</h3>
              <ul className="space-y-1 text-sm">
                <li>ARR May 2026 — Reviewer</li>
                <li>ARR March 2026 — Reviewer</li>
                <li>ARR January 2026 — Reviewer</li>
                <li>ARR October 2025 — Reviewer</li>
                <li>ARR December 2024 — Reviewer</li>
                <li>ARR October 2024 — Reviewer</li>
                <li>ARR August 2024 — Reviewer</li>
                <li>ARR June 2024 / EMNLP 2024 — Reviewer</li>
                <li>ARR February 2024 / ACL 2024 — Reviewer</li>
                <li>ACL 2023 — Reviewer</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-1.5">EMNLP</h3>
              <ul className="space-y-1 text-sm">
                <li>EMNLP 2024 — Reviewer (via ARR June 2024)</li>
                <li>EMNLP 2023 — Reviewer</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-1.5">MSR</h3>
              <ul className="space-y-1 text-sm">
                <li>MSR 2025 — Program Committee Member, Technical Track</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-1.5">TSE</h3>
              <ul className="space-y-1 text-sm">
                <li>Added to TSE reviewer pool (Oct 2025)</li>
                <li>TSE 2026 — Reviewer (one assigned manuscript, several additional invitations declined)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-1.5">TOSEM</h3>
              <ul className="space-y-1 text-sm">
                <li>Reviewer — completed reviews for 5 manuscripts between Nov 2023 and Mar 2026 (plus multiple additional invitations across 2025–2026)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
