import React from "react";

type Props = {
  className?: string;
};

const RESEARCH_AREAS = [
  "Autonomous Coding Agents",
  "CodeLLMs & Foundation Models",
  "Multi-Agent Coordination",
  "Self-Improving Systems",
  "Benchmarking Agent Workflows"
];

export default function CompactAIAgent({ className }: Props) {
  return (
    <div className={`${className} relative overflow-hidden`} aria-hidden={false}>
      <div className="relative h-full flex flex-col justify-center">

        {/* Main content */}
        <div className="relative z-10 text-center space-y-6 px-4 md:px-8">

          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl text-foreground text-emphasis claude-fade-in">
              AI Research Focus
            </h1>

            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto claude-fade-in claude-fade-in-delay-1">
              Advancing autonomous systems for software development
            </p>

            {/* Separator */}
            <div className="w-12 h-px bg-foreground/20 mx-auto claude-fade-in claude-fade-in-delay-1"></div>
          </div>

          {/* Research areas */}
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 text-left">
              {RESEARCH_AREAS.map((area, index) => (
                <div
                  key={area}
                  className="claude-fade-in"
                  style={{ animationDelay: `${0.6 + index * 0.08}s` }}
                >
                  <div className="flex items-center space-x-3 py-3 px-2 border-b border-border/40 transition-colors duration-200 hover:bg-muted/50">
                    <span className="text-muted-foreground text-xs font-mono tabular-nums">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-foreground/90 text-sm">
                      {area}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .claude-fade-in {
          opacity: 0;
          transform: translateY(8px);
          animation: claudeFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.2s;
        }

        .claude-fade-in-delay-1 {
          animation-delay: 0.35s;
        }

        @keyframes claudeFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
