import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem food={food} setFoodId={setFoodId} key={food.id} />
      ))}
    </div>
  );
}
