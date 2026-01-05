import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email").max(100, "Email must be less than 100 characters"),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(100, "Subject must be less than 100 characters"),
  message: z.string().min(20, "Message must be at least 20 characters").max(500, "Message must be less than 500 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@travelvoice.com",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 86399 75852",
    description: "Mon-Fri, 9am-6pm IST",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "123 Travel Street",
    description: "Adventure City, World 12345",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Within 24 hours",
    description: "We'll get back to you soon",
  },
];

const Contact = () => {
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactForm) => {
    console.log("Contact form submitted:", data);
    toast.success("Thank you for your message! We'll get back to you soon.");
    form.reset();
  };

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
                Get In Touch
              </h1>
              <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                Have questions or suggestions? We'd love to hear from you. Our team is here to help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="card-shadow">
                  <CardContent className="p-6 md:p-8">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                      Send Us a Message
                    </h2>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Your Name *</FormLabel>
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
                                <FormLabel>Email Address *</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="john@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject *</FormLabel>
                              <FormControl>
                                <Input placeholder="How can we help you?" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Message *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us more about your inquiry..."
                                  rows={5}
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Info & Map */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Contact Info Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {contactInfo.map((info, index) => (
                    <Card key={info.title} className="card-shadow">
                      <CardContent className="p-5 flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{info.title}</h3>
                          <p className="text-foreground font-medium">{info.value}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Google Map */}
                <Card className="card-shadow overflow-hidden">
                  <div className="aspect-video">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5773461716544!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1704456789012!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="TravelVoice Location"
                    ></iframe>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
