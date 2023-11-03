import * as React from "react";
import TextField from "@mui/material/TextField";

export default function TextfieldNumber({ value, setValue }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <TextField
      id="outlined-number"
      label="Number"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      onChange={handleChange}
    />
  );
}
