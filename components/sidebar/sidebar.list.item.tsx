'use client';
import { useSidebarCollapse } from "@/wrapper/sidebar-collapse/sidebar.collapse.wrapper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CustomTooltip } from "../mui-custom/custom.tooltip";
import { Badge } from "@mui/material";

const SidebarListItem = ({ element }: { element: ISidebarElement }) => {
    const { isCollapse } = useSidebarCollapse();
    const pathname = usePathname();

    const className = pathname.startsWith(element.link) ?
        `flex pl-2 overflow-hidden items-center ${isCollapse ? "w-10" : "w-[200px]"} h-10 rounded-lg bg-twilight-100-gray-800 text-twilight-500-twilight-300 transition-all duration-150` :
        `flex pl-2 overflow-hidden items-center ${isCollapse ? "w-10" : "w-[200px]"} h-10 rounded-lg transition-all duration-150 hover:bg-gray-200-gray-700`;

    return (
        <CustomTooltip
            title={isCollapse ? element.name : ""}
            placement="right"
            arrow
        >
            <Link href={element.link} className={className}>
                {element.hasBadge ? (
                    <span className="h-10 flex items-center justify-center mr-4">
                        <Badge badgeContent={9} color="error" max={99} overlap="circular" slotProps={
                            {
                                badge: {
                                    sx: {
                                        width: '18px',
                                        height: '18px',
                                        minWidth: '18px',
                                        top: '22%',
                                    }
                                }
                            }
                        }>
                            {element.icon}
                        </Badge>
                    </span>
                ) : (
                    <span className="h-10 flex items-center justify-center mr-4">
                        {element.icon}
                    </span>
                )}
                <p className={`font-bold text-sm whitespace-nowrap ${isCollapse && "hidden"}`}>
                    {element.name}
                </p>
            </Link>
        </CustomTooltip>
    )
}

export default SidebarListItem