import { combineReducers } from "redux";
import { favReducer } from "./modules/fav/reducer";
import { categoryReducer } from "./modules/category/reducer";
import { statusReducer } from "./modules/status/reducer";
import { authReducer } from "./modules/auth/login/reducer";
import { authAdminReducer } from "./modules/auth/adminLogin/reducer";
import { contactReducer } from "./modules/contact/reducer";
import { menuAllReducer } from "./modules/menu/all/reducer";
import { signupReducer } from "./modules/auth/signup/reducer";
import { editReducer } from "./modules/menu/edit/reducer";
import { deleteReducer } from "./modules/menu/delete/reducer";
import { orderReducer } from "./modules/order/reducer";

export default combineReducers({
  authReducer,
  authAdminReducer,
  favReducer,
  categoryReducer,
  statusReducer,
  contactReducer,
  signupReducer,
  menuAllReducer,
  editReducer,
  deleteReducer,
  orderReducer,
});
