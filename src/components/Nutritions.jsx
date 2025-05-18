import { useState, useEffect } from "react";
import styles from "./nutrition.module.css";

export default function Nutritions({ foodId }) {
  const [nutrition, setNutrition] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/nutritionWidget.json`; //https://api.spoonacular.com/recipes/{id}/information
  const API_KEY = "be05c0812c9f4b34bbd2e6d9638a22ff";
  useEffect(() => {
    async function NutritionFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setNutrition(data);
      setIsLoading(false);
    }
    NutritionFood();
  }, [foodId]);
  return (
    <div className={styles.nutritionCard}>
      <h2>🍑🍏🌽🥦Nutritions🥗🍐🍎🥕🍒</h2>
      <br />
      <ul>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {nutrition.properties.map((item) => (
              <div className={styles.boxDesign}>
                {item.name}:{item.amount}
              </div>
            ))}
            <br />
            {nutrition.nutrients.map((item) => (
              <div className={styles.nutritionDetails}>
                <span>
                  {item.name}={item.amount}
                  {item.unit}
                </span>
                <span>Perday Need:{item.percentOfDailyNeeds}</span>
              </div>
            ))}
          </div>
        )}
      </ul>
    </div>
  );
}
