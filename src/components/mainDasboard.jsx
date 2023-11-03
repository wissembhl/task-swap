import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { MoveButton } from "./shared/moveButton";
import CheckboxesGroup from "./checkboxesGroup";
import TextfieldNumber from "./shared/textFieldNumber";
import ButtonNumber from "./shared/buttonNumber";

export default function MainDashboard() {
  const [firstList, setFirstList] = useState([
    { priority: 1, label: "1", checked: false },
    { priority: 2, label: "2", checked: false },
  ]);
  const [secondList, setSecondList] = useState([
    { priority: 3, label: "3", checked: false },
    { priority: 4, label: "4", checked: false },
  ]);
  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();

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
      id="Main Dashboard"
      spacing={2}
      direction="row"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "100vh",
      }}
    >
      <Stack direction="column" spacing={2}>
        <Box sx={{ borderRadius: 1, border: 1, padding: 10 }}>
          <CheckboxesGroup itemsList={firstList} setItemsList={setFirstList} />
        </Box>
        <TextfieldNumber setValue={setFirstNumber} />
        <ButtonNumber
          buttonLabel={"Add number"}
          addedNumber={firstNumber}
          numbersList={firstList}
          setNumbersList={setFirstList}
          setValue={setFirstNumber}
        />
      </Stack>
      
      <Stack direction="column" spacing={2}>
        <MoveButton
          variant="contained"
          onClick={handleLeftMove}
          data-testid="left-move-button"
        >
          {">"}
        </MoveButton>
        <MoveButton
          variant="contained"
          onClick={handleRightMove}
          data-testid="right-move-button"
        >
          {"<"}
        </MoveButton>
      </Stack>

      <Stack direction="column" spacing={2}>
        <Box sx={{ borderRadius: 1, border: 1, padding: 10 }}>
          <CheckboxesGroup
            itemsList={secondList}
            setItemsList={setSecondList}
          />
        </Box>
        <TextfieldNumber setValue={setSecondNumber} />
        <ButtonNumber
          buttonLabel={"Add number"}
          addedNumber={secondNumber}
          numbersList={secondList}
          setNumbersList={setSecondList}
          setValue={setSecondNumber}
        />
      </Stack>
    </Stack>
  );
}
