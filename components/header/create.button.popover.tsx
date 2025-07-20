import { Button, Popover } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import CardIcon from "../quizlet-icon/card.icon";
import { CustomTooltip } from "../mui-custom/custom.tooltip";
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';

const CreateButtonPopover = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    return (
        <>
            <CustomTooltip title="Tạo" placement="bottom" arrow>
                <Button sx={{ width: '40px', borderRadius: '50%', padding: 0 }} variant="contained" color="primary" onClick={(event) => setAnchorEl(event.currentTarget)}>
                    <AddIcon />
                </Button>
            </CustomTooltip>

            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                slotProps={{
                    paper: {
                        sx: {
                            top: '68px !important',
                            bgcolor: 'var(--color-gray200-twilight900)',
                            border: '1px solid var(--color-gray-300-gray-600)',
                            borderRadius: '8px',
                            boxShadow: 'none',
                            backgroundImage: 'none',
                        },
                    },
                }}
            >
                <div className="flex items-center gap-x-5 w-[200px] px-6 py-3 transition-all duration-200 hover:bg-gray-200-gray-700 rounded-md cursor-pointer">
                    <CardIcon />
                    <p className="font-semibold text-sm">Học phần</p>
                </div>
                <div className="flex items-center gap-x-5 w-[200px] px-6 py-3 transition-all duration-200 hover:bg-gray-200-gray-700 rounded-md cursor-pointer">
                    <FolderOutlinedIcon className="text-gray-600-gray-400" />
                    <p className="font-semibold text-sm">Thư mục</p>
                </div>
            </Popover>
        </>
    )
}

export default CreateButtonPopover