'use client';
import React, { useState } from 'react';
import {
    Box, Button, ClickAwayListener, Fade, IconButton, Paper, Popper, Tooltip, Typography,
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';

type Props = {
    title: string;
    description: string;
    chapters: number[];
    image: string;
    onDetail?: () => void;
    onEdit?: () => void;
    onDelete?: () => void;
};

export default function BookCard({
    title, description, chapters, image, onDetail, onEdit, onDelete,
}: Props) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | SVGSVGElement | null>(null);

    return (
        <div className="bg-[#2E3553] text-white rounded-xl p-4 shadow-lg w-full relative">
            {/* action buttons */}
            <div className="absolute top-2 right-2 flex gap-1 items-center">
                <Tooltip title="Chi tiết"><IconButton size="small" onClick={onDetail}><InfoOutlinedIcon className="text-white" fontSize="small" /></IconButton></Tooltip>
                <Tooltip title="Sửa"><IconButton size="small" onClick={onEdit}><CreateOutlinedIcon className="text-white" fontSize="small" /></IconButton></Tooltip>
                <Tooltip title="Xóa">
                    <IconButton size="small" onClick={(e) => setAnchorEl(e.currentTarget)}>
                        <DeleteOutlineOutlinedIcon className="text-white" fontSize="small" />
                    </IconButton>
                </Tooltip>
                <ClickAwayListener onClickAway={(ev) => { if (anchorEl?.contains(ev.target as Node)) return; setAnchorEl(null); }}>
                    <Popper open={Boolean(anchorEl)} anchorEl={anchorEl} placement="top" transition sx={{ zIndex: 1200 }}>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={200}>
                                <Paper sx={{ p: 2, minWidth: 260, borderRadius: 2 }}>
                                    <Typography sx={{ mb: 1.5 }}>Bạn có chắc muốn xóa sách này?</Typography>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                                        <Button size="small" variant="outlined" onClick={() => setAnchorEl(null)}>Hủy</Button>
                                        <Button size="small" color="error" variant="contained" onClick={() => { setAnchorEl(null); onDelete?.(); }}>Xóa</Button>
                                    </Box>
                                </Paper>
                            </Fade>
                        )}
                    </Popper>
                </ClickAwayListener>
                <Tooltip title="Yêu thích"><StarBorderPurple500OutlinedIcon className="opacity-90" /></Tooltip>
            </div>

            <div className="flex gap-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} alt={title} className="w-44 h-60 object-cover rounded" />
                <div className="flex-1">
                    <h3 className="text-2xl font-bold">{title}</h3>
                    <p className="opacity-80 my-2">{description}</p>
                    <p className="mb-2 text-xl font-semibold">Chương:</p>
                    <div className="flex flex-wrap gap-3">
                        {chapters.map((ch) => (
                            <span key={ch} className="px-4 py-2 text-sm border border-gray-500/60 rounded-lg hover:bg-[#3f4a7a]">
                                {ch}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
