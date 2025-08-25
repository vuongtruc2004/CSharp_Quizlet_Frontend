'use client';

import {
	Box, Button, ClickAwayListener, Fade, Paper, Popper, Slide, Snackbar,
	Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import React, { useState } from "react";
import { TransitionProps } from "@mui/material/transitions";
import type { BookResponse } from "../services/book.type";

const SlideTransition = (props: any) => <Slide {...props} direction="up" />;

export default function BookTable({
	books,
	onDetail,
	onEdit,
	onDelete,
}: {
	books: BookResponse[];
	onDetail: (b: BookResponse) => void;
	onEdit: (b: BookResponse) => void;
	onDelete: (b: BookResponse) => void;
}) {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | SVGSVGElement | null>(null);
	const [toDelete, setToDelete] = useState<BookResponse | null>(null);

	const [snack, setSnack] = useState<{ open: boolean; Transition: React.ComponentType<any> }>({
		open: false,
		Transition: Fade,
	});
	const closeSnack = () => setSnack((s) => ({ ...s, open: false }));

	return (
		<Box sx={{ mt: "10px" }}>
			<TableContainer component={Box}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell sx={{ textAlign: "center" }}>STT</TableCell>
							<TableCell sx={{ textAlign: "center" }}>Ảnh</TableCell>
							<TableCell sx={{ textAlign: "center" }}>Tên sách</TableCell>
							<TableCell sx={{ textAlign: "center" }}>Số chương</TableCell>
							<TableCell sx={{ textAlign: "center" }}>Hành động</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{books.map((row, index) => (
							<TableRow key={row.id}>
								<TableCell sx={{ textAlign: "center" }}>{index + 1}</TableCell>
								<TableCell sx={{ textAlign: "center" }}>
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img src={row.image || "/images/default-cover.jpg"} alt={row.title} className="w-12 h-16 object-cover rounded-md inline-block" />
								</TableCell>
								<TableCell sx={{ textAlign: "center" }}>{row.title}</TableCell>
								<TableCell sx={{ textAlign: "center" }}>{row.totalChapters}</TableCell>
								<TableCell sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
									<InfoOutlinedIcon style={{ cursor: "pointer" }} onClick={() => onDetail(row)} />
									<CreateOutlinedIcon style={{ cursor: "pointer" }} onClick={() => onEdit(row)} />
									<DeleteOutlineOutlinedIcon
										style={{ cursor: "pointer" }}
										onClick={(e) => {
											setAnchorEl(e.currentTarget);
											setToDelete(row);
										}}
									/>
									<ClickAwayListener
										onClickAway={(event) => {
											if (anchorEl && anchorEl.contains(event.target as Node)) return;
											setAnchorEl(null);
										}}
									>
										<Popper sx={{ zIndex: 1200 }} open={Boolean(anchorEl)} anchorEl={anchorEl} placement="top" transition>
											{({ TransitionProps }) => (
												<Fade {...TransitionProps} timeout={350}>
													<Paper sx={{ p: 2, minWidth: 280, borderRadius: 2 }}>
														<Typography sx={{ mb: 2 }}>Bạn có chắc muốn xóa không?</Typography>
														<Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
															<Button variant="outlined" size="small" sx={{ borderRadius: 2 }} onClick={() => setAnchorEl(null)}>
																Hủy
															</Button>
															<Button
																variant="contained"
																color="error"
																size="small"
																sx={{ borderRadius: 2 }}
																onClick={() => {
																	setAnchorEl(null);
																	if (toDelete) onDelete(toDelete);
																	setSnack({ open: true, Transition: SlideTransition });
																}}
															>
																Xóa
															</Button>
														</Box>
													</Paper>
												</Fade>
											)}
										</Popper>
									</ClickAwayListener>
									<StarBorderPurple500OutlinedIcon style={{ cursor: "pointer" }} />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			<Snackbar
				open={snack.open}
				onClose={closeSnack}
				slots={{ transition: snack.Transition as any }}
				message="Xóa sách thành công!"
				key={(snack.Transition as any).name}
				autoHideDuration={1200}
			/>
		</Box>
	);
}
