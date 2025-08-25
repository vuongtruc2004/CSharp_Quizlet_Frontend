"use client";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import {
  hiraganaNotVoicedSet,
  hiraganaVoicedSet,
  hiraganaYoonMap,
  katakanaNotVoicedMap,
  katakanaVoicedMap,
  katakanaYoonMap,
} from "../services/set.alphabet";
import { kanjiList } from "../services/kanji.data";
import SingleAlphabet from "./single.alphabet";
import KanjiPage from "./kanji";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} {...other}>
      {value === index && children}
    </div>
  );
}

export default function AlphabetTab({
  kanjies,
}: {
  kanjies: VocabularyResponse[];
}) {
  const [value, setValue] = useState(0);
  const [voicedMap, setVoicedMap] = useState<Map<string, string> | null>();
  const [notVoicedMap, setNotVoicedMap] = useState<Map<
    string,
    string
  > | null>();
  const [yoonMap, setYoonMap] = useState<Map<string, string> | null>();
  const [kanjiData, setKanjiData] = useState<
    { kanji: string; meaning: string; reading: string }[]
  >([]);

  useEffect(() => {
    switch (value) {
      case 0:
        setNotVoicedMap(hiraganaNotVoicedSet);
        setVoicedMap(hiraganaVoicedSet);
        setYoonMap(hiraganaYoonMap);
        break;
      case 1:
        setNotVoicedMap(katakanaNotVoicedMap);
        setVoicedMap(katakanaVoicedMap);
        setYoonMap(katakanaYoonMap);
        break;
      case 2:
        setKanjiData(kanjiList);
        break;
    }
  }, [value]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="pl-4.5">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Hiragana" />
          <Tab label="Katakana" />
          <Tab label="Kanji" />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <SingleAlphabet
          voicedMap={voicedMap}
          notVoicedMap={notVoicedMap}
          yoonMap={yoonMap}
        />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <SingleAlphabet
          voicedMap={voicedMap}
          notVoicedMap={notVoicedMap}
          yoonMap={yoonMap}
        />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <KanjiPage kanjies={kanjies} />
      </CustomTabPanel>
    </div>
  );
}
