import { Box, Grid, Pagination } from "@mui/material";
import React from "react";
import SingleKanjiPage from "./single.kanji";

const KanjiPage = ({
  kanjiData,
}: {
  kanjiData?: { kanji: string; meaning: string; reading: string }[];
}) => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          width: "full",
          paddingTop: "40px",
        }}
      >
        {kanjiData?.map((item, index) => (
          <SingleKanjiPage key={index} dataKanji={item} index={index} />
        ))}
      </Grid>
    </>
  );
};

export default KanjiPage;
