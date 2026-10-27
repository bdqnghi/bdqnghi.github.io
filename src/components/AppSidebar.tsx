import { NavLink } from "react-router-dom";
import { Mail, Linkedin, Github, Twitter, GraduationCap, Star, Home, Briefcase, BookOpen, type LucideIcon } from "lucide-react";
import { useQueries } from "@tanstack/react-query";

const nav: { to: string; label: string; icon: LucideIcon }[] = [
  { to: "/", label: "Home", icon: Home },
  { to: "/background", label: "Background", icon: Briefcase },
  { to: "/publications", label: "Publications", icon: BookOpen },
];

const openSourceRepos = [
  { name: "CodeT5+", repo: "salesforce/CodeT5", path: "/tree/main/CodeT5%2B", fallback: "3k" },
  { name: "CodeTF", repo: "salesforce/CodeTF", fallback: "1.5k" },
  { name: "CodeWiki", repo: "FSoft-AI4Code/CodeWiki", fallback: "831" },
  { name: "OpenDev", repo: "opendev-to/opendev", fallback: "460" },
  { name: "AgileCoder", repo: "FSoft-AI4Code/AgileCoder", fallback: "429" },
  { name: "HyperAgent", repo: "FSoft-AI4Code/HyperAgent", fallback: "216" },
  { name: "CodeCapybara", repo: "FSoft-AI4Code/CodeCapybara", fallback: "169" },
];

function formatStars(count: number): string {
  if (count >= 1000) {
    const k = count / 1000;
    return k % 1 === 0 ? `${k}k` : `${k.toFixed(1)}k`;
  }
  return count.toString();
}

const STAR_REFRESH_INTERVAL = 10 * 60 * 1000;

interface StarCount {
  label: string;
  title: string;
}

async function fetchStarCount(repo: string, signal: AbortSignal): Promise<StarCount> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, { signal });
    if (!res.ok) throw new Error(`GitHub stars request failed: ${res.status}`);

    const { stargazers_count: count } = await res.json();
    if (!Number.isSafeInteger(count) || count < 0) {
      throw new Error("Invalid GitHub star count");
    }
    return { label: formatStars(count), title: `${count.toLocaleString()} GitHub stars` };
  } catch (error) {
    if (signal.aborted) throw error;

    // Shields caches GitHub counts without using the visitor's GitHub API quota.
    const res = await fetch(`https://img.shields.io/github/stars/${repo}.json`, { signal });
    if (!res.ok) throw new Error(`Star count fallback failed: ${res.status}`);

    const { message } = await res.json();
    if (typeof message !== "string" || !/^\d+(\.\d+)?[km]?$/i.test(message)) {
      throw new Error("Invalid fallback star count");
    }
    const label = /^\d+$/.test(message) ? formatStars(Number(message)) : message;
    return { label, title: `${message} GitHub stars` };
  }
}

export default function AppSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const starQueries = useQueries({
    queries: openSourceRepos.map(({ repo }) => ({
      queryKey: ["github-stars", repo],
      queryFn: ({ signal }) => fetchStarCount(repo, signal),
      // Share cached counts between sidebar instances and avoid frequent API calls.
      staleTime: STAR_REFRESH_INTERVAL,
      gcTime: 60 * 60 * 1000,
      refetchInterval: STAR_REFRESH_INTERVAL,
      refetchIntervalInBackground: false,
      refetchOnWindowFocus: true,
      retry: false,
    })),
  });

  const starCounts: Record<string, StarCount | undefined> = Object.fromEntries(
    openSourceRepos.map(({ repo }, index) => [repo, starQueries[index].data]),
  );

  return (
    <aside aria-label="Researcher sidebar" className="w-full">
      <div className="flex flex-col items-center gap-5 text-center">
        <img
          src="/lovable-uploads/066bf4cf-e62c-4883-9d4e-8cded092d002.png"
          alt="Profile portrait of Dr. NGHI D. Q. BUI"
          width={200}
          height={200}
          loading="eager"
          decoding="async"
          className="h-36 w-36 rounded-full border-[5px] border-white object-cover shadow-[0_4px_24px_-12px_rgba(62,47,33,0.35)] ring-1 ring-border/60"
        />

        <div className="space-y-xs">
          <p className="font-serif text-[25px] font-medium tracking-tight">Dr. Nghi D. Q. Bui</p>
          <p className="text-xs text-muted-foreground">Research Scientist at Google</p>
        </div>

        <nav className="w-full border-t border-border/60 pt-4" aria-label="Main navigation">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    `group flex items-center gap-3 rounded-xl border px-3 py-2.5 text-[13px] transition-colors duration-200 ${
                      isActive
                        ? "border-border/65 bg-white/85 text-foreground font-medium shadow-sm"
                        : "border-transparent text-muted-foreground hover:text-foreground hover:bg-white/60"
                    }`
                  }
                >
                  <item.icon className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.5} />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="pt-md w-full border-t border-border">
          <h3 className="mb-2 px-3 text-left font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Open Source</h3>
          <div className="text-xs space-y-0.5">
            {openSourceRepos.map((repo) => (
              <a
                key={repo.name}
                href={`https://github.com/${repo.repo}${repo.path || ""}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl px-3 py-2 transition-colors duration-200 hover:bg-white/70"
              >
                <span className="flex items-center gap-1.5 text-foreground/80 group-hover:text-foreground">
                  <Github className="w-3 h-3 flex-shrink-0" />
                  <span>{repo.name}</span>
                </span>
                <span
                  className="flex items-center gap-1 rounded-full border border-border/50 bg-white/60 px-2 py-0.5 text-[10px] text-muted-foreground tabular-nums"
                  title={starCounts[repo.repo]?.title || "GitHub stars (last known count)"}
                >
                  <Star className="w-3 h-3" />
                  <span>{starCounts[repo.repo]?.label || repo.fallback}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="pt-md mt-auto w-full border-t border-border">
          <h3 className="mb-2 px-3 text-left font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Contact</h3>
          <ul className="text-sm space-y-0.5">
            {[
              { href: "mailto:bdqnghi@gmail.com", icon: Mail, label: "Email" },
              { href: "https://www.linkedin.com/in/quocnghi/", icon: Linkedin, label: "LinkedIn", ext: true },
              { href: "https://github.com/bdqnghi", icon: Github, label: "GitHub", ext: true },
              { href: "https://x.com/QuocNghi91", icon: Twitter, label: "X", ext: true },
              { href: "https://scholar.google.com/citations?user=QwybxYsAAAAJ&hl=en", icon: GraduationCap, label: "Google Scholar", ext: true },
            ].map(({ href, icon: Icon, label, ext }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-3 rounded-xl px-3 py-2 text-muted-foreground transition-colors duration-200 hover:bg-white/70 hover:text-foreground"
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="text-xs">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Visitor Map */}
        <div className="pt-md w-full border-t border-border">
          <div className="flex justify-center">
            <a
              href="https://info.flagcounter.com/6RjZ"
              title="View visitor locations"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s01.flagcounter.com/map/6RjZ/size_s/txt_000000/border_CCCCCC/pageviews_1/viewers_0/flags_0/"
                alt="Visitor map and pageview count"
                className="max-w-full h-auto rounded-sm opacity-80"
                style={{ maxHeight: '140px' }}
              />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
