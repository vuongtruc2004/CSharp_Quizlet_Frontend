'use client'
import { useCreateCourse } from "@/wrapper/create-course/create.course.wrapper";
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import { Button, TextField } from "@mui/material";
import DeleteAllModal from "../modals/delete.all.modal";
import ImportModal from "../modals/import.modal";
import ManageAccessModal from "../modals/manage.access.modal";

const CreateCourseHeader = () => {
    const { state, isPending, questions } = useCreateCourse();

    return (
        <>
            <div className="flex items-center justify-between py-5 sticky top-0 bg-gray200-twilight900 z-10">
                <h1 className="text-3xl font-bold">Tạo một học phần mới <span className="text-sm text-gray-800-gray-400">({questions.filter(question => question.terminology.trim() !== "" && question.define.trim() !== "").length} thẻ ghi nhớ)</span></h1>
                <Button variant="contained" sx={{ borderRadius: '32px' }} type="submit" loading={isPending}>Tạo</Button>
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
                    placeholder='Nhập tiêu đề, ví dụ "KANJI Bài 1 (Marugoto)"'
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
                    <DeleteAllModal />
                    <ManageAccessModal />
                </div>
            </div>
        </>
    )
}

export default CreateCourseHeader