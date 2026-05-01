import { useEffect, useRef } from "react";

declare global {
  interface Window {
    twttr?: {
      ready?: (cb: (twttr: Window["twttr"]) => void) => void;
      widgets: {
        createTweet: (id: string, el: HTMLElement, opts: Record<string, unknown>) => Promise<HTMLElement>;
      };
    };
  }
}

const TWEET_IDS = [
  "2030771811705872435",
  "2007825862721232956",
  "1844115605781147986",
  "1992307258781282517",
  "1664458443430739969",
];

function whenTwttrReady(cb: () => void) {
  if (window.twttr?.widgets) {
    cb();
    return;
  }
  if (window.twttr?.ready) {
    window.twttr.ready(cb);
    return;
  }
  // Fallback: short poll for the case where the script tag hasn't initialized yet.
  const id = setInterval(() => {
    if (window.twttr?.widgets) {
      clearInterval(id);
      cb();
    }
  }, 50);
}

export default function XTweetPanel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Pre-create boxes synchronously so layout is stable while tweets load.
    const boxes: HTMLDivElement[] = [];
    if (scrollRef.current) {
      scrollRef.current.innerHTML = "";
      TWEET_IDS.forEach(() => {
        const box = document.createElement("div");
        scrollRef.current!.appendChild(box);
        boxes.push(box);
      });
    }

    whenTwttrReady(() => {
      TWEET_IDS.forEach((id, i) => {
        if (boxes[i]) {
          window.twttr!.widgets.createTweet(id, boxes[i], {
            theme: "light",
            dnt: true,
            conversation: "none",
            width: 300,
          });
        }
      });
    });
  }, []);

  return (
    <div className="x-tweet-panel h-full flex flex-col">
      <h3 className="x-tweet-heading flex-shrink-0">Community Highlights</h3>
      <div
        ref={scrollRef}
        className="x-tweet-scroll flex-1"
      />
    </div>
  );
}
