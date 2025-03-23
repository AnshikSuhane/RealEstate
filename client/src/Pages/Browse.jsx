import { useState } from "react";
import { PuffLoader } from "react-spinners";
import Search from "./Search";
import PropertyCard from "./PropertyCard";

const residencyData = [
  {
    id: 1,
    title: "Sunny Meadow Cottage",
    description: "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
    price: 6000,
    address: "Street 1",
    city: "Chicago",
    country: "US",
    image: "https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    userEmail: "mukhtarhamza294@gmail.com",
    createdAt: { "date": "2023-04-14T10:38:48.762Z" },
    updatedAt: { "date": "2023-04-14T10:38:48.762Z" },
    facilities: { "bathrooms": "2", "parking": "1", "bedrooms": "5" }
  },
  {
    id: 2,
    title: "Coastal Breeze Villa",
    description: "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
    price: 8000,
    address: "Street 2",
    city: "Multan",
    country: "Pakistan",
    image: "https://3.bp.blogspot.com/-84l-BoUL090/VTDHcQzSTNI/AAAAAAAAuHI/Khftta_CF5E/s1920/wow-home-design.jpg",
    facilities: { "bathrooms": "5", "parking": "1", "bedrooms": "4" },
    userEmail: "mukhtarhamza294@gmail.com",
    createdAt: { "date": "2023-04-14T10:42:19.231Z" },
    updatedAt: { "date": "2023-04-14T10:42:19.231Z" }
  },
  {
    id: 3,
    title: "Citralan Puri Serang",
    description: "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
    price: 3000,
    address: "Street 3",
    city: "California",
    country: "US",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    userEmail: "mukhtarhamza294@gmail.com",
    createdAt: { "date": "2023-04-14T07:26:20.051Z" },
    updatedAt: { "date": "2023-04-14T07:26:20.051Z" },
    facilities: { "bathrooms": "3", "parking": "1", "bedrooms": "2" }
  },
  {
    id: 4,
    title: "Autumn Mist Cottage",
    description: "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
    price: 3800,
    address: "Street 4",
    city: "Karachi",
    country: "Pakistan",
    image: "https://e0.pxfuel.com/wallpapers/12/377/desktop-wallpaper-beautiful-houses-beautiful-mansion.jpg",
    facilities: { "bathrooms": "2", "parking": "1", "bedrooms": "3" },
    userEmail: "mukhtarhamza294@gmail.com",
    createdAt: { "date": "2023-04-14T10:42:37.946Z" },
    updatedAt: { "date": "2023-04-14T10:42:37.946Z" }
  },
  {
    id: 5,
    title: "Rustic Pine Lodge",
    description: "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
    price: 7050,
    address: "Street 5",
    city: "San Diego",
    country: "US",
    image: "https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg",
    userEmail: "mukhtarhamza294@gmail.com",
    createdAt: { "date": "2023-04-14T10:39:35.044Z" },
    updatedAt: { "date": "2023-04-14T10:39:35.044Z" },
    facilities: { "bathrooms": "5", "parking": "1", "bedrooms": "4" }
  },
  {
    id: 6,
    title: "Rolling Hills Retreat",
    description: "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
    price: 2000,
    address: "Street 6",
    city: "Phoenix",
    country: "US",
    image: "https://www.hollywoodreporter.com/wp-content/uploads/2023/03/image_h_01-H-2023.jpg",
    facilities: { "bathrooms": "7", "parking": "2", "bedrooms": "10" },
    userEmail: "mukhtarhamza294@gmail.com",
    createdAt: { "date": "2023-04-14T10:41:54.156Z" },
    updatedAt: { "date": "2023-04-14T10:41:54.156Z" }
  },
  {
    id: 7,
    title: "Riverstone Manor",
    description: "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
    price: 2000,
    address: "Street 7",
    city: "Tampa",
    country: "US",
    image: "https://st.hzcdn.com/simgs/pictures/exteriors/builders-in-kochi-creo-homes-pvt-ltd-img~a751d25e0d2ef808_4-0254-1-cb5c87b.jpg",
    facilities: { "bathrooms": "5", "parking": "1", "bedrooms": "4" },
    userEmail: "mukhtarhamza294@gmail.com",
    createdAt: { "date": "2023-04-14T10:42:58.826Z" },
    updatedAt: { "date": "2023-04-14T10:42:58.826Z" }
  },
  {
    id: 8,
    title: "Summerhill Estate",
    description: "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
    price: 2000,
    address: "Street 8",
    city: "Denver",
    country: "US",
    image: "https://i.pinimg.com/originals/89/56/5c/89565c305737e1da2a1a5b62600fbcd4.jpg",
    facilities: { "bathrooms": "2", "parking": "1", "bedrooms": "2" },
    userEmail: "mukhtarhamza294@gmail.com",
    createdAt: { "date": "2023-04-14T10:43:18.186Z" },
    updatedAt: { "date": "2023-04-14T10:43:18.186Z" }
  },
  {
    id: 9,
    title: "Crimson Peak Chalet",
    description: "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
    price: 2000,
    address: "Street 9",
    city: "Chicago",
    country: "US",
    image: "https://cutewallpaper.org/24/house-images/1819611997.jpg",
    facilities: { "bathrooms": "3", "parking": "1", "bedrooms": "4" },
    userEmail: "mukhtarhamza294@gmail.com",
    createdAt: { "date": "2023-04-14T10:43:35.761Z" },
    updatedAt: { "date": "2023-04-14T10:43:35.761Z" }
  },
  {
    id: 10,
    title: "Cedar Ridge Ranch",
    description: "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
    price: 2000,
    address: "Street 10",
    city: "New York",
    country: "US",
    image: "https://media.istockphoto.com/id/1184625380/photo/large-modern-expensive-home.jpg?s=612x612&w=0&k=20&c=TuX7dnAQvrxt02_BMnlgtVMMdvBLmh3gcXL1bPnobP8=",
    facilities: { "bathrooms": "5", "parking": "1", "bedrooms": "4" },
    userEmail: "mukhtarhamza294@gmail.com",
    createdAt: { "date": "2023-04-14T10:43:53.665Z" },
    updatedAt: { "date": "2023-04-14T10:43:53.665Z" }
  },
  {
    id: 11,
    title: "Modern Marvel Mansion",
    description: "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
    price: 2000,
    address: "Street 11",
    city: "Multan",
    country: "Pakistan",
    image: "https://www.homedecorbuzz.com/wp-content/uploads/2017/07/Beautiful-pink-kitchen-design-image.jpg",
    facilities: { "bathrooms": "5", "parking": "1", "bedrooms": "4" },
    userEmail: "mukhtarhamza294@gmail.com",
    createdAt: { "date": "2023-04-15T05:05:58.189Z" },
    updatedAt: { "date": "2023-04-15T05:05:58.189Z" }
  },
  {
    id: 12,
    title: "Whispering Willow Estate",
    description: "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
    price: 4000,
    address: "Street 12",
    city: "Tokyo",
    country: "Japan",
    image: "https://images.pexels.com/photos/1127119/pexels-photo-1127119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    userEmail: "mukhtarhamza294@gmail.com",
    createdAt: { "date": "2023-04-14T07:29:58.262Z" },
    updatedAt: { "date": "2023-04-14T07:29:58.262Z" },
    facilities: { "bathrooms": "4", "parking": "1", "bedrooms": "4" }
  },
  {
    id: 13,
    title: "Blue Horizon Manor",
    description: "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
    price: 2500,
    address: "Street 13",
    city: "Delhi",
    country: "India",
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    userEmail: "mukhtarhamza294@gmail.com",
    createdAt: { "date": "2023-04-14T07:30:36.761Z" },
    updatedAt: { "date": "2023-04-14T07:30:36.761Z" },
    facilities: { "bathrooms": "2", "parking": "1", "bedrooms": "3" }
  },
  {
    id: 14,
    title: "Golden Fields Ranch",
    description: "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
    price: 4000,
    address: "Street 14",
    city: "Los Angeles",
    country: "US",
    image: "https://lovehomedesigns.com/wp-content/uploads/2022/01/cute-house-012522.jpg",
    facilities: { "bathrooms": "5", "parking": "1", "bedrooms": "4" },
    userEmail: "mukhtarhamza294@gmail.com",
    createdAt: { "date": "2023-04-14T10:41:32.998Z" },
    updatedAt: { "date": "2023-04-14T10:41:32.998Z" }
  },
  {
    id: 15,
    title: "Asatti Garden City",
    description: "Massive opportunity to build your dream home at the base of Mummy Mountain in the 3 C's school district. Home is currently updated and very livable if your plans are to build at a later date.* Bonus * to live hillside without hillside restrictions in the town of PV. Run don't walk to capture this needle in a hay stack.",
    price: 2000,
    address: "Street 15",
    city: "New York",
    country: "US",
    image: "https://static.vecteezy.com/system/resources/thumbnails/023/309/311/small_2x/ai-generative-exterior-of-modern-luxury-house-with-garden-and-beautiful-sky-photo.jpg",
    userEmail: "mukhtarhamza294@gmail.com",
    createdAt: { "date": "2023-04-14T07:25:13.156Z" },
    updatedAt: { "date": "2023-04-14T07:25:13.156Z" },
    facilities: { "bathrooms": "2", "parking": "2", "bedrooms": "10" }
  },
  {
    id: 16,
    title: "Jansheen villan",
    description: "Villa is a marvelous piece of luxury and Art. Decorated with two helipads, wide compartment, long sea view and astonishing paints make it more bold.",
    price: 8000,
    address: "Street 16",
    city: "Lahore",
    country: "Pakistan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLbTGWnADS-iYHrvrCjM5BmmJ4RIDr_mx0Xg&s",
    facilities: { "bathrooms": "3", "parking": "2", "bedrooms": "12" },
    userEmail: "ahmadrao925@gmail.com",
    createdAt: { "date": "2023-05-11T11:26:15.44Z" },
    updatedAt: { "date": "2023-05-11T11:26:15.44Z" }
  },
  {
    id: 17,
    title: "The Johnson Palace",
    description: "This is an amazing place to live with all facilities around you",
    price: 5000,
    address: "Street 17",
    city: "New York",
    country: "United States",
    image: "https://i.pinimg.com/736x/78/ab/fa/78abfa9cbf1591ace8ae2eb3a2dafd2d.jpg",
    facilities: { "bathrooms": "2", "parking": "3", "bedrooms": "2" },
    userEmail: "zain@gaintime.io",
    createdAt: { "date": "2023-05-12T11:48:35.028Z" },
    updatedAt: { "date": "2023-05-12T11:48:35.028Z" }
  },
  {
    id: 18,
    title: "ZKC Villa",
    description: "Its an amazing house to live",
    price: 5000,
    address: "Street 18",
    city: "Delhi",
    country: "India",
    image: "https://www.herohousingfinance.com/uploads/blogs/Duplex%20House.webp",
    facilities: { "bathrooms": "3", "parking": "2", "bedrooms": "5" },
    userEmail: "ahmadrao925@gmail.com",
    createdAt: { "date": "2023-05-14T06:31:09.883Z" },
    updatedAt: { "date": "2023-05-14T06:31:09.883Z" }
  },
  {
    id: 19,
    title: "Beautiful House",
    description: "This is a good home to live",
    price: 10000,
    address: "Street 19",
    city: "Mumbai",
    country: "India",
    image: "https://assets-news.housing.com/news/wp-content/uploads/2022/01/11172338/World%E2%80%99s-15-Most-Beautiful-Houses-That-Will-Leave-You-Awestruck-featured-shutterstock_1182743467-1200x700-compressed.jpg",
    facilities: { "bathrooms": "8", "parking": "5", "bedrooms": "5" },
    userEmail: "zain@gaintime.io",
    createdAt: { "date": "2023-06-14T20:11:01.081Z" },
    updatedAt: { "date": "2023-06-14T20:11:01.081Z" }
  }
];

const Browse = () => {
  const [filter, setFilter] = useState("");

  // Filter properties based on the search term
  const filteredProperties = residencyData.filter(
    (property) =>
      property.title?.toLowerCase().includes(filter.toLowerCase()) ||
      property.city?.toLowerCase().includes(filter.toLowerCase()) ||
      property.country?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="bg-white">
      <div className="flex justify-center items-center flex-col padding innerWidth gap-8">
      
        <Search filter={filter} setFilter={setFilter} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {filteredProperties.map((property) => (
            <PropertyCard card={property} key={property.id} />
          ))}
        </div>

        {/* No Results Found */}
        {filteredProperties.length === 0 && (
          <div className="text-center text-gray-500">
            No properties found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;