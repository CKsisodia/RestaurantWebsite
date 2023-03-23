import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

const Order = () => {
  const orderList = useSelector((state) => state.restaurant.orderList);

  console.log(orderList);

  return (
    <div style={{ display: "flex", flexDirection: "column-reverse" }}>
      {orderList.map((items) => (
        <div>
          <Card sx={{ maxWidth: "1200px", margin: "auto", marginTop: 1 }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  gap: 10,
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                {items.restName}
                <span style={{ fontSize: "17px", margin: "auto" }}>
                  {items.DateAndTime}
                </span>
                <div style={{ float: "right", fontSize: "13px" }}>
                  Delivered✅
                </div>
              </Typography>
              <div>Total Amount : ₹{items.totalAmount}</div>
              <hr style={{ border: "1px dashed gray" }} />
              {items.cartItemshow.map((order) => (
                <div style={{ display: "flex" }}>
                  <Typography variant="body2" color="text.secondary">
                    {order.foodItem}({order.quantity}),
                  </Typography>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Order;
