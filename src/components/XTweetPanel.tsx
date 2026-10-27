import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

declare global {
  interface Window {
    twttr?: {
      ready?: (callback: () => void) => void;
      widgets: {
        createTweet: (id: string, el: HTMLElement, opts: Record<string, unknown>) => Promise<HTMLElement | undefined>;
      };
    };
  }
}

const highlights = [
  { project: "OpenDev", id: "2030771811705872435", url: "https://x.com/omarsar0/status/2030771811705872435" },
  { project: "SWE-EVO", id: "2007825862721232956", url: "https://x.com/omarsar0/status/2007825862721232956" },
  { project: "CodeMMLU", id: "1844115605781147986", url: "https://x.com/rohanpaul_ai/status/1844115605781147986" },
  { project: "CodeWiki", id: "1992307258781282517", url: "https://x.com/tom_doerr/status/1992307258781282517" },
  { project: "CodeTF", id: "1664458443430739969", url: "https://x.com/_akhaliq/status/1664458443430739969" },
];

function OriginalPost({ post }: { post: typeof highlights[number] }) {
  const container = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "unavailable">("loading");

  useEffect(() => {
    let cancelled = false;
    let settled = false;
    // Use a separate mount so a late widget response cannot affect a new effect.
    const mount = document.createElement("div");
    container.current?.appendChild(mount);
    const render = async () => {
      if (cancelled || !window.twttr?.widgets) return;
      try {
        const tweet = await window.twttr.widgets.createTweet(post.id, mount, {
          theme: "light", dnt: true, conversation: "none", align: "center",
        });
        settled = true;
        if (!cancelled) setStatus(tweet ? "ready" : "unavailable");
      } catch {
        settled = true;
        if (!cancelled) setStatus("unavailable");
      }
    };
    if (window.twttr?.widgets) void render();
    else window.twttr?.ready?.(render);
    const timeout = window.setTimeout(() => {
      if (!cancelled && !settled) setStatus("unavailable");
    }, 15000);
    return () => { cancelled = true; window.clearTimeout(timeout); mount.remove(); };
  }, [post.id]);

  return (
    <article aria-label={`${post.project} on X`} className="community-post">
      <div className="mb-2.5 flex items-center justify-between px-1">
        <h3 className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{post.project}</h3>
        <a href={post.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[10px] font-medium text-muted-foreground hover:text-link" aria-label={`Open the ${post.project} post on X`}>
          On X <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
        </a>
      </div>
      <div className="original-post overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_-14px_rgba(62,47,33,0.3)]">
        <div ref={container} />
        {status === "loading" && (
          <div role="status" className="space-y-4 p-5">
            <span className="sr-only">Loading the original {post.project} post</span>
            <div className="flex items-center gap-3"><div className="h-9 w-9 rounded-full bg-muted motion-safe:animate-pulse" /><div className="h-3 w-28 rounded bg-muted motion-safe:animate-pulse" /></div>
            <div className="h-3 rounded bg-muted motion-safe:animate-pulse" /><div className="h-3 w-4/5 rounded bg-muted motion-safe:animate-pulse" /><div className="h-24 rounded-xl bg-muted/60 motion-safe:animate-pulse" />
          </div>
        )}
        {status === "unavailable" && <p role="status" className="p-5 text-xs leading-relaxed text-muted-foreground">This post couldn't load here. <a href={post.url} target="_blank" rel="noopener noreferrer">Read the full {post.project} post on X <ArrowUpRight className="inline h-3 w-3" aria-hidden="true" /></a></p>}
      </div>
    </article>
  );
}

export default function XTweetPanel() {
  const headingId = useId();
  return (
    <section className="community-panel flex h-full min-h-0 flex-col" aria-labelledby={headingId}>
      <header className="shrink-0 px-5 pb-5 pt-12">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">Around the work</p>
        <h2 id={headingId} className="m-0 border-0 p-0 text-[22px] font-medium leading-tight">Community Highlights</h2>
        <p className="mt-2 whitespace-nowrap text-xs leading-relaxed text-muted-foreground">Research, shared by the community.</p>
      </header>
      <div className="community-scroll min-h-0 flex-1 overflow-y-auto px-4 pb-6">
        <ul className="space-y-6">
          {highlights.map((post) => <li key={post.id}><OriginalPost post={post} /></li>)}
        </ul>
        <a href="https://x.com/QuocNghi91" target="_blank" rel="noopener noreferrer" className="mt-6 flex items-center justify-between rounded-xl border border-border/70 bg-white/50 px-4 py-3 text-xs text-muted-foreground hover:bg-white hover:text-link">
          More on X <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
