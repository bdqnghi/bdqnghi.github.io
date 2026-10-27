import { CSSProperties, ReactNode, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "./Footer";
import AppSidebar from "./AppSidebar";
import XTweetPanel from "./XTweetPanel";
import { Sheet, SheetContent, SheetDescription, SheetTitle } from "./ui/sheet";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);
  const [mobileLeft, setMobileLeft] = useState(false);
  const [mobileRight, setMobileRight] = useState(false);
  const panelSizes = {
    "--profile-space": leftOpen ? "260px" : "0px",
    "--community-space": rightOpen ? "340px" : "0px",
  } as CSSProperties;

  return (
    <div className="site-layout min-h-screen bg-background text-foreground" style={panelSizes}>
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border/70 bg-background/95 px-4 py-3 backdrop-blur-md lg:hidden">
        <button onClick={() => setMobileLeft(true)} className="panel-mobile-trigger" aria-label="Open profile sidebar">
          <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
          <span className="text-xs">Profile</span>
        </button>
        <span className="font-serif text-sm font-medium">Nghi D. Q. Bui</span>
        <button onClick={() => setMobileRight(true)} className="panel-mobile-trigger" aria-label="Open community highlights">
          <span className="text-xs">Highlights</span>
          <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </header>

      <Sheet open={mobileLeft} onOpenChange={setMobileLeft}>
        <SheetContent side="left" className="panel-drawer w-[min(100vw,320px)] overflow-y-auto px-6 pb-8 pt-12">
          <SheetTitle className="sr-only">Profile and navigation</SheetTitle>
          <SheetDescription className="sr-only">Research profile, pages, and contact links.</SheetDescription>
          <AppSidebar onNavigate={() => setMobileLeft(false)} />
        </SheetContent>
      </Sheet>
      <Sheet open={mobileRight} onOpenChange={setMobileRight}>
        <SheetContent side="right" className="panel-drawer w-[min(100vw,360px)] p-0">
          <SheetTitle className="sr-only">Community highlights</SheetTitle>
          <SheetDescription className="sr-only">Posts about my research and open source work.</SheetDescription>
          <XTweetPanel />
        </SheetContent>
      </Sheet>

      <aside id="profile-panel" aria-label="Profile" aria-hidden={!leftOpen} {...(!leftOpen ? { inert: "" } : {})} data-open={leftOpen} className="desktop-panel profile-panel community-scroll fixed inset-y-0 left-0 z-20 hidden w-[260px] overflow-y-auto border-r border-border/65 px-5 py-9 lg:block">
        <AppSidebar />
      </aside>
      <button onClick={() => setLeftOpen((open) => !open)} className="panel-toggle profile-toggle hidden lg:flex" aria-label={leftOpen ? "Collapse profile sidebar" : "Expand profile sidebar"} aria-expanded={leftOpen} aria-controls="profile-panel" title={leftOpen ? "Collapse profile" : "Expand profile"}>
        <ChevronLeft className={`h-4 w-4 transition-transform duration-300 ${leftOpen ? "" : "rotate-180"}`} strokeWidth={1.5} />
      </button>

      <main className="site-main flex min-h-screen min-w-0 flex-col">
        <div className="flex-1">{children}</div>
        <Footer />
      </main>

      <aside id="community-panel" aria-label="Community" aria-hidden={!rightOpen} {...(!rightOpen ? { inert: "" } : {})} data-open={rightOpen} className="desktop-panel community-panel-shell fixed inset-y-0 right-0 z-20 hidden w-[340px] border-l border-border/65 xl:block">
        <XTweetPanel />
      </aside>
      <button onClick={() => setRightOpen((open) => !open)} className="panel-toggle community-toggle hidden xl:flex" aria-label={rightOpen ? "Collapse community highlights" : "Expand community highlights"} aria-expanded={rightOpen} aria-controls="community-panel" title={rightOpen ? "Collapse highlights" : "Expand highlights"}>
        <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${rightOpen ? "" : "rotate-180"}`} strokeWidth={1.5} />
      </button>
      <button onClick={() => setMobileRight(true)} className="panel-toggle right-3 hidden lg:flex xl:hidden" aria-label="Open community highlights" title="Community highlights">
        <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
      </button>
    </div>
  );
};

export default Layout;
