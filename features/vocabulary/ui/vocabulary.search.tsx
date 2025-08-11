'use client';
import { ArrowDropDownCircleOutlined } from '@mui/icons-material';
import { Autocomplete, Button, ButtonGroup, ClickAwayListener, Grow, InputAdornment, MenuItem, MenuList, Paper, Popper, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useRef, useState } from 'react';

const options = ["Tìm kiểm thông thường", "Tìm kiếm trên Mazii", "Tìm kiến trên Google"];

const VocabularySearch = (props: IProps) => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
    };

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLLIElement, MouseEvent>,
        index: number,
    ) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    return (
        <div className='flex items-center gap-x-3'>
            <Autocomplete
                sx={{ flex: 1 }}
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={props.historySearch.map((option) => option.title)}
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
                        placeholder="Tìm kiếm từ vựng"
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
            <ButtonGroup
                variant="contained"
                ref={anchorRef}
                aria-label="Button group with a nested menu"
            >
                <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                <Button
                    size="small"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                >
                    <ArrowDropDownCircleOutlined />
                </Button>
            </ButtonGroup>

            <Popper
                sx={{ zIndex: 1 }}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
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
    )
}

export default VocabularySearch