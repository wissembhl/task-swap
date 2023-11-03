import * as React from "react";
import Button from "@mui/material/Button";

export default function ButtonNumber({
  buttonLabel,
  addedNumber,
  numbersList,
  setNumbersList,
  setValue,
}) {
  const handleAddNumber = () => {
    if (addedNumber !== undefined) {
      setNumbersList([
        ...numbersList,
        { priority: Number(addedNumber), label: addedNumber, checked: false },
      ]);
    }
  };

  return (
    <Button variant="text" onClick={handleAddNumber}>
      {buttonLabel}
    </Button>
  );
}
