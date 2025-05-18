import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList1";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodRecipe from "./components/FoodRecipe";
import Nutritions from "./components/Nutritions";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("");
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      {/*parent of innercontainer---container*/}
      <Container>
        {/*child of container and parent of foodlist--innercontainer*/}
        <InnerContainer>
          {/*child of innercontainer---foodlist */}
          <FoodList foodData={foodData} setFoodId={setFoodId} key={foodId} />
        </InnerContainer>
        <InnerContainer>
          <Nutritions foodId={foodId} />
        </InnerContainer>
        <InnerContainer>
          <FoodRecipe foodId={foodId} />
        </InnerContainer>
        {/*children props must be sent to conatiner.jsx and innercontainer.jsx to access childres*/}
      </Container>
    </div>
  );
}

export default App;
