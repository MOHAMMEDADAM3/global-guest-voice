import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Star, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary-foreground"
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              ✈️ International Traveler Reviews
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Share Your
              <span className="block text-accent">Travel Stories</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl">
              Help fellow travelers by sharing your authentic experiences. Your feedback shapes better journeys for millions of adventurers worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/feedback">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8">
                  Submit Feedback
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/destinations">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Explore Destinations
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="text-2xl md:text-3xl font-bold">10K+</span>
                </div>
                <p className="text-sm text-primary-foreground/70">Travelers</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <MessageSquare className="w-5 h-5 text-accent" />
                  <span className="text-2xl md:text-3xl font-bold">25K+</span>
                </div>
                <p className="text-sm text-primary-foreground/70">Reviews</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Star className="w-5 h-5 text-accent" />
                  <span className="text-2xl md:text-3xl font-bold">4.8</span>
                </div>
                <p className="text-sm text-primary-foreground/70">Avg Rating</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&h=700&fit=crop"
                alt="International travelers enjoying their journey"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              
              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 bottom-20 bg-card p-4 rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Star className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">5-Star Reviews</p>
                    <p className="text-sm text-muted-foreground">From real travelers</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
