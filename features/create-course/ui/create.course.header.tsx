'use client'
import { useCreateCourse } from "@/wrapper/create-course/create.course.wrapper";
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import { Button, TextField } from "@mui/material";
import DeleteAllPopover from "./delete.all.popover";
import ImportModal from "./import.modal";
import SettingsModal from "./manage.access.modal";

const CreateCourseHeader = () => {
    const { state, loading } = useCreateCourse();

    return (
        <>
            <div className="flex items-center justify-between py-5 sticky top-0 bg-gray200-twilight900 z-10">
                <h1 className="text-3xl font-bold">Tạo một học phần mới</h1>
                <Button variant="contained" sx={{ borderRadius: '32px' }} type="submit" loading={loading}>Tạo</Button>
            </div>

            <div className="flex flex-col gap-y-5">
                <TextField
                    sx={{
                        width: '100%',
                        '& fieldset': {
                            borderWidth: 0,
                        },
                        '& fieldset:where(.mui-1yi7wrd-MuiInputBase-root-MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline)': {
                            borderWidth: 1,
                        }
                    }}
                    defaultValue={state?.title.value || ""}
                    name="title"
                    fullWidth
                    size="small"
                    placeholder='Nhập tiêu đề, ví dụ "KANJI Bài 1 (Dekiru Nihongo Xanh)"'
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
                        },
                        formHelperText: {
                            sx: { marginLeft: 0 }
                        }
                    }}
                    error={state?.title.isError}
                    helperText={state?.title.isError && (
                        <span className="flex items-center gap-x-1">
                            <ErrorOutlineRoundedIcon sx={{ fontSize: '16px' }} />
                            {state?.title.errorMessage}
                        </span>
                    )}
                />

                <TextField
                    sx={{
                        width: '100%',
                        '& fieldset': {
                            borderWidth: 0,
                        }
                    }}
                    defaultValue={state?.description || ""}
                    name="description"
                    fullWidth
                    multiline
                    minRows={2}
                    placeholder="Thêm mô tả..."
                    slotProps={{
                        input: {
                            sx: {
                                borderRadius: '8px',
                                bgcolor: 'var(--color-gray-200-gray-700)',
                                borderWidth: 0,
                                transition: 'all .2s ease',
                                '&:focus-within': {
                                    bgcolor: 'transparent'
                                }
                            }
                        }
                    }}
                />
            </div>

            <div className="my-5 flex items-center justify-between">
                <ImportModal />

                <div className="flex items-center gap-x-3">
                    <DeleteAllPopover />
                    <SettingsModal />
                </div>
            </div>
        </>
    )
}

export default CreateCourseHeader