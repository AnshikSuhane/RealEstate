import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, ArrowRight } from 'lucide-react';


    const blogPosts = [
        {
          id: 1,
          title: "Top Interior Design Trends for 2024",
          excerpt: "Discover the latest interior design trends that are transforming homes this year. From sustainable materials to smart home integration...",
          category: "Interior Design",
          image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
          author: {
            name: "Emily Rodriguez",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
          },
          date: "2024-03-15",
          readTime: "5 min read"
        },
        {
          id: 2,
          title: "How to Increase Your Home's Value",
          excerpt: "Learn effective strategies to boost your property's market value through smart renovations and improvements that offer the best return on investment...",
          category: "Home Improvement",
          image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80",
          author: {
            name: "Michael Chen",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
          },
          date: "2024-03-12",
          readTime: "7 min read"
        },
        {
          id: 3,
          title: "First-Time Homebuyer's Guide",
          excerpt: "Everything you need to know about buying your first home, from saving for a down payment to closing the deal. Expert advice for navigating the process...",
          category: "Buying Guide",
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80",
          author: {
            name: "Sarah Johnson",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
          },
          date: "2024-03-10",
          readTime: "10 min read"
        },
        {
          id: 4,
          title: "Sustainable Home Features That Save Money",
          excerpt: "Explore eco-friendly home improvements that not only help the environment but also reduce your monthly utility bills...",
          category: "Sustainability",
          image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
          author: {
            name: "David Kim",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
          },
          date: "2024-03-08",
          readTime: "6 min read"
        },
        {
          id: 5,
          title: "Maximizing Small Spaces: Creative Storage Solutions",
          excerpt: "Discover innovative ways to make the most of small spaces with clever storage solutions that combine functionality and style...",
          category: "Interior Design",
          image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80",
          author: {
            name: "Laura Smith",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
          },
          date: "2024-03-05",
          readTime: "8 min read"
        },
        {
          id: 6,
          title: "The Ultimate Guide to Kitchen Remodeling",
          excerpt: "Planning a kitchen remodel? Learn how to design a functional and stylish kitchen that fits your budget and lifestyle...",
          category: "Home Improvement",
          image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
          author: {
            name: "James Wilson",
            avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80"
          },
          date: "2024-03-01",
          readTime: "12 min read"
        },
        {
          id: 7,
          title: "The Benefits of Smart Home Technology",
          excerpt: "From energy efficiency to enhanced security, explore how smart home technology can improve your daily life...",
          category: "Technology",
          image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&w=1000&q=80",
          author: {
            name: "Olivia Brown",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
          },
          date: "2024-02-28",
          readTime: "9 min read"
        },
        {
          id: 8,
          title: "Outdoor Living: Designing the Perfect Patio",
          excerpt: "Transform your outdoor space into a relaxing retreat with tips on furniture, lighting, and landscaping...",
          category: "Outdoor Living",
          image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80",
          author: {
            name: "Daniel Martinez",
            avatar: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?auto=format&fit=crop&w=150&q=80"
          },
          date: "2024-02-25",
          readTime: "7 min read"
        },
        {
          id: 9,
          title: "The Rise of Minimalist Home Design",
          excerpt: "Learn how minimalist design principles can create a calm, clutter-free, and aesthetically pleasing home environment...",
          category: "Interior Design",
          image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
          author: {
            name: "Sophia Lee",
            avatar: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=150&q=80"
          },
          date: "2024-02-20",
          readTime: "6 min read"
        },
        {
          id: 10,
          title: "Energy-Efficient Windows: What You Need to Know",
          excerpt: "Upgrade your home with energy-efficient windows to save on heating and cooling costs while improving comfort...",
          category: "Sustainability",
          image: "https://images.unsplash.com/photo-1612376697623-1866f779b470?auto=format&fit=crop&w=1000&q=80",
          author: {
            name: "Ethan Harris",
            avatar: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=150&q=80"
          },
          date: "2024-02-18",
          readTime: "8 min read"
        }
      ];

const categories = [
  "All Categories",
  "Interior Design",
  "Home Improvement",
  "Buying Guide",
  "Market Trends",
  "Sustainability",
  "Real Estate Tips"
];

export default function Blog() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">PropertyFinder Blog</h1>
            <p className="text-muted-foreground">
              Expert insights, tips, and trends in real estate
            </p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
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
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <Card className="mb-12 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-full">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                alt="Featured Post"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Featured
                </span>
                <span className="text-sm text-muted-foreground">March 20, 2024</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                The Future of Smart Homes: Integration of AI in Real Estate
              </h2>
              <p className="text-muted-foreground mb-6">
                Explore how artificial intelligence is revolutionizing home automation and
                changing the way we interact with our living spaces. From predictive
                maintenance to energy optimization...
              </p>
              <div className="flex items-center justify-between">
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
                <Button>
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
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