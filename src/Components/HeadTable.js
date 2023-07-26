import React, { useContext } from "react";
import { Box, Typography, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { searchContext } from "../Context/Context";

const HeadTable = () => {
  const { inputRef } = useContext(searchContext);

  const onClick = () => {
    inputRef.current.focus();
  };

    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          "& svg": {
            m: 1.5
          }
        }}
      >
        <div>
          <Typography variant="h5" color="initial" sx={{ p: 2 }}>
            Heros
          </Typography>
        </div>
        <Divider orientation="vertical" flexItem sx={{ mr: "auto", ml: 8 }} />

        <div>
          <SearchIcon onClick={onClick} style={{ cursor: "pointer" }} />
        
        </div>
      </Box>
    </div>
};

export default HeadTable;
