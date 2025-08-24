'use client';
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function BookUpdate({
	open, setOpen, book, onSubmit,
}: {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	book?: { id: string; title: string; description: string; totalChapters: number; image?: string };
	onSubmit: (p: { title: string; description: string; totalChapters: number; image?: string }) => void;
}) {
	const [f, setF] = useState({ title: "", description: "", totalChapters: 1, image: "" });
	useEffect(() => {
		if (open && book) setF({ title: book.title, description: book.description, totalChapters: book.totalChapters, image: book.image || "" });
	}, [open, book]);

	const close = () => setOpen(false);
	const up = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement>) =>
		setF((p) => ({ ...p, [k]: k === "totalChapters" ? Number(e.target.value) || 1 : e.target.value }));

	return (
		<Modal open={open} onClose={close}>
			<Box sx={{
				position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
				width: "60%", maxHeight: "80vh", overflowY: "auto", bgcolor: "var(--color-gray-200-gray-700)", borderRadius: 2
			}}>
				<form onSubmit={(e) => { e.preventDefault(); onSubmit(f); close(); }}>
					<Box sx={{ display: "flex", flexDirection: "column", gap: 3, p: 3, minWidth: 400, m: 5 }}>
						<Typography variant="h6" align="center" fontWeight="bold">CHỈNH SỬA SÁCH</Typography>
						<TextField label="Tên sách *" value={f.title} onChange={up("title")} required />
						<TextField label="Mô tả *" value={f.description} onChange={up("description")} required multiline rows={3} />
						<TextField label="Số chương *" type="number" inputProps={{ min: 1 }} value={f.totalChapters} onChange={up("totalChapters")} required />
						<TextField label="Ảnh bìa (URL)" value={f.image} onChange={up("image")} />
						<div className="flex gap-4 justify-end">
							<Button variant="outlined" onClick={close}>Hủy</Button>
							<Button type="submit" variant="contained" disabled={!f.title || !f.description}>Lưu</Button>
						</div>
					</Box>
				</form>
			</Box>
		</Modal>
	);
}
