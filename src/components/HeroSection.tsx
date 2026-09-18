
import React from 'react';
import { Clock, User } from 'lucide-react';

const HeroSection = () => {
  const featuredArticle = {
    title: "Breaking: Major Political Reform Announced",
    excerpt: "In a groundbreaking move that could reshape the political landscape, new reforms have been announced that promise to transform how democracy functions in the modern era.",
    author: "Sarah Johnson",
    time: "2 hours ago",
    category: "Politics",
    image: "https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=800&h=600&fit=crop"
  };

  const sideStories = [
    {
      title: "Tech Giants Face New Regulations",
      time: "4 hours ago",
      category: "Technology"
    },
    {
      title: "Climate Summit Reaches Historic Agreement",
      time: "6 hours ago",
      category: "Environment"
    },
    {
      title: "Championship Finals Set Record Viewership",
      time: "8 hours ago",
      category: "Sports"
    }
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
              <img 
                src={featuredArticle.image} 
                alt={featuredArticle.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="inline-block px-3 py-1 bg-red-600 text-sm font-medium rounded-full mb-3">
                  {featuredArticle.category}
                </span>
                <h1 className="text-3xl font-bold mb-3 leading-tight">
                  {featuredArticle.title}
                </h1>
                <p className="text-lg mb-4 text-gray-200">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{featuredArticle.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredArticle.time}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Stories */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Trending Now</h2>
            {sideStories.map((story, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-3">
                  {story.category}
                </span>
                <h3 className="font-semibold text-gray-900 mb-2 leading-tight">
                  {story.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{story.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
