import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Search,
  MapPin,
  Building2,
  TrendingUp,
  Users,
  Home,
  Shield,
  Star,
  Clock,
  CheckCircle2,
  DollarSign,
  Briefcase,
  Award,
  Heart,
  Key,
  Quote,
  ArrowRight,
  PlayCircle,
  MessageCircle, // Chatbot icon
  X, // Close icon
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useNavigate } from 'react-router-dom';
import ChatBot from '@/Pages/chatbot';

const backgroundImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000"
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "First-time Homebuyer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
    quote: "Found my dream home in just two weeks! The platform made everything so simple."
  },
  {
    name: "Michael Chen",
    role: "Property Investor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
    quote: "The market insights helped me make informed investment decisions. Highly recommended!"
  },
  {
    name: "Emily Rodriguez",
    role: "Luxury Home Buyer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100",
    quote: "The premium listings and virtual tours saved me so much time in my home search."
  }
];

const featuredProperties = [
  {
    title: "Luxury Beachfront Villa",
    location: "Miami Beach, FL",
    price: "$2,500,000",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=600",
    badges: ["Premium", "Waterfront"]
  },
  {
    title: "Modern Downtown Loft",
    location: "New York, NY",
    price: "$1,750,000",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=600",
    badges: ["Featured", "City View"]
  },
  {
    title: "Mountain Retreat",
    location: "Aspen, CO",
    price: "$3,200,000",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=600",
    badges: ["Exclusive", "Mountain View"]
  }
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="relative">
      {/* Dynamic Hero Background */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Luxury property ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative">
        <div className="container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-6">
              <Badge variant="secondary" className="text-lg px-4 py-1">
                #1 Real Estate Platform
              </Badge>
              <Badge variant="outline" className="text-white border-white/20">
                Trusted by 10,000+ Clients
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Discover Your Perfect{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Dream Home
              </span>{' '}
              Today
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Join millions of happy homeowners who found their perfect property through our platform. 
              Expert guidance, premium listings, and a seamless experience await you.
            </p>

            <div className="flex gap-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                <Search className="mr-2 h-5 w-5" />
                <a href="/search">
                Start Your Search
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10">
                <PlayCircle className="mr-2 h-5 w-5" />
                <a href="https://youtu.be/C0l8V6NZIb4?si=Vx9UN63vLwb2__up">
                Watch Video Tour
                </a>
              </Button>
            </div>

            {/* Search Box */}
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-2xl mb-16">
              <div className="grid gap-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Enter location"
                      className="pl-10"
                    />
                  </div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="penthouse">Penthouse</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Price Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-250000">$0 - $250,000</SelectItem>
                      <SelectItem value="250000-500000">$250,000 - $500,000</SelectItem>
                      <SelectItem value="500000-750000">$500,000 - $750,000</SelectItem>
                      <SelectItem value="750000-1000000">$750,000 - $1M</SelectItem>
                      <SelectItem value="1000000+">$1M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Bedrooms" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1+ Bedroom</SelectItem>
                      <SelectItem value="2">2+ Bedrooms</SelectItem>
                      <SelectItem value="3">3+ Bedrooms</SelectItem>
                      <SelectItem value="4">4+ Bedrooms</SelectItem>
                      <SelectItem value="5">5+ Bedrooms</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Property Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sale">For Sale</SelectItem>
                      <SelectItem value="rent">For Rent</SelectItem>
                      <SelectItem value="new">New Launch</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full h-full" size="lg">
                    <Search className="h-4 w-4 mr-2" />
                    Search Properties
                  </Button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white mb-16">
              <div className="text-center transform hover:scale-105 transition-transform duration-200">
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                  <Building2 className="h-8 w-8 mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-1">1,500+</div>
                  <div className="text-sm">Active Listings</div>
                </div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-200">
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                  <Users className="h-8 w-8 mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-1">2,000+</div>
                  <div className="text-sm">Happy Clients</div>
                </div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-200">
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                  <Home className="h-8 w-8 mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-1">150+</div>
                  <div className="text-sm">Cities Covered</div>
                </div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-200">
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                  <Shield className="h-8 w-8 mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-1">10+ Years</div>
                  <div className="text-sm">Experience</div>
                </div>
              </div>
            </div>

            {/* Featured Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                <Home className="mr-2 h-4 w-4" /> Residential
              </Button>
              <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                <Briefcase className="mr-2 h-4 w-4" /> Commercial
              </Button>
              <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                <Key className="mr-2 h-4 w-4" /> Rental
              </Button>
              <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                <Heart className="mr-2 h-4 w-4" /> Luxury
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties Section */}
      <div className="relative bg-background/80 backdrop-blur-sm py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <Badge variant="outline" className="mb-4">Featured Properties</Badge>
              <h2 className="text-3xl font-bold">Exclusive Listings</h2>
            </div>
            <Button variant="outline">
              <a href="/properties">
              View All <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8" onClick={() => navigate("/properties")}>
            {featuredProperties.map((property, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {property.badges.map((badge, badgeIndex) => (
                      <Badge key={badgeIndex} variant="secondary">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{property.location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">{property.price}</span>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative bg-primary/5 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our satisfied customers about their experience finding their dream homes through our platform.
            </p>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-background/50 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center text-center">
                        <Quote className="h-8 w-8 text-primary mb-6" />
                        <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full mb-4"
                        />
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Why Choose Us</Badge>
            <h2 className="text-4xl font-bold mb-4">Experience the Difference</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technology with personalized service to deliver 
              an unmatched real estate experience tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="transform hover:scale-105 transition-all duration-200">
              <CardContent className="pt-6">
                <div className="text-center p-6">
                  <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Smart Search</h3>
                  <p className="text-muted-foreground">
                    Advanced filters and AI-powered recommendations to help you find your perfect property match.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="transform hover:scale-105 transition-all duration-200">
              <CardContent className="pt-6">
                <div className="text-center p-6">
                  <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Market Analysis</h3>
                  <p className="text-muted-foreground">
                    Real-time market insights and property valuations to make informed investment decisions.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="transform hover:scale-105 transition-all duration-200">
              <CardContent className="pt-6">
                <div className="text-center p-6">
                  <div className="bg-primary/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Expert Agents</h3>
                  <p className="text-muted-foreground">
                    Professional and experienced agents available 24/7 to guide you through every step.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Features */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3 p-4">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              <span>Virtual Tours</span>
            </div>
            <div className="flex items-center space-x-3 p-4">
              <Star className="h-6 w-6 text-primary" />
              <span>Premium Listings</span>
            </div>
            <div className="flex items-center space-x-3 p-4">
              <Clock className="h-6 w-6 text-primary" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-3 p-4">
              <Award className="h-6 w-6 text-primary" />
              <span>Trusted Partners</span>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h3>
            <p className="mb-8 max-w-2xl mx-auto text-white/90">
              Join thousands of satisfied customers who found their perfect property through our platform.
              Start your journey today!
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" variant="secondary"onClick={()=>navigate("/properties")}>
                <Search className="mr-2 h-4 w-4" />
                Start Searching
              </Button>
              <Button onClick={()=>navigate("/call")}  variant="outline" size="lg" className="text-white border-white hover:bg-white/20">
                <Users className="mr-2 h-4 w-4" />
                Contact Agent
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot Button */}
     

      <ChatBot className="fixed"/>
    </div>
  );
}