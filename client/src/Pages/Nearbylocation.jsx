/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Home, School, Shield, Coffee,  } from 'lucide-react';

export default function Nearby() {
  const { id } = useParams();
    const navigate=useNavigate()
  
  const neighborhood = {
    id: 1,
    name: "Downtown Seattle",
    description: "A vibrant urban center featuring modern condos, historic buildings, and endless entertainment options. Experience city living at its finest with easy access to public transit, diverse dining, and cultural attractions.",
    image: "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?auto=format&fit=crop&w=2000&q=80",
    stats: {
      population: "88,000",
      avgPrice: 750000,
      avgRent: 2800,
      schools: 4.5,
      safety: 4.2,
      transit: 4.8
    },
    amenities: [
      "Multiple Transit Stations",
      "Public Parks",
      "Shopping Centers",
      "Restaurants & Cafes",
      "Art Galleries",
      "Fitness Centers",
      "Public Library",
      "Medical Facilities"
    ],
    properties: [
      {
        id: 1,
        title: "Modern Downtown Apartment",
        price: 450000,
        type: "Apartment",
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80",
      },
      {
        id: 2,
        title: "Luxury High-Rise Condo",
        price: 850000,
        type: "Condo",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
      }
    ]
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img
          src={neighborhood.image}
          alt={neighborhood.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-white mb-2">{neighborhood.name}</h1>
            <div className="flex items-center text-white/90">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Seattle, Washington</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {/* Overview */}
            <Card className="p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Neighborhood Overview</h2>
              <p className="text-muted-foreground">{neighborhood.description}</p>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <Card className="p-4 text-center">
                <Home className="h-6 w-6 mx-auto mb-2" />
                <div className="text-lg font-semibold">
                  ${(neighborhood.stats.avgPrice / 1000000).toFixed(1)}M
                </div>
                <div className="text-sm text-muted-foreground">Avg Home Price</div>
              </Card>
              <Card className="p-4 text-center">
                <School className="h-6 w-6 mx-auto mb-2" />
                <div className="text-lg font-semibold">{neighborhood.stats.schools}/5.0</div>
                <div className="text-sm text-muted-foreground">School Rating</div>
              </Card>
              <Card className="p-4 text-center">
                <Shield className="h-6 w-6 mx-auto mb-2" />
                <div className="text-lg font-semibold">{neighborhood.stats.safety}/5.0</div>
                <div className="text-sm text-muted-foreground">Safety Score</div>
              </Card>
            </div>

            {/* Tabs Content */}
            <Tabs defaultValue="lifestyle">
              <TabsList className="mb-4">
                <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
                <TabsTrigger value="properties">Properties</TabsTrigger>
                <TabsTrigger value="schools">Schools</TabsTrigger>
                <TabsTrigger value="transit">Transit</TabsTrigger>
              </TabsList>

              <TabsContent value="lifestyle">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Local Amenities</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {neighborhood.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Coffee className="h-4 w-4" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="properties">
                <div className="grid md:grid-cols-2 gap-4">
                  {neighborhood.properties.map((property) => (
                    <Card key={property.id} className="overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold">{property.title}</h3>
                        <p className="text-muted-foreground">{property.type}</p>
                        <p className="text-lg font-semibold mt-2">
                          ${property.price.toLocaleString()}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="schools">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Education</h3>
                  <p className="text-muted-foreground">
                    Information about local schools and educational facilities...
                  </p>
                </Card>
              </TabsContent>

              <TabsContent value="transit">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Transportation</h3>
                  <p className="text-muted-foreground">
                    Details about public transportation and commute times...
                  </p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground">Population</label>
                  <p className="font-semibold">{neighborhood.stats.population}</p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Average Rent</label>
                  <p className="font-semibold">${neighborhood.stats.avgRent}/month</p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Transit Score</label>
                  <p className="font-semibold">{neighborhood.stats.transit}/5.0</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Explore Area</h3>
              <div className="space-y-4">
                <Button className="w-full" onClick={()=>navigate("/properties")}>View Properties</Button>
                <Button variant="outline" className="w-full">Contact Agent</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}