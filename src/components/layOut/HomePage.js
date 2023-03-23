import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import LayOut from "./LayOut";

const HomePage = () => {
  return (
    <LayOut>
      <div>
        <div
          className="homePage"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1483137140003-ae073b395549?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "105vw",
            height: "110vh",
          }}
        >
          <div className="home_header_container">
            <h1 className="home_page_heading">Better Food Better Mood</h1>
            <Link to="/restaurantList">
              <button className="homePageButton">Order Now</button>
            </Link>
          </div>
        </div>
      </div>
    </LayOut>
  );
};

export default HomePage;
