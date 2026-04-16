import { NavLink } from "react-router-dom";
import { Mail, Linkedin, Github, Twitter, GraduationCap, Star, Home, Briefcase, BookOpen, Users, type LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";

const nav: { to: string; label: string; icon: LucideIcon }[] = [
  { to: "/", label: "Home", icon: Home },
  { to: "/background", label: "Background", icon: Briefcase },
  { to: "/publications", label: "Publications", icon: BookOpen },
  { to: "/students", label: "Students", icon: Users },
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

export default function AppSidebar() {
  const [starCounts, setStarCounts] = useState<Record<string, string>>({});

  useEffect(() => {
    const uniqueRepos = [...new Set(openSourceRepos.map(r => r.repo))];

    uniqueRepos.forEach(async (repoPath) => {
      try {
        const res = await fetch(`https://api.github.com/repos/${repoPath}`);
        if (res.ok) {
          const data = await res.json();
          setStarCounts(prev => ({
            ...prev,
            [repoPath]: formatStars(data.stargazers_count),
          }));
        }
      } catch {
        // silently fall back to static counts
      }
    });
  }, []);

  return (
    <aside aria-label="Researcher sidebar" className="w-full">
      <div className="flex flex-col items-center text-center gap-md">
        <img
          src="/lovable-uploads/066bf4cf-e62c-4883-9d4e-8cded092d002.png"
          alt="Profile portrait of Dr. NGHI D. Q. BUI"
          width={200}
          height={200}
          loading="eager"
          decoding="async"
          className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] rounded-full object-cover border border-border shadow-sm"
        />

        <div className="space-y-xs">
          <p className="text-2xl font-bold tracking-tight">Dr. NGHI D. Q. BUI</p>
          <p className="text-sm text-muted-foreground">Research Scientist at Google</p>
          <p className="text-xs text-muted-foreground/70">&gt; building autonomous coding agents</p>
        </div>

        <nav className="w-full pt-md border-t border-border">
          <ul className="flex flex-col gap-0.5">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end
                  className={({ isActive }) =>
                    `group flex items-center gap-sm px-sm py-1.5 rounded-md text-sm transition-colors duration-150 ${
                      isActive
                        ? "bg-secondary text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`
                  }
                >
                  <item.icon className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="pt-md w-full border-t border-border">
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 text-left px-sm">Open Source</h3>
          <div className="text-xs space-y-0.5">
            {openSourceRepos.map((repo) => (
              <a
                key={repo.name}
                href={`https://github.com/${repo.repo}${repo.path || ""}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-sm py-1 rounded-md hover:bg-secondary/50 transition-colors duration-150 group"
              >
                <span className="flex items-center gap-1.5 text-foreground/80 group-hover:text-foreground">
                  <Github className="w-3 h-3 flex-shrink-0" />
                  <span>{repo.name}</span>
                </span>
                <span className="flex items-center gap-0.5 text-muted-foreground tabular-nums">
                  <Star className="w-3 h-3" />
                  <span>{starCounts[repo.repo] || repo.fallback}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="pt-md mt-auto w-full border-t border-border">
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 text-left px-sm">Contact</h3>
          <ul className="text-sm space-y-0.5">
            {[
              { href: "mailto:bdqnghi@gmail.com", icon: Mail, label: "email" },
              { href: "https://www.linkedin.com/in/quocnghi/", icon: Linkedin, label: "linkedin", ext: true },
              { href: "https://github.com/bdqnghi", icon: Github, label: "github", ext: true },
              { href: "https://x.com/QuocNghi91", icon: Twitter, label: "x", ext: true },
              { href: "https://scholar.google.com/citations?user=QwybxYsAAAAJ&hl=en", icon: GraduationCap, label: "google scholar", ext: true },
            ].map(({ href, icon: Icon, label, ext }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-2 px-sm py-1 rounded-md text-foreground/80 hover:text-foreground hover:bg-secondary/50 transition-colors duration-150"
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="text-xs">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Visitor Tracker */}
        <div className="pt-md w-full border-t border-border">
          <div className="flex justify-center">
            <a
              href="https://clustrmaps.com/site/1ad1p"
              title="Visit tracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="//www.clustrmaps.com/map_v2.png?d=McQNhkf8Yz9_O9RxR6737fb3TmJs5kCW-Tm-aoQaocc&cl=ffffff"
                alt="Visitor tracker map"
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
