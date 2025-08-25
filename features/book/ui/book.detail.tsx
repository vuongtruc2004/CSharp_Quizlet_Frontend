'use client';
import { Box, Divider, Drawer, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { Dispatch, SetStateAction } from "react";

export default function BookDetail({
	openDetail, setOpenDetail, book,
}: {
	openDetail: boolean;
	setOpenDetail: Dispatch<SetStateAction<boolean>>;
	book?: { title: string; description: string; totalChapters: number; image?: string };
}) {
	return (
		<Drawer anchor="right" open={openDetail} onClose={() => setOpenDetail(false)}>
			<Box sx={{ width: "50vw", height: "100vh", bgcolor: "var(--color-gray-200-gray-700)", p: "30px" }}>
				<div className="relative flex items-center mb-4">
					<CloseIcon onClick={() => setOpenDetail(false)} className="cursor-pointer" />
					<Typography variant="h4" fontWeight="bold" className="absolute left-1/2 -translate-x-1/2">
						CHI TIẾT SÁCH
					</Typography>
				</div>
				<Stack spacing={3}>
					<Divider />
					<Box
						sx={{
							display: "grid", gridTemplateColumns: "150px 1fr", rowGap: 2, columnGap: 2,
							bgcolor: "var(--color-gray-100-gray-800)", p: 3, borderRadius: "16px", boxShadow: 3,
						}}
					>
						<Typography fontWeight="bold">Bìa:</Typography>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={book?.image || "/images/default-cover.jpg"} alt="cover" className="w-20 h-28 object-cover rounded" />
						<Typography fontWeight="bold">Tiêu đề:</Typography>
						<Typography>{book?.title ?? "-"}</Typography>
						<Typography fontWeight="bold">Mô tả:</Typography>
						<Typography>{book?.description ?? "-"}</Typography>
						<Typography fontWeight="bold">Số chương:</Typography>
						<Typography>{book?.totalChapters ?? "-"}</Typography>
					</Box>
				</Stack>
			</Box>
		</Drawer>
	);
}
