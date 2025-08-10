import { NavLink } from "react-router-dom";
import { Mail, Linkedin, Github, Twitter, GraduationCap, Star } from "lucide-react";

const nav = [
  { to: "/", label: "cd /home" },
  { to: "/publications", label: "ls publications" },
  { to: "/students", label: "ls students" },
];

const openSourceRepos = [
  { name: "CodeT5+", url: "https://github.com/salesforce/CodeT5/tree/main/CodeT5%2B", stars: "3k" },
  { name: "CodeTF", url: "https://github.com/salesforce/CodeTF", stars: "1.5k" },
  { name: "AgileCoder", url: "https://github.com/FSoft-AI4Code/AgileCoder", stars: "429" },
  { name: "HyperAgent", url: "https://github.com/FSoft-AI4Code/HyperAgent", stars: "216" },
  { name: "CodeCapybara", url: "https://github.com/FSoft-AI4Code/CodeCapybara", stars: "169" },
];

export default function AppSidebar() {
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
          className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full object-cover border border-accent/50 shadow-[0_0_20px_hsl(var(--accent)/0.15)]"
        />

        <div className="space-y-xs">
          <p className="text-3xl font-bold tracking-wide">Dr. NGHI D. Q. BUI</p>
          <p className="text-xl text-muted-foreground">Computer Science Researcher</p>
          <p className="text-sm text-muted-foreground">&gt; building autonomous coding agents</p>
        </div>

        <nav className="w-full pt-md border-t border-border">
          <ul className="flex flex-col gap-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end
                  className={({ isActive }) =>
                    `group flex items-center gap-sm px-sm py-xs border-l-2 ${
                      isActive
                        ? "border-accent text-accent"
                        : "border-transparent text-foreground hover:text-accent"
                    }`
                  }
                >
                  <span className="opacity-70">&gt;</span>
                  <span className="story-link">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="pt-md w-full border-t border-border">
          <div className="mb-xs">
            <h3 className="text-sm font-semibold text-foreground mb-sm">Open Source</h3>
          </div>
          <div className="text-xs space-y-xs">
            {openSourceRepos.map((repo) => (
              <div key={repo.name} className="grid grid-cols-[1fr_auto] gap-2 items-center">
                <a 
                  href={repo.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-xs hover:text-accent transition-colors group"
                >
                  <Github className="w-3 h-3 flex-shrink-0" />
                  <span className="font-medium">{repo.name}</span>
                </a>
                <div className="flex items-center gap-1 opacity-70 group-hover:opacity-100 justify-end">
                  <Star className="w-3 h-3 fill-current" />
                  <span className="font-mono text-xs">{repo.stars}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-md mt-auto w-full border-t border-border">
          <div className="mb-xs">
            <h3 className="text-sm font-semibold text-foreground mb-sm">Contact</h3>
          </div>
          <ul className="text-sm space-y-xs">
            <li>
              <a href="mailto:bdqnghi@gmail.com" className="flex items-center gap-xs hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                <span>email</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/quocnghi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-xs hover:text-accent transition-colors">
                <Linkedin className="w-4 h-4" />
                <span>linkedin</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/bdqnghi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-xs hover:text-accent transition-colors">
                <Github className="w-4 h-4" />
                <span>github</span>
              </a>
            </li>
            <li>
              <a href="https://x.com/QuocNghi91" target="_blank" rel="noopener noreferrer" className="flex items-center gap-xs hover:text-accent transition-colors">
                <Twitter className="w-4 h-4" />
                <span>x</span>
              </a>
            </li>
            <li>
              <a href="https://scholar.google.com/citations?user=QwybxYsAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-xs hover:text-accent transition-colors">
                <GraduationCap className="w-4 h-4" />
                <span>google scholar</span>
              </a>
            </li>
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
              className="hover:scale-105 transition-transform duration-200"
            >
              <img 
                src="//www.clustrmaps.com/map_v2.png?d=McQNhkf8Yz9_O9RxR6737fb3TmJs5kCW-Tm-aoQaocc&cl=ffffff" 
                alt="Visitor tracker map"
                className="max-w-full h-auto border border-border rounded-sm"
                style={{ maxHeight: '160px' }}
              />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
