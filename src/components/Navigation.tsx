import { ShoppingCart, Menu } from 'lucide-react';

interface NavigationProps {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: NavigationProps) {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <a href="/" className="text-2xl font-light tracking-wide">
              OURA
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#shop"
                className="text-sm font-light hover:opacity-70 transition-opacity"
              >
                Shop
              </a>
              <a
                href="#health"
                className="text-sm font-light hover:opacity-70 transition-opacity"
              >
                Health Features
              </a>
              <a
                href="#experience"
                className="text-sm font-light hover:opacity-70 transition-opacity"
              >
                Experience
              </a>
              <a
                href="#organizations"
                className="text-sm font-light hover:opacity-70 transition-opacity"
              >
                Organizations
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <button className="hover:opacity-70 transition-opacity">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button className="md:hidden hover:opacity-70 transition-opacity">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
