import { useState } from "react";

const AddProperty = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    type: "Apartment",
    imageUrl: "",
    description: "",
  });

  const [properties, setProperties] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProperties([...properties, formData]);
    alert("Property added successfully!");
    setFormData({
      title: "",
      location: "",
      price: "",
      type: "Apartment",
      imageUrl: "",
      description: "",
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Add New Property</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Property Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price ($)"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Villa">Villa</option>
          <option value="Commercial">Commercial</option>
        </select>
        <input
          type="url"
          name="imageUrl"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="3"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Add Property
        </button>
      </form>

      {/* Displaying the added properties */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-3">Added Properties</h3>
        {properties.length === 0 ? (
          <p>No properties added yet.</p>
        ) : (
          <ul className="space-y-3">
            {properties.map((property, index) => (
              <li key={index} className="p-4 border rounded shadow">
                <h4 className="font-bold">{property.title}</h4>
                <p>{property.location} - ${property.price}</p>
                <p>Type: {property.type}</p>
                <img src={property.imageUrl} alt={property.title} className="w-full h-40 object-cover mt-2" />
                <p className="mt-2">{property.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AddProperty;
