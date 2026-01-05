import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import StarRating from "@/components/ui/StarRating";
import { Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    country: "United States",
    destination: "Paris, France",
    rating: 5,
    review: "An absolutely magical experience! The city exceeded all expectations. From the Eiffel Tower to local cafes, every moment was unforgettable.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    date: "2 days ago",
  },
  {
    id: 2,
    name: "Marco Rodriguez",
    country: "Spain",
    destination: "Tokyo, Japan",
    rating: 5,
    review: "The perfect blend of ancient traditions and modern innovation. The food scene is incredible, and the people are so welcoming!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    date: "1 week ago",
  },
  {
    id: 3,
    name: "Emma Chen",
    country: "Canada",
    destination: "Bali, Indonesia",
    rating: 4,
    review: "Breathtaking landscapes and spiritual experiences. The rice terraces and temples are must-sees. Highly recommend for relaxation.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    date: "2 weeks ago",
  },
];

const FeaturedReviews = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Traveler Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real experiences from real travelers around the world. These authentic reviews help shape better journeys.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full card-shadow hover:card-shadow-hover transition-shadow duration-300">
                <CardContent className="p-6">
                  <Quote className="w-10 h-10 text-accent/30 mb-4" />
                  <p className="text-foreground mb-6 leading-relaxed">
                    "{review.review}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      <p className="text-sm text-muted-foreground">{review.country}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">{review.destination}</p>
                      <StarRating rating={review.rating} size="sm" />
                    </div>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedReviews;
