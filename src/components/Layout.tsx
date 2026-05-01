import { ReactNode, useState } from "react";
import Footer from "./Footer";
import AppSidebar from "./AppSidebar";
import XTweetPanel from "./XTweetPanel";
import { PanelLeft, PanelRight, X } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);
  const [mobileLeft, setMobileLeft] = useState(false);
  const [mobileRight, setMobileRight] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">

      {/* ── Mobile top bar ── */}
      <div className="md:hidden flex items-center justify-between border-b border-border px-4 py-3 sticky top-0 z-30 bg-background/95 backdrop-blur-sm">
        <button
          onClick={() => setMobileLeft(true)}
          className="p-1.5 rounded-md hover:bg-secondary transition-colors"
          aria-label="Open profile sidebar"
        >
          <PanelLeft className="w-5 h-5 text-muted-foreground" />
        </button>
        <span className="text-sm font-medium text-foreground">Nghi D. Q. Bui</span>
        <button
          onClick={() => setMobileRight(true)}
          className="p-1.5 rounded-md hover:bg-secondary transition-colors"
          aria-label="Open community highlights"
        >
          <PanelRight className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>

      {/* ── Mobile left drawer ── */}
      {mobileLeft && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-foreground/20 backdrop-blur-[2px]" onClick={() => setMobileLeft(false)} />
          <aside className="absolute left-0 top-0 h-full w-[85vw] max-w-[320px] bg-background border-r border-border p-lg overflow-y-auto animate-slide-in-left">
            <button onClick={() => setMobileLeft(false)} className="absolute top-4 right-4 p-1 rounded-md hover:bg-secondary transition-colors" aria-label="Close">
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
            <AppSidebar />
          </aside>
        </div>
      )}

      {/* ── Mobile right drawer ── */}
      {mobileRight && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-foreground/20 backdrop-blur-[2px]" onClick={() => setMobileRight(false)} />
          <aside className="absolute right-0 top-0 h-full w-[85vw] max-w-[360px] bg-background border-l border-border overflow-y-auto animate-slide-in-right">
            <button onClick={() => setMobileRight(false)} className="absolute top-4 left-4 p-1 rounded-md hover:bg-secondary transition-colors z-10" aria-label="Close">
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
            <div className="pt-12">
              <XTweetPanel />
            </div>
          </aside>
        </div>
      )}

      {/* ── Mobile main content ── */}
      <main className="md:hidden flex-1 flex flex-col">
        <div className="flex-1">{children}</div>
        <Footer />
      </main>

      {/* ── Desktop layout ── */}
      <div className="hidden md:flex w-full relative flex-1">

        {/* Left sidebar */}
        <aside
          className={`sidebar-grid fixed left-0 top-0 h-screen border-r border-border overflow-y-auto transition-all duration-300 ease-out z-20 ${
            leftOpen ? "w-[260px] p-lg" : "w-0 p-0 overflow-hidden border-r-0"
          }`}
        >
          {leftOpen && <AppSidebar />}
        </aside>

        {/* Left toggle */}
        <button
          onClick={() => setLeftOpen(!leftOpen)}
          className={`fixed top-4 z-30 p-1.5 rounded-md bg-background border border-border hover:bg-secondary transition-all duration-300 ease-out ${
            leftOpen ? "left-[248px]" : "left-3"
          }`}
          aria-label={leftOpen ? "Hide profile sidebar" : "Show profile sidebar"}
        >
          <PanelLeft className="w-4 h-4 text-muted-foreground" />
        </button>

        {/* Main content */}
        <main
          className="flex-1 min-w-0 min-h-screen flex flex-col transition-all duration-300 ease-out"
          style={{
            marginLeft: leftOpen ? 260 : 0,
            marginRight: rightOpen ? 340 : 0,
          }}
        >
          <div className="flex-1">{children}</div>
          <Footer />
        </main>

        {/* Right sidebar */}
        <aside
          className={`fixed right-0 top-0 h-screen border-l border-border overflow-y-auto transition-all duration-300 ease-out z-20 bg-background ${
            rightOpen ? "w-[340px]" : "w-0 overflow-hidden border-l-0"
          }`}
        >
          {rightOpen && (
            <div className="pt-12 h-full flex flex-col">
              <XTweetPanel />
            </div>
          )}
        </aside>

        {/* Right toggle */}
        <button
          onClick={() => setRightOpen(!rightOpen)}
          className={`fixed top-4 z-30 p-1.5 rounded-md bg-background border border-border hover:bg-secondary transition-all duration-300 ease-out ${
            rightOpen ? "right-[328px]" : "right-3"
          }`}
          aria-label={rightOpen ? "Hide community highlights" : "Show community highlights"}
        >
          <PanelRight className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};

export default Layout;
