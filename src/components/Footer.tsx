import { Mail, Linkedin, Github, Twitter, GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-3xl">
      <div className="mx-auto max-w-7xl px-lg py-lg">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 Nghi D. Q. Bui. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6">
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