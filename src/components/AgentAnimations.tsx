import React, { useEffect, useState } from 'react';

const AgentAnimations = () => {
  const [elements, setElements] = useState<JSX.Element[]>([]);

  const codeSnippets = [
    'def analyze_code():',
    'agent.process_request()',
    'if condition: execute()',
    'class CodeAgent:',
    'async def generate():',
    'return optimized_code',
    'agent.learn(feedback)',
    'while autonomous_mode:',
    'self.improve()',
    'agents.collaborate()',
  ];

  useEffect(() => {
    const generateElements = () => {
      const newElements: JSX.Element[] = [];

      // Floating Code Blocks (representing agent analysis)
      for (let i = 0; i < 3; i++) {
        const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        newElements.push(
          <div
            key={`code-${i}`}
            className="floating-code"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {snippet}
          </div>
        );
      }

      // Agent Workflow Lines
      for (let i = 0; i < 4; i++) {
        newElements.push(
          <div
            key={`workflow-${i}`}
            className="agent-workflow"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 60 + 20}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        );
      }

      // Thinking Dots (AI Processing)
      for (let i = 0; i < 2; i++) {
        newElements.push(
          <div
            key={`thinking-${i}`}
            className="thinking-dots"
            style={{
              top: `${Math.random() * 70 + 15}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          >
            <div className="thinking-dot"></div>
            <div className="thinking-dot"></div>
            <div className="thinking-dot"></div>
          </div>
        );
      }

      // Agent Network Nodes
      const networkPositions = [
        { x: 20, y: 25 },
        { x: 75, y: 35 },
        { x: 40, y: 60 },
        { x: 80, y: 75 },
        { x: 15, y: 80 },
      ];

      networkPositions.forEach((pos, i) => {
        newElements.push(
          <div
            key={`node-${i}`}
            className="network-node"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        );

        // Add connections between some nodes
        if (i < networkPositions.length - 1) {
          const nextPos = networkPositions[i + 1];
          const distance = Math.sqrt(
            Math.pow(nextPos.x - pos.x, 2) + Math.pow(nextPos.y - pos.y, 2)
          );
          const angle = Math.atan2(nextPos.y - pos.y, nextPos.x - pos.x) * (180 / Math.PI);

          newElements.push(
            <div
              key={`connection-${i}`}
              className="network-connection"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                transform: `rotate(${angle}deg)`,
                animationDelay: `${i * 0.5 + 0.25}s`,
              }}
            />
          );
        }
      });

      // Decision Trees
      for (let i = 0; i < 3; i++) {
        const treeX = Math.random() * 70 + 15;
        const treeY = Math.random() * 50 + 25;
        
        newElements.push(
          <div
            key={`tree-${i}`}
            className="decision-tree"
            style={{
              left: `${treeX}%`,
              top: `${treeY}%`,
              animationDelay: `${i * 2}s`,
            }}
          />
        );

        // Add branches to the tree
        for (let j = 0; j < 2; j++) {
          newElements.push(
            <div
              key={`branch-${i}-${j}`}
              className="decision-branch"
              style={{
                left: `${treeX}%`,
                top: `${treeY + 20}%`,
                transform: `rotate(${j === 0 ? -30 : 30}deg)`,
                animationDelay: `${i * 2 + j * 0.5}s`,
              }}
            />
          );
        }
      }

      return newElements;
    };

    setElements(generateElements());

    // Regenerate elements periodically to keep animation fresh
    const interval = setInterval(() => {
      setElements(generateElements());
    }, 20000); // Refresh every 20 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="agent-animation">
      {elements}
    </div>
  );
};

export default AgentAnimations;