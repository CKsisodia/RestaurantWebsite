import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Login from "./components/signUp/login/Login";
import SignUp from "./components/signUp/login/SignUp";
import { getUserDataAction } from "./reducer/asyncUserReducer";
import { useSelector } from "react-redux";
import Cart from "./components/Cart";
import UserProfileShow from "./components/userProfile/UserProfileShow";
import ProfileForm from "./components/userProfile/ProfileForm";
import MainRestaurantList from "./components/MainRestaurantList";
import MealsList from "./components/MealsList";
import Order from "./components/Order";
import CheckOut from "./components/CheckOut";
import HomePage from "./components/layOut/HomePage";
import RestaurantAppBar from "./components/RestaurantAppBar";

function App() {
  // grtting user profile data from user store
  const userProfileData = useSelector((state) => state.user.userProfileData);
  const userLogInData = useSelector((state) => state.user.userLogInData);
  //to be able to dispatch action from component
  const dispatch = useDispatch();

  // will be called first time and whenever userLoginData change
  useEffect(() => {
    if (userProfileData === undefined || !userLogInData) {
      dispatch(getUserDataAction());
    } else return;
  }, [userLogInData]);

  return (
    <div>
      <RestaurantAppBar />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/mealslist" element={<MealsList />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/userprofileshow" element={<UserProfileShow />}></Route>
        <Route path="/profileForm" element={<ProfileForm />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/restaurantList" element={<MainRestaurantList />}></Route>
        <Route path="/orderHistory" element={<Order />}></Route>
        <Route path="/checkoutPage" element={<CheckOut />}></Route>
      </Routes>
    </div>
  );
}

export default App;
