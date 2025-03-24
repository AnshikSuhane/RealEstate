import { useContext, useState } from "react";
import { UserDetailContext } from "@/context/userDetail";
import { Button } from "@/components/ui/button";
import ChatBot from "./chatbot";

const BookingModal = ({ opened, setOpened, email, propertyId }) => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const { userDetails, setUserDetails } = useContext(UserDetailContext);
  const token = userDetails?.token;

  const handleBookingSuccess = () => {
    alert("You have booked your visit successfully!");
    setUserDetails((prev) => ({
      ...prev,
      bookings: [...prev.bookings, { id: propertyId, date: value }],
    }));
    setOpened(false);
  };

  const handleBooking = async () => {
    if (!value) return alert("Please select a date!");

    setLoading(true);
    try {
      const response = await fetch(
        "https://realestate-3dcb7-default-rtdb.asia-southeast1.firebasedatabase.app/RealEstate/BookingVisit.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ date: value, propertyId, email, token }),
        }
      );

      if (!response.ok) throw new Error("Booking failed");
      handleBookingSuccess();
    } catch (error) {
      alert(error.message || "Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    opened && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Select Your Visit Date</h2>
          <input
            type="date"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className="border p-2 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <ChatBot />
          <div className="flex justify-end gap-2 mt-4">
            <Button
              variant="secondary"
              onClick={() => setOpened(false)}
              className="px-4 py-2"
            >
              Cancel
            </Button>
            <Button
              onClick={handleBooking}
              disabled={loading}
              className="px-4 py-2"
            >
              {loading ? "Booking..." : "Book Visit"}
            </Button>
          </div>
        </div>
      </div>
    )
  );
};

export default BookingModal;