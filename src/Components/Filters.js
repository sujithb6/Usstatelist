import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  TextField,
  Stack,
  Fade,
  FormControl,
  Container,
  Divider
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DesktopDatePicker } from "@mui/lab";
import { searchContext } from "../Context/Context";

const Filters = () => {
  const [value, setValue] = useState(new Date("2014-08-18T21:11:54"));

  const { setSearchTerm } = useContext(searchContext);
  const { checked } = useContext(searchContext);
  const { inputRef } = useContext(searchContext);

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleChangeTwo = (event, newValue) => {
    setValue(newValue);
    setSearchTerm(event.target.value);
  };

  return (
    <React.Fragment>
      <Fade in={checked}>
        <Container fixed xs={6}>
          <Box
            sx={{ py: 1 }}
            style={{
              backgroundColor: "#fff"
            }}
          >
            <Divider />
            <Box component="form" noValidate autoComplete="off">
              <FormControl fullWidth sx={{ p: 1 }}>
                <TextField
                  id="standard-basic"
                  label="Search"
                  variant="standard"
                  onChange={handleChange}
                  sx={{ mx: "20px", mb: 1 }}
                  inputRef={inputRef}
                />
              </FormControl>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3} sx={{ mx: "20px", mt: 4 }}>
                  <DesktopDatePicker
                    label="Date"
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChangeTwo}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Stack>
              </LocalizationProvider>
            </Box>
          </Box>
        </Container>
      </Fade>
    </React.Fragment>
  );
};

export default Filters;
