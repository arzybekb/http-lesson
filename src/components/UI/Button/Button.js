import React from "react";

import MuiButton from "@mui/material/Button";

import { styled } from "@mui/material";

const Button = ({ children, fullWidth, top, color, ...props }) => (
  <StyledButton
    {...props}
    fullWidth={fullWidth || false}
    sx={{ mt: top, color }}
  >
    {children}
  </StyledButton>
);

export default Button;

const StyledButton = styled(MuiButton)`
  text-transform: none;
  font-size: 18px;
  padding: 6px 20px;
  font-family: "Gilroy";

  &.MuiButton-contained {
    background: #2ca803;

    &:hover {
      background: #69c14c;
      box-shadow: none;
    }
  }

  &.MuiButton-outlined {
    color: #707070;
    border: none;
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    /* line-height: 19px; */
    &:hover {
      background: transparent;
    }
  }
`;
