'use client';
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const CourseSearchBox = () => {

    return (
        <form action="" className="w-1/2">
            <TextField
                autoComplete="off"
                sx={{
                    '& fieldset': {
                        borderWidth: 0,
                    },
                    '&:focus fieldset': {
                        borderWidth: '1px'
                    },
                    width: '100%',
                }}
                name="keyword"
                fullWidth
                placeholder="Tìm học phần"
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                        sx: {
                            borderRadius: '8px',
                            bgcolor: 'var(--color-gray-200-gray-700)',
                            borderWidth: 0,
                            transition: 'all .2s ease',
                            '&:focus-within': {
                                bgcolor: 'transparent'
                            },
                            height: '48px'
                        }
                    }
                }}
            />
        </form>
    )
}

export default CourseSearchBox