import { Box, IconButton, Modal, Typography } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import CloseIcon from "@mui/icons-material/Close";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { speakText } from "../services/make.sound";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";

const ModalDetail = <T extends string[] | KanjiItem>({
  openModal,
  setOpenModal,
  data,
}: {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  data: T;
}) => {
  const handleClose = () => setOpenModal(false);
  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: -16,
            right: -16,
            backgroundColor: "black",
            "&:hover": {
              backgroundColor: "var(--color-gray-800-gray-400)",
            },
            borderRadius: "50%",
            border: "2px solid var(--color-gray-800-gray-400)",
            width: 32,
            height: 32,
            zIndex: 1,
          }}
          size="small"
        >
          <CloseIcon fontSize="small" />
        </IconButton>

        <Box
          sx={{
            width: 500,
            height: 400,
            border: "2px solid var(--color-gray-100-twilight-500)",
            backgroundColor: "var(--color-gray-800-gray-200)",
            color: "black",
            boxShadow: 24,
            p: 2,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              flex: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontSize: "220px", fontWeight: "bold" }}>
              {Array.isArray(data) ? data[0] : data.kanji}
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Typography sx={{ fontSize: "30px" }}>
              {Array.isArray(data) ? data[1] : data.meaning}
              <SettingsEthernetIcon
                sx={{
                  color: "var(--color-gray-100-twilight-500)",
                  margin: "10px",
                }}
              />
              {Array.isArray(data) ? null : data.reading}
            </Typography>

            <Typography
              onClick={() =>
                speakText(Array.isArray(data) ? data[0] : data.reading)
              }
              sx={{
                fontSize: "30px",
                position: "absolute",
                width: "35px",
                height: "35px",
                right: 8,
                backgroundColor: "var(--color-orange-400-peach)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  backgroundColor: "var(--color-orange-600-peach)",
                },
              }}
            >
              <VolumeUpIcon
                sx={{
                  color: "white",
                }}
              />
            </Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalDetail;
