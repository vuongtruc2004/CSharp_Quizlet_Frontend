import {
  Box,
  Button,
  Grid,
  IconButton,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { vocabularyType } from "../services/vocabulary.type";

const VocabularyUpdate = ({
  openCreate,
  setOpenCreate,
}: // data,
{
  openCreate: boolean;
  setOpenCreate: Dispatch<SetStateAction<boolean>>;
  // data: T;
}) => {
  const handleClose = () => setOpenCreate(false);
  const [selectedValue, setSelectedValue] = React.useState("0");
  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);

    const selectedObj = vocabularyType.find(
      (item) => item.value === event.target.value
    );
  };
  return (
    <Modal
      open={openCreate}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "60%",
          maxHeight: "80vh",
          overflowY: "auto",
          transform: "translate(-50%, -50%)",
          backgroundColor: "var(--color-gray-200-gray-700)",
          borderRadius: 2,
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              p: 3,
              minWidth: 400,
              margin: 5,
            }}
          >
            <Typography variant="h6" align="center" fontWeight="bold">
              CHỈNH SỬA TỪ VỰNG
            </Typography>

            <div className="flex gap-4">
              <TextField
                label="Tiếng Nhật"
                variant="outlined"
                className="w-[50%]"
              />
              <TextField
                label="Tiếng Việt"
                variant="outlined"
                className="w-[50%]"
              />
            </div>

            <div className="flex gap-4">
              <TextField
                label="Chữ Hán"
                variant="outlined"
                className="w-[50%]"
              />
              <TextField
                label="Hán Việt"
                variant="outlined"
                className="w-[50%]"
              />
            </div>

            <TextField select fullWidth label="Loại từ vựng" variant="filled">
              {vocabularyType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.key}
                </MenuItem>
              ))}
            </TextField>

            <TextField select fullWidth label="Bài học" variant="filled">
              {vocabularyType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.key}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              label="Ghi chú"
              variant="outlined"
              multiline
              rows={3}
            />
            <div className="flex gap-4 justify-end">
              <Button variant="outlined" onClick={handleClose}>
                Hủy
              </Button>
              <Button variant="contained">Tạo</Button>
            </div>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default VocabularyUpdate;
