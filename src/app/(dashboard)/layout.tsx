import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/module/dashboard/ui/view/dashboard-sidebar";
import { SearchNavbar } from "@/components/searchNavbar";

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className=" ">
        <SidebarProvider>
            <DashboardSidebar/>
            <main  className="w-full h-screen flex flex-col ">
            <SearchNavbar/>
          {children}
            </main>
          </SidebarProvider>
      </div>
    );
  }