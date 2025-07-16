import { Button } from "@mui/material"
import Link from "next/link";
import FirstPageIcon from '@mui/icons-material/FirstPage';

const AppHeader = () => {
    return (
        <div className="flex items-center justify-between px-4.5 py-3.5 shadow-md">
            <Button variant="outlined" sx={{ width: '38px', padding: 0 }}>
                <FirstPageIcon />
            </Button>

            <div className="flex items-center gap-x-3">
                <Link href={"/register"}>
                    <Button variant="outlined">Đăng kí</Button>
                </Link>
                <Link href={"/login"}>
                    <Button variant="contained">Đăng nhập</Button>
                </Link>
            </div>
        </div>
    )
}

export default AppHeader