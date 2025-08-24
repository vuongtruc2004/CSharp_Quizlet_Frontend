"use client";
import {
  Box,
  Button,
  Fade,
  Paper,
  Popper,
  Slide,
  SlideProps,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
import { useRouter } from "next/navigation";
import VocabularyDetail from "./vocabulary.detail";
import VocabularyUpdate from "./vocabulary.update";
import { sendRequest } from "@/utils/fetch.api";
import { TransitionProps } from "@mui/material/transitions";

const SlideTransition = (props: SlideProps) => (
  <Slide {...props} direction="up" />
);

const VocabularyTable = ({
  vocabularies,
  lessons,
}: {
  vocabularies: VocabularyResponse[];
  lessons: LessonResponse[];
}) => {
  const router = useRouter();
  const [openDetail, setOpenDetail] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [currentVocabulary, setCurrentVocabulary] =
    useState<VocabularyResponse>();
  const [deleteTarget, setDeleteTarget] = useState<{
    id: number;
    anchor: HTMLElement | SVGElement | null;
  } | null>({
    id: 0,
    anchor: null,
  });

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    Transition: React.ComponentType<
      TransitionProps & { children: React.ReactElement<any, any> }
    >;
  }>({
    open: false,
    message: "",
    Transition: Fade,
  });

  const handleSnackbar = (message: string, Transition = SlideTransition) => {
    setSnackbar({ open: true, message, Transition });
  };

  const handleCloseSnackbar = () => setSnackbar({ ...snackbar, open: false });

  const markVocabulary = async (vocabularyId: number) => {
    const res = await sendRequest<ApiResponse<any>>({
      url: `/v1/vocabularies/mark/${vocabularyId}`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    });
    if (res.statusCode === 200) router.refresh();
  };

  const deleteVocabulary = async (vocabularyId: number) => {
    const res = await sendRequest<ApiResponse<any>>({
      url: `/v1/vocabularies/${vocabularyId}`,
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    handleSnackbar(res.userMessage ?? "");
    setDeleteTarget(null);
    router.refresh();
  };

  return (
    <Box sx={{ marginTop: "10px" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">STT</TableCell>
              <TableCell align="center">Kanji</TableCell>
              <TableCell align="center">Tiếng Nhật</TableCell>
              <TableCell align="center">Nghĩa</TableCell>
              <TableCell align="center">Hành Động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vocabularies?.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">
                  {row.kanji?.trim() ? row.kanji : "-"}
                </TableCell>
                <TableCell align="center">{row.japanese}</TableCell>
                <TableCell align="center">{row.vietnamese}</TableCell>
                <TableCell
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Tooltip title="Xem chi tiết" arrow>
                    <InfoOutlinedIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setCurrentVocabulary(row);
                        setOpenDetail(true);
                      }}
                    />
                  </Tooltip>
                  <Tooltip title="Cập nhật" arrow>
                    <CreateOutlinedIcon
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setOpenUpdate(true);
                        setCurrentVocabulary(row);
                      }}
                    />
                  </Tooltip>
                  <Tooltip title="Xóa" arrow>
                    <DeleteOutlineOutlinedIcon
                      style={{ cursor: "pointer" }}
                      onClick={(e) =>
                        setDeleteTarget({ id: row.id, anchor: e.currentTarget })
                      }
                    />
                  </Tooltip>
                  <Popper
                    sx={{ zIndex: 1200 }}
                    open={deleteTarget?.id === row.id}
                    anchorEl={deleteTarget?.anchor}
                    placement="top"
                    transition
                  >
                    {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={350}>
                        <Paper sx={{ p: 2, minWidth: 280, borderRadius: 2 }}>
                          <Typography sx={{ mb: 2 }}>
                            Bạn có chắc muốn xóa không?
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-end",
                              gap: 1,
                            }}
                          >
                            <Button
                              variant="outlined"
                              size="small"
                              sx={{ borderRadius: 2 }}
                              onClick={() => setDeleteTarget(null)}
                            >
                              Hủy
                            </Button>
                            <Button
                              variant="contained"
                              color="error"
                              size="small"
                              sx={{ borderRadius: 2 }}
                              onClick={() => deleteVocabulary(row.id)}
                            >
                              Xóa
                            </Button>
                          </Box>
                        </Paper>
                      </Fade>
                    )}
                  </Popper>
                  <Tooltip title="Đánh sao" arrow>
                    {!row.isMarked ? (
                      <StarBorderPurple500OutlinedIcon
                        className="cursor-pointer"
                        onClick={() => markVocabulary(row.id)}
                      />
                    ) : (
                      <StarIcon
                        className="cursor-pointer text-yellow-400"
                        onClick={() => markVocabulary(row.id)}
                      />
                    )}
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <VocabularyDetail
        openDetail={openDetail}
        setOpenDetail={setOpenDetail}
        vocabulary={currentVocabulary}
      />
      <VocabularyUpdate
        openCreate={openUpdate}
        setOpenCreate={setOpenUpdate}
        vocabulary={currentVocabulary}
        lessons={lessons}
      />

      <Snackbar
        open={snackbar.open}
        onClose={handleCloseSnackbar}
        slots={{ transition: snackbar.Transition }}
        message={snackbar.message}
        key={snackbar.Transition.name}
        autoHideDuration={1200}
      />
    </Box>
  );
};

export default VocabularyTable;
