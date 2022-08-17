import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import MainRouter from "./Routes/MainRouter";
import { useEffect } from "react";
import { getStorageItem } from "./utils/helpers/localStorageHelpers";
import { JWT_TOKEN_KEY } from "./utils/constants/general";
import { userActions } from "./store/user/userSlice";
function App() {
  const isAuthorized = useSelector((state) => state.user.isAuthorized);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = getStorageItem(JWT_TOKEN_KEY);
    if (token) {
      const authorizedUserCredentials = { accessToken: token };
      dispatch(userActions.logIn(authorizedUserCredentials));
    }
  }, []);
  return (
    <div className="App">
      <MainRouter isAuthorized={isAuthorized} />
    </div>
  );
}

export default App;
