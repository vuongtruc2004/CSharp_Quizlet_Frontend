'use client';
import { InputAdornment, MenuItem, Select, TextField } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { SORT_OPTIONS, SortOption } from "../services/course.constants";

const CourseSearchBox = () => {
    const [sortOption, setSortOption] = useState<SortOption>('all');

    return (
        <div>
            <h1 className="font-bold text-3xl">Học phần của bạn</h1>

            <div className="flex items-center justify-between my-10">
                <Select
                    value={sortOption} IconComponent={KeyboardArrowDownIcon} size="small"
                    onChange={(e) => setSortOption(e.target.value)}
                    sx={{
                        borderRadius: '12.5rem',
                        paddingInline: '12px',
                    }}
                    slotProps={{
                        notchedOutline: {
                            sx: {
                                borderColor: 'var(--color-gray-400-gray-600)',
                                borderWidth: '2px',
                            }
                        },
                    }}
                    MenuProps={{
                        slotProps: {
                            paper: {
                                sx: {
                                    bgcolor: 'var(--color-gray-100-twilight900)',
                                    boxShadow: 'none',
                                    border: '1px solid var(--color-gray-400-gray-600)',
                                }
                            }
                        }
                    }}>
                    {SORT_OPTIONS.map(option => {
                        return (
                            <MenuItem key={option.key} value={option.value}>
                                {option.label}
                            </MenuItem>
                        )
                    })}
                </Select>

                <form action="" className="w-2/5">
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
                        size="small"
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
                                    height: '48px',
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
            </div>
        </div>
    )
}

export default CourseSearchBox