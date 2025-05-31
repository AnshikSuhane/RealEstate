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
  MessageCircle,
  X,
  Filter,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useNavigate } from 'react-router-dom';
import ChatBot from '@/Pages/chatbot';
import { Slider } from '@/components/ui/slider';

const backgroundImages = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=compress&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=compress&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=compress&fit=crop&q=80&w=2000"
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [filters, setFilters] = useState({
    location: '',
    propertyType: '',
    priceRange: '',
    bedrooms: '',
    bathrooms: '',
    propertyStatus: '',
    minArea: 0,
    maxArea: 5000,
    amenities: [],
    yearBuilt: '',
  });

  const amenitiesOptions = [
    'Swimming Pool',
    'Gym',
    'Garden',
    'Parking',
    'Security',
    'Elevator',
    'Balcony',
    'Air Conditioning'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    // Convert filters to URL parameters
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        params.append(key, value);
      }
    });
    navigate(`/properties?${params.toString()}`);
  };

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="relative">
      {/* Background Images */}
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
        <div className="container mx-auto px-4 py-16 lg:py-32">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Badge variant="secondary" className="text-sm md:text-lg px-3 md:px-4 py-1">
                #1 Real Estate Platform
              </Badge>
              <Badge variant="outline" className="text-sm md:text-lg text-white border-white/20">
                Trusted by 10,000+ Clients
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Find Your Perfect{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Dream Home
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Join millions of happy homeowners who found their perfect property through our platform. 
              Expert guidance, premium listings, and a seamless experience await you.
            </p>

            {/* Search Box */}
            <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-2xl mb-16">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Property Search</h2>
                <Button
                  variant="outline"
                  onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                  className="flex items-center gap-2"
                >
                  <Filter className="h-4 w-4" />
                  {showAdvancedFilters ? 'Hide' : 'Show'} Advanced Filters
                </Button>
              </div>

              <div className="grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Enter location"
                      className="pl-10"
                      value={filters.location}
                      onChange={(e) => handleFilterChange('location', e.target.value)}
                    />
                  </div>
                  <Select
                    value={filters.propertyType}
                    onValueChange={(value) => handleFilterChange('propertyType', value)}
                  >
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
                  <Select
                    value={filters.priceRange}
                    onValueChange={(value) => handleFilterChange('priceRange', value)}
                  >
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

                {showAdvancedFilters && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t">
                    <Select
                      value={filters.bedrooms}
                      onValueChange={(value) => handleFilterChange('bedrooms', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Bedrooms" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num}+ Bedrooms
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select
                      value={filters.bathrooms}
                      onValueChange={(value) => handleFilterChange('bathrooms', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Bathrooms" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num}+ Bathrooms
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <Select
                      value={filters.yearBuilt}
                      onValueChange={(value) => handleFilterChange('yearBuilt', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Year Built" />
                      </SelectTrigger>
                      <SelectContent>
                        {[2020, 2015, 2010, 2005, 2000].map((year) => (
                          <SelectItem key={year} value={year.toString()}>
                            After {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <div className="col-span-full">
                      <label className="block text-sm font-medium mb-2">Area Range (sq ft)</label>
                      <div className="flex items-center gap-4">
                        <Input
                          type="number"
                          placeholder="Min"
                          value={filters.minArea}
                          onChange={(e) => handleFilterChange('minArea', e.target.value)}
                          className="w-1/2"
                        />
                        <Input
                          type="number"
                          placeholder="Max"
                          value={filters.maxArea}
                          onChange={(e) => handleFilterChange('maxArea', e.target.value)}
                          className="w-1/2"
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label className="block text-sm font-medium mb-2">Amenities</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {amenitiesOptions.map((amenity) => (
                          <label key={amenity} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={filters.amenities.includes(amenity)}
                              onChange={(e) => {
                                const newAmenities = e.target.checked
                                  ? [...filters.amenities, amenity]
                                  : filters.amenities.filter(a => a !== amenity);
                                handleFilterChange('amenities', newAmenities);
                              }}
                              className="rounded border-gray-300"
                            />
                            <span className="text-sm">{amenity}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <Button
                  className="w-full md:w-auto md:ml-auto mt-4"
                  onClick={handleSearch}
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search Properties
                </Button>
              </div>
            </div>

            {/* Rest of the Hero section content remains unchanged */}
            {/* ... */}
          </div>
        </div>
      </div>

      {/* ChatBot */}
      <ChatBot className="fixed bottom-4 right-4" />
    </div>
  );
}