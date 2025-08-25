'use client';
import { Avatar, Button, IconButton, ListItemIcon, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import CreateButtonPopover from "./create.button.popover";
import SearchBox from "./search.box";
import LogoButtons from "./logo.buttons";
import { useEffect, useState } from "react";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import { sendResponse } from "next/dist/server/image-optimizer";
import { sendRequest } from "@/utils/fetch.api";
import { useRouter } from "next/navigation";

const AppHeader = ({ position }: { position: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed' }) => {
    const [token, setToken] = useState<string | null>(null);
    const router = useRouter();
    useEffect(() => {
        const getToken = localStorage.getItem("token") || sessionStorage.getItem("token");
        setToken(getToken);
        console.log('token =', token);
    }, []);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const clearToken = () => {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        setToken(null);
        console.log('Logged out, token cleared');
    }

    const handleLogout = async () => {
        try {
            const rf = localStorage.getItem("refreshToken") || sessionStorage.getItem("refreshToken");
            console.log('rf =', rf);
            if (rf != null) {
                const response = await sendRequest<ApiResponse<any>>({
                    url: '/v1/Auth/logout',          // hoặc '/auth/login' nếu không versioning
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json', },
                    body: rf
                })
            }
        } catch (err) {
            console.error('Logout error:', err);
        }
        clearToken();
        setToken(null);
        handleClose();
        router.push("/login");

    }

    return (
        <div className={`flex items-center justify-between px-4.5 py-3.5 pr-8 ${position} top-0 left-0 bg-gray200-twilight900 z-20 w-full`}>
            <div className="flex items-center gap-x-10 w-full">
                <LogoButtons />
                <SearchBox />
            </div>

            <div className="flex items-center gap-x-3">
                <CreateButtonPopover />
                {token == null ? (<>
                    <Link href={"/register"}>
                        <Button variant="contained" color="secondary">Đăng kí</Button>
                    </Link>

                    <Link href={"/login"}>
                        <Button variant="contained">Đăng nhập</Button>
                    </Link>
                </>) : (<>
                    <IconButton onClick={handleClick}>
                        <Avatar
                            sx={{}}
                            alt="Remy Sharp"
                            src="/broken-image.jpg"

                        />
                    </IconButton>

                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        slotProps={{
                            paper: {
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <Settings fontSize="small" />
                            </ListItemIcon>
                            Settings
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </>
                )}

            </div>
        </div>
    )
}

export default AppHeader