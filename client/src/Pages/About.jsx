import ChatBot from "./chatbot";

export default function About() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">About PropertyFinder</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2020, PropertyFinder has quickly become one of the most trusted names in real estate. 
              Our mission is to make property hunting an enjoyable and successful experience for everyone.
            </p>
            <p className="text-gray-600 mb-6">
              We combine cutting-edge technology with personalized service to help you find the perfect property 
              that matches your lifestyle and budget.
            </p>
          </div>
          <div className="relative h-64 sm:h-80 md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=1000&q=80" 
              alt="Team Meeting"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Expert Knowledge</h3>
              <p className="text-gray-600">
                Our team of experienced real estate professionals provides expert guidance 
                throughout your property journey.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Curated Listings</h3>
              <p className="text-gray-600">
                We carefully select and verify all properties to ensure you have access to 
                the best options available.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Personalized Service</h3>
              <p className="text-gray-600">
                Get personalized recommendations and support tailored to your specific 
                needs and preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <ChatBot />
      </div>
    </div>
  );
}