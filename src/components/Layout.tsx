import { ReactNode } from "react";
import Footer from "./Footer";
import AppSidebar from "./AppSidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Mobile sidebar (stacked) */}
      <div className="md:hidden border-b border-border sidebar-grid p-lg">
        <AppSidebar />
      </div>

      {/* Desktop layout: fixed left sidebar */}
      <div className="flex w-full">
        <aside className="hidden md:block sidebar-grid fixed left-0 top-0 h-screen w-[22vw] border-r border-border p-lg overflow-y-auto">
          <AppSidebar />
        </aside>

        <main className="flex-1 md:ml-[22vw]">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;