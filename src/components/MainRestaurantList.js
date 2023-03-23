import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { useDispatch, useSelector } from "react-redux";
import { restaurantAction } from "../reducer/restaurantSlice";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function MainRestaurantList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const restaurantListShow = useSelector(
    (state) => state.restaurant.mainRestaurantList
  );

  const countryMealsListHandler = (country, restaurantName) => {
    dispatch(
      restaurantAction.countryMealsList({
        country: country,
        restaurantName: restaurantName,
      })
    );
    navigate("/mealslist");
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {restaurantListShow.map((item) => (
        <Paper
          key={item.id}
          elevation={5}
          sx={{
            p: 2,
            margin: "auto",
            marginTop: 2.5,
            maxWidth: 420,
            height: 250,
            flexGrow: 1,
            borderRadius: 2,
            backgroundColor: "#ffffb3",
          }}
          onClick={() =>
            countryMealsListHandler(item.country, item.restaurantName)
          }
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height:170 }}>
                <Img
                  alt="restaurant"
                  src={item.imageUrl}
                  sx={{ borderRadius: 1.5 }}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container sx={{ justifyContent: "end" }}>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                    sx={{ marginLeft: 5, fontWeight: 700, fontSize: 20 }}
                  >
                    {item.restaurantName}
                  </Typography>
                  <div style={{ marginLeft: "25px" }}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={item.rating}
                      precision={0.5}
                      readOnly
                    />
                    <br />
                    <div style={{ marginLeft: "15px" }}>{item.type}</div>
                  </div>
                  <div>{item.location}</div>
                  <hr style={{ border: "1px dashed gray" }}/>
                  <div>{item.description}</div>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1" component="div">
                  {item.price}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
}
