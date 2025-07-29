import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const LeftSide = ({
  voicedMap,
  notVoicedMap,
  yoonMap,
}: {
  voicedMap?: Map<string, string> | null;
  notVoicedMap?: Map<string, string> | null;
  yoonMap?: Map<string, string> | null;
}) => {
  return (
    <Box sx={{ flex: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {voicedMap &&
          Array.from(notVoicedMap!.entries()).flatMap(([key, value], index) => {
            const indentChars = ["ゆ", "よ", "を", "ん"];
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
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography align="center" variant="h6">
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
    </Box>
  );
};

export default LeftSide;
