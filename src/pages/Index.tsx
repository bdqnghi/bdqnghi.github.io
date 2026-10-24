import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const ExternalLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
    {children}
  </a>
);

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
            {" "}I'm as much a builder as a researcher. My work spans model post-training, reinforcement
            learning, and code reasoning, alongside the harnesses, tools, and context management that
            make coding agents useful in practice. I share much of my open-source work on{" "}
            <ExternalLink href="https://github.com/bdqnghi">GitHub</ExternalLink>
            {" "}and enjoy building fast, reliable systems in Python, Rust, and Go.
          </p>
          <p className="text-sm leading-relaxed break-words">
            I've been fortunate to contribute to impactful work at key stages of AI's development: foundation
            models and tools for coding
            {" "}(<ExternalLink href="https://jack-clark.net/2022/08/08/import-ai-299-the-worlds-best-language-model-is-made-in-china-nvidia-boosts-llm-training-openai-shows-how-to-fill-in-the-middle-on-a-language-model/">PanGu-Coder</ExternalLink>,
            {" "}<ExternalLink href="https://arxiv.org/abs/2305.07922">CodeT5+</ExternalLink>,
            {" "}<ExternalLink href="https://arxiv.org/abs/2306.00029">CodeTF</ExternalLink>),
            {" "}mainframe modernization
            {" "}(<ExternalLink href="https://arxiv.org/abs/2408.04660">XMainframe</ExternalLink>),
            {" "}and coding and design agents
            {" "}(<ExternalLink href="https://jules.google/">Jules</ExternalLink>,
            {" "}<ExternalLink href="https://stitch.withgoogle.com/">Stitch</ExternalLink>,
            {" "}<ExternalLink href="https://antigravity.google/">Antigravity</ExternalLink>).
            {" "}My recent work includes frontier research on
            {" "}<ExternalLink href="https://deepmind.google/models/gemini/">Gemini 4</ExternalLink>,
            {" "}with contributions to post-training, reinforcement learning environments,
            evaluation pipelines, and benchmarks.
          </p>
        </div>
      </div>

      <section className="mb-6" aria-labelledby="research-focus">
        <h2 id="research-focus" className="text-lg font-semibold mb-3">Research Focus</h2>
        <div className="space-y-3 text-sm leading-relaxed">
          <p>
            From 2016 to 2020, I studied how models learn the structure and behavior of code and
            applied them to a wide range of software engineering tasks, including program repair,
            code understanding, and bug detection
            {" "}(<ExternalLink href="https://arxiv.org/abs/2012.07023">InferCode</ExternalLink>,
            {" "}<ExternalLink href="https://arxiv.org/abs/2009.09777">TreeCaps</ExternalLink>).
            {" "}From 2020 to 2023, I contributed to the early wave of foundation models for understanding
            and generating code, including <ExternalLink href="https://jack-clark.net/2022/08/08/import-ai-299-the-worlds-best-language-model-is-made-in-china-nvidia-boosts-llm-training-openai-shows-how-to-fill-in-the-middle-on-a-language-model/">PanGu-Coder</ExternalLink>
            {" "}and <ExternalLink href="https://arxiv.org/abs/2305.07922">CodeT5+</ExternalLink>
            {" "}(<ExternalLink href="https://www.marktechpost.com/2023/05/20/salesforce-ai-introduces-codet5-a-new-family-of-open-code-large-language-models-with-an-encoder-decoder-architecture/">media</ExternalLink>;
            {" "}<ExternalLink href="https://x.com/stevenhoi/status/1658270266424975361">X</ExternalLink>).
            {" "}I also developed <ExternalLink href="https://arxiv.org/abs/2306.00029">CodeTF</ExternalLink>,
            {" "}the first one-stop library designed to make code language models easier to train, evaluate, and use
            {" "}(<ExternalLink href="https://news.ycombinator.com/item?id=36233881">media</ExternalLink>,
            {" "}<ExternalLink href="https://syncedreview.com/2023/06/13/salesforce-ais-codetf-library-facilitates-easy-llm-integration-for-code-intelligence-tasks">media</ExternalLink>,
            {" "}<ExternalLink href="https://www.marktechpost.com/2023/06/06/salesforce-ai-research-introduces-codetf-a-one-stop-transformer-library-for-code-large-language-models-codellm/">media</ExternalLink>;
            {" "}<ExternalLink href="https://x.com/_akhaliq/status/1664458443430739969">X</ExternalLink>).
          </p>

          <p>
            From 2023 to 2025, I advanced the early wave of coding agents, building their ability
            to navigate codebases, fix bugs, and verify changes in real software projects through
            {" "}<ExternalLink href="https://arxiv.org/abs/2409.16299">HyperAgent</ExternalLink>
            {" "}(<ExternalLink href="https://www.marktechpost.com/2024/09/11/fpt-software-ai-center-introduces-hyperagent-a-groundbreaking-generalist-agent-system-to-resolve-various-software-engineering-tasks-at-scale-achieving-sota-performance-on-swe-bench-and-defects4j/">media</ExternalLink>;
            {" "}<ExternalLink href="https://x.com/QuocNghi91/status/1839220524242899243">X</ExternalLink>).
            {" "}I also developed <ExternalLink href="https://arxiv.org/abs/2410.01999">CodeMMLU</ExternalLink>
            {" "}to test the code understanding and reasoning these agents need
            {" "}(<ExternalLink href="https://www.marktechpost.com/2024/10/09/codemmlu-a-comprehensive-multi-choice-benchmark-for-assessing-code-understanding-in-large-language-models/">media</ExternalLink>;
            {" "}<ExternalLink href="https://x.com/rohanpaul_ai/status/1844115605781147986">X</ExternalLink>).
            {" "}With <ExternalLink href="https://arxiv.org/abs/2408.04660">XMainframe</ExternalLink>,
            {" "}I contributed to early efforts to use LLMs to modernize mission-critical systems
            written in languages such as COBOL, where training data and developer expertise are scarce
            {" "}(<ExternalLink href="https://www.newscientist.com/article/2443466-ai-could-help-shrinking-pool-of-coders-keep-outdated-programs-working/">media</ExternalLink>).
          </p>

          <p>
            Since 2025, I've focused on frontier evaluations for complex software tasks, including
            long-horizon software engineering
            {" "}(<ExternalLink href="https://arxiv.org/abs/2512.18470">SWE-EVO</ExternalLink>;
            {" "}<ExternalLink href="https://x.com/omarsar0/status/2007825862721232956">X</ExternalLink>)
            {" "}and large-scale documentation generation
            {" "}(<ExternalLink href="https://arxiv.org/abs/2510.24428">CodeWiki</ExternalLink>;
            {" "}<ExternalLink href="https://x.com/tom_doerr/status/1992307258781282517">X</ExternalLink>).
            {" "}I also authored <ExternalLink href="https://arxiv.org/abs/2603.05344">OpenDev</ExternalLink>,
            {" "}the first comprehensive technical report on building an open-source coding agent
            for the terminal, detailing how its harness coordinates tools, memory, and execution
            {" "}(<ExternalLink href="https://co-r-e.com/method/opendev-terminal-coding-agent">media</ExternalLink>;
            {" "}<ExternalLink href="https://x.com/omarsar0/status/2030771811705872435">X</ExternalLink>).
            {" "}Today, I contribute to <ExternalLink href="https://deepmind.google/models/gemini/">Gemini 4</ExternalLink>
            {" "}through post-training, reinforcement learning environments, evaluation pipelines,
            and benchmarks.
          </p>
        </div>
        <p className="text-sm mt-4">
          <Link to="/publications" className="underline hover:no-underline">View all publications</Link>.
        </p>
      </section>

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
              {" "}[<ExternalLink href="https://co-r-e.com/method/opendev-terminal-coding-agent">media</ExternalLink>]
              {" "}[<ExternalLink href="https://x.com/omarsar0/status/2030771811705872435">X</ExternalLink>]
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
              {" "}[<ExternalLink href="https://x.com/omarsar0/status/2007825862721232956">X</ExternalLink>]
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-snug">
              <a href="https://arxiv.org/abs/2510.24428" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                CodeWiki: Evaluating AI's Ability to Generate Holistic Documentation for Large-Scale Codebases
              </a>
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Methodology and benchmark to evaluate the ability of coding agents to generate documentation on large-scale codebases.
              {" "}[<ExternalLink href="https://x.com/tom_doerr/status/1992307258781282517">X</ExternalLink>]
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-snug">
              <a href="https://arxiv.org/abs/2410.01999" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                CodeMMLU: A Multi-Task Benchmark for Assessing Code Understanding & Reasoning Capabilities of CodeLLMs
              </a>
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              ICLR 2025 [<a href="https://www.marktechpost.com/2024/10/09/codemmlu-a-comprehensive-multi-choice-benchmark-for-assessing-code-understanding-in-large-language-models/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">media</a>]
              {" "}[<ExternalLink href="https://x.com/rohanpaul_ai/status/1844115605781147986">X</ExternalLink>]
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-snug">
              <a href="https://arxiv.org/abs/2409.16299" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                HyperAgent: Generalist Software Engineering Agents to Solve Coding Tasks at Scale
              </a>
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              [<a href="https://www.marktechpost.com/2024/09/11/fpt-software-ai-center-introduces-hyperagent-a-groundbreaking-generalist-agent-system-to-resolve-various-software-engineering-tasks-at-scale-achieving-sota-performance-on-swe-bench-and-defects4j/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">media</a>]
              {" "}[<ExternalLink href="https://x.com/QuocNghi91/status/1839220524242899243">X</ExternalLink>]
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-snug">
              <a href="https://arxiv.org/pdf/2306.00029.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                CodeTF: One-Stop Transformer-based Library for CodeLLMs
              </a>
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              [<a href="https://news.ycombinator.com/item?id=36233881" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">media</a>, <a href="https://syncedreview.com/2023/06/13/salesforce-ais-codetf-library-facilitates-easy-llm-integration-for-code-intelligence-tasks" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">media</a>, <a href="https://www.marktechpost.com/2023/06/06/salesforce-ai-research-introduces-codetf-a-one-stop-transformer-library-for-code-large-language-models-codellm/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">media</a>]
              {" "}[<ExternalLink href="https://x.com/_akhaliq/status/1664458443430739969">X</ExternalLink>]
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-snug">
              <a href="https://arxiv.org/pdf/2305.07922.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
                CodeT5+: Open Code Large Language Models for Code Understanding and Generation
              </a>
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              EMNLP 2023 [<a href="https://www.marktechpost.com/2023/05/20/salesforce-ai-introduces-codet5-a-new-family-of-open-code-large-language-models-with-an-encoder-decoder-architecture/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">media</a>]
              {" "}[<ExternalLink href="https://x.com/stevenhoi/status/1658270266424975361">X</ExternalLink>]
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
