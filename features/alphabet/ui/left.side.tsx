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

const LeftSide = ({
  voicedMap,
  notVoicedMap,
  yoonMap,
}: {
  voicedMap?: Map<string, string> | null;
  notVoicedMap?: Map<string, string> | null;
  yoonMap?: Map<string, string> | null;
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState<string[]>([]);
  return (
    <Box sx={{ flex: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {voicedMap &&
          Array.from(notVoicedMap!.entries()).flatMap(([key, value], index) => {
            const indentChars = [
              "ゆ",
              "よ",
              "を",
              "ん",
              "ユ",
              "ヨ",
              "ヲ",
              "ン",
            ];
            const elements = [];

            if (indentChars.includes(key)) {
              elements.push(
                // @ts-ignore
                <Grid item xs={2} key={`spacer-${index}`}>
                  <Card
                    sx={{
                      minHeight: 70,
                      minWidth: 70,
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      border: "none",
                    }}
                  />
                </Grid>
              );
            }

            elements.push(
              // @ts-ignore
              <Grid item xs={2} key={index}>
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
                    setData([key, value]);
                  }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography align="center" variant="h4">
                        {key}
                      </Typography>
                      <Typography align="center" variant="body2">
                        {value}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );

            return elements;
          })}
      </Grid>
      <ModalDetail
        openModal={openModal}
        setOpenModal={setOpenModal}
        data={data}
      />
    </Box>
  );
};

export default LeftSide;
