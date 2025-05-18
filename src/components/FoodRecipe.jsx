import { useState, useEffect } from "react";
import styles from "./foodrecipe.module.css";
import Nutritions from "./Nutritions";

export default function Recipe({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`; //https://api.spoonacular.com/recipes/{id}/information
  const API_KEY = "be05c0812c9f4b34bbd2e6d9638a22ff";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImg} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏱️{food.readyInMinutes}Mins</strong>
          </span>
          <span>{food.vegan ? "🥗Vegan" : "🌮Non-Vegan"}</span>
          <span>{food.glutenFree ? "🍛Gluten Free" : "🍔Not Gluten Free"}</span>
        </div>
        <div className={styles.recipeDetails}>
          <span>{food.vegetarian ? "🥕Vegetarian" : "🍖Non-Vegetarian"}</span>
          <span>
            🧑🏻‍👩🏻‍👧🏼<strong>Serves{food.servings}</strong>
          </span>
          <span>💸{food.pricePerServing}per serving</span>
        </div>
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
