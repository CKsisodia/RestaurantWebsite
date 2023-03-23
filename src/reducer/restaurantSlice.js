 const { createSlice } = require("@reduxjs/toolkit");

const indian_kilo_curry = [
  {
    id: 1,
    foodItem: "Margherita Pizza",
    description:
      "Traditional Italian pizza with tomato sauce, mozzarella cheese, and fresh basil",
    price: 12.99,
    rating: 4.5,
    quantity: 0,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
  },
  {
    id: 2,
    foodItem: "Spaghetti Bolognese",
    description:
      "Spaghetti served with a rich and meaty tomato sauce with ground beef and parmesan cheese",
    price: 11.99,
    rating: 4.3,
    quantity: 0,
    imageUrl:
      "https://www.errenskitchen.com/wp-content/uploads/2015/02/Quick-Easy-Spaghetti-Bolognese2-1-500x480.jpg",
  },
  {
    id: 3,
    foodItem: "Lasagna",
    description:
      "Layered pasta with beef, tomato sauce, and a blend of mozzarella and parmesan cheese",
    price: 14.99,
    rating: 4.7,
    quantity: 0,
    imageUrl:
      "https://thecozycook.com/wp-content/uploads/2022/04/Lasagna-Recipe-f.jpg",
  },
  {
    id: 4,
    foodItem: "Fettuccine Alfredo",
    description: "Creamy fettuccine pasta with parmesan cheese and butter",
    price: 10.99,
    rating: 4.2,
    quantity: 0,
    imageUrl:
      "https://www.foodnetwork.com/content/dam/images/food/fullset/2015/9/15/1/FNK_Chicken-Fettucine-Alfredo_s4x3.jpg",
  },
  {
    id: 5,
    foodItem: "Chicken Parmesan",
    description:
      "Breaded chicken topped with tomato sauce and melted mozzarella cheese, served with spaghetti",
    price: 13.99,
    rating: 4.4,
    quantity: 0,
    imageUrl:
      "https://easychickenrecipes.com/wp-content/uploads/2022/01/Featured-Fried-Chicken-Parmesan-1.jpg",
  },
];
const indian_mrHungry = [
  {
    id: 1,
    foodItem: "Butter Chicken",
    description:
      "Tender chicken pieces cooked in a creamy tomato-based sauce, served with rice or naan bread",
    quantity: 0,
    price: 12.99,
    rating: 4.5,
    imageUrl:
      "https://www.simplyrecipes.com/thmb/_yZgZlxc5yH5cDZAVa_oICIokkU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-5-de97119a16124a31a3b99ee16a398612.jpg",
  },
  {
    id: 2,
    foodItem: "Chana Masala",
    description:
      "Spicy and tangy chickpea dish cooked with onion, tomato, and Indian spices, served with rice or naan bread",
    quantity: 0,
    price: 10.99,
    rating: 4.2,
    imageUrl:
      "https://holycowvegan.net/wp-content/uploads/2021/01/chana-masala-3-768x877.jpg",
  },
  {
    id: 3,
    foodItem: "Saag Paneer",
    description:
      "Soft Indian cheese cubes cooked in a creamy spinach sauce, served with rice or naan bread",
    quantity: 0,
    price: 11.99,
    rating: 4.3,
    imageUrl:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/saag-paneer-4893170.jpg?quality=90&webp=true&resize=440,400",
  },
  {
    id: 4,
    foodItem: "Aloo Gobi",
    description:
      "Cauliflower and potatoes cooked with Indian spices, served with rice or naan bread",
    quantity: 0,
    price: 9.99,
    rating: 4.1,
    imageUrl:
      "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2017/26-may/Aloo_Gobi_Sabzi_Recipe-4.jpg",
  },
  {
    id: 5,
    foodItem: "Biryani",
    description:
      "Flavorful rice dish cooked with your choice of chicken, lamb, or vegetables and Indian spices, served with raita and papadum",
    quantity: 0,
    price: 13.99,
    rating: 4.4,
    imageUrl:
      "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg",
  },
];
const indian_momoshomo = [
  {
    id: 1,
    foodItem: "Sushi Combo",
    description:
      "A combination of 8 pieces of sushi and 1 roll, served with miso soup and salad",
    price: 18.99,
    rating: 4.6,
    quantity: 0,
    imageUrl: "https://m.media-amazon.com/images/I/71u6Gscwy4L._SX522_.jpg",
  },
  {
    id: 2,
    foodItem: "Tempura Udon",
    description:
      "Thick noodles in a hot broth with deep-fried shrimp and vegetables, served with tempura dipping sauce",
    price: 12.99,
    rating: 4.3,
    quantity: 0,
    imageUrl:
      "https://www.honestfoodtalks.com/wp-content/uploads/2021/12/Tempura-udon-recipe-including-slices-of-seaweed-chopped-scallions-and-narutomaki-500x500.jpg",
  },
  {
    id: 3,
    foodItem: "Beef Teriyaki",
    description:
      "Grilled steak glazed with teriyaki sauce, served with rice and steamed vegetables",
    price: 16.99,
    rating: 4.5,
    quantity: 0,
    imageUrl:
      "http://images.summitmedia-digital.com/yummyph/images/2021/07/08/beefteriyakirecipe2.jpg",
  },
  {
    id: 4,
    foodItem: "Okonomiyaki",
    description:
      "Japanese savory pancake with cabbage, pork, shrimp, and topped with a variety of sauces",
    price: 10.99,
    rating: 4.1,
    quantity: 0,
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Okonomiyaki_001.jpg/1200px-Okonomiyaki_001.jpg",
  },
  {
    id: 5,
    foodItem: "Chicken Katsu Curry",
    description:
      "Breaded and deep-fried chicken cutlet served with a rich curry sauce and rice",
    price: 13.99,
    rating: 4.4,
    quantity: 0,
    imageUrl:
      "https://images.kitchenstories.io/wagtailOriginalImages/R2498-final-photo-_0.jpg",
  },
];
const indian_burger = [
  {
    id: 1,
    foodItem: "Coq au Vin",
    description:
      "Braised chicken in red wine sauce, with bacon, mushrooms, and pearl onions",
    price: 17.99,
    rating: 4.5,
    quantity: 0,
    imageUrl:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/2/1/0/IG1005_Coq_Au_Vin_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1404919272117.jpeg",
  },
  {
    id: 2,
    foodItem: "Steak Frites",
    description:
      "Grilled sirloin steak served with French fries and herb butter",
    price: 19.99,
    rating: 4.3,
    quantity: 0,
    imageUrl:
      "https://images.food52.com/-jxHBleXv6CRl_mIZfO_bUzeK_Q=/660x440/filters:format(webp)/52096452-f9c1-49e9-9e76-46c694bee2ba--2020-1124_steak-frites_3x2_rocky-luten_032.jpg",
  },
  {
    id: 3,
    foodItem: "Quiche Lorraine",
    description:
      "Classic savory quiche with bacon, cheese, and cream custard filling",
    price: 12.99,
    rating: 4.2,
    quantity: 0,
    imageUrl:
      "https://media.houseandgarden.co.uk/photos/6189479a8373470f8394e2e1/master/w_1600,c_limit/mary-berry-vogue-2-25jun13-pr_bt.jpg",
  },
  {
    id: 4,
    foodItem: "Bouillabaisse",
    description:
      "Traditional fish soup with a variety of fish, shellfish, and vegetables, served with bread and rouille",
    price: 22.99,
    rating: 4.6,
    quantity: 0,
    imageurl:
      "https://assets.epicurious.com/photos/61f423f29c9591f7270e22c6/1:1/w_1600,c_limit/Bouillabaise_RECIPE_20220125_1776_V1_final.jpg",
  },
  {
    id: 5,
    foodItem: "Ratatouille",
    description:
      "Vegetable stew with eggplant, zucchini, peppers, and tomatoes, served with bread",
    price: 13.99,
    rating: 4.1,
    quantity: 0,
    imageUrl:
      "https://www.allrecipes.com/thmb/B7pwC3xXpocRpwJfkPmDk9_A3nM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/222006-disneys-ratatouille-ddmfs-4x3-0747-631622b05b4e4bd196b037aed1c9f776.jpg",
  },
];
const indian_punjabi = [
  {
    id: 1,
    foodItem: "Kung Pao Chicken",
    description: "Stir-fried chicken with peanuts, vegetables, and spicy sauce",
    price: 12.99,
    rating: 4.3,
    quantity: 0,
    imageUrl:
      "https://www.seriouseats.com/thmb/DHg5hjHYjFKaRCIA2L2eShTDjlE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2014__07__2021-02-12-Take-Out-Kung-Pao-Chicken-MHOM-11-c46f6c06713c45c5a287ddbf08779d04.jpg",
  },
  {
    id: 2,
    foodItem: "Beef and Broccoli",
    description:
      "Stir-fried beef and broccoli in a savory brown sauce, served with steamed rice",
    price: 11.99,
    rating: 4.1,
    quantity: 0,
    imageUrl:
      "https://www.sprinklesandsprouts.com/wp-content/uploads/2021/03/Beef-and-Broccoli-Square.jpg",
  },
  {
    id: 3,
    foodItem: "Shrimp Fried Rice",
    description: "Fried rice with shrimp, peas, carrots, and egg",
    price: 10.99,
    rating: 4.2,
    quantity: 0,
    imageUrl:
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2022/03/Shrimp-Fried-Rice-main-1.jpg",
  },
  {
    id: 4,
    foodItem: "Wonton Soup",
    description:
      "Clear broth soup with wonton dumplings, vegetables, and sliced pork",
    price: 8.99,
    rating: 4.4,
    quantity: 0,
    imageUrl:
      "https://redhousespice.com/wp-content/uploads/2022/07/chinese-pork-wonton-in-soup.jpg",
  },
  {
    id: 5,
    foodItem: "Egg Rolls",
    description: "Crispy fried egg rolls with vegetables and meat filling",
    price: 6.99,
    rating: 4.0,
    quantity: 0,
    imageurl:
      "https://1.bp.blogspot.com/-FtlrI6vhMww/X2jDWCb9zUI/AAAAAAAAMPQ/TmUrBHkFo6Ui-uPBi4D6KHKhKwq6-zebQCLcBGAsYHQ/s16000/Kolkata%2Begg%2Broll.JPG",
  },
];

const indian_pizza = [
  {
    id: 1,
    foodItem: "Kung Pao Chicken",
    description: "Stir-fried chicken with peanuts, vegetables, and spicy sauce",
    price: 12.99,
    rating: 4.3,
    quantity: 0,
    imageUrl:
      "https://www.seriouseats.com/thmb/DHg5hjHYjFKaRCIA2L2eShTDjlE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2014__07__2021-02-12-Take-Out-Kung-Pao-Chicken-MHOM-11-c46f6c06713c45c5a287ddbf08779d04.jpg",
  },
  {
    id: 2,
    foodItem: "Beef and Broccoli",
    description:
      "Stir-fried beef and broccoli in a savory brown sauce, served with steamed rice",
    price: 11.99,
    rating: 4.1,
    quantity: 0,
    imageUrl:
      "https://www.sprinklesandsprouts.com/wp-content/uploads/2021/03/Beef-and-Broccoli-Square.jpg",
  },
  {
    id: 3,
    foodItem: "Shrimp Fried Rice",
    description: "Fried rice with shrimp, peas, carrots, and egg",
    price: 10.99,
    rating: 4.2,
    quantity: 0,
    imageUrl:
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2022/03/Shrimp-Fried-Rice-main-1.jpg",
  },
  {
    id: 4,
    foodItem: "Wonton Soup",
    description:
      "Clear broth soup with wonton dumplings, vegetables, and sliced pork",
    price: 8.99,
    rating: 4.4,
    quantity: 0,
    imageUrl:
      "https://redhousespice.com/wp-content/uploads/2022/07/chinese-pork-wonton-in-soup.jpg",
  },
  {
    id: 5,
    foodItem: "Egg Rolls",
    description: "Crispy fried egg rolls with vegetables and meat filling",
    price: 6.99,
    rating: 4.0,
    quantity: 0,
    imageurl:
      "https://1.bp.blogspot.com/-FtlrI6vhMww/X2jDWCb9zUI/AAAAAAAAMPQ/TmUrBHkFo6Ui-uPBi4D6KHKhKwq6-zebQCLcBGAsYHQ/s16000/Kolkata%2Begg%2Broll.JPG",
  },
];

const mainRestaurantList = [
  {
    id: "R_1",
    restaurantName: "Kilo Curry",
    location: "Crosssing Republik, Ghaziabad",
    type: "North Indian",
    rating: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1505253668822-42074d58a7c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bm9ydGglMjBpbmRpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    description: "We are specialized in delicious food featuring fresh ingredients and masterful preparation by our culinary team.",
    country: indian_kilo_curry,
  },
  {
    id: "R_2",
    restaurantName: "Mr.Hungry",
    location: "Model Town, Ghaziabad",
    type: "Asian",
    rating: 4.5,
    imageUrl:
      "https://images.unsplash.com/photo-1511910849309-0dffb8785146?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXNpYW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    description: "We are known for our generous portions of BBQ, Southern, plus a touch of Caribbean fun. save room for dessert! ",
    country: indian_mrHungry,
  },
  {
    id: "R_3",
    restaurantName: "Momo Shomo",
    location: "Gaur City, Ghaziabad",
    type: "Japanese",
    rating: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1670300522639-ce378e5d23a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    description: "We have a comfortable, japanese-style restaurant offering everything you love about cuisine.",
    country: indian_momoshomo,
  },
  {
    id: "R_4",
    restaurantName: "Burger Singh",
    location: "Sector 4, Noida",
    type: "American",
    rating: 4.5,
    imageUrl:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    description: "We are a tight-knit, fun-loving, devoted team of local cooks spreading the gospel of good times and good food. ",
    country: indian_burger,
  },
  {
    id: "R_5",
    restaurantName: "Punjabi Tadka",
    location: "Amrapali, Noida",
    type: "Punjabi",
    rating: 4.5,
    imageUrl:
      "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVuamFiaSUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    description: "We have a Contemporary Creole restaurant creating unique dishes with a focus on punjabi ingredients.",
    country: indian_punjabi,
  },
  {
    id: "R_6",
    restaurantName: "Pizza Tarian",
    location: "Panchsheel, Ghaziabad",
    type: "Continental",
    rating: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
    description: "We specialize in pizzas, as well as handmade appetizers, sandwiches, salads, and gluten friendly, vegetarian",
    country: indian_pizza,
  },
];

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    cartItems: [],
    mainRestaurantList: mainRestaurantList,
    mealsList: undefined,
    orderList: [],
    restName:undefined,
  },
  reducers: {
    increment(state, action) {
      const itemObjOld = action.payload;
      console.log(itemObjOld);
      const itemObj = { ...itemObjOld, quantity: 1 };

      const index = state.mealsList.findIndex((item) => item.id === itemObj.id);
      state.mealsList[index].quantity += 1;

      if (state.cartItems.length === 0) {
        state.cartItems.push(itemObj);
      } else {
        const objIndex = state.cartItems.findIndex(
          (item) => item.id === itemObj.id
        );
        if (objIndex === -1) {
          state.cartItems.push(itemObj);
        } else {
          state.cartItems[objIndex].quantity += 1;
        }
      }
    },

    decrement(state, action) {
      const itemObj = action.payload;
      console.log(itemObj);
      const index = state.mealsList.findIndex((item) => item.id === itemObj.id);

      if (state.mealsList[index].quantity === 0) {
        state.mealsList[index].quantity = 0;
      } else {
        state.mealsList[index].quantity -= 1;
      }

      if (itemObj.quantity < 2) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== itemObj.id
        );
      } else {
        const objIndex = state.cartItems.findIndex(
          (item) => item.id === itemObj.id
        );
        state.cartItems[objIndex].quantity -= 1;
      }
    },

    addItemsInCart(state, action) {
      const itemObjOld = action.payload;
      const itemObj = { ...itemObjOld, quantity: 1 };
      const index = state.mealsList.findIndex((item) => item.id === itemObj.id);
      state.mealsList[index].quantity += 1;

      if (state.cartItems.length === 0) {
        state.cartItems.push(itemObj);
      } else {
        const objIndex = state.cartItems.findIndex(
          (item) => item.id === itemObj.id
        );
        if (objIndex === -1) {
          state.cartItems.push(itemObj);
        } else {
          state.cartItems[objIndex].quantity += 1;
        }
      }
    },

    removeItemsFromCart(state, action) {
      const itemObj = action.payload;
      console.log(itemObj);
      const index = state.mealsList.findIndex((item) => item.id === itemObj.id);

      if (state.mealsList[index].quantity === 0) {
        state.mealsList[index].quantity = 0;
      } else {
        state.mealsList[index].quantity -= 1;
      }

      if (itemObj.quantity < 2) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== itemObj.id
        );
      } else {
        const objIndex = state.cartItems.findIndex(
          (item) => item.id === itemObj.id
        );
        state.cartItems[objIndex].quantity -= 1;
        console.log(JSON.parse(JSON.stringify("2", state.cartItems)));
      }
    },

    countryMealsList(state, action) {
      const countryArr = action.payload.country;
      const restName = action.payload.restaurantName;
      console.log('goldy',countryArr);
      state.mealsList = countryArr;
      state.restName = restName;
    },

    onCheckoutEmptyCart(state, action) {
      const checkOutData = action.payload;
      console.log(checkOutData);
      state.cartItems = [];

      state.orderList.push(checkOutData);
      const menuListRemoveQuantity = [...state.mealsList];
      const resetQuantity = menuListRemoveQuantity.map((item) => {
        return { ...item, quantity: 0 };
      });
      state.mealsList = resetQuantity;
    },
  },
});

export default restaurantSlice;
export const restaurantAction = restaurantSlice.actions;
