import { useEffect, useRef } from "react";

declare global {
  interface Window {
    twttr?: {
      ready?: (cb: (twttr: NonNullable<Window["twttr"]>) => void) => void;
      widgets: {
        load: (el?: HTMLElement) => Promise<void>;
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

export default function XTweetPanel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ask widgets.js to scan our scroll container and convert all
    // `.twitter-tweet` blockquotes to embedded tweets in one batch.
    // The ready() stub in index.html queues this immediately, even
    // if the actual widgets.js script hasn't finished loading yet.
    window.twttr?.ready?.((twttr) => {
      if (scrollRef.current) {
        twttr.widgets.load(scrollRef.current);
      }
    });
  }, []);

  return (
    <div className="x-tweet-panel h-full flex flex-col">
      <h3 className="x-tweet-heading flex-shrink-0">Community Highlights</h3>
      <div ref={scrollRef} className="x-tweet-scroll flex-1">
        {TWEET_IDS.map((id) => (
          <blockquote
            key={id}
            className="twitter-tweet"
            data-theme="light"
            data-dnt="true"
            data-conversation="none"
            data-width="300"
          >
            <a href={`https://twitter.com/x/status/${id}`}> </a>
          </blockquote>
        ))}
      </div>
    </div>
  );
}
