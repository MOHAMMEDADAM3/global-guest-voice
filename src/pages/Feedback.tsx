import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import StarRating from "@/components/ui/StarRating";
import { toast } from "sonner";
import { Send, Shield, CheckCircle } from "lucide-react";

const feedbackSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters").optional().or(z.literal("")),
  email: z.string().email("Please enter a valid email").max(100, "Email must be less than 100 characters").optional().or(z.literal("")),
  destination: z.string().min(2, "Please select or enter a destination").max(100, "Destination must be less than 100 characters"),
  travelDate: z.string().min(1, "Please select when you traveled"),
  category: z.string().min(1, "Please select a category"),
  title: z.string().min(5, "Title must be at least 5 characters").max(100, "Title must be less than 100 characters"),
  review: z.string().min(20, "Review must be at least 20 characters").max(1000, "Review must be less than 1000 characters"),
});

type FeedbackForm = z.infer<typeof feedbackSchema>;

const destinations = [
  "Paris, France",
  "Tokyo, Japan",
  "New York City, USA",
  "Bali, Indonesia",
  "Dubai, UAE",
  "Rome, Italy",
  "Sydney, Australia",
  "Marrakech, Morocco",
  "Other",
];

const categories = [
  "Accommodation",
  "Transportation",
  "Food & Dining",
  "Attractions",
  "Local Experience",
  "Safety",
  "Overall Trip",
];

const Feedback = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FeedbackForm>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: "",
      email: "",
      destination: "",
      travelDate: "",
      category: "",
      title: "",
      review: "",
    },
  });

  const onSubmit = (data: FeedbackForm) => {
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }

    console.log("Feedback submitted:", { ...data, rating, isAnonymous });
    setIsSubmitted(true);
    toast.success("Thank you! Your feedback has been submitted successfully.");
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20 min-h-[80vh] flex items-center justify-center bg-muted">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-8"
          >
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Thank You!
            </h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Your feedback has been submitted successfully. Your voice helps fellow travelers make better decisions.
            </p>
            <Button onClick={() => setIsSubmitted(false)} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Submit Another Review
            </Button>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-16 hero-gradient">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center text-primary-foreground"
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Share Your Experience
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Help fellow travelers by sharing your honest feedback and reviews.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Feedback Form */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Feedback Form</CardTitle>
                  <CardDescription>
                    Fill out the form below to share your travel experience. All fields marked with * are required.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Anonymous Toggle */}
                      <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <Shield className="w-5 h-5 text-accent" />
                          <div>
                            <p className="font-medium text-foreground">Submit Anonymously</p>
                            <p className="text-sm text-muted-foreground">Your identity will be hidden</p>
                          </div>
                        </div>
                        <Switch checked={isAnonymous} onCheckedChange={setIsAnonymous} />
                      </div>

                      {/* Personal Info (only if not anonymous) */}
                      {!isAnonymous && (
                        <div className="grid sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Your Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="john@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      )}

                      {/* Destination */}
                      <FormField
                        control={form.control}
                        name="destination"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Destination *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a destination" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {destinations.map((dest) => (
                                  <SelectItem key={dest} value={dest}>
                                    {dest}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Travel Date & Category */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="travelDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>When did you travel? *</FormLabel>
                              <FormControl>
                                <Input type="month" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Category *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select category" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {categories.map((cat) => (
                                    <SelectItem key={cat} value={cat}>
                                      {cat}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Rating */}
                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">
                          Your Rating *
                        </label>
                        <StarRating rating={rating} size="lg" interactive onChange={setRating} />
                        <p className="text-sm text-muted-foreground mt-1">
                          {rating === 0
                            ? "Click to rate"
                            : `You rated ${rating} out of 5 stars`}
                        </p>
                      </div>

                      {/* Title */}
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Review Title *</FormLabel>
                            <FormControl>
                              <Input placeholder="Summarize your experience in a few words" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Review */}
                      <FormField
                        control={form.control}
                        name="review"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Review *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Share the details of your experience. What did you enjoy? What could be improved?"
                                rows={6}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Submit Button */}
                      <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        <Send className="w-5 h-5 mr-2" />
                        Submit Feedback
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Feedback;
