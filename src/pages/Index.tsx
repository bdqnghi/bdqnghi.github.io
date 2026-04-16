const Index = () => {
  return (
    <div className="main-content">
      <h1 className="text-2xl font-bold mb-4">About</h1>

      {/* Bio Section */}
      <div className="mb-6">
        <div className="prose max-w-none">
          <p className="text-sm leading-relaxed mb-3 break-words">
            I'm a Research Scientist at{" "}
            <a href="https://research.google/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Google Research</a>.
            {" "}I'm as much a builder as a researcher. My interests span building core-layer technology for
            next-generation agentic systems that transform how software is developed. On the research side,
            this includes model post-training, reinforcement learning, and code reasoning to push the
            boundaries of what coding agents can do. On the product side, I focus on scaffold design,
            harness architecture, context engineering, and how these components can be composed together
            to deliver the next generation of coding agents that developers actually want to use.
          </p>
          <p className="text-sm leading-relaxed mb-3 break-words">
            I'm also an active open-source contributor, with the majority of my work available on my{" "}
            <a href="https://github.com/bdqnghi" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">GitHub</a>.
          </p>
          <p className="text-sm leading-relaxed break-words">
            Beyond Python, I'm drawn to high-performance languages like Rust and Go. As agentic systems
            mature, the choice of programming language becomes crucial for building systems that are fast,
            reliable, and scalable enough for production use.
          </p>
        </div>
      </div>

      {/* Research Focus */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Research Focus</h2>
        <p className="text-sm leading-relaxed mb-2">
          I am on the path to define foundational <span className="highlight">pillars towards breakthrough</span> for coding agents, focusing on four critical areas:
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex">
            <span className="mr-2 text-muted-foreground">•</span>
            <span><strong>Frontier Challenging Benchmarks:</strong> Defining comprehensive evaluation frameworks that truly test how coding agents operate in <span className="highlight">real-world development scenarios</span>, moving beyond simplistic coding tasks to complex, multi-step software engineering challenges.</span>
          </li>
          <li className="flex">
            <span className="mr-2 text-muted-foreground">•</span>
            <span><strong>Proactive Coding Agents:</strong> Building agents that act as <span className="highlight">true pair programmers</span> instead of reactive coding assistants like current SOTA developer tools. These agents anticipate needs, suggest improvements, and actively participate in the development process.</span>
          </li>
          <li className="flex">
            <span className="mr-2 text-muted-foreground">•</span>
            <span><strong>Foundation Models for Code:</strong> Developing foundational CodeLLMs that can learn to solve <span className="highlight">long-horizon software engineering tasks</span>, incorporating dynamic tool-calling, long-term memory, self-reflection, and multi-agent coordination.</span>
          </li>
          <li className="flex">
            <span className="mr-2 text-muted-foreground">•</span>
            <span><strong>Software Evolution:</strong> As software becomes easier to build, the world is rapidly accumulating legacy code that must be evolved and maintained. I focus on building coding agents that understand large-scale codebases and continuously evolve them, keeping systems up-to-date and addressing one of the most critical sustainability challenges in software development.</span>
          </li>
        </ul>
      </div>

      {/* Notable Works */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Notable Works</h2>
        <div className="space-y-3">
          <div>
            <h3 className="text-sm font-semibold leading-snug">
              <a href="https://arxiv.org/abs/2603.05344" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                OpenDev: Building Effective AI Coding Agents for the Terminal: Scaffolding, Harness, Context Engineering, and Lessons Learned
              </a>
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              81-page technical report. First ever to detail how coding agents should be built. Written in <span className="font-semibold text-accent">Rust</span>.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-snug">
              <a href="https://arxiv.org/abs/2512.18470" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                SWE-EVO: Benchmarking Coding Agents in Long-Horizon Software Evolution Scenarios
              </a>
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Frontier and challenging benchmark to measure the capabilities of coding agents on long-horizon software engineering tasks.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-snug">
              <a href="https://arxiv.org/abs/2512.18470" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                CodeWiki: Evaluating AI's Ability to Generate Holistic Documentation for Large-Scale Codebases
              </a>
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Methodology and benchmark to evaluate the ability of coding agents to generate documentation on large-scale codebases.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-snug">
              <a href="https://arxiv.org/abs/2410.01999" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                CodeMMLU: A Multi-Task Benchmark for Assessing Code Understanding & Reasoning Capabilities of CodeLLMs
              </a>
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              ICLR 2025 [on <a href="https://www.marktechpost.com/2024/10/09/codemmlu-a-comprehensive-multi-choice-benchmark-for-assessing-code-understanding-in-large-language-models/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Marktechpost</a>]
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-snug">
              <a href="https://arxiv.org/abs/2409.16299" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                HyperAgent: Generalist Software Engineering Agents to Solve Coding Tasks at Scale
              </a>
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              [on <a href="https://www.marktechpost.com/2024/09/11/fpt-software-ai-center-introduces-hyperagent-a-groundbreaking-generalist-agent-system-to-resolve-various-software-engineering-tasks-at-scale-achieving-sota-performance-on-swe-bench-and-defects4j/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Marktechpost</a>]
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-snug">
              <a href="https://arxiv.org/pdf/2306.00029.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                CodeTF: One-Stop Transformer-based Library for CodeLLMs
              </a>
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              [on <a href="https://news.ycombinator.com/item?id=36233881" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">YCombinator</a>, <a href="https://syncedreview.com/2023/06/13/salesforce-ais-codetf-library-facilitates-easy-llm-integration-for-code-intelligence-tasks" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Syncedreview</a>, <a href="https://www.marktechpost.com/2023/06/06/salesforce-ai-research-introduces-codetf-a-one-stop-transformer-library-for-code-large-language-models-codellm/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Marktechpost</a>]
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-snug">
              <a href="https://arxiv.org/pdf/2305.07922.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                CodeT5+: Open Code Large Language Models for Code Understanding and Generation
              </a>
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              EMNLP 2023 [on <a href="https://www.marktechpost.com/2023/05/20/salesforce-ai-introduces-codet5-a-new-family-of-open-code-large-language-models-with-an-encoder-decoder-architecture/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">Marktechpost</a>]
            </p>
          </div>
        </div>
      </div>

      {/* Media Coverage */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Media Coverage</h2>
        <div className="space-y-3">
          <div>
            <h3 className="text-sm font-semibold leading-snug">
              <a href="https://www.newscientist.com/article/2443466-ai-could-help-shrinking-pool-of-coders-keep-outdated-programs-working/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                My Interview on The New Scientist on the future of AI for modernization outdated system
              </a>
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">New Scientist Interview</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Index;
