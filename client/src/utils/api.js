const BASE_URL = "https://realestate-3dcb7-default-rtdb.asia-southeast1.firebasedatabase.app/RealEstate";

async function addToFavorites(propertyId) {
    const response = await fetch(`${BASE_URL}/tofav`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ propertyId })
    });
    return response.json();
}

async function removeBooking(bookingId) {
    const response = await fetch(`${BASE_URL}/removeBooking.json`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookingId })
    });
    return response.json();
}

async function getAllProperties(){
    const response = await fetch(
      "https://realestate-3dcb7-default-rtdb.asia-southeast1.firebasedatabase.app/RealEstate.json"
    );
  
    if (!response.ok) {
      throw new Error("Failed to fetch properties");
    }
  
    return response.json();
  };
async function getAllFavorites() {
    const response = await fetch(`${BASE_URL}/getAllFav.json`);
    return response.json();
}

async function getAllBookings() {
    const response = await fetch(`${BASE_URL}/getAllBooking.json`);
    return response.json();
}

async function createResidency(residencyData) {
    const response = await fetch(`${BASE_URL}/.json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(residencyData)
    });
    return response.json();
}

async function bookVisit(visitData) {
    const response = await fetch(`${BASE_URL}/bookVisit.json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(visitData)
    });
    return response.json();
}

async function getResidency() {
    const response = await fetch(`${BASE_URL}/residency.json`);
    return response.json();
}

export {
    addToFavorites,
    removeBooking,
   getAllProperties,
    getAllFavorites,
    getAllBookings,
    createResidency,
    bookVisit,
    getResidency
};
