import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import "./Recipe.css";

const Recipe = () => {
  const { id } = useParams();
  let { data: recipe, isPending, error } = useFetch(`http://localhost:3000/recipes/${id}`);
  console.log(recipe);
  return (
    <div className="recipe">
      {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p> Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ingredient, ind) => (
              <li key={ind}>{ingredient}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
};

export default Recipe;
