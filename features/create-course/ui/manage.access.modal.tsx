import { CustomTooltip } from "@/components/mui-custom/custom.tooltip";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import { Backdrop, Button, Divider, FormControl, FormHelperText, MenuItem, Modal, Select } from '@mui/material';
import { useState } from 'react';

const ManageAccessModal = () => {
    const [open, setOpen] = useState(false);
    const [displayFor, setDisplayFor] = useState<"people" | "password" | "me">("me");
    const [updater, setUpdater] = useState<"password" | "me">("me");
    const handleClose = () => setOpen(false);

    return (
        <>
            <CustomTooltip title="Quyền truy cập">
                <Button onClick={() => setOpen(true)} variant="outlined" color="third" sx={{
                    borderRadius: '50%',
                    borderWidth: '2px',
                    borderColor: 'var(--color-gray-400-gray-600)',
                    padding: 0,
                    width: '40px'
                }}>
                    <LockOutlineIcon />
                </Button>
            </CustomTooltip>

            <Modal open={open} onClose={handleClose} closeAfterTransition slots={{ backdrop: Backdrop }} slotProps={{ backdrop: { timeout: 500, } }}>
                <div className='w-2/3 bg-gray-100-twilight-900 rounded-lg mx-auto mt-5 relative'>
                    <div className='px-8 pt-8 pb-5'>
                        <h1 className='font-bold text-3xl text-gray-800-gray-200 mb-4'>Quản lý quyền truy cập</h1>
                        <div className='grid grid-cols-2 items-start gap-x-5'>
                            <FormControl>
                                <p className='font-semibold mb-5 text-sm text-gray-800-gray-200'>HIỆN THỊ VỚI</p>
                                <Select fullWidth size='small' value={displayFor} onChange={(e) => setDisplayFor(e.target.value)}>
                                    <MenuItem value={"people"}>Mọi người</MenuItem>
                                    <MenuItem value={"password"}>Người có mật khẩu</MenuItem>
                                    <MenuItem value={"me"}>Chỉ mình tôi</MenuItem>
                                </Select>
                                <FormHelperText sx={{
                                    color: 'var(--color-mint-500)',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    columnGap: '5px',
                                    marginTop: '5px',
                                    marginLeft: 0
                                }}>
                                    <AutoAwesomeIcon sx={{ fontSize: '1rem' }} />
                                    <span>{displayFor === "people" ? "Mọi người dùng Quizlet" : displayFor === "password" ? "Chỉ người có mật khẩu mới" : "Chỉ bạn mới"} có thể sử dụng học phần này</span>
                                </FormHelperText>
                            </FormControl>

                            <FormControl>
                                <p className='font-semibold mb-5 text-sm text-gray-800-gray-200'>AI CÓ THỂ SỬA</p>
                                <Select fullWidth size='small' value={updater} onChange={(e) => setUpdater(e.target.value)}>
                                    <MenuItem value={"password"}>Người có mật khẩu</MenuItem>
                                    <MenuItem value={"me"}>Chỉ mình tôi</MenuItem>
                                </Select>
                                <FormHelperText sx={{
                                    color: 'var(--color-mint-500)',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    columnGap: '5px',
                                    marginTop: '5px',
                                    marginLeft: 0
                                }}>
                                    <AutoAwesomeIcon sx={{ fontSize: '1rem' }} />
                                    <span>{updater === "password" ? "Chỉ người có mật khẩu mới" : "Chỉ bạn mới"} có thể chỉnh sửa được học phẩn này</span>
                                </FormHelperText>
                            </FormControl>
                        </div>
                    </div>

                    <Divider sx={{ borderWidth: '1px' }} />
                    <div className="flex items-center gap-x-3 justify-end px-5 py-3">
                        <Button variant="contained" color="secondary" onClick={handleClose}>Hủy</Button>
                        <Button variant="contained" color="primary" type="submit">Lưu</Button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default ManageAccessModal