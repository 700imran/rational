
import React from 'react';
import { Search, Menu, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-3xl font-bold text-slate-800 tracking-tight">
              THE REBEL
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-slate-800 font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-slate-800 font-medium transition-colors">Politics</a>
            <a href="#" className="text-gray-700 hover:text-slate-800 font-medium transition-colors">Technology</a>
            <a href="#" className="text-gray-700 hover:text-slate-800 font-medium transition-colors">Sports</a>
            <a href="#" className="text-gray-700 hover:text-slate-800 font-medium transition-colors">Entertainment</a>
            <a href="#" className="text-gray-700 hover:text-slate-800 font-medium transition-colors">Opinion</a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
