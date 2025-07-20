'use client';
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

const SearchBox = () => {
    const [isFocus, setIsFocus] = useState(false);

    return (
        <form action="" className="w-2/3 relative">
            <TextField
                autoComplete="off"
                onFocus={() => setIsFocus(true)}
                onBlur={() => {
                    setTimeout(() => {
                        setIsFocus(false);
                    }, 200);
                }}
                sx={{
                    width: '100%',
                    '& fieldset': {
                        borderWidth: 0,
                    },
                    '&:focus fieldset': {
                        borderWidth: '1px'
                    },
                }}
                name="keyword"
                size="small"
                fullWidth
                placeholder="Nhập từ vựng mà bạn muốn tìm"
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
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

            <div className={`pt-5 absolute top-11 left-0 w-full bg-gray-100-gray-900 rounded-lg border border-gray-300-gray-700 z-10 ${isFocus ? 'block' : 'hidden'}`}>
                <h2 className="font-bold text-gray-500-gray-400 uppercase text-[12px] px-5 mb-3">Nội dung tìm kiếm gần đây</h2>

                <ul>
                    <li className="cursor-pointer py-2 px-5 hover:bg-gray-200-gray-800 transition-all duration-150 rounded-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, excepturi.</li>
                    <li className="cursor-pointer py-2 px-5 hover:bg-gray-200-gray-800 transition-all duration-150 rounded-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, excepturi.</li>
                    <li className="cursor-pointer py-2 px-5 hover:bg-gray-200-gray-800 transition-all duration-150 rounded-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, excepturi.</li>
                    <li className="cursor-pointer py-2 px-5 hover:bg-gray-200-gray-800 transition-all duration-150 rounded-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, excepturi.</li>
                    <li className="cursor-pointer py-2 px-5 hover:bg-gray-200-gray-800 transition-all duration-150 rounded-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, excepturi.</li>
                </ul>
            </div>
        </form>
    )
}

export default SearchBox