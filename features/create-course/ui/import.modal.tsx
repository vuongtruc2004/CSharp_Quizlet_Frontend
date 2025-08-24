import { Backdrop, Button, Divider, FormControl, FormControlLabel, Modal, Radio, RadioGroup, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useActionState, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { CustomTooltip } from "@/components/mui-custom/custom.tooltip";
import { validateImport } from "../services/create.course.import.validate";
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';

const ImportModal = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const [state, formAction] = useActionState(validateImport, null);

    return (
        <>
            <Button onClick={() => setOpen(true)} variant="outlined" color="third" startIcon={<AddIcon />} sx={{
                borderRadius: '32px',
                borderWidth: '2px',
                borderColor: 'var(--color-gray-400-gray-600)',
            }}>
                Nhập
            </Button>

            <Modal open={open} onClose={handleClose} closeAfterTransition slots={{ backdrop: Backdrop }} slotProps={{ backdrop: { timeout: 500, } }} keepMounted>
                <form action={formAction} className="h-screen w-full bg-gray-100-twilight-900 pt-10 relative flex flex-col">
                    <CustomTooltip title="Hủy nhập" placement="left">
                        <span onClick={handleClose} className="absolute top-5 right-5 hover:bg-gray-300-gray-800 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200">
                            <CloseIcon sx={{ fontSize: '1.75rem' }} />
                        </span>
                    </CustomTooltip>

                    <div className="flex-1 px-8">
                        <h3 className="font-semibold mb-3">Nhập dữ liệu. <span className="text-sm font-normal text-gray-800-gray-200">Chép và dán dữ liệu vào đây (Từ Word, Excel, Google Docs, v.v)</span></h3>

                        <TextField
                            name="data"
                            variant="outlined"
                            defaultValue={state?.data.value || ""}
                            error={state?.data.isError}
                            helperText={state?.data.isError && (
                                <span className="flex items-center gap-x-1">
                                    <ErrorOutlineRoundedIcon sx={{ fontSize: '16px' }} />
                                    {state.data.errorMessage}
                                </span>
                            )}
                            placeholder={'Từ 1 Định nghĩa 1\nTừ 2 Định nghĩa 2\nTừ 3 Định nghĩa 3'}
                            multiline
                            rows={6}
                            fullWidth
                            sx={{
                                '& fieldset': {
                                    border: '2px solid white'
                                }
                            }}
                            slotProps={{
                                formHelperText: {
                                    sx: { marginLeft: 0 }
                                }
                            }}
                        />

                        <div className="flex items-center gap-x-8">
                            <div>
                                <FormControl>
                                    <p className="font-bold mt-8 mb-2">Giữa thuật ngữ và định nghĩa</p>
                                    <RadioGroup defaultValue="tab" sx={{ rowGap: '4px' }} name="radio1">
                                        <FormControlLabel label={<span className="font-semibold">Tab</span>} control={<Radio />} value={"tab"} />

                                        <FormControlLabel label={<span className="font-semibold">Phẩy</span>} control={<Radio />} value={"commas"} />
                                    </RadioGroup>
                                </FormControl>
                            </div>

                            <div>
                                <FormControl>
                                    <p className="font-bold mt-8 mb-2">Giữa các thẻ</p>
                                    <RadioGroup defaultValue="newline" sx={{ rowGap: '4px' }} name="radio2">
                                        <FormControlLabel label={<span className="font-semibold">Dòng mới</span>} control={<Radio />} value={"newline"} />

                                        <FormControlLabel label={<span className="font-semibold">Chấm phẩy</span>} control={<Radio />} value={"semicolon"} />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Divider sx={{ borderWidth: '1px' }} />
                        <div className="flex items-center gap-x-3 justify-end px-5 py-3">
                            <Button variant="contained" color="secondary" onClick={handleClose}>Hủy nhập</Button>
                            <Button variant="contained" color="primary" type="submit">Nhập</Button>
                        </div>
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default ImportModal