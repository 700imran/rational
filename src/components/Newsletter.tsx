
import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <section className="bg-slate-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Mail className="h-12 w-12 text-blue-400" />
          </div>
          
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest news and exclusive stories delivered straight to your inbox. 
            Join thousands of readers who trust THE REBEL for accurate, timely reporting.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white text-gray-900 border-0 rounded-full px-6 py-3"
            />
            <Button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-3 font-medium"
            >
              <Send className="h-4 w-4 mr-2" />
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm text-gray-400 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
