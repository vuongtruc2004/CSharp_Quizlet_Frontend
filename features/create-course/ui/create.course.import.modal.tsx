import { Box, Button, Divider, FormControl, FormControlLabel, FormLabel, Modal, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { CheckBox } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';

const CreateCourseImportModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} variant="outlined" color="third" startIcon={<AddIcon />} sx={{
                borderRadius: '32px',
                borderWidth: '2px',
                borderColor: 'var(--color-gray-400-gray-600)',
            }}>
                Nhập
            </Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <form className="h-screen w-full bg-gray-100-twilight-900 pt-10 relative flex flex-col">
                    <span onClick={handleClose} className="absolute top-5 right-5 hover:bg-gray-300-gray-800 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200">
                        <CloseIcon />
                    </span>

                    <div className="flex-1 px-8">
                        <h3 className="font-semibold mb-3">Nhập dữ liệu. <span className="text-sm font-normal text-gray-800-gray-200">Chép và dán dữ liệu vào đây (Từ Word, Excel, Google Docs, v.v)</span></h3>

                        <TextField
                            variant="outlined"
                            placeholder={'Từ 1 Định nghĩa 1\nTừ 2 Định nghĩa 2\nTừ 3 Định nghĩa 3'}
                            multiline
                            rows={6}
                            fullWidth
                            sx={{
                                '& fieldset': {
                                    border: '2px solid white'
                                }
                            }}
                        />

                        <div className="flex items-center gap-x-8">
                            <div>
                                <FormControl>
                                    <p className="font-bold mt-8 mb-2">Giữa thuật ngữ và định nghĩa</p>
                                    <RadioGroup defaultValue="tab" sx={{ rowGap: '4px' }}>
                                        <FormControlLabel label={<span className="font-semibold">Tab</span>} control={<Radio />} value={"tab"} />

                                        <FormControlLabel label={<span className="font-semibold">Phẩy</span>} control={<Radio />} value={"commas"} />

                                        <FormControlLabel control={<Radio />} label={<TextField
                                            sx={{
                                                'fieldset': {
                                                    borderWidth: 0
                                                },
                                                '&:focus fieldset': {
                                                    borderWidth: '2px'
                                                }
                                            }}
                                            size="small"
                                            placeholder="Tùy chỉnh"
                                            slotProps={{
                                                input: {
                                                    sx: {
                                                        height: '40px',
                                                        borderRadius: '8px',
                                                        bgcolor: 'var(--color-gray-200-gray-700)',
                                                        borderWidth: 0,
                                                        transition: 'all .2s ease',
                                                        '&:focus-within': {
                                                            bgcolor: 'transparent'
                                                        }
                                                    }
                                                }
                                            }} />} />
                                    </RadioGroup>
                                </FormControl>
                            </div>

                            <div>
                                <FormControl>
                                    <p className="font-bold mt-8 mb-2">Giữa các thẻ</p>
                                    <RadioGroup defaultValue="newline" sx={{ rowGap: '4px' }}>
                                        <FormControlLabel label={<span className="font-semibold">Dòng mới</span>} control={<Radio />} value={"newline"} />

                                        <FormControlLabel label={<span className="font-semibold">Chấm phẩy</span>} control={<Radio />} value={"semicolon"} />

                                        <FormControlLabel control={<Radio />} label={<TextField
                                            sx={{
                                                'fieldset': {
                                                    borderWidth: 0
                                                },
                                                '&:focus fieldset': {
                                                    borderWidth: '2px'
                                                }
                                            }}
                                            size="small"
                                            placeholder="Tùy chỉnh"
                                            slotProps={{
                                                input: {
                                                    sx: {
                                                        height: '40px',
                                                        borderRadius: '8px',
                                                        bgcolor: 'var(--color-gray-200-gray-700)',
                                                        borderWidth: 0,
                                                        transition: 'all .2s ease',
                                                        '&:focus-within': {
                                                            bgcolor: 'transparent'
                                                        }
                                                    }
                                                }
                                            }} />} />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Divider sx={{ borderWidth: '1px', marginBottom: '12px' }} />
                        <div className="flex items-center gap-x-3 justify-end">
                            <Button>Hủy nhập</Button>
                            <Button>Nhập</Button>
                        </div>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default CreateCourseImportModal