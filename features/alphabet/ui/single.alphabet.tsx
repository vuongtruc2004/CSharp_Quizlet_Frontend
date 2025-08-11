import { Box } from "@mui/material";
import LeftSide from "./left.side";
import RightSide from "./right.side";

const SingleAlphabet = ({
  voicedMap,
  notVoicedMap,
  yoonMap,
}: {
  voicedMap?: Map<string, string> | null;
  notVoicedMap?: Map<string, string> | null;
  yoonMap?: Map<string, string> | null;
}) => {
  const indentChars = ["ゆ", "よ", "わ", "を", "ん"];
  return (
    <Box
      sx={{
        width: "full",
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "40px",
      }}
    >
      <LeftSide
        voicedMap={voicedMap}
        notVoicedMap={notVoicedMap}
        yoonMap={yoonMap}
      />
      <RightSide
        voicedMap={voicedMap}
        notVoicedMap={notVoicedMap}
        yoonMap={yoonMap}
      />
    </Box>
  );
};

export default SingleAlphabet;
