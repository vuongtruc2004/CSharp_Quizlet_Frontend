'use client';
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete, Button, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

export default function BookSearch({
    onChangeSearch, onAddBook,
}: {
    onChangeSearch?: (kw: string) => void;
    onAddBook?: () => void;
}) {
    const [kw, setKw] = useState("");

    return (
        <div className="flex items-center gap-x-3 mt-4">
            <Autocomplete
                sx={{ flex: 1 }}
                freeSolo
                disableClearable
                options={[]}
                onInputChange={(_, v) => {
                    setKw(v);
                    onChangeSearch?.(v);
                }}
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

            <Button variant="contained" onClick={onAddBook} startIcon={<AddIcon />}>
                Thêm mới sách
            </Button>
        </div>
    );
}
