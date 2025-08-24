'use client';
import { ArrowDropDownCircleOutlined } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import {
    Autocomplete, Button, ButtonGroup, ClickAwayListener, Grow,
    InputAdornment, MenuItem, MenuList, Paper, Popper, TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useRef, useState } from "react";

const options = ["Tìm kiếm thường", "Tìm trên Google", "Tìm trên Mazii"];

export default function BookSearch({
    onChangeSearch, onAddBook,
}: { onChangeSearch?: (kw: string) => void; onAddBook?: () => void; }) {
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const anchorRef = useRef<HTMLDivElement>(null);

    return (
        <div className="flex items-center gap-x-3 mt-4">
            <Autocomplete
                sx={{ flex: 1 }}
                freeSolo
                disableClearable
                options={[]}
                onInputChange={(_, v) => onChangeSearch?.(v)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        size="small"
                        placeholder="Tìm kiếm sách"
                        sx={{ "& fieldset": { borderWidth: 0 } }}
                        slotProps={{
                            input: {
                                ...params.InputProps,
                                type: "search",
                                startAdornment: (
                                    <InputAdornment position="start" sx={{ pl: "8px" }}>
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                                sx: {
                                    height: "40px",
                                    borderRadius: "8px",
                                    bgcolor: "var(--color-gray-200-gray-700)",
                                    "&:focus-within": { bgcolor: "transparent" },
                                    p: 0,
                                },
                            },
                        }}
                    />
                )}
            />

            <ButtonGroup variant="contained" ref={anchorRef}>
                <Button>{options[selectedIndex]}</Button>
                <Button size="small" onClick={() => setOpen((p) => !p)}>
                    <ArrowDropDownCircleOutlined />
                </Button>
            </ButtonGroup>
            <Popper open={open} anchorEl={anchorRef.current} transition disablePortal sx={{ zIndex: 1 }}>
                {({ TransitionProps }) => (
                    <Grow {...TransitionProps}>
                        <Paper>
                            <ClickAwayListener onClickAway={() => setOpen(false)}>
                                <MenuList autoFocusItem>
                                    {options.map((o, i) => (
                                        <MenuItem
                                            key={o}
                                            selected={i === selectedIndex}
                                            onClick={() => {
                                                setSelectedIndex(i);
                                                setOpen(false);
                                            }}
                                        >
                                            {o}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>

            <Button variant="contained" onClick={onAddBook} startIcon={<AddIcon />}>
                Thêm mới sách
            </Button>
        </div>
    );
}
