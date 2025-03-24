/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Mail, Phone, Star } from "lucide-react";

export default function AgentProfile() {
  const { id } = useParams();

  // Mock agent data
  const agent = {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Real Estate Agent",
    experience: "10+ years",
    specialization: "Luxury Properties",
    location: "Seattle, WA",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
    phone: "(555) 123-4567",
    email: "sarah.j@propertyfinder.com",
    bio: "With over a decade of experience in luxury real estate, Sarah has established herself as one of Seattle's premier real estate agents. Her deep understanding of the local market and commitment to client satisfaction have earned her numerous accolades.",
    stats: {
      totalSales: "50M+",
      activeListings: 45,
      soldLastYear: 72,
      averageRating: 4.9,
    },
    certifications: [
      "Certified Luxury Home Marketing Specialist",
      "Certified Residential Specialist",
      "Accredited Buyer's Representative",
    ],
    languages: ["English", "Spanish", "Mandarin"],
    recentListings: [
      {
        id: 1,
        title: "Modern Downtown Apartment",
        price: 450000,
        location: "Downtown, Seattle",
        image:
          "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 2,
        title: "Luxury Waterfront Villa",
        price: 1250000,
        location: "Waterfront, Miami",
        image:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
      },
    ],
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Agent Header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <img
                src={agent.image}
                alt={agent.name}
                className="w-32 h-32 rounded-full object-cover"
              />
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                  {agent.name}
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground mb-4">
                  {agent.title}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {agent.location}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-400" />
                    {agent.stats.averageRating} Rating
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <Button
              className="w-full"
              onClick={() => (window.location.href = `tel:${agent.phone}`)}
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Agent
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() =>
                (window.location.href = `mailto:${agent.email}?subject=Inquiry about properties&body=Hi ${agent.name}, I am interested in your listings. Please provide more details.`)
              }
            >
              <Mail className="h-4 w-4 mr-2" />
              Email Agent
            </Button>
          </div>
        </div>

        {/* Agent Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-4 text-center">
            <h3 className="text-lg font-semibold">${agent.stats.totalSales}</h3>
            <p className="text-sm text-muted-foreground">Total Sales</p>
          </Card>
          <Card className="p-4 text-center">
            <h3 className="text-lg font-semibold">
              {agent.stats.activeListings}
            </h3>
            <p className="text-sm text-muted-foreground">Active Listings</p>
          </Card>
          <Card className="p-4 text-center">
            <h3 className="text-lg font-semibold">
              {agent.stats.soldLastYear}
            </h3>
            <p className="text-sm text-muted-foreground">
              Properties Sold (2023)
            </p>
          </Card>
          <Card className="p-4 text-center">
            <h3 className="text-lg font-semibold">
              {agent.stats.averageRating}/5.0
            </h3>
            <p className="text-sm text-muted-foreground">Client Rating</p>
          </Card>
        </div>

        {/* Agent Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            {/* Bio */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">About {agent.name}</h2>
              <p className="text-muted-foreground">{agent.bio}</p>
            </Card>

            {/* Recent Listings */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Recent Listings</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {agent.recentListings.map((listing) => (
                  <Card key={listing.id} className="overflow-hidden">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold">{listing.title}</h3>
                      <p className="text-muted-foreground">
                        {listing.location}
                      </p>
                      <p className="text-lg font-semibold mt-2">
                        ${listing.price.toLocaleString()}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground">Phone</label>
                  <p>{agent.phone}</p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Email</label>
                  <p>{agent.email}</p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">
                    Office
                  </label>
                  <p>{agent.location}</p>
                </div>
              </div>
            </Card>

            {/* Certifications */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Certifications</h2>
              <ul className="space-y-2">
                {agent.certifications.map((cert, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-2 w-2 bg-primary rounded-full mr-2" />
                    {cert}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Languages */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Languages</h2>
              <div className="flex flex-wrap gap-2">
                {agent.languages.map((lang, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary rounded-full text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}