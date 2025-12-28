import books from "@/app/Data/books";
import mens from "@/app/Data/mens";
import women from "@/app/Data/women";
import sports from "@/app/Data/sports";
import electronic from "@/app/Data/electronic";
import kitchen from "@/app/Data/kitchen";

const categoryMap = {
  books,
  mens,
  women,
  sports,
  electronic,
  kitchen,
};

export default async function CategoryPage({ params }) {
  const { category } = await params; 
  const data = categoryMap[category];

  if (!data) {
    return <h2 className="text-center mt-10">Category Not Found</h2>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold capitalize mb-6">
        {category} Collection
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {data.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            <img
              src={item.img}
              alt={item.title}
              className="h-48 w-full object-cover"
            />
            <p className="mt-2 text-center font-medium">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}