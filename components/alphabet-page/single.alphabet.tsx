import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

const cardsLeft = [...Array(10)].map((_, i) => ({
  title: `A${i + 1}`,
  description: `Left ${i + 1}`,
}));
const cardsRight = [...Array(10)].map((_, i) => ({
  title: `B${i + 1}`,
  description: `Right ${i + 1}`,
}));

const SingleAlphabet = () => {
  return (
    <Box
      sx={{
        width: "65vw",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "40px",
      }}
    >
      {/* Bên trái */}
      <Box sx={{ flex: 1 }}>
        <Grid container spacing={2}>
          {cardsLeft.map((card, index) => (
            //@ts-ignore
            <Grid item xs={2.4} key={index}>
              <Card
                sx={{
                  aspectRatio: "1 / 1",
                  backgroundColor: "white",
                  border: "2px solid var(--color-gray-100-twilight-500)",
                  color: "black",
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography align="center" variant="h6">
                      {card.title}
                    </Typography>
                    <Typography align="center" variant="body2">
                      {card.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Bên phải */}
      <Box sx={{ flex: 1 }}>
        <Grid container spacing={2}>
          {cardsRight.map((card, index) => (
            //@ts-ignore
            <Grid item xs={2.4} key={index}>
              <Card
                sx={{
                  aspectRatio: "1 / 1",
                  backgroundColor: "white",
                  border: "2px solid var(--color-gray-100-twilight-500)",
                  color: "black",
                }}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography align="center" variant="h6">
                      {card.title}
                    </Typography>
                    <Typography align="center" variant="body2">
                      {card.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SingleAlphabet;
