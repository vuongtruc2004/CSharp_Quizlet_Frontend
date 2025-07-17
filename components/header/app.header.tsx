import { Button, InputAdornment, TextField } from "@mui/material"
import Link from "next/link";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image";

const AppHeader = () => {
    return (
        <div className="flex items-center justify-between px-4.5 py-3.5">
            <div className="flex items-center gap-x-10">
                <div className="flex items-center gap-x-3">
                    <MenuIcon />
                    <Image src={"/logo.png"} alt="app-logo" width={50} height={50} />
                </div>

                <form action="">
                    <TextField
                        sx={{
                            width: '420px'
                        }}
                        name="keyword"
                        size="small"
                        fullWidth
                        placeholder="Nhập từ vựng mà bạn muốn tìm"
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                                style: {
                                    height: '40px',
                                    borderRadius: '8px',
                                    background: 'var(--color-gray-200-gray-700)',
                                },
                            }
                        }}
                        autoFocus
                    />
                </form>
            </div>

            <div className="flex items-center gap-x-3">
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