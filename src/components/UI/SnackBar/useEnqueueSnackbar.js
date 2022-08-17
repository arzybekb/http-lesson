import { useSnackbar } from "notistack";
import Snackbar from "./Snackbar";

const useEnqueueSnackbar = () => {
  const { enqueueSnackbar } = useSnackbar();
  const pushSnackbar = (message, variant) => {
    enqueueSnackbar(message, {
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      content: () => {
        return <Snackbar message={message} variant={variant} />;
      },
    });
  };
  return pushSnackbar;
};
export default useEnqueueSnackbar;
