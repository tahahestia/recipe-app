import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import RecipeList from "../../components/RecipeList";

import "./Search.css";

const Search = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = "http://localhost:3000/recipes?q=" + query;
  const { data: recipes, isPending, error } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {isPending ? (
        <div className="loading">Loading ...</div>
      ) : error ? (
        <div>{error}</div>
      ) : recipes.length ? (
        <RecipeList recipes={recipes} />
      ) : (
        <div className="error">No recipes to load ..</div>
      )}
    </div>
  );
};

export default Search;
