"use client";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { typeAlphabet } from "../services/type.alphabet";
import { useAlphabet } from "@/wrapper/alphabet/alphabet-wrapper";
import SingleAlphabet from "./single.alphabet";
import {
  hiraganaNotVoicedSet,
  hiraganaVoicedSet,
  hiraganaYoonMap,
  katakanaNotVoicedMap,
  katakanaVoicedMap,
  katakanaYoonMap,
} from "../services/set.alphabet";

const AlphabetTab = () => {
  const { setSelectedTab, loading, selectedTab } = useAlphabet();
  const [voicedMap, setVoicedMap] = useState<Map<string, string> | null>();
  const [notVoicedMap, setNotVoicedMap] = useState<Map<
    string,
    string
  > | null>();
  const [yoonMap, setYoonMap] = useState<Map<string, string> | null>();

  useEffect(() => {
    switch (selectedTab) {
      case "HIRAGANA":
        setNotVoicedMap(hiraganaNotVoicedSet);
        setVoicedMap(hiraganaVoicedSet);
        setYoonMap(hiraganaYoonMap);
        break;
      case "KATAKANA":
        setNotVoicedMap(katakanaNotVoicedMap);
        setVoicedMap(katakanaVoicedMap);
        setYoonMap(katakanaYoonMap);
        break;
      case "KANJI":
        setNotVoicedMap(null);
        setVoicedMap(null);
        setYoonMap(null);
        break;
      default:
        setNotVoicedMap(null);
        setVoicedMap(null);
        setYoonMap(null);
    }
  }, [selectedTab]);

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          columnGap: "12px",
          bgcolor: "var(--color-gray-100-twilight-500)",
          paddingTop: "10px",
          borderTopLeftRadius: "6px",
          borderTopRightRadius: "6px",
          width: "70vw",
          height: "70px",
          div: {
            "&.active": {
              bgcolor: "var(--color-gray-800-gray-200)",
              color: "var(--color-gray-100-twilight-500)",
              border: "2px solid var(--color-gray-100-twilight-500)",
              borderBottom: "none",
              fontWeight: "1000",
              height: "86px",
              marginBottom: "25px",
            },
            ":not(.active)": {
              height: "100%",
              bgcolor: "var(--color-twilight-500-twilight-300)",
              color: "black",
              border: "1px solid black",
              fontWeight: "500",
            },
            ":not(.active):hover": {
              color: "var(--color-gray-800-gray-200)",
            },
          },
        }}
      >
        {typeAlphabet.map((item) => {
          return (
            <div
              className={`transition-all duration-300 py-1.5 px-5 rounded-tl-2xl rounded-tr-2xl cursor-pointer 
                ${
                  selectedTab === item.en
                    ? "active bg-[var(--color-gray-100-twilight-500)]"
                    : "bg-[var(--color-gray-300-gray-600)] hover:text-[var(--color-gray-800-gray-200)]"
                } 
                h-full text-center w-[300px] text-lg ml-2.5 flex items-center justify-center`}
              key={item.key}
              onClick={() => setSelectedTab(item.en)}
            >
              {item.en}
            </div>
          );
        })}
      </Box>
      <div
        className=" bg-white "
        style={{ height: "auto", paddingBottom: "50px" }}
      >
        <SingleAlphabet
          voicedMap={voicedMap}
          notVoicedMap={notVoicedMap}
          yoonMap={yoonMap}
        />
      </div>
    </div>
  );
};

export default AlphabetTab;
