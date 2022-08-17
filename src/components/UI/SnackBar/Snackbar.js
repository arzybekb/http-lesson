import { styled } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { forwardRef } from "react";

const StyledAlert = styled(MuiAlert)`
  min-width: 250px;
  height: 66px;
  border-left: 7px solid
    ${(props) => (props.variant === "error" ? "#AD412C;" : "#5AB475")};
  background: #f6fbff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 10px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 2px;
  color: #494949;
  border-radius: 0px;
`;
const Snackbar = forwardRef(({ message, variant, ...props }, ref) => {
  return (
    <StyledAlert icon={false} {...props} variant={variant} ref={ref}>
      {message}
    </StyledAlert>
  );
});
export default Snackbar;
