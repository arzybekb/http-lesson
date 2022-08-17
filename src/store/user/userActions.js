import { loginRequest } from "../../api/authService";
import { JWT_TOKEN_KEY } from "../../utils/constants/general";
import {
  addItemToStorage,
  removeItemFromStorage,
} from "../../utils/helpers/localStorageHelpers";
import { userActions } from "./userSlice";

export const logIn = (
  { email, password },
  navigateToDashboard,
  onClose,
  notify
) => {
  return async (dispatch) => {
    try {
      const data = await loginRequest({ email, password });
      console.log(data);
      const userCredetials = { accessToken: data.token };
      addItemToStorage(data.token, JWT_TOKEN_KEY);
      dispatch(userActions.logIn(userCredetials));
      navigateToDashboard();
      onClose();
      notify("Успешный вход", "success");
    } catch (error) {
      notify(error.message, "error");
    }
  };
};
export const logOut = () => {
  return (dispatch) => {
    removeItemFromStorage(JWT_TOKEN_KEY);

    dispatch(userActions.logOut());
  };
};
