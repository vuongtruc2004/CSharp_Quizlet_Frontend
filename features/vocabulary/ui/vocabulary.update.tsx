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
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { vocabularyType } from "../services/vocabulary.type";
import { sendRequest } from "@/utils/fetch.api";
import { TransitionProps } from "@mui/material/transitions";
import { useRouter } from "next/navigation";

const SlideTransition = (props: any) => <Slide {...props} direction="up" />;

const VocabularyUpdate = ({
  openCreate,
  setOpenCreate,
  vocabulary,
  lessons,
}: {
  openCreate: boolean;
  setOpenCreate: Dispatch<SetStateAction<boolean>>;
  vocabulary: VocabularyResponse | undefined;
  lessons: LessonResponse[];
}) => {
  const router = useRouter();
  const handleClose = () => setOpenCreate(false);
  const [id, setId] = useState<number | undefined>(undefined);
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
  useEffect(() => {
    if (vocabulary) {
      setId(vocabulary.id ?? null);
      setJapanese(vocabulary.japanese ?? "");
      setVietnamese(vocabulary.vietnamese ?? "");
      setKanji(vocabulary.kanji ?? "");
      setSinoVietnamese(vocabulary.sinoVietnamese ?? "");
      setNote(vocabulary.note ?? "");
      setLessonId(vocabulary.lessonNumber ?? null);
      setSelectedValue(vocabulary.vocabularyType?.toString() ?? "0");
      setChecked(vocabulary.isMarked ?? false);
    }
  }, [vocabulary]);

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

  const validate = () => {
    const newErrors = {
      japanese: japanese.trim() === "",
      vietnamese: vietnamese.trim() === "",
      selectedValue: selectedValue.trim() === "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSnackbar = (message: string) => {
    setSnackbar({ open: true, message, Transition: SlideTransition });
  };

  const updateVocabulary = async () => {
    if (!validate()) return;

    const vocabularyRequest: VocabularyRequest<number> = {
      id,
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
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: vocabularyRequest,
    });

    console.log("Res2 ", res);

    handleSnackbar(res.userMessage ?? "Cập nhật từ vựng thành công!");
    router.refresh();
    resetForm();
  };
  return (
    <>
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
                required
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
                variant="outlined"
                className="w-[50%]"
                required
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
                variant="outlined"
                className="w-[50%]"
                value={kanji}
                onChange={(e) => setKanji(e.target.value)}
              />
              <TextField
                label="Hán Việt"
                variant="outlined"
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
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
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
                <MenuItem key={option.id} value={option.id}>
                  {`Bài: ${option.lessonNumber} - Chương: ${option.chapterId}`}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              label="Ghi chú"
              variant="outlined"
              value={note}
              multiline
              rows={3}
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
              <Button variant="outlined" onClick={handleClose}>
                Hủy
              </Button>
              <Button onClick={updateVocabulary} variant="contained">
                Cập nhật
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

export default VocabularyUpdate;
