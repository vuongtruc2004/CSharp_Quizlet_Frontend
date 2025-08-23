import { Box, Divider, Drawer, Stack, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import CloseIcon from "@mui/icons-material/Close";

const VocabularyDetail = ({
  openDetail,
  setOpenDetail,
}: // data,
{
  openDetail: boolean;
  setOpenDetail: Dispatch<SetStateAction<boolean>>;
  // data: T;
}) => {
  console.log("SAO");
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

          {/* {vocabulary ? ( */}
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
              <Typography>{/* {vocabulary.id ?? "-"} */}1</Typography>

              <Typography fontWeight="bold">Kanji:</Typography>
              <Typography>
                {/* {vocabulary.kanji ?? "-"} */}
                学校
              </Typography>

              <Typography fontWeight="bold">Tiếng Nhật:</Typography>
              <Typography>
                {/* {vocabulary.japanese} */}
                がっこう
              </Typography>

              <Typography fontWeight="bold">Tiếng Việt:</Typography>
              <Typography>
                {/* {vocabulary.vietnamese} */}
                Trường học
              </Typography>

              <Typography fontWeight="bold">Âm Hán-Việt:</Typography>
              <Typography>
                {/* {vocabulary.sinoVietnamese ?? "-"} */}
                Học hiệu
              </Typography>

              <Typography fontWeight="bold">Loại từ:</Typography>
              <Typography>
                {/* {vocabulary.vocabularyType} */}
                Danh từ
              </Typography>

              <Typography fontWeight="bold">Ghi chú:</Typography>
              <Typography>
                {/* {vocabulary.note ?? "-"} */}
                Thường dùng trong văn nói và văn viết
              </Typography>
            </Box>
          </Stack>
          {/* ) : (
        <Typography align="center">Không có dữ liệu</Typography>
      )} */}
        </Box>
      </Drawer>
    </Box>
  );
};

export default VocabularyDetail;
