import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { Logo } from './Logo';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const toggleLanguage = () => {
    const languages = ['ko', 'en', 'ru'];
    const currentIndex = languages.indexOf(i18n.language);
    const nextIndex = (currentIndex + 1) % languages.length;
    i18n.changeLanguage(languages[nextIndex]);
  };

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.partners'), path: '/partners' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <Logo className="h-16 md:h-20 w-auto" variant="light" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-navy-300",
                  location.pathname === item.path ? "text-navy-400" : "text-gray-300"
                )}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
            >
              <Globe size={18} />
              <span className="text-xs font-bold uppercase">{i18n.language}</span>
            </button>
            <Link
              to="/admin"
              className="p-2 text-gray-400 hover:text-white transition-colors"
              title="Admin Dashboard"
            >
              <Settings size={20} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="text-gray-300 hover:text-white"
            >
              <Globe size={20} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-4 text-base font-medium rounded-md",
                    location.pathname === item.path ? "text-navy-400 bg-white/5" : "text-gray-300"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/admin"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-gray-400"
              >
                {t('nav.admin')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
