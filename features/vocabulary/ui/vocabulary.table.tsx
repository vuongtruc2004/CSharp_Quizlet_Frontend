"use client";
import {
  Box,
  Button,
  ClickAwayListener,
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
  Typography,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import { useState } from "react";
import VocabularyDetail from "./vocabulary.detail";
import { TransitionProps } from "@mui/material/transitions";
import VocabularyUpdate from "./vocabulary.update";

const SlideTransition = (props: SlideProps) => {
  return <Slide {...props} direction="up" />;
};

const VocabularyTable = ({ vocabularies }: { vocabularies: IVocabulary[] }) => {
  const [openDetail, setOpenDetail] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | SVGSVGElement | null>(
    null
  );
  const [state, setState] = useState<{
    open: boolean;
    Transition: React.ComponentType<
      TransitionProps & {
        children: React.ReactElement<any, any>;
      }
    >;
  }>({
    open: false,
    Transition: Fade,
  });

  const handleClick =
    (
      Transition: React.ComponentType<
        TransitionProps & {
          children: React.ReactElement<any, any>;
        }
      >
    ) =>
    () => {
      setState({
        open: true,
        Transition,
      });
    };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <Box sx={{ marginTop: "10px" }}>
      <TableContainer component={Box}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ textAlign: "center" }}>STT</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Kanji</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Tiếng Nhật</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Nghĩa</TableCell>
              <TableCell sx={{ textAlign: "center" }}>Hành Động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vocabularies.map((row) => (
              <TableRow key={row.id}>
                <TableCell sx={{ textAlign: "center" }}>{row.id}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>{row.kanji}</TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {row.japanese}
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  {row.meaning}
                </TableCell>
                <TableCell
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <InfoOutlinedIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => setOpenDetail(true)}
                  />
                  <CreateOutlinedIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => setOpenUpdate(true)}
                  />

                  <DeleteOutlineOutlinedIcon
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                    style={{ cursor: "pointer" }}
                  />
                  <ClickAwayListener
                    onClickAway={(event) => {
                      if (anchorEl && anchorEl.contains(event.target as Node)) {
                        return;
                      }
                      setAnchorEl(null);
                    }}
                  >
                    <Popper
                      sx={{ zIndex: 1200 }}
                      open={Boolean(anchorEl)}
                      anchorEl={anchorEl}
                      placement="top"
                      transition
                    >
                      {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                          <Paper
                            sx={{
                              p: 2,
                              minWidth: 280, // khung rộng ra
                              borderRadius: 2, // bo góc (theme spacing = 8px * 2 = 16px)
                            }}
                          >
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
                                onClick={() => setAnchorEl(null)}
                              >
                                Hủy
                              </Button>
                              <Button
                                variant="contained"
                                color="error"
                                size="small"
                                sx={{ borderRadius: 2 }}
                                onClick={() => {
                                  setAnchorEl(null);
                                  handleClick(SlideTransition)();
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

                  <StarBorderPurple500OutlinedIcon
                    style={{ cursor: "pointer" }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <VocabularyDetail openDetail={openDetail} setOpenDetail={setOpenDetail} />
      <VocabularyUpdate openCreate={openUpdate} setOpenCreate={setOpenUpdate} />

      <Snackbar
        open={state.open}
        onClose={handleClose}
        slots={{ transition: state.Transition }}
        message="Delete vocabulary succesfully!"
        key={state.Transition.name}
        autoHideDuration={1200}
      />
    </Box>
  );
};

export default VocabularyTable;
