import React from "react";
import HomeData from "./products/HomeData";
import Link from "next/link";

const Home = () => {
  return (
    <div className="max-w-9xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {HomeData.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.name}
              className="
                w-full 
                h-[160px] 
                sm:h-[200px] 
                md:h-[240px] 
                lg:h-[280px] 
                object-cover 
                group-hover:scale-105 
                transition
              "
            />

            {/* Title */}
            <p className="text-center py-3 font-medium text-gray-700 group-hover:text-blue-600">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
