'use client';
import { ArrowDropDownCircleOutlined } from '@mui/icons-material';
import { Autocomplete, Button, ButtonGroup, ClickAwayListener, Grow, InputAdornment, MenuItem, MenuList, Paper, Popper, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useRef, useState } from 'react';

const options = ["Tất cả sách", "Tất cả chương", "Tất cả bài"];

const BookSearch = () => {
    const topBooks = [
        { title: 'Dekiru Nihongo (Đỏ)' },
        { title: 'Minna No Nihongo I' },
        { title: 'Shin Nihongo 500 Câu Hỏi' },
    ];

    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClick = () => {
        console.info(`Bạn đã chọn ${options[selectedIndex]}`);
    };

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLLIElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => setOpen((prevOpen) => !prevOpen);

    const handleClose = (event: Event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) return;
        setOpen(false);
    };

    return (
        <div className="flex gap-4 mt-4">
            <div className="flex-1">
                <Autocomplete
                    freeSolo
                    id="book-search"
                    disableClearable
                    options={topBooks.map((option) => option.title)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
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
                            placeholder="Tìm kiếm sách"
                            slotProps={{
                                input: {
                                    ...params.InputProps,
                                    type: 'search',
                                    startAdornment: (
                                        <InputAdornment position="start" sx={{ paddingLeft: '8px' }}>
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
                                        },
                                        padding: 0
                                    }
                                }
                            }}
                        />
                    )}
                />
            </div>

            <div className="flex gap-2">
                {options.map((opt, idx) => (
                    <ButtonGroup
                        key={idx}
                        variant="contained"
                        ref={idx === 0 ? anchorRef : null}
                    >
                        <Button onClick={handleClick}>{opt}</Button>
                        <Button
                            size="small"
                            onClick={handleToggle}
                            aria-haspopup="menu"
                        >
                            <ArrowDropDownCircleOutlined />
                        </Button>
                    </ButtonGroup>
                ))}
            </div>

            <Popper sx={{ zIndex: 1 }} open={open} anchorEl={anchorRef.current} transition disablePortal>
                {({ TransitionProps }) => (
                    <Grow {...TransitionProps}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu" autoFocusItem>
                                    {options.map((option, index) => (
                                        <MenuItem
                                            key={option}
                                            selected={index === selectedIndex}
                                            onClick={(event) => handleMenuItemClick(event, index)}
                                        >
                                            {option}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
};

export default BookSearch;
