import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Star, TrendingUp, Users, Calendar, MapPin, FileText } from "lucide-react";

const Admin = () => {
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
            {/* Stats Grid - Empty State */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { title: "Total Reviews", icon: MessageSquare },
                { title: "Average Rating", icon: Star },
                { title: "Active Users", icon: Users },
                { title: "This Month", icon: TrendingUp },
              ].map((stat, index) => (
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
                      </div>
                      <p className="text-2xl md:text-3xl font-bold text-foreground">0</p>
                      <p className="text-sm text-muted-foreground">{stat.title}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Tabs */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="bg-card border border-border">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="feedback">Recent Feedback</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Empty State */}
                <Card className="card-shadow">
                  <CardContent className="p-12 text-center">
                    <FileText className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      No Data Yet
                    </h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Feedback data will appear here once users start submitting reviews. 
                      Connect a backend database to store and display real feedback.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="feedback">
                <Card className="card-shadow">
                  <CardHeader>
                    <CardTitle className="font-display text-lg">Recent Feedback</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <MessageSquare className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        No feedback submissions yet. Feedback will appear here once users submit reviews.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="card-shadow">
                    <CardContent className="p-6 text-center">
                      <Calendar className="w-10 h-10 text-accent mx-auto mb-4" />
                      <p className="text-3xl font-bold text-foreground mb-1">0</p>
                      <p className="text-muted-foreground">Reviews This Week</p>
                    </CardContent>
                  </Card>
                  <Card className="card-shadow">
                    <CardContent className="p-6 text-center">
                      <MapPin className="w-10 h-10 text-accent mx-auto mb-4" />
                      <p className="text-3xl font-bold text-foreground mb-1">0</p>
                      <p className="text-muted-foreground">Unique Destinations</p>
                    </CardContent>
                  </Card>
                  <Card className="card-shadow">
                    <CardContent className="p-6 text-center">
                      <Users className="w-10 h-10 text-accent mx-auto mb-4" />
                      <p className="text-3xl font-bold text-foreground mb-1">0%</p>
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
