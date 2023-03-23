import * as React from "react";
import Card from "@mui/material/Card";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const navigate = useNavigate();

  const navToOrderHistory = () => {
    navigate("/orderHistory");
  };

  return (
    <div>
      <Card sx={{ maxWidth: 500, margin: "auto" }}>
        <h1>Thank You for Order. Please visit us again.</h1>
        <Button onClick={navToOrderHistory}>My Orders</Button>
      </Card>
    </div>
  );
};

export default CheckOut;
