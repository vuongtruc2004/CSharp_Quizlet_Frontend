import AppHeader from "@/components/header/app.header"
import AppSidebar from "@/components/sidebar/app.sidebar"

const Page = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-screen overflow-hidden bg-gray200-twilight900">
            <AppHeader />
            <div className="flex-1">
                <AppSidebar />
                {children}
            </div>
        </div>
    )
}

export default Page