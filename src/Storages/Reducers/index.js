import { combineReducers } from "redux";
import userLogin from "./userLogin";
import userRegister from "./userRegister"
import get_MenuUser from "./getMenu"
import addMenu from "./addMenu"
import delete_Menu from "./deleteMenu"
import get_UserData from "./getUser";


const rootReducers = combineReducers({
    userLogin, userRegister, get_MenuUser, addMenu, delete_Menu, get_UserData
})

export default rootReducers