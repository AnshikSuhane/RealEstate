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
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 transparrent">
        <div className=" p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-4">Select Your Visit Date</h2>
          <input
            type="date"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className="border p-2 w-full"
          />
          <ChatBot/>
          <div className="flex justify-end gap-2 mt-4">
            <button className="bg-gray-400 px-4 py-2 rounded" onClick={() => setOpened(false)}>Cancel</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" disabled={loading} onClick={handleBooking}>
              {loading ? "Booking..." : "Book Visit"}
            </button>
            
          </div>
        </div>
      </div>
    )
  );
};

export default BookingModal;
