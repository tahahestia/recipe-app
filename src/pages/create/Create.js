import "./Create.css";
import { useState } from "react";
import { useRef } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "title:",
      title,
      ", method:",
      method,
      ", cookingTime:",
      cookingTime,
      "ingredients:",
      ingredients
    );
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, ing]);
    }
    setNewIngredient("");
    ingredientInput.current.focus();
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a new recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />

          <label>
            <span>Recipe ingredients</span>
            <div className="ingredients">
              <input
                type="text"
                onChange={(e) => setNewIngredient(e.target.value)}
                value={newIngredient}
                ref={ingredientInput}
              />
              <button className="btn" onClick={handleAdd}>
                add
              </button>
            </div>
          </label>
          <p>
            Current ingredient:
            {ingredients.map((ingredient, ind) => (
              <em key={ind}>{ingredient}, </em>
            ))}
          </p>

          <span>Recipe method:</span>
          <textarea onChange={(e) => setMethod(e.target.value)} value={method} />

          <span>Cokking time (minutes):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
          />
        </label>

        <button className="btn">submit</button>
      </form>
    </div>
  );
};

export default Create;
