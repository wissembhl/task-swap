import "./App.css";
import CheckboxesGroup from "./components/checkbox.tsx";
import { useState } from "react";
// import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const App = () => {
  const [firstList, setFirstList] = useState([
    { priority: 1, label: "1", checked: false },
    { priority: 2, label: "2", checked: false },
    { priority: 3, label: "3", checked: false },
    { priority: 4, label: "4", checked: false },
  ]);
  const [secondList, setSecondList] = useState([
    { priority: 5, label: "5", checked: false },
    { priority: 6, label: "6", checked: false },
    { priority: 7, label: "7", checked: false },
    { priority: 8, label: "8", checked: false },
  ]);

  const handleLeftMove = () => {
    const modifiedList = firstList.filter((obj) => !obj.checked);
    const checkedObject = firstList
      .filter((obj) => obj.checked)
      .map((ele) => {
        return { ...ele, checked: false };
      });
    setFirstList(modifiedList);
    setSecondList((prev) => [...prev, ...checkedObject]);
  };

  const handleRightMove = () => {
    const modifiedList = secondList.filter((obj) => !obj.checked);
    const checkedObject = secondList
      .filter((obj) => obj.checked)
      .map((ele) => {
        return { ...ele, checked: false };
      });
    setSecondList(modifiedList);
    setFirstList((prev) => [...prev, ...checkedObject]);
  };

  return (
    <main>
      <Stack
        spacing={2}
        direction="row"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          height: "100vh",
        }}
      >
        <Box sx={{ borderRadius: 1, border: 1, padding: 10 }}>
          <CheckboxesGroup itemsList={firstList} setItemsList={setFirstList} />
        </Box>
        <Stack direction="column" spacing={2}>
          <BootstrapButton variant="contained" onClick={handleLeftMove}>
            {">"}
          </BootstrapButton>
          <BootstrapButton variant="contained" onClick={handleRightMove}>
            {"<"}
          </BootstrapButton>
        </Stack>
        <Box sx={{ borderRadius: 1, border: 1, padding: 10 }}>
          <CheckboxesGroup itemsList={secondList} setItemsList={setSecondList} />
        </Box>
      </Stack>
    </main>
  );
};

export default App;
