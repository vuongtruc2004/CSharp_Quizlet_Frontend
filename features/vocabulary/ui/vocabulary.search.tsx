'use client';
import { ArrowDropDownCircleOutlined } from '@mui/icons-material';
import { Autocomplete, Button, ButtonGroup, ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper, TextField } from '@mui/material'
import React from 'react'

const options = ["Tìm kiểm thông thường", "Tìm kiếm trên Mazii", "Tìm kiến trên Google"];

interface IHistorySearch {
    id: number,
    title: string,
}

interface IProps {
    historySearch: IHistorySearch[];
}

const VocabularySearch = (props: IProps) => {
    const top100Films = [
        { id: 1, title: 'The Shawshank Redemption' },
        { id: 2, title: 'The Godfather' },
        { id: 3, title: 'The Godfather: Part II' },
        { id: 4, title: 'The Dark Knight' },
        { id: 5, title: '12 Angry Men' },
        { id: 6, title: "Schindler's List" },
        { id: 7, title: 'Pulp Fiction' }];

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

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
        <>
            <div className='flex gap-4 mt-[10px]'>
                <div className='basis-4/5'>
                    <Autocomplete
                        freeSolo
                        id="free-solo-2-demo"
                        disableClearable
                        options={props.historySearch.map((option) => option.title)}
                        renderInput={(params) => (
                            <TextField
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        height: '45px'
                                    },
                                    '& .mui-4v9vo1-MuiFormLabel-root-MuiInputLabel-root': {
                                        fontSize: '0.9rem',
                                        transform: 'translate(14px, 13px) scale(1)'
                                    },
                                }}
                                {...params}
                                label="Search input"
                                slotProps={{
                                    input: {
                                        ...params.InputProps,
                                        type: 'search',
                                    },
                                }}
                            />
                        )}
                    />
                </div>
                <div className='basis-1/5 align-self-center'>
                    <ButtonGroup
                        variant="contained"
                        ref={anchorRef}
                        aria-label="Button group with a nested menu"
                        sx={{
                            marginTop: '3px'
                        }}
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
            </div>
        </>
    )
}

export default VocabularySearch