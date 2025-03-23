import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import Search from "./Search";
import PropertyCard from "./PropertyCard";
import axios from "axios";

const Browse = () => {
  const [filter, setFilter] = useState("");
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          "https://realestate-3dcb7-default-rtdb.asia-southeast1.firebasedatabase.app/RealEstate/residency.json"
        );
        const data = response.data;

        // Transform the data into an array of properties
        const propertiesArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));

        setProperties(propertiesArray);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setError("Failed to fetch properties. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const filteredProperties = properties.filter(
    (property) =>
      property.title?.toLowerCase().includes(filter.toLowerCase()) ||
      property.city?.toLowerCase().includes(filter.toLowerCase()) ||
      property.country?.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <PuffLoader color="#3B82F6" size={80} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <Search filter={filter} setFilter={setFilter} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProperties.map((property) => (
            <PropertyCard card={property} key={property.id} />
          ))}
        </div>

        {/* No Results Found */}
        {filteredProperties.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            No properties found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;