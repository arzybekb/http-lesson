import * as React from "react";
import ruLocale from "date-fns/locale/ru";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";

import { styled } from "@mui/material";

export default function DatePicker({ onChange, value, name, sx, ...other }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ruLocale}>
      <StyledDatePicker
        sx={sx}
        mask="__.__.____"
        value={value}
        onChange={(value) => onChange({ target: { value, name } })}
        renderInput={(params) => <DateInput {...params} sx={sx} />}
        {...other}
        emptyLabel=""
      />
    </LocalizationProvider>
  );
}

const StyledDatePicker = styled(MuiDatePicker)``;
const DateInput = styled(TextField)`
  & .MuiIconButton-root {
    margin-left: -10px !important;
    margin-right: -10px !important;
  }

  & .MuiInputBase-formControl {
    padding-left: 5px;
  }
  & .MuiIconButton-root {
    margin: 0;
  }
`;
