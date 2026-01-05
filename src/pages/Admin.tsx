import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StarRating from "@/components/ui/StarRating";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import { MessageSquare, Star, TrendingUp, Users, Calendar, MapPin } from "lucide-react";

// Sample data for analytics
const monthlyReviews = [
  { month: "Jan", reviews: 45 },
  { month: "Feb", reviews: 62 },
  { month: "Mar", reviews: 78 },
  { month: "Apr", reviews: 95 },
  { month: "May", reviews: 112 },
  { month: "Jun", reviews: 134 },
];

const ratingDistribution = [
  { rating: "5 Stars", count: 450, color: "#f59e0b" },
  { rating: "4 Stars", count: 280, color: "#fbbf24" },
  { rating: "3 Stars", count: 120, color: "#fcd34d" },
  { rating: "2 Stars", count: 35, color: "#fde68a" },
  { rating: "1 Star", count: 15, color: "#fef3c7" },
];

const categoryData = [
  { category: "Accommodation", reviews: 180 },
  { category: "Food & Dining", reviews: 220 },
  { category: "Transportation", reviews: 145 },
  { category: "Attractions", reviews: 195 },
  { category: "Local Experience", reviews: 160 },
];

const recentFeedback = [
  {
    id: 1,
    name: "Sarah J.",
    destination: "Paris, France",
    rating: 5,
    title: "Magical experience!",
    date: "2 hours ago",
    anonymous: false,
  },
  {
    id: 2,
    name: "Anonymous",
    destination: "Tokyo, Japan",
    rating: 4,
    title: "Great food, crowded streets",
    date: "5 hours ago",
    anonymous: true,
  },
  {
    id: 3,
    name: "Michael R.",
    destination: "Bali, Indonesia",
    rating: 5,
    title: "Paradise on Earth",
    date: "1 day ago",
    anonymous: false,
  },
  {
    id: 4,
    name: "Anonymous",
    destination: "Dubai, UAE",
    rating: 3,
    title: "Expensive but impressive",
    date: "1 day ago",
    anonymous: true,
  },
  {
    id: 5,
    name: "Emma C.",
    destination: "Rome, Italy",
    rating: 5,
    title: "History and food lovers dream",
    date: "2 days ago",
    anonymous: false,
  },
];

const stats = [
  { title: "Total Reviews", value: "25,430", icon: MessageSquare, change: "+12%" },
  { title: "Average Rating", value: "4.6", icon: Star, change: "+0.2" },
  { title: "Active Users", value: "10,250", icon: Users, change: "+8%" },
  { title: "This Month", value: "1,234", icon: TrendingUp, change: "+15%" },
];

const Admin = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-8 md:py-12 hero-gradient">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary-foreground"
            >
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">
                Admin Dashboard
              </h1>
              <p className="text-primary-foreground/80">
                Monitor feedback analytics and manage reviews
              </p>
            </motion.div>
          </div>
        </section>

        {/* Dashboard Content */}
        <section className="py-8 md:py-12 bg-muted">
          <div className="container mx-auto px-4">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="card-shadow">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex items-center justify-between mb-2">
                        <stat.icon className="w-5 h-5 text-accent" />
                        <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                          {stat.change}
                        </span>
                      </div>
                      <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="bg-card border border-border">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="feedback">Recent Feedback</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Monthly Reviews Chart */}
                  <Card className="card-shadow">
                    <CardHeader>
                      <CardTitle className="font-display text-lg">Monthly Reviews</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={monthlyReviews}>
                            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                            <YAxis stroke="hsl(var(--muted-foreground))" />
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: "hsl(var(--card))", 
                                border: "1px solid hsl(var(--border))",
                                borderRadius: "8px"
                              }}
                            />
                            <Line
                              type="monotone"
                              dataKey="reviews"
                              stroke="hsl(var(--accent))"
                              strokeWidth={3}
                              dot={{ fill: "hsl(var(--accent))", strokeWidth: 2 }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Rating Distribution */}
                  <Card className="card-shadow">
                    <CardHeader>
                      <CardTitle className="font-display text-lg">Rating Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={ratingDistribution}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={100}
                              paddingAngle={2}
                              dataKey="count"
                            >
                              {ratingDistribution.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip 
                              contentStyle={{ 
                                backgroundColor: "hsl(var(--card))", 
                                border: "1px solid hsl(var(--border))",
                                borderRadius: "8px"
                              }}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center mt-4">
                        {ratingDistribution.map((item) => (
                          <div key={item.rating} className="flex items-center gap-1 text-sm">
                            <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }} />
                            <span className="text-muted-foreground">{item.rating}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Category Reviews */}
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle className="font-display text-lg">Reviews by Category</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[250px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={categoryData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                          <XAxis dataKey="category" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                          <YAxis stroke="hsl(var(--muted-foreground))" />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: "hsl(var(--card))", 
                              border: "1px solid hsl(var(--border))",
                              borderRadius: "8px"
                            }}
                          />
                          <Bar dataKey="reviews" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="feedback">
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle className="font-display text-lg">Recent Feedback</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentFeedback.map((feedback) => (
                        <div
                          key={feedback.id}
                          className="flex items-start gap-4 p-4 bg-muted rounded-lg"
                        >
                          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                            <span className="font-semibold text-accent">
                              {feedback.anonymous ? "?" : feedback.name.charAt(0)}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <h4 className="font-semibold text-foreground truncate">
                                {feedback.name}
                              </h4>
                              <span className="text-xs text-muted-foreground whitespace-nowrap">
                                {feedback.date}
                              </span>
                            </div>
                            <p className="text-sm text-foreground mb-1">{feedback.title}</p>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-3 h-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">
                                {feedback.destination}
                              </span>
                              <StarRating rating={feedback.rating} size="sm" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="card-shadow">
                    <CardContent className="p-6 text-center">
                      <Calendar className="w-10 h-10 text-accent mx-auto mb-4" />
                      <p className="text-3xl font-bold text-foreground mb-1">156</p>
                      <p className="text-muted-foreground">Reviews This Week</p>
                    </CardContent>
                  </Card>
                  <Card className="card-shadow">
                    <CardContent className="p-6 text-center">
                      <MapPin className="w-10 h-10 text-accent mx-auto mb-4" />
                      <p className="text-3xl font-bold text-foreground mb-1">48</p>
                      <p className="text-muted-foreground">Unique Destinations</p>
                    </CardContent>
                  </Card>
                  <Card className="card-shadow">
                    <CardContent className="p-6 text-center">
                      <Users className="w-10 h-10 text-accent mx-auto mb-4" />
                      <p className="text-3xl font-bold text-foreground mb-1">32%</p>
                      <p className="text-muted-foreground">Anonymous Reviews</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Admin;
