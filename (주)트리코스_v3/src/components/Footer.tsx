import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <Logo className="h-16 md:h-20 w-auto" variant="light" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Global Trade Consulting & Overseas Market Entry Support. Bridging domestic businesses with international markets.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-bold mb-6">{t('nav.contact')}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-navy-400" />
                <span>info@tricos.co.kr</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-navy-400" />
                <span>031-8014-2645</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={16} className="text-navy-400" />
                <span className="leading-tight">{t('contact.address')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© 2026 Tricos Co., Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
