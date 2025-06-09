import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/module/dashboard/ui/view/dashboard-sidebar";

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

          {children}
            </main>
          </SidebarProvider>
      </div>
    );
  }