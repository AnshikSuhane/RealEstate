import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

const agents = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Real Estate Agent",
    experience: "10+ years",
    specialization: "Luxury Properties",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    listings: 45,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Real Estate Consultant",
    experience: "8 years",
    specialization: "Commercial Properties",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    listings: 32,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Residential Property Expert",
    experience: "5 years",
    specialization: "First-time Buyers",
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    listings: 28,
    rating: 4.7,
  },
  {
    id: 4,
    name: "David Kim",
    title: "Property Investment Specialist",
    experience: "12 years",
    specialization: "Investment Properties",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    listings: 52,
    rating: 4.9,
  },
];

export default function Agents() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Our Real Estate Agents</h1>
            <p className="text-muted-foreground">
              Find the perfect agent to help you with your real estate journey
            </p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search agents..."
                className="pl-10"
              />
            </div>
            <Button variant="outline">Filter</Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {agents.map((agent) => (
            <Card key={agent.id} className="p-6">
              <div className="text-center mb-4">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg">{agent.name}</h3>
                <p className="text-sm text-muted-foreground">{agent.title}</p>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Experience:</span>
                  <span>{agent.experience}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Specialization:</span>
                  <span>{agent.specialization}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Location:</span>
                  <span>{agent.location}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Active Listings:</span>
                  <span>{agent.listings}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Rating:</span>
                  <span>⭐️ {agent.rating}/5.0</span>
                </div>
              </div>

              <div className="space-y-2">
                <Button className="w-full">View Profile</Button>
                <Button variant="outline" className="w-full">Contact</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}