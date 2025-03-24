import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  // ... (keep the existing blogPosts array)
];

const categories = [
  "All Categories",
  "Interior Design",
  "Home Improvement",
  "Buying Guide",
  "Market Trends",
  "Sustainability",
  "Real Estate Tips",
];

export default function Blog() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              PropertyFinder Blog
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Expert insights, tips, and trends in real estate
            </p>
          </div>
          <div className="w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10 w-full"
              />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className="whitespace-nowrap text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <Card className="mb-12 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="relative h-48 md:h-64 md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Featured Post"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:w-1/2">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Featured
                </span>
                <span className="text-sm text-muted-foreground">
                  March 20, 2024
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                The Future of Smart Homes: Integration of AI in Real Estate
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-6">
                Explore how artificial intelligence is revolutionizing home automation
                and changing the way we interact with our living spaces. From
                predictive maintenance to energy optimization...
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
                    alt="Author"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">Robert Wilson</p>
                    <p className="text-sm text-muted-foreground">Tech Analyst</p>
                  </div>
                </div>
                <Button className="w-full sm:w-auto">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium">{post.author.name}</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Read More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
}