// Layout moved to App-level; this page renders content only.

import CompactAIAgent from '@/components/CompactAIAgent';

const Index = () => {
  return (
    <div className="main-content">
      {/* AI Research Focus - Compact Header */}
      <div className="section-spacing relative min-h-[150px] md:min-h-[170px]">
        <div className="max-w-4xl mx-auto h-full">
          <CompactAIAgent className="w-full h-full" />
        </div>
      </div>

      {/* Bio Section */}
      <div className="section-spacing">
        <h2 className="text-2xl font-semibold mb-lg">About</h2>
        <div className="prose max-w-none">
          <p className="text-base leading-relaxed mb-6 break-words">
            I completed the Ph.D in Computer Science (June-2020) at School of Computing & Information Systems (SCIS), 
            Singapore Management University (SMU) (Rank 81 Overall, Rank 4 in Software Engineering Research on CSRanking) 
            under the supervision of <a href="http://www.mysmu.edu/faculty/lxjiang/#gsc.tab=0" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Prof. Lingxiao Jiang</a>. I published papers at top-tier academic conferences across 
            different domains in Computer Science, such as Software Engineering (ICSE, ESEC/FSE, ASE), Artificial 
            Intelligence (AAAI, ICLR), Natural Language Processing (EMNLP, ACL, NAACL), Information Retrieval (SIGIR).
          </p>
          <p className="text-base leading-relaxed mb-6 break-words">
            I'm also an active open-source contributor, with the majority of my work available on my <a href="https://github.com/bdqnghi" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">GitHub</a>.
          </p>
          <p className="text-base leading-relaxed break-words">
            Throughout my research career, I've had the honor of working with brilliant minds and talents from{" "}
            <a href="https://soarsmu.github.io/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">SOAR Group - SMU</a>, <a href="https://www.linkedin.com/company/fpt-software-ai-center/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">FSoft AI Center</a>,{" "}
            <a href="https://www.linkedin.com/company/huawei-ireland-research-center/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Huawei Ireland Research Center</a>,{" "}
            <a href="https://www.salesforceairesearch.com/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Salesforce AI Research</a>.
          </p>
        </div>
      </div>

      {/* Education & Experience */}
      <div className="section-spacing">
        <h2 className="text-2xl font-semibold mb-lg">Education & Past Affiliations</h2>
        
        <div className="space-y-lg">
          <div>
            <h3 className="text-lg font-medium mb-md">Education</h3>
            <ul className="space-y-md">
              <li className="grid grid-cols-[6rem_1fr] gap-x-md gap-y-1">
                <span className="text-sm font-medium">2020</span>
                <span className="text-sm">PhD in Computer Science, <a href="https://computing.smu.edu.sg/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Singapore Management University (SMU)</a></span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-md">Past Affiliations</h3>
            <ul className="space-y-md">
              <li className="grid grid-cols-[6rem_1fr] gap-x-md gap-y-1">
                <span className="text-sm font-medium">Recent</span>
                <span className="text-sm">Director of AI Research, <a href="https://www.linkedin.com/company/fpt-software-ai-center/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">FPT Software AI Center</a>, Vietnam</span>
              </li>
              <li className="grid grid-cols-[6rem_1fr] gap-x-md gap-y-1">
                <span className="text-sm font-medium">Previous</span>
                <span className="text-sm">Senior Research Scientist, <a href="https://www.salesforceairesearch.com/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Salesforce AI Research</a></span>
                <span className="col-start-2 text-xs text-muted-foreground">Worked with <a href="https://sites.google.com/view/stevenhoi/home" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Prof. Steven Hoi</a></span>
              </li>
              <li className="grid grid-cols-[6rem_1fr] gap-x-md gap-y-1">
                <span className="text-sm font-medium">Previous</span>
                <span className="text-sm">Principal Research Scientist, <a href="https://www.linkedin.com/company/huawei-ireland-research-center/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Huawei Ireland Research Center</a></span>
                <span className="col-start-2 text-xs text-muted-foreground">Worked with <a href="https://scholar.google.com/citations?user=E5Z63aUAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Prof. Yijun Yu</a></span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Research Interests */}
      <div className="section-spacing">
        <h2 className="text-2xl font-semibold mb-lg">Research Interests</h2>
        <div className="text-base leading-relaxed space-y-md">
          <p>
            I am deeply passionate about advancing autonomous coding agents that span the entire software 
            development lifecycle, from requirements gathering and design to testing, deployment, and ongoing 
            maintenance. These agents go beyond basic assistance by acting as true pair programmers: interactive 
            partners that collaborate in real-time, offering suggestions, reviewing code, debugging issues, and 
            adapting to developer styles while drawing on vast knowledge to solve complex problems.
          </p>
          <p>
            My goal is to create systems that empower developers—whether experts or newcomers—to build software 
            faster, more reliably, and more creatively, making programming accessible and enjoyable for everyone 
            while addressing ethical challenges like bias, security, and transparency.
          </p>
          <p>
            My work focuses on developing these agents using state-of-the-art techniques, such as training 
            foundational CodeLLMs and enhancing them with dynamic tool-calling, long-term memory, self-reflection, 
            and multi-agent coordination. This enables agents to handle end-to-end workflows independently or in 
            teams, while ensuring human oversight for critical decisions.
          </p>
          
          <div className="mt-lg">
            <h3 className="text-lg font-medium mb-md">Key Focus Areas</h3>
            <ul className="space-y-sm text-sm">
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Architecting multi-modal systems that process code, natural language, visuals, and even physical inputs for comprehensive tasks</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Boosting reliability through advanced error-handling, hallucination mitigation, and benchmarks that evaluate performance across domains</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Applying agents to diverse challenges, including code synthesis, semantic search, automated testing, bug repair, migration, and refactoring</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Integrating agents into development ecosystems with plugins, APIs, and interfaces that prioritize safety, explainability, and scalability</span>
              </li>
              <li className="flex">
                <span className="mr-2">•</span>
                <span>Developing comprehensive benchmarks to measure agents' reasoning capabilities and performance on long-horizon tasks</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Highlighted Publications */}
      <div className="section-spacing">
        <h2 className="text-2xl font-semibold mb-lg">Highlighted Publications</h2>
        <div className="space-y-md">
          <div className="border-l-2 border-border pl-md">
            <h3 className="font-medium text-base">
              <a href="https://arxiv.org/abs/2410.01999" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                CodeMMLU: A Multi-Task Benchmark for Assessing Code Understanding & Reasoning Capabilities of CodeLLMs
              </a>
            </h3>
            <p className="text-sm text-muted-foreground">
              ICLR 2025 [on <a href="https://www.marktechpost.com/2024/10/09/codemmlu-a-comprehensive-multi-choice-benchmark-for-assessing-code-understanding-in-large-language-models/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Marktechpost</a>]
            </p>
          </div>
          <div className="border-l-2 border-border pl-md">
            <h3 className="font-medium text-base">
              <a href="https://arxiv.org/abs/2409.16299" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                HyperAgent: Generalist Software Engineering Agents to Solve Coding Tasks at Scale
              </a>
            </h3>
            <p className="text-sm text-muted-foreground">
              [on <a href="https://www.marktechpost.com/2024/09/11/fpt-software-ai-center-introduces-hyperagent-a-groundbreaking-generalist-agent-system-to-resolve-various-software-engineering-tasks-at-scale-achieving-sota-performance-on-swe-bench-and-defects4j/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Marktechpost</a>]
            </p>
          </div>
          <div className="border-l-2 border-border pl-md">
            <h3 className="font-medium text-base">
              <a href="https://arxiv.org/pdf/2306.00029.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                CodeTF: One-Stop Transformer-based Library for CodeLLMs
              </a>
            </h3>
            <p className="text-sm text-muted-foreground">
              [on <a href="https://news.ycombinator.com/item?id=36233881" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">YCombinator</a>, <a href="https://syncedreview.com/2023/06/13/salesforce-ais-codetf-library-facilitates-easy-llm-integration-for-code-intelligence-tasks" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Syncedreview</a>, <a href="https://www.marktechpost.com/2023/06/06/salesforce-ai-research-introduces-codetf-a-one-stop-transformer-library-for-code-large-language-models-codellm/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Marktechpost</a>]
            </p>
          </div>
          <div className="border-l-2 border-border pl-md">
            <h3 className="font-medium text-base">
              <a href="https://arxiv.org/pdf/2305.07922.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                CodeT5+: Open Code Large Language Models for Code Understanding and Generation
              </a>
            </h3>
            <p className="text-sm text-muted-foreground">
              EMNLP 2023 [on <a href="https://www.marktechpost.com/2023/05/20/salesforce-ai-introduces-codet5-a-new-family-of-open-code-large-language-models-with-an-encoder-decoder-architecture/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Marktechpost</a>]
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Index;
