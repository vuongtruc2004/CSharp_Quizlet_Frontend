import AppHeader from "@/components/header/app.header"
import AppSidebar from "@/components/sidebar/app.sidebar"

const Page = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen overflow-hidden bg-my-white">
            <AppSidebar />
            <div className="flex-1">
                <AppHeader />
                {children}
            </div>
        </div>
    )
}

export default Page