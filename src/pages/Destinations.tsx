import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import StarRating from "@/components/ui/StarRating";
import { Search, MapPin, Users } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 1250,
    description: "The City of Light beckons with its iconic Eiffel Tower, world-class museums, and charming cafés.",
    category: "Europe",
  },
  {
    id: 2,
    name: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop",
    rating: 4.9,
    reviews: 980,
    description: "A mesmerizing blend of ancient traditions and cutting-edge technology in Japan's vibrant capital.",
    category: "Asia",
  },
  {
    id: 3,
    name: "New York City, USA",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 2100,
    description: "The city that never sleeps offers endless entertainment, dining, and cultural experiences.",
    category: "North America",
  },
  {
    id: 4,
    name: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop",
    rating: 4.6,
    reviews: 890,
    description: "Tropical paradise with stunning beaches, lush rice terraces, and spiritual temples.",
    category: "Asia",
  },
  {
    id: 5,
    name: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop",
    rating: 4.5,
    reviews: 1560,
    description: "Futuristic city of superlatives featuring luxury shopping, ultramodern architecture, and desert adventures.",
    category: "Middle East",
  },
  {
    id: 6,
    name: "Rome, Italy",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=300&fit=crop",
    rating: 4.8,
    reviews: 1100,
    description: "Ancient history meets Italian charm in this eternal city of art, architecture, and incredible cuisine.",
    category: "Europe",
  },
  {
    id: 7,
    name: "Sydney, Australia",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=300&fit=crop",
    rating: 4.7,
    reviews: 750,
    description: "Harbor city with iconic Opera House, beautiful beaches, and a vibrant multicultural scene.",
    category: "Oceania",
  },
  {
    id: 8,
    name: "Marrakech, Morocco",
    image: "https://images.unsplash.com/photo-1518544866330-95a2ab6f978d?w=400&h=300&fit=crop",
    rating: 4.4,
    reviews: 620,
    description: "Exotic destination with bustling souks, stunning palaces, and magical desert experiences.",
    category: "Africa",
  },
];

const categories = ["All", "Europe", "Asia", "North America", "Middle East", "Oceania", "Africa"];

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDestinations = destinations.filter((dest) => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || dest.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-20 hero-gradient">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center text-primary-foreground"
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Explore Destinations
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Discover amazing places through the eyes of fellow travelers. Find your next adventure.
              </p>

              {/* Search */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-6 rounded-full bg-card text-foreground"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters & Grid */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Destinations Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDestinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="group overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 cursor-pointer">
                    <div className="relative overflow-hidden">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-foreground">
                        {destination.category}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                          {destination.name}
                        </h3>
                        <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {destination.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <StarRating rating={Math.round(destination.rating)} size="sm" />
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span>{destination.reviews}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredDestinations.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No destinations found. Try a different search.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Destinations;
