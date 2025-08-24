import {
  Box,
  Button,
  MenuItem,
  Modal,
  Slide,
  Snackbar,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import { vocabularyType } from "../services/vocabulary.type";
import { sendRequest } from "@/utils/fetch.api";
import { useRouter } from "next/navigation";
import { TransitionProps } from "@mui/material/transitions";

const SlideTransition = (props: any) => <Slide {...props} direction="up" />;

const VocabularyCreate = ({
  openCreate,
  setOpenCreate,
  lessons,
}: {
  openCreate: boolean;
  setOpenCreate: Dispatch<SetStateAction<boolean>>;
  lessons: LessonResponse[];
}) => {
  const router = useRouter();

  const [japanese, setJapanese] = useState("");
  const [vietnamese, setVietnamese] = useState("");
  const [kanji, setKanji] = useState("");
  const [sinoVietnamese, setSinoVietnamese] = useState("");
  const [note, setNote] = useState("");
  const [lessonId, setLessonId] = useState<number | null>(null);
  const [selectedValue, setSelectedValue] = useState("0");
  const [checked, setChecked] = useState(false);

  const [errors, setErrors] = useState({
    japanese: false,
    vietnamese: false,
    selectedValue: false,
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
    Transition: SlideTransition,
  });

  const resetForm = () => {
    setOpenCreate(false);
    setJapanese("");
    setVietnamese("");
    setKanji("");
    setSinoVietnamese("");
    setNote("");
    setLessonId(null);
    setSelectedValue("0");
    setChecked(false);
    setErrors({ japanese: false, vietnamese: false, selectedValue: false });
  };

  const handleSnackbar = (message: string) => {
    setSnackbar({ open: true, message, Transition: SlideTransition });
  };

  const validate = () => {
    const newErrors = {
      japanese: japanese.trim() === "",
      vietnamese: vietnamese.trim() === "",
      selectedValue: selectedValue.trim() === "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const createVocabulary = async () => {
    if (!validate()) return;

    const vocabularyRequest: VocabularyRequest<number> = {
      japanese,
      vietnamese,
      kanji,
      sinoVietnamese,
      vocabularyType: parseInt(selectedValue),
      note,
      lessonId,
      isMarked: checked,
    };

    const res = await sendRequest<ApiResponse<VocabularyResponse>>({
      url: `/v1/vocabularies`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: vocabularyRequest,
    });

    handleSnackbar(res.userMessage ?? "Tạo từ vựng thành công!");
    router.refresh();
    resetForm();
  };

  return (
    <>
      <Modal open={openCreate} onClose={resetForm}>
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
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
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
              TẠO TỪ VỰNG
            </Typography>

            <div className="flex gap-4">
              <TextField
                label="Tiếng Nhật"
                required
                className="w-[50%]"
                value={japanese}
                error={errors.japanese}
                helperText={
                  errors.japanese ? "Tiếng Nhật không được bỏ trống!" : ""
                }
                onChange={(e) => {
                  setJapanese(e.target.value);
                  if (e.target.value.trim() !== "")
                    setErrors({ ...errors, japanese: false });
                }}
              />
              <TextField
                label="Tiếng Việt"
                required
                className="w-[50%]"
                value={vietnamese}
                error={errors.vietnamese}
                helperText={
                  errors.vietnamese ? "Tiếng Việt không được bỏ trống!" : ""
                }
                onChange={(e) => {
                  setVietnamese(e.target.value);
                  if (e.target.value.trim() !== "")
                    setErrors({ ...errors, vietnamese: false });
                }}
              />
            </div>

            <div className="flex gap-4">
              <TextField
                label="Chữ Hán"
                className="w-[50%]"
                value={kanji}
                onChange={(e) => setKanji(e.target.value)}
              />
              <TextField
                label="Hán Việt"
                className="w-[50%]"
                value={sinoVietnamese}
                onChange={(e) => setSinoVietnamese(e.target.value)}
              />
            </div>

            <TextField
              select
              fullWidth
              label="Loại từ vựng"
              variant="filled"
              required
              value={selectedValue}
              error={errors.selectedValue}
              helperText={
                errors.selectedValue
                  ? "Trường thông tin này không được bỏ trống!"
                  : ""
              }
              onChange={(e) => {
                setSelectedValue(e.target.value);
                if (e.target.value.trim() !== "")
                  setErrors({ ...errors, selectedValue: false });
              }}
            >
              {vocabularyType.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.key}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              select
              fullWidth
              label="Bài học"
              variant="filled"
              value={lessonId ?? ""}
              onChange={(e) => setLessonId(Number(e.target.value))}
            >
              {lessons.map((option) => (
                <MenuItem key={option.lessonNumber} value={option.id}>
                  {`Bài: ${option.lessonNumber} - Chương: ${option.chapterId}`}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              label="Ghi chú"
              multiline
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />

            <div className="flex items-center">
              <Typography variant="subtitle2">Đánh dấu</Typography>
              <Switch
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />
            </div>

            <div className="flex gap-4 justify-end">
              <Button variant="outlined" onClick={resetForm}>
                Hủy
              </Button>
              <Button onClick={createVocabulary} variant="contained">
                Tạo
              </Button>
            </div>
          </Box>
        </Box>
      </Modal>

      <Snackbar
        open={snackbar.open}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        slots={{ transition: snackbar.Transition }}
        message={snackbar.message}
        key={snackbar.Transition.name}
        autoHideDuration={1200}
      />
    </>
  );
};

export default VocabularyCreate;
