import { Button, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const CreateCourseTitle = () => {
    return (
        <div>
            <form className="flex flex-col gap-y-5">
                <TextField
                    sx={{
                        width: '100%',
                        '& fieldset': {
                            borderWidth: 0,
                        },
                        '&:focus fieldset': {
                            borderWidth: '1px'
                        },
                    }}
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
                        }
                    }}
                />

                <TextField
                    sx={{
                        width: '100%',
                        '& fieldset': {
                            borderWidth: 0,
                        },
                        '&:focus fieldset': {
                            borderWidth: '1px'
                        },
                    }}
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
            </form>

            <div className="my-5 flex items-center justify-between">
                <Button variant="outlined" color="third" startIcon={<AddIcon />} sx={{
                    borderRadius: '32px',
                    borderWidth: '2px',
                    borderColor: 'var(--color-gray-400-gray-600)',
                }}>Nhập</Button>

                <Button variant="outlined" color="third" sx={{
                    borderRadius: '50%',
                    borderWidth: '2px',
                    borderColor: 'var(--color-gray-400-gray-600)',
                    padding: 0,
                    width: '40px'
                }}>
                    <SettingsOutlinedIcon />
                </Button>
            </div>
        </div>
    )
}

export default CreateCourseTitle