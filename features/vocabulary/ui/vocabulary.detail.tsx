import { Box, Divider, Drawer, Stack, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { vocabularyType } from "../services/vocabulary.type";

const VocabularyDetail = ({
  openDetail,
  setOpenDetail,
  vocabulary,
}: {
  openDetail: boolean;
  setOpenDetail: Dispatch<SetStateAction<boolean>>;
  vocabulary: VocabularyResponse | undefined;
}) => {
  return (
    <Box>
      <Drawer
        anchor="right"
        open={openDetail}
        onClose={() => setOpenDetail(false)}
      >
        <Box
          sx={{
            width: "50vw",
            height: "100vh",
            bgcolor: "var(--color-gray-200-gray-700)",
            padding: "30px",
          }}
          role="presentation"
        >
          <div className="relative flex items-center mb-4">
            <CloseIcon
              onClick={() => setOpenDetail(false)}
              className="cursor-pointer"
            />
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              margin={0}
              className="absolute left-1/2 -translate-x-1/2"
            >
              CHI TIẾT TỪ VỰNG
            </Typography>
          </div>

          <Stack spacing={3}>
            <Divider />

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "150px 1fr",
                rowGap: 2,
                columnGap: 2,
                bgcolor: "var(--color-gray-100-gray-800)",
                p: 3,
                borderRadius: "16px",
                boxShadow: 3,
              }}
            >
              <Typography fontWeight="bold">Id:</Typography>
              <Typography>{vocabulary?.id ?? "-"}</Typography>

              <Typography fontWeight="bold">Tiếng Nhật:</Typography>
              <Typography>{vocabulary?.japanese}</Typography>

              <Typography fontWeight="bold">Tiếng Việt:</Typography>
              <Typography>{vocabulary?.vietnamese}</Typography>

              <Typography fontWeight="bold">Kanji:</Typography>
              <Typography>
                {vocabulary?.kanji?.trim() ? vocabulary.kanji : "-"}
              </Typography>

              <Typography fontWeight="bold">Âm Hán-Việt:</Typography>
              <Typography>
                {vocabulary?.sinoVietnamese?.trim()
                  ? vocabulary.sinoVietnamese
                  : "-"}
              </Typography>

              <Typography fontWeight="bold">Loại từ:</Typography>
              <Typography>
                {vocabularyType.find(
                  (item) => item.value === String(vocabulary?.vocabularyType)
                )?.key ?? "Khác"}
              </Typography>
              <Typography fontWeight="bold">Ghi chú:</Typography>
              <Typography>
                {vocabulary?.note?.trim() ? vocabulary.note : "-"}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
};

export default VocabularyDetail;
