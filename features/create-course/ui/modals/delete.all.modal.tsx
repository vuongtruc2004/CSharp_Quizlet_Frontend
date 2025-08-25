'use client'
import { CustomTooltip } from "@/components/mui-custom/custom.tooltip";
import { useCreateCourse } from "@/wrapper/create-course/create.course.wrapper";
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Backdrop, Button, Divider, Modal } from "@mui/material";
import { useState } from "react";

const DeleteAllModal = () => {
    const { setQuestions, questions } = useCreateCourse();
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleDeleteAllQuestions = () => {
        setQuestions([]);
        handleClose();
    }

    return (
        <>
            <CustomTooltip title="Xóa toàn bộ">
                <Button onClick={() => setOpen(true)} variant="outlined" color="third" sx={{
                    borderRadius: '50%',
                    borderWidth: '2px',
                    borderColor: 'var(--color-gray-400-gray-600)',
                    padding: 0,
                    width: '40px'
                }}>
                    <DeleteOutlineIcon />
                </Button>
            </CustomTooltip>

            <Modal open={open} onClose={handleClose} closeAfterTransition slots={{ backdrop: Backdrop }} slotProps={{ backdrop: { timeout: 500, } }}>
                <div className='w-2/3 bg-gray-100-twilight-900 rounded-lg mx-auto mt-5 relative'>
                    <CustomTooltip title="Hủy" placement="left">
                        <span
                            onClick={handleClose}
                            className="absolute top-5 right-5 hover:bg-gray-300-gray-800 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200"
                        >
                            <CloseIcon sx={{ fontSize: '1.75rem' }} />
                        </span>
                    </CustomTooltip>

                    <div className='px-8 pt-8 pb-5'>
                        <h1 className='font-bold text-3xl text-gray-800-gray-200 mb-4'>Xóa toàn bộ thẻ ghi nhớ?</h1>
                        <p className="text-gray-800-gray-200">Bạn sắp xoá toàn bộ thẻ ghi nhớ có trong học phần này ({questions.filter(question => question.terminology.trim() !== "" && question.define.trim() !== "").length} thẻ ghi nhớ).</p>
                        <p className="text-sm text-gray-800-gray-200 font-bold">Bạn có chắc chắn không? Bạn sẽ không được hoàn tác.</p>
                    </div>

                    <Divider sx={{ borderWidth: '1px' }} />
                    <div className="flex items-center gap-x-3 justify-end px-5 py-3">
                        <Button variant="contained" color="secondary" onClick={handleClose}>Hủy</Button>
                        <Button variant="contained" color="error" type="submit" onClick={handleDeleteAllQuestions}>Xóa</Button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default DeleteAllModal