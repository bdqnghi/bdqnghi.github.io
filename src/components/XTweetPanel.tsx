import { useEffect, useRef } from "react";

declare global {
  interface Window {
    twttr?: {
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

export default function XTweetPanel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!document.getElementById("x-widgets-js")) {
      const s = document.createElement("script");
      s.id = "x-widgets-js";
      s.src = "https://platform.twitter.com/widgets.js";
      s.async = true;
      document.body.appendChild(s);
    }

    function renderTweets() {
      if (window.twttr?.widgets && scrollRef.current) {
        scrollRef.current.innerHTML = "";
        TWEET_IDS.forEach((id) => {
          const box = document.createElement("div");
          scrollRef.current!.appendChild(box);
          window.twttr!.widgets.createTweet(id, box, {
            theme: "light",
            dnt: true,
            conversation: "none",
            width: 300,
          });
        });
      } else {
        setTimeout(renderTweets, 500);
      }
    }
    renderTweets();
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
