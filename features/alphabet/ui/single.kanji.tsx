import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ModalDetail from "./modal.detail";

const SingleKanjiPage = ({
  dataKanji,
  index,
}: {
  dataKanji?: { kanji: string; meaning: string; reading: string };
  index: any;
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [fullData, setFullData] = useState<KanjiItem | null>(null);

  return (
    <>
      {/* @ts-ignore */}
      <Grid item sx={{ width: "15%" }} key={index}>
        <Card
          sx={{
            minHeight: 70,
            minWidth: 70,
            backgroundColor: "white",
            border: "2px solid var(--color-gray-100-twilight-500)",
            color: "black",
          }}
          onClick={() => {
            setOpenModal(true);
            setFullData(dataKanji ?? null);
          }}
        >
          <CardActionArea>
            <CardContent>
              <Typography align="center" variant="h4">
                {dataKanji?.kanji}
              </Typography>
              <Typography align="center" variant="body2">
                {dataKanji?.meaning}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      {dataKanji && (
        <ModalDetail
          openModal={openModal}
          setOpenModal={setOpenModal}
          data={dataKanji}
        />
      )}
    </>
  );
};

export default SingleKanjiPage;
