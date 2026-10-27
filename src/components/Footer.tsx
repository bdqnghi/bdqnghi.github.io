import { Mail, Linkedin, Github, Twitter, GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-border/65">
      <div className="mx-auto max-w-[860px] px-6 py-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="text-[11px] text-muted-foreground">
            © 2024 Nghi D. Q. Bui. All rights reserved.
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="mailto:bdqnghi@gmail.com" 
              className="flex items-center gap-xs text-sm text-muted-foreground hover:text-accent transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Email</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/quocnghi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-xs text-sm text-muted-foreground hover:text-accent transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/bdqnghi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-xs text-sm text-muted-foreground hover:text-accent transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a 
              href="https://x.com/QuocNghi91" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-xs text-sm text-muted-foreground hover:text-accent transition-colors"
              title="X (Twitter)"
            >
              <Twitter className="w-4 h-4" />
              <span className="hidden sm:inline">X</span>
            </a>
            <a 
              href="https://scholar.google.com/citations?user=QwybxYsAAAAJ&hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-xs text-sm text-muted-foreground hover:text-accent transition-colors"
              title="Google Scholar"
            >
              <GraduationCap className="w-4 h-4" />
              <span className="hidden sm:inline">Scholar</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
