import React from "react";

export default function FeaturedBrands() {
  const brands = [
    { id: 1, name: "TechBrand", logo: "🔧" },
    { id: 2, name: "StylePro", logo: "👕" },
    { id: 3, name: "ElectroHub", logo: "⚡" },
    { id: 4, name: "HomeLux", logo: "🏠" },
    { id: 5, name: "SportGear", logo: "⚽" },
  ];

  return (
    <div className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-2">
            Featured Brands
          </h2>
          <p className="text-gray-600">
            Shop from trusted brands we partner with
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-gray-50 rounded-lg p-6 text-center hover:bg-blue-50 transition cursor-pointer border border-gray-200 hover:border-blue-300"
            >
              <div className="text-4xl mb-3">{brand.logo}</div>
              <h3 className="font-semibold text-gray-800">{brand.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
