import React from "react";

export default function ProductDetails() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Details</h1>
          <p className="text-xl text-gray-600 mb-8">
            Select a product from the store to view detailed information.
          </p>
          
          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-200 max-w-2xl mx-auto">
            <p className="text-sm text-gray-600">
              ✓ Free Shipping on orders over $50<br />
              ✓ 30-day money back guarantee<br />
              ✓ 1-year warranty included
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
