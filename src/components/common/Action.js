import React from "react";
import Button from '@mui/material/Button';

const Action = ({ handleClick, type, className }) => {
  return (
    <Button style={{textTransform:"none",paddingLeft:0, minWidth: 54}} onClick={handleClick}>{type}</Button>
  );
};

export default Action;
