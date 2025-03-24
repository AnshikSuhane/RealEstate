import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { truncate } from "lodash";
import { useNavigate } from "react-router-dom";
import Heart from "./Heart";
import axios from "axios";
import ChatBot from "./chatbot";

const PropertyCard = ({ card }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (card?.id) {
      axios
        .get("https://realestate-3dcb7-default-rtdb.asia-southeast1.firebasedatabase.app/RealEstate/getAllFav")
        .then((response) => {
          if (Array.isArray(response.data) && response.data.some((fav) => fav.id === card.id)) {
            setIsFavorite(true);
          }
        })
        .catch((error) => console.error("Error fetching favorites:", error));
    }
  }, [card?.id]);

  const handleFavorite = async (event) => {
    event.stopPropagation();
    if (!card?.id) return;

    const url = isFavorite
      ? "https://realestate-3dcb7-default-rtdb.asia-southeast1.firebasedatabase.app/RealEstate/removeBooking"
      : "https://realestate-3dcb7-default-rtdb.asia-southeast1.firebasedatabase.app/RealEstate/tofav";

    try {
      await axios.post(url, { propertyId: card.id });
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error("Error updating favorite:", error);
    }
  };

  return (
    <Card
      className="overflow-hidden group w-full max-w-sm mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl"
      onClick={() => navigate(`../properties/${card?.id}`)}
    >
      <div className="relative">
        {/* Favorite Button */}
        <button
          onClick={handleFavorite}
          className="absolute top-4 right-4 p-2 rounded-full shadow-md bg-white/90 hover:bg-white transition-colors duration-200 z-10"
        >
          <Heart
            className={`w-5 h-5 ${isFavorite ? "fill-red-500 stroke-red-500" : "stroke-gray-600"}`}
          />
        </button>

        {/* Property Image */}
        <img
          src={card?.image || "placeholder.jpg"}
          alt={card?.title || "Property Image"}
          className="w-full h-48 sm:h-56 md:h-64 object-cover"
        />

        {/* Facilities Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {card?.facilities && (
            <>
              {card.facilities.bedrooms && (
                <Badge variant="secondary">Bedrooms: {card.facilities.bedrooms}</Badge>
              )}
              {card.facilities.bathrooms && (
                <Badge variant="secondary">Bathrooms: {card.facilities.bathrooms}</Badge>
              )}
              {card.facilities.parking && (
                <Badge variant="secondary">Parking: {card.facilities.parking}</Badge>
              )}
            </>
          )}
        </div>
      </div>

      {/* Card Content */}
      <CardContent className="p-4 sm:p-6">
        {/* Property Title */}
        <h3 className="text-lg sm:text-xl font-semibold mb-2">
          {truncate(card?.title || "No Title", { length: 25 })}
        </h3>

        {/* Property Address */}
        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span>
            {card?.address || "Unknown Address"}, {card?.city || "Unknown City"},{" "}
            {card?.country || "Unknown Country"}
          </span>
        </div>

        {/* Price and View Details Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-xl font-bold">${card?.price || "N/A"}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`../properties/${card?.id}`);
            }}
            className="w-full sm:w-auto"
          >
            View Details
          </Button>
        </div>

        {/* ChatBot Integration */}
        <div className="mt-4">
          <ChatBot />
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;