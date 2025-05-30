/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserDetailContext } from "@/context/userDetail";
import Heart from "./Heart";
import BookingModal from "./BookingModal";
import { PuffLoader } from "react-spinners";
import { Button } from "@/components/ui/button";

const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const navigate = useNavigate();

  const userContext = useContext(UserDetailContext);
  const token = userContext?.userDetails?.token || "";
  const bookings = userContext?.userDetails?.bookings || [];
  const setUserDetails = userContext?.setUserDetails || (() => {});

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(
          `https://realestate-3dcb7-default-rtdb.asia-southeast1.firebasedatabase.app/RealEstate/residency/${id}.json`
        );
        if (!response.ok) throw new Error("Failed to fetch property data");

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  const cancelBooking = async () => {
    if (!token) {
      alert("You must be logged in to cancel a booking.");
      return;
    }

    try {
      const response = await fetch(
        `https://realestate-3dcb7-default-rtdb.asia-southeast1.firebasedatabase.app/RealEstate/Bookings/${id}.json`,
        { method: "DELETE" }
      );
      if (!response.ok) throw new Error("Cancellation failed");

      setUserDetails((prev) => ({
        ...prev,
        bookings: prev.bookings.filter((booking) => booking?.id !== id),
      }));
      alert("Booking cancelled successfully!");
    } catch (error) {
      alert("Error: Unable to cancel booking.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <PuffLoader color="#4066ff" size={80} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-red-500 text-xl">{error}</span>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
          <div className="absolute top-4 right-4">
            <Heart id={id} />
          </div>

          <div className="relative h-72 sm:h-96 w-full overflow-hidden">
            <img src={data?.image} alt="Property" className="w-full h-full object-cover" />
          </div>

          <div className="p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-900">{data?.title}</h1>
            <div className="text-lg font-bold text-orange-600 mt-2">${data?.price}</div>

            <div className="mt-4 space-y-2 text-sm sm:text-base">
              <p><strong>Bathrooms:</strong> {data?.facilities?.bathrooms}</p>
              <p><strong>Parking:</strong> {data?.facilities?.parking}</p>
              <p><strong>Rooms:</strong> {data?.facilities?.bedrooms}</p>
            </div>

            <p className="mt-4 text-gray-700 text-sm sm:text-base">{data?.description}</p>
            <p className="mt-2 text-gray-600 text-sm sm:text-base">{data?.address}, {data?.city}, {data?.country}</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              {bookings.some((booking) => booking.id === id) ? (
                <div className="w-full">
                  <button
                    className="w-full bg-red-500 text-white py-2 rounded"
                    onClick={cancelBooking}
                  >
                    Cancel Booking
                  </button>
                  <p className="text-center text-gray-600 mt-2 text-sm">
                    Your visit is booked for: <strong>{bookings.find((b) => b.id === id)?.date}</strong>
                  </p>
                </div>
              ) : (
                <>
                  <button
                    className="w-full sm:w-48 bg-blue-600 text-white py-2 rounded"
                    onClick={() => setModalOpened(true)}
                  >
                    Book Your Visit
                  </button>
                  <Button
                    onClick={() => navigate("/nearby")}
                    className="w-full sm:w-48 bg-blue-600 text-white py-2 rounded"
                  >
                    Nearby Locations
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        opened={modalOpened}
        setOpened={setModalOpened}
        propertyId={id}
        email={userContext?.userDetails?.email || ""}
      />
    </div>
  );
};

export default Property;
