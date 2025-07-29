'use client';
import { Button } from "@mui/material";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image";
import CreateButtonPopover from "./create.button.popover";
import SearchBox from "./search.box";
import { useSidebarCollapse } from "@/wrapper/sidebar-collapse/sidebar.collapse.wrapper";
import { CustomTooltip } from "@/components/mui-custom/custom.tooltip";

const AppHeader = () => {
    const { isCollapse, setIsCollapse } = useSidebarCollapse();

    return (
        <div className="flex items-center justify-between px-4.5 py-3.5 sticky top-0 left-0 bg-gray200-twilight900 z-20">
            <div className="flex items-center gap-x-10 w-full">
                <div className="flex items-center gap-x-3">
                    <CustomTooltip title={isCollapse ? "Mở sidebar" : "Đóng sidebar"} placement="right" arrow>
                        <div onClick={() => setIsCollapse(prev => !prev)} className="w-10 h-10 duration-200 transition-all hover:bg-gray-200-gray-700 rounded-full flex items-center justify-center cursor-pointer">
                            <MenuIcon />
                        </div>
                    </CustomTooltip>

                    <Link href={"/home"} className="select-none">
                        <Image src={"/logo.png"} alt="app-logo" width={50} height={50} />
                    </Link>
                </div>

                <SearchBox />
            </div>

            <div className="flex items-center gap-x-3">
                <CreateButtonPopover />

                <Link href={"/register"}>
                    <Button variant="contained" color="secondary">Đăng kí</Button>
                </Link>

                <Link href={"/login"}>
                    <Button variant="contained">Đăng nhập</Button>
                </Link>
            </div>
        </div>
    )
}

export default AppHeader