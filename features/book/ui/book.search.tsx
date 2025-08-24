'use client';
import { useRef, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AddRounded from '@mui/icons-material/AddRounded';
import {
    Autocomplete,
    Button,
    InputAdornment,
    TextField,
} from '@mui/material';

type BookSearchProps = {
    onSearch?: (keyword: string) => void;
    onAddBook?: () => void;
};

const BookSearch: React.FC<BookSearchProps> = ({ onSearch, onAddBook }) => {
    const topBooks = [
        { title: 'Dekiru Nihongo (Đỏ)' },
        { title: 'Minna No Nihongo I' },
        { title: 'Shin Nihongo 500 Câu Hỏi' },
    ];

    const [keyword, setKeyword] = useState('');
    const inputRef = useRef<HTMLInputElement | null>(null);

    const triggerSearch = () => {
        const k = keyword.trim();
        if (!k) return;
        onSearch?.(k);
    };

    return (
        <div className="flex gap-4 mt-4">
            <div className="flex-1">
                <Autocomplete
                    freeSolo
                    id="book-search"
                    disableClearable
                    options={topBooks.map((option) => option.title)}
                    onInputChange={(_, value) => setKeyword(value)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            inputRef={inputRef}
                            sx={{
                                width: '100%',
                                '& fieldset': { borderWidth: 0 },
                                '&:focus fieldset': { borderWidth: '1px' },
                            }}
                            name="keyword"
                            size="small"
                            fullWidth
                            placeholder="Tìm kiếm sách"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    triggerSearch();
                                }
                            }}
                            slotProps={{
                                input: {
                                    ...params.InputProps,
                                    type: 'search',
                                    startAdornment: (
                                        <InputAdornment position="start" sx={{ paddingLeft: '8px', cursor: 'pointer' }}>
                                            <SearchIcon
                                                onClick={triggerSearch}
                                                aria-label="Tìm kiếm"
                                            />
                                        </InputAdornment>
                                    ),
                                    sx: {
                                        height: '40px',
                                        borderRadius: '8px',
                                        bgcolor: 'var(--color-gray-200-gray-700)',
                                        borderWidth: 0,
                                        transition: 'all .2s ease',
                                        '&:focus-within': { bgcolor: 'transparent' },
                                        padding: 0,
                                    },
                                },
                            }}
                        />
                    )}
                />
            </div>

            <div className="flex items-center">
                <Button
                    variant="contained"
                    startIcon={<AddRounded />}
                    onClick={() => onAddBook?.()}
                >
                    Thêm mới sách
                </Button>
            </div>
        </div>
    );
};

export default BookSearch;
