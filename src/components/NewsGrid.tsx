
import React from 'react';
import { Clock, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NewsGrid = () => {
  const articles = [
    {
      id: 1,
      title: "Revolutionary AI Technology Transforms Healthcare Industry",
      excerpt: "New artificial intelligence breakthrough promises to revolutionize patient care and medical diagnosis with unprecedented accuracy.",
      author: "Dr. Michael Chen",
      time: "3 hours ago",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Global Markets React to Economic Policy Changes",
      excerpt: "Stock markets worldwide show mixed reactions following the announcement of new economic policies.",
      author: "Emma Rodriguez",
      time: "5 hours ago",
      category: "Business",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Championship Victory Sparks City-Wide Celebration",
      excerpt: "Thousands of fans flood the streets as the home team secures their first championship in over a decade.",
      author: "James Wilson",
      time: "7 hours ago",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Environmental Initiative Receives International Support",
      excerpt: "A groundbreaking environmental program gains backing from multiple nations committed to sustainability.",
      author: "Lisa Park",
      time: "12 hours ago",
      category: "Environment",
      image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Cultural Festival Draws Record Attendance",
      excerpt: "The annual cultural celebration attracts visitors from around the world, showcasing diverse traditions.",
      author: "Maria Garcia",
      time: "1 day ago",
      category: "Culture",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Education System Implements Major Reforms",
      excerpt: "New educational policies aim to modernize learning approaches and improve student outcomes nationwide.",
      author: "David Thompson",
      time: "1 day ago",
      category: "Education",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop"
    }
  ];

  const categories = ["All", "Politics", "Technology", "Sports", "Business", "Environment", "Culture"];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
          
          {/* Category Filters */}
          <div className="hidden md:flex space-x-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white text-gray-800 text-sm font-medium rounded-full shadow-sm">
                  {article.category}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.time}</span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="rounded-full px-8">
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;
