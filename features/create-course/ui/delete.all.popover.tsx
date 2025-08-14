'use client'
import { CustomTooltip } from "@/components/mui-custom/custom.tooltip";
import { Button, Popover } from "@mui/material"
import { useState } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloseIcon from '@mui/icons-material/Close';
import { useCreateCourse } from "@/wrapper/create-course/create.course.wrapper";

const DeleteAllPopover = () => {
    const { setQuestions } = useCreateCourse();
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeleteAllQuestions = () => {
        setQuestions([]);
        handleClose();
    }

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
                slotProps={{
                    paper: {
                        style: {
                            backgroundColor: 'var(--color-gray200-twilight900)',
                            padding: '12px 8px 8px 20px'
                        }
                    }
                }}
            >
                <div>
                    <p className="font-semibold mb-5 mr-16">Xóa toàn bộ thuật ngữ</p>
                    <div className="flex items-center gap-x-3 justify-end">
                        <Button startIcon={<CloseIcon />} onClick={handleClose} size="small" variant="outlined" color="third" sx={{
                            borderWidth: '2px',
                            borderColor: 'var(--color-gray-400-gray-600)',
                            borderRadius: '20px',
                            paddingInline: '20px'
                        }}>Hủy</Button>

                        <Button size="small" variant="contained" color="error" sx={{ borderRadius: '20px', paddingInline: '20px' }} onClick={handleDeleteAllQuestions}>Xóa</Button>
                    </div>
                </div>
            </Popover>
        </>
    )
}

export default DeleteAllPopover