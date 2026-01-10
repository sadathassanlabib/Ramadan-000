import Searchber from "@/app/resource/boyan/components/searchbar";

const Boyan = async ({ searchParams }) => {
  const query = searchParams?.search || "";

  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  const meals = data.meals || [];

  return (
    <main className="m-10">
      <Searchber />

      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </main>
  );
};

export default Boyan;
