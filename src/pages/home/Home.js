import "./Home.css";
import { useFetch } from "./../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";

const Home = () => {
  const { data: recipes, isPending, error } = useFetch("http://localhost:3000/recipes");
  return (
    <div className="home">
      {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
};

export default Home;
