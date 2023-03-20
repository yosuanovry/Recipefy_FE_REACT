import axios from "axios";

export const registerUser = (data) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_PENDING" });
    const result = await axios.post(`${process.env.REACT_APP_SECRET_KEY}/auth/register/user`, data);
    const user = result.data.data;
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: user });
    // navigate("/login");
  } catch (err) {
    console.log("registerUser error");
    console.log(err);
  }
};

export const Otp = (id,otp) => async (dispatch) => {
  try {
    dispatch({ type: "CONFIRM_OTP_PENDING" });
    const result = await axios.get(
      `${process.env.REACT_APP_SECRET_KEY}/auth/otp/${id}/${otp}`
    );
    const user = result.data;
    dispatch({ type: "CONFIRM_OTP_SUCCESS", payload: user });
    // navigate("/login")
  } catch (err) {
    console.log(err);
  }
};


