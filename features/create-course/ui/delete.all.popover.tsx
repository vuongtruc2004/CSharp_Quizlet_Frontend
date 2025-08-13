'use client'
import { CustomTooltip } from "@/components/mui-custom/custom.tooltip";
import { Button, Popover } from "@mui/material"
import { useState } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloseIcon from '@mui/icons-material/Close';

const DeleteAllPopover = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <CustomTooltip title="Xóa toàn bộ">
                <Button onClick={(e) => setAnchorEl(e.currentTarget)} variant="outlined" color="third" sx={{
                    borderRadius: '50%',
                    borderWidth: '2px',
                    borderColor: 'var(--color-gray-400-gray-600)',
                    padding: 0,
                    width: '40px'
                }}>
                    <DeleteOutlineIcon />
                </Button>
            </CustomTooltip>

            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'right',
                }}
            >
                <div>
                    <h3 className="font-semibold text-xl mb-3">Xóa toàn bộ thuật ngữ</h3>
                    <div className="flex items-center gap-x-3 justify-end">
                        <Button variant="outlined" color="third" sx={{
                            borderRadius: '30px',
                            borderWidth: '2px',
                            borderColor: 'var(--color-gray-400-gray-600)',
                            width: '85px'
                        }} startIcon={<CloseIcon />}>Hủy</Button>

                        <Button variant="contained" color="error" sx={{ borderRadius: '30px', width: '85px' }}>Xóa</Button>
                    </div>
                </div>
            </Popover>
        </>
    )
}

export default DeleteAllPopover