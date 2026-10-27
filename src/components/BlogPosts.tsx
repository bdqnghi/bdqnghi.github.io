import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "Situationally Aware Agents",
    url: "https://labs.google/code/experiments/situationally-aware-agents",
    publisher: "Google Labs",
    date: "August 2026",
    dateTime: "2026-08",
    image: "/blog/situationally-aware-agents.webp",
    imageClassName: "object-cover",
    description: "How agents can understand your work and protect your focus.",
  },
  {
    title: "Measuring What Matters with Jules",
    url: "https://developers.googleblog.com/measuring-what-matters-with-jules/",
    publisher: "Google Developers Blog",
    date: "June 2026",
    dateTime: "2026-06-22",
    image: "/blog/measuring-with-jules.webp",
    imageClassName: "object-contain p-2",
    description: "Evaluating whether proactive coding agents find the problems worth solving.",
  },
  {
    title: "AI could help shrinking pool of coders keep outdated programs working",
    url: "https://www.newscientist.com/article/2443466-ai-could-help-shrinking-pool-of-coders-keep-outdated-programs-working/",
    publisher: "The New Scientist · Interview",
    date: "August 2024",
    dateTime: "2024-08-20",
    image: "/blog/mainframe-modernization.webp",
    imageClassName: "object-cover",
    description: "My interview on using AI to maintain COBOL and modernize essential software.",
  },
  {
    title: "CodeT5+: Open Code Large Language Models",
    url: "https://www.salesforce.com/blog/codet5-open-code-large-language-models/",
    publisher: "Salesforce AI Research",
    date: "May 2023",
    dateTime: "2023-05-20",
    image: "/blog/codet5-plus.webp",
    imageClassName: "object-cover",
    description: "A family of open models for understanding, writing, and completing code.",
  },
];

export default function BlogPosts() {
  return (
    <section className="mb-8" aria-labelledby="blog-posts">
      <h2 id="blog-posts" className="text-lg font-semibold mb-4">Blog Posts &amp; Media</h2>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,18rem),1fr))] gap-3">
        {posts.map((post) => (
          <li key={post.url} className="min-w-0">
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full overflow-hidden rounded-xl border border-border/70 bg-white/65 text-foreground transition-all duration-300 hover:border-accent/35 hover:bg-white hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none"
            >
              <div className="w-[88px] shrink-0 overflow-hidden border-r border-border/50 bg-muted/50">
                <img
                  src={post.image}
                  alt=""
                  width={960}
                  height={540}
                  loading="lazy"
                  decoding="async"
                  className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none ${post.imageClassName}`}
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col p-3.5">
                <p className="text-[9px] font-medium uppercase tracking-[0.08em] text-muted-foreground">
                  {post.publisher}
                </p>
                <h3 className="mt-1.5 text-[15px] font-medium leading-snug transition-colors group-hover:text-[hsl(var(--link))]">
                  {post.title}
                </h3>
                <p className="mt-1.5 text-[11px] font-normal leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
                <div className="mt-auto flex items-center justify-between gap-2 pt-3">
                  <time dateTime={post.dateTime} className="text-[10px] font-normal text-muted-foreground">
                    {post.date}
                  </time>
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[hsl(var(--link))]">
                    Read
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
