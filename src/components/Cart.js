import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { restaurantAction } from "../reducer/restaurantSlice";
import "./Cart.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [totalAmount, setTotalAmount] = React.useState(0);
  const cartItemshow = useSelector((state) => state.restaurant.cartItems);
  const restName = useSelector((state) => state.restaurant.restName);

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString("default", { month: "short" });
  const year = currentDate.getFullYear();
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const AmPm = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;
  const time = `${hour12}:${minute} ${AmPm}`;
  const DateAndTime = `${day}/${month}/${year} ,  ${time}`;

  const incrementCartHandler = (item) => {
    dispatch(restaurantAction.addItemsInCart(item));
  };

  const decrementCartHandler = (item) => {
    dispatch(restaurantAction.removeItemsFromCart(item));
  };

  React.useEffect(() => {
    if (cartItemshow.length > 0) {
      totalAmountOfCartItem();
    } else {
      setTotalAmount(0);
    }
  }, [cartItemshow]);

  const totalAmountOfCartItem = () => {
    const totalPriceOfEachItem = cartItemshow.map((item) => {
      return item.price * item.quantity;
    });
    const totalAmount = totalPriceOfEachItem.reduce((previous, current) => {
      return previous + current;
    });
    console.log(totalPriceOfEachItem, totalAmount);
    setTotalAmount(totalAmount);
  };

  const inEmptyCartOnClickAddnavToRestList = () => {
    navigate("/restaurantList");
  };

  const checkoutHandler = ({
    cartItemshow,
    totalAmount,
    restName,
    DateAndTime,
  }) => {
    console.log({ cartItemshow, totalAmount, restName, DateAndTime });
    dispatch(
      restaurantAction.onCheckoutEmptyCart({
        cartItemshow,
        totalAmount,
        restName,
        DateAndTime,
      })
    );
    navigate("/checkoutPage");
  };

  return (
    <div>

      <div>
        {cartItemshow.length === 0 ? (
          <Card sx={{ maxWidth: 500, margin: "auto" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="410"
                image="https://www.darkeye.in/assets/uploads/emptycart_img.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "center", fontWeight: 700, color: "#111" }}
                >
                  Add some Fooditems !!
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                onClick={inEmptyCartOnClickAddnavToRestList}
                size="small"
                sx={{
                  backgroundColor: "green",
                  color: "yellow",
                  fontWeight: 700,
                  "&:hover": { backgroundColor: "#b3b300" },
                }}
              >
                Add Items
              </Button>
            </CardActions>
          </Card>
        ) : (
          <div className="body_cart">
            <main>
              <div className="basket">
                <div className="basket-labels">
                  <ul>
                    <li className="item item-heading">Item</li>
                    <li className="price">Price</li>
                    <li className="quantity">Quantity</li>
                    <li className="subtotal">Subtotal</li>
                  </ul>
                </div>
                {cartItemshow.map((item) => (
                  <div className="basket-product" key={item.id}>
                    <div className="item">
                      <div className="product-image">
                        <img
                          src={item.imageUrl}
                          alt="Placholder Image 2"
                          className="product-frame"
                        />
                      </div>
                      <div className="product-details">
                        <h1 className="foodItem_cart">{item.foodItem}</h1>
                        {/* <p>
                    <small>{item.description}</small>
                  </p>
                  */}
                      </div>
                    </div>
                    <div className="price">{item.price}</div>
                    <div className="quantity">
                      <button
                        className="button_cart"
                        onClick={() => decrementCartHandler(item)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="button_cart"
                        onClick={() => incrementCartHandler(item)}
                      >
                        +
                      </button>
                    </div>
                    <div className="subtotal">
                      {(item.quantity * item.price).toFixed(2)}
                    </div>
                    <div className="remove"></div>
                  </div>
                ))}
              </div>
              <aside>
                <div className="summary">
                  <div className="summary-total-items">
                    <span className="total-items"></span> Bill Details
                  </div>

                  <div className="summary-total">
                    <div className="total-title">Total Amount</div>
                    <div className="total-value final-value" id="basket-total">
                      {totalAmount.toFixed(2)}
                    </div>
                  </div>
                  <div className="summary-checkout">
                    <button
                      className="checkout_cart"
                      onClick={() =>
                        checkoutHandler({
                          cartItemshow,
                          totalAmount,
                          restName,
                          DateAndTime,
                        })
                      }
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </aside>
            </main>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
