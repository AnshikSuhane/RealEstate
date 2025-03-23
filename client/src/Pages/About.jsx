import ChatBot from "./chatbot";

export default function About() {
    return (
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">About PropertyFinder</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2020, PropertyFinder has quickly become one of the most trusted names in real estate. 
                Our mission is to make property hunting an enjoyable and successful experience for everyone.
              </p>
              <p className="text-muted-foreground mb-6">
                We combine cutting-edge technology with personalized service to help you find the perfect property 
                that matches your lifestyle and budget.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=1000&q=80" 
                alt="Team Meeting"
                className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
          </div>
  
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-8 text-center">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-card rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Expert Knowledge</h3>
                <p className="text-muted-foreground">
                  Our team of experienced real estate professionals provides expert guidance 
                  throughout your property journey.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Curated Listings</h3>
                <p className="text-muted-foreground">
                  We carefully select and verify all properties to ensure you have access to 
                  the best options available.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Personalized Service</h3>
                <p className="text-muted-foreground">
                  Get personalized recommendations and support tailored to your specific 
                  needs and preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ChatBot/>
      </div>
    );
  }