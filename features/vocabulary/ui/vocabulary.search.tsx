"use client";
import { ArrowDropDownCircleOutlined } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

import {
  Autocomplete,
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  InputAdornment,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  TextField,
} from "@mui/material";
import { useRef, useState, useEffect } from "react";
import VocabularyCreate from "./vocabulary.create";
import { linkGoogle, linkMaji } from "../services/search.link";

const options = [
  "Tìm kiếm thông thường",
  "Tìm kiếm trên Mazii",
  "Tìm kiếm trên Google",
];

interface IProps {
  lessons: any[];
}

const VocabularySearch = (props: IProps) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openCreate, setOpenCreate] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [historySearch, setHistorySearch] = useState<string[]>([]);

  // Lấy lịch sử search từ localStorage khi component mount
  useEffect(() => {
    const history = localStorage.getItem("searchHistory");
    setHistorySearch(history ? JSON.parse(history) : []);
  }, []);

  // Lưu keyword mới vào localStorage
  const addToHistory = (keyword: string) => {
    if (!keyword) return;
    let history = [...historySearch];
    // Loại trùng
    history = history.filter((k) => k !== keyword);
    // Thêm lên đầu
    history.unshift(keyword);
    // Giữ max 10
    history = history.slice(0, 10);
    localStorage.setItem("searchHistory", JSON.stringify(history));
    setHistorySearch(history);
  };

  const handleClick = () => {
    if (!keyword) return;
    addToHistory(keyword); // Thêm vào lịch sử khi search
    console.info(
      `You clicked ${options[selectedIndex]} với từ khóa: ${keyword}`
    );
    if (options[selectedIndex] === "Tìm kiếm trên Mazii") {
      window.open(`${linkMaji}${keyword}`, "_blank", "noopener,noreferrer");
    }
    if (options[selectedIndex] === "Tìm kiếm trên Google") {
      window.open(`${linkGoogle}${keyword}`, "_blank", "noopener,noreferrer");
    }
  };

  const handleOpenAdd = () => setOpenCreate(true);

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => setOpen((prev) => !prev);

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    )
      return;
    setOpen(false);
  };

  return (
    <div className="flex items-center gap-x-3">
      <Autocomplete
        sx={{ flex: 1 }}
        freeSolo
        disableClearable
        options={historySearch}
        inputValue={keyword}
        onInputChange={(event, newInputValue) => setKeyword(newInputValue)}
        filterOptions={(options, state) =>
          options
            .filter((option) =>
              option.toLowerCase().includes(state.inputValue.toLowerCase())
            )
            .slice(0, 10)
        }
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              width: "100%",
              "& fieldset": { borderWidth: 0 },
              "&:focus fieldset": { borderWidth: "1px" },
            }}
            name="keyword"
            size="small"
            fullWidth
            placeholder="Tìm kiếm từ vựng"
            slotProps={{
              input: {
                ...params.InputProps,
                type: "search",
                startAdornment: (
                  <InputAdornment position="start" sx={{ paddingLeft: "8px" }}>
                    {" "}
                    <SearchIcon />{" "}
                  </InputAdornment>
                ),
                sx: {
                  height: "40px",
                  borderRadius: "8px",
                  bgcolor: "var(--color-gray-200-gray-700)",
                  borderWidth: 0,
                  transition: "all .2s ease",
                  "&:focus-within": { bgcolor: "transparent" },
                  padding: 0,
                },
              },
            }}
          />
        )}
      />
      <ButtonGroup variant="contained" ref={anchorRef}>
        <Button onClick={handleClick}>{options[selectedIndex]}</Button>
        <Button
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownCircleOutlined />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{ zIndex: 1 }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      <ButtonGroup variant="contained">
        <Button onClick={handleOpenAdd}>
          Thêm mới
          <AddIcon className="ml-2" />
        </Button>
      </ButtonGroup>
      <VocabularyCreate
        openCreate={openCreate}
        setOpenCreate={setOpenCreate}
        lessons={props.lessons}
      />
    </div>
  );
};

export default VocabularySearch;
