import Searchber from "@/app/resource/boyan/components/searchbar";
import Image from "next/image";

const Boyan = async (props) => {
  const searchParams = await props.searchParams;

  const query =
    typeof searchParams?.search === "string"
      ? searchParams.search.trim()
      : "";

  if (!query) {
    return (
      <main className="m-10">
        <Searchber />
        <p className="mt-6 text-gray-500">
          🔍 খাবারের নাম লিখে সার্চ করো
        </p>
      </main>
    );
  }

  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
    { cache: "no-store" }
  );

  const data = await res.json();
  const meals = data.meals || [];

  if (meals.length === 0) {
    return (
      <main className="m-10">
        <Searchber />
        <p className="mt-6 text-red-500">
          😔 কোনো খাবার পাওয়া যায়নি
        </p>
      </main>
    );
  }

  return (
    <main className="m-10">
      <Searchber />

      <ul className="grid gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="border rounded-lg p-4 shadow-sm"
          >
            <Image
              src={meal.strMealThumb}
              alt={meal.strMeal}
              width={300}
              height={300}
              className="rounded w-full h-auto"
            />
            <p className="mt-2 font-semibold text-center">
              {meal.strMeal}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Boyan;
