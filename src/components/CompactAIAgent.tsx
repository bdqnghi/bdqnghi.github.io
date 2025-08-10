import React from "react";

// Elegant Minimalist AI Research Visualization
// - Clean, sophisticated design focused on content
// - Subtle animations that enhance rather than distract
// - Professional typography-first approach
// - Monochromatic teal color scheme

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
        

        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.01] to-transparent"></div>
        
        {/* Main content area - minimalist style */}
        <div className="relative z-10 text-center space-y-8 px-8">
          
          {/* Clean minimalist header */}
          <div className="space-y-6">            
            <h1 className="text-3xl md:text-4xl font-bold text-foreground text-emphasis simple-fade">
              AI Research Focus
            </h1>
            
            {/* Clean subtitle */}
            <p className="text-muted-foreground text-lg md:text-xl font-light max-w-2xl mx-auto simple-fade-delayed">
              Advancing autonomous systems for software development
            </p>
            
            {/* Minimalist separator */}
            <div className="w-16 h-px bg-foreground mx-auto opacity-30"></div>
          </div>

          {/* Research areas - clean grid */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {RESEARCH_AREAS.map((area, index) => (
                <div
                  key={area}
                  className="group relative simple-fade-item"
                  style={{ animationDelay: `${2 + index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-4 py-4 px-0 border-b border-border/30 transition-all duration-200 hover:border-foreground/50">
                    {/* Clean numbering */}
                    <span className="text-muted-foreground text-sm font-mono mt-1 min-w-[2rem]">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    
                    {/* Research area text */}
                    <span className="text-foreground group-hover:text-accent transition-colors duration-200 text-base font-medium leading-relaxed">
                      {area}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating subtle elements */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 rounded-full bg-primary/10 animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 rounded-full bg-primary/10 animate-[float_8s_ease-in-out_infinite_2s]"></div>
        <div className="absolute top-1/2 right-1/4 w-0.5 h-0.5 rounded-full bg-primary/15 animate-[float_7s_ease-in-out_infinite_4s]"></div>
        
        {/* Static fallback for no-CSS */}
        <noscript>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
              <h1 className="text-2xl font-light text-foreground/90">AI Research Focus</h1>
              <p className="text-muted-foreground">Advancing autonomous systems for software development</p>
            </div>
          </div>
        </noscript>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes simpleFade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .simple-fade {
          opacity: 0;
          animation: simpleFade 1s ease-out 0.5s forwards;
        }

        .simple-fade-delayed {
          opacity: 0;
          animation: simpleFade 1s ease-out 1s forwards;
        }

        .simple-fade-item {
          opacity: 0;
          animation: simpleFade 0.8s ease-out forwards;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-8px) scale(1.1);
            opacity: 0.15;
          }
        }
      `}</style>
    </div>
  );
}