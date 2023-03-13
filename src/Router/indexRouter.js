import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../Pages/Home/indexHome";
// import Add from "../Pages/Add/indexAdd";
import AuthLogin from "../Pages/Auth/authLogin";
import AuthRegister from "../Pages/Auth/authRegister";
import AuthForgotPassword from "../Pages/Auth/authFP";
import UpdateProfile from "../Pages/Profile/updateProfile";
import ChangePassword from "../Pages/Profile/changePassProfile";
import UserMenuRecipes from "../Pages/Profile/recipes";
import UserMenuBookmark from "../Pages/Profile/bookmark";
import AddMenu from "../Pages/userMenu/addmenu";
import SearchMenu from "../Pages/userMenu/searchmenu";
import DetailMenu from "../Pages/userMenu/detailmenu";
import LandingPage from "../Pages/userMenu/landingpage";
import UpdateRecipe from "../Pages/userMenu/updaterecipes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="home" replace="true" />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/add" element={<Add />} /> */}
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/register" element={<AuthRegister />} />
        <Route path="/forgot-password" element={<AuthForgotPassword />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/change-password-profile" element={<ChangePassword />} />
        <Route path="/user-recipes" element={<UserMenuRecipes />} />
        <Route path="/user-recipes-bookmark" element={<UserMenuBookmark />} />
        <Route path="/add" element={<AddMenu />} />
        <Route path="/search" element={<SearchMenu />} />
        <Route path="/detailmenu/:id" element={<DetailMenu />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/update-recipes/:id" element={<UpdateRecipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
