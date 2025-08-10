import AppHeader from "@/features/header/app.header"
import CreatorSidebar from "@/features/sidebar/ui/creator.sidebar"
import { SidebarCollapseWrapper } from "@/wrapper/sidebar-collapse/sidebar.collapse.wrapper"
import { Box } from "@mui/material"

const CreatorLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarCollapseWrapper initialState={true}>
            <div className="bg-gray200-twilight900 relative min-h-screen">
                <AppHeader position="static" />
                <CreatorSidebar />
                <Box sx={{
                    padding: '0px 32px 16px 28px',
                    minHeight: 'calc(100vh - 78px)'
                }}>
                    {children}
                </Box>
            </div>
        </SidebarCollapseWrapper>
    )
}

export default CreatorLayout