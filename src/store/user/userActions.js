import { loginRequest } from "../../api/authService";
import { JWT_TOKEN_KEY } from "../../utils/constants/general";
import {
  addItemToStorage,
  removeItemFromStorage,
} from "../../utils/helpers/localStorageHelpers";
import { userActions } from "./userSlice";

export const logIn = (userData, navigateToDashboard, onClose, notify) => {
  return async (dispatch) => {
    try {
      const { data } = await loginRequest(userData);
      console.log(data);
      const userCredetials = { accessToken: data?.token };
      addItemToStorage(data?.token, JWT_TOKEN_KEY);
      dispatch(userActions.logIn(userCredetials));
      onClose();
      notify("Успешный вход", "success");
      navigateToDashboard();
    } catch ({ response: { data } }) {
      notify(data.httpStatus, "error");
    }
  };
};

export const logOut = () => {
  return (dispatch) => {
    removeItemFromStorage(JWT_TOKEN_KEY);

    dispatch(userActions.logOut());
  };
};
