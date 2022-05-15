import { createContext, useReducer } from "react";
import { THEME_MODE } from "../../utils/constants";
import { getCookies } from "../../utils/storage";
import reducer from "../reducer";

const initialState = {
  darkMode: getCookies(THEME_MODE) === "ON" ? true : false,
};

export const Store = createContext();

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const store = { state, dispatch };
  return <Store.Provider value={store}>{props.children}</Store.Provider>;
};

export default Store;
