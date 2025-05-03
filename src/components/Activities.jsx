import React from 'react'
import { activityImages } from '../assets/assets';

const Activities = () => {
  return (
    <div className="bg-yellow-50 py-12 px-4 md:px-20 lg:px-32" id="activities">
  <h2 className="text-4xl font-handwriting text-center mb-10">
    Activities Near Mirema Blossom Homes
  </h2>

  {/* Images Row */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {activityImages.map((src, index) => (
          <div key={index} className="overflow-hidden shadow-md group">
            <img
              src={src}
              alt={`Activity ${index + 1}`}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

  {/* Descriptive Paragraphs */}
  <div className="text-center text-lg space-y-6 text-gray-700 max-w-4xl mx-auto">
    <p>
      Whether you're in the mood for shopping, a cultural visit, or a relaxing walk, our location offers quick access to vibrant places.
    </p>
    <p>
      Nearby attractions include TRM Mall, the Nairobi National Museum, and beautiful walking trails at Karura Forest.
    </p>
    <p>
      You’ll also find cozy cafés, vibrant restaurants, and local markets — perfect for experiencing Nairobi like a local.
    </p>
  </div>
</div>
  )
}

export default Activities