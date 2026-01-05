import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl hero-gradient p-8 md:p-16 text-center"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Your Voice Matters</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto">
              Ready to Share Your Travel Experience?
            </h2>

            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Help millions of travelers make informed decisions. Your feedback shapes the future of travel experiences worldwide.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/feedback">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8">
                  Submit Your Review
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
