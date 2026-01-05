import { motion } from "framer-motion";
import { Shield, Star, BarChart3, Globe, MessageSquarePlus, Users } from "lucide-react";

const features = [
  {
    icon: MessageSquarePlus,
    title: "Easy Feedback Submission",
    description: "Share your travel experiences with our simple and intuitive feedback form. Anonymous or logged-in options available.",
  },
  {
    icon: Star,
    title: "5-Star Rating System",
    description: "Rate your experiences from 1 to 5 stars across multiple categories for comprehensive reviews.",
  },
  {
    icon: Shield,
    title: "Anonymous Reviews",
    description: "Share honest feedback without revealing your identity. Your privacy is our priority.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Administrators can view detailed analytics and insights from collected feedback data.",
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "Connect with travelers from around the world and discover new destinations through their eyes.",
  },
  {
    icon: Users,
    title: "Trusted Reviews",
    description: "All reviews are verified to ensure authentic and helpful feedback for fellow travelers.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Platform Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Designed to make sharing and discovering travel experiences effortless and meaningful.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 card-shadow hover:card-shadow-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
