import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const RightSide = ({
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
          Array.from(voicedMap.entries()).map(([key, value], index) => (
            //@ts-ignore
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
          ))}

        <Grid container spacing={2} justifyContent="center">
          {yoonMap &&
            Array.from(yoonMap.entries()).map(([key, value], index) => (
              // @ts-ignore
              <Grid item xs={3} key={index}>
                <Card
                  sx={{
                    minHeight: 80,
                    minWidth: 128,
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
            ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default RightSide;
