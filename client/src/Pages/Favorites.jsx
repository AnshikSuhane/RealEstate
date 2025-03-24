import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDetailContext } from "@/context/userDetail";
import useProperties from "@/hooks/useProperties";
import Search from "./Search";
import PuffLoader from "react-spinners/PuffLoader";
import { truncate } from "lodash";
import Heart from "./Heart";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Favorites = () => {
  const { data, error: isError, isLoading } = useProperties();
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();
  const { userDetail } = useContext(UserDetailContext);
  const favourites = userDetail?.favourites || [];

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="text-red-500 font-medium">Error While Fetching Data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <PuffLoader color="#4066ff" size={80} />
      </div>
    );
  }

  const propertyList = Array.isArray(data) ? data : [];

  const filteredProperties = propertyList
    .filter((property) => favourites.includes(property.id))
    .filter(
      (property) =>
        property.title.toLowerCase().includes(filter.toLowerCase()) ||
        property.city.toLowerCase().includes(filter.toLowerCase()) ||
        property.country.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6">
      <Search filter={filter} setFilter={setFilter} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((card) => (
            <Card
              key={card.id}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer group w-full max-w-sm mx-auto"
              onClick={() => navigate(`/properties/${card.id}`)}
            >
              <div className="relative">
                <div className="absolute right-3 top-3 z-10">
                  <Heart id={card.id} />
                </div>
                <div className="h-52 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <Badge className="absolute bottom-3 left-3 bg-white text-black hover:bg-white/90 font-bold px-3 py-1.5 shadow-md">
                  <span className="text-orange-500 mr-1">$</span>
                  {card.price}
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <h3 className="font-bold text-lg text-gray-900">
                  {truncate(card.title, { length: 15 })}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-sm">
                  {truncate(card.description, { length: 80 })}
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-sm font-medium border-gray-300 hover:border-gray-400"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/properties/${card.id}`);
                  }}
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No favorite properties found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Favorites;