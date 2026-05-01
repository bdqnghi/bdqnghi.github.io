import { useEffect, useRef } from "react";

declare global {
  interface Window {
    twttr?: {
      _e?: Array<(twttr: NonNullable<Window["twttr"]>) => void>;
      ready?: (cb: (twttr: NonNullable<Window["twttr"]>) => void) => void;
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

const TWEET_OPTS = {
  theme: "light",
  dnt: true,
  conversation: "none",
  width: 300,
} as const;

export default function XTweetPanel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const renderedRef = useRef(false);

  useEffect(() => {
    if (renderedRef.current) return;
    renderedRef.current = true;
    const scroll = scrollRef.current;
    if (!scroll) return;

    // Pre-create boxes synchronously so the panel doesn't reflow
    // when each tweet finishes loading.
    scroll.innerHTML = "";
    const boxes = TWEET_IDS.map(() => {
      const box = document.createElement("div");
      box.className = "x-tweet-slot";
      scroll.appendChild(box);
      return box;
    });

    // Fire all 5 createTweet calls in parallel as soon as widgets.js is ready.
    // The stub in index.html queues this callback even before the script loads,
    // so there's zero polling delay.
    window.twttr?.ready?.((twttr) => {
      TWEET_IDS.forEach((id, i) => {
        twttr.widgets.createTweet(id, boxes[i], TWEET_OPTS);
      });
    });
  }, []);

  return (
    <div className="x-tweet-panel h-full flex flex-col">
      <h3 className="x-tweet-heading flex-shrink-0">Community Highlights</h3>
      <div ref={scrollRef} className="x-tweet-scroll flex-1" />
    </div>
  );
}
