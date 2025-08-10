import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import { useSidebarCollapse } from "@/wrapper/sidebar-collapse/sidebar.collapse.wrapper";
import { CustomTooltip } from "@/components/mui-custom/custom.tooltip";

const LogoButtons = () => {
    const { isCollapse, setIsCollapse } = useSidebarCollapse();
    return (
        <div className="flex items-center gap-x-3">
            <CustomTooltip title={isCollapse ? "Mở sidebar" : "Đóng sidebar"} placement="right" arrow>
                <div onClick={() => setIsCollapse(prev => !prev)} className="w-10 h-10 duration-200 transition-all hover:bg-gray-200-gray-700 rounded-full flex items-center justify-center cursor-pointer">
                    <MenuIcon />
                </div>
            </CustomTooltip>

            <Link href={"/home"} className="select-none">
                <img src={"/logo.png"} alt="app-logo" width={50} height={50} />
            </Link>
        </div>
    )
}

export default LogoButtons