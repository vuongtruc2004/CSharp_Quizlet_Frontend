'use client';
import { Button } from "@mui/material";
import Link from "next/link";
import CreateButtonPopover from "./create.button.popover";
import SearchBox from "./search.box";
import LogoButtons from "./logo.buttons";

const AppHeader = ({ position }: { position: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed' }) => {
    return (
        <div className={`flex items-center justify-between px-4.5 py-3.5 pr-8 ${position} top-0 left-0 bg-gray200-twilight900 z-20 w-full`}>
            <div className="flex items-center gap-x-10 w-full">
                <LogoButtons />
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