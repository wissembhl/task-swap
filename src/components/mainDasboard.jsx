import React from "react";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { MoveButton } from "./shared/moveButton";
import CheckboxesGroup from "./checkbox";

export default function MainDashboard() {
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

  /**
   * Move items from the left box to the right one
   */
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

  /**
   * Move items from the right box to the left one
   */
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
        <MoveButton variant="contained" onClick={handleLeftMove}>
          {">"}
        </MoveButton>
        <MoveButton variant="contained" onClick={handleRightMove}>
          {"<"}
        </MoveButton>
      </Stack>
      <Box sx={{ borderRadius: 1, border: 1, padding: 10 }}>
        <CheckboxesGroup itemsList={secondList} setItemsList={setSecondList} />
      </Box>
    </Stack>
  );
}
