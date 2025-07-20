import AppHeader from "@/components/header/app.header"
import AppSidebar from "@/components/sidebar/app.sidebar"
import { SidebarCollapseWrapper } from "@/wrapper/sidebar-collapse/sidebar.collapse.wrapper"

const StudentLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarCollapseWrapper>
            <div className="bg-gray200-twilight900 relative">
                <AppHeader />
                <div className="flex">
                    <AppSidebar />
                    <div className="flex-1 pt-0.5">
                        {children}
                    </div>
                </div>
            </div>
        </SidebarCollapseWrapper>
    )
}

export default StudentLayout