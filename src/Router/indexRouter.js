import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AuthChecker from '../Component/AuthChecker/index'
import Home from "../Pages/Home/indexHome";
// import Add from "../Pages/Add/indexAdd";
import AuthLogin from "../Pages/Auth/authLogin";
import AuthRegister from "../Pages/Auth/authRegister";
import AuthVerification from "../Pages/Auth/authOTP";
import AuthForgotPassword from "../Pages/Auth/authFP";
import UpdateProfile from "../Pages/Profile/updateProfile";
import ChangePassword from "../Pages/Profile/changePassProfile";
import UserMenuRecipes from "../Pages/Profile/recipes";
import UserMenuBookmark from "../Pages/Profile/bookmark";
import AddMenu from "../Pages/userMenu/addmenu";
import SearchMenu from "../Pages/userMenu/searchmenu";
import DetailMenu from "../Pages/userMenu/detailmenu";
import UpdateRecipe from "../Pages/userMenu/updaterecipes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <AuthChecker>
            <Navigate to="home" replace="true" />
          </AuthChecker>
        } />

        <Route path="/home" element={<Home />} />
        {/* <Route path="/add" element={<Add />} /> */}
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/register" element={<AuthRegister />} />
        <Route path="/verif" element={<AuthVerification />} />
        <Route path="/forgot-password" element={<AuthForgotPassword />} />

        <Route path="/update-profile" element={
          <AuthChecker>
            <UpdateProfile />
          </AuthChecker>
        } />
        <Route path="/change-password-profile" element={<ChangePassword />} />


        <Route path="/user-recipes" element={
            <AuthChecker>
               <UserMenuRecipes />
            </AuthChecker>
        } />

        <Route path="/user-recipes-bookmark" element={
          <AuthChecker>
            <UserMenuBookmark />
          </AuthChecker>
        } />

        <Route path="/add" element={
          <AuthChecker>
            <AddMenu />
          </AuthChecker>
        } />

        <Route path="/search" element={<SearchMenu />} />
        <Route path="/detailmenu/:id" element={<DetailMenu />} />
        <Route path="/update-recipes/:id" element={
          <AuthChecker>
            <UpdateRecipe />
          </AuthChecker>
        } />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
