import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Globe2, BarChart3, ShieldCheck, Users, Calendar, Megaphone, FileText } from 'lucide-react';
import { useContent } from '@/context/ContentContext';

export const Home = () => {
  const { t } = useTranslation();
  const { content } = useContent();
  const navigate = useNavigate();
  const servicesRef = useRef<HTMLElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
            alt="Global Business"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-navy-800/50 border border-navy-500/30 rounded-full text-navy-200">
              Global Trade Consulting
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gradient">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/services')}
                className="px-8 py-4 bg-navy-800 hover:bg-navy-700 text-white rounded-lg font-bold transition-all flex items-center justify-center group cursor-pointer"
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button 
                onClick={() => navigate('/about')}
                className="px-8 py-4 glass-card hover:bg-white/10 text-white rounded-lg font-bold transition-all cursor-pointer"
              >
                {t('nav.about')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Highlights */}
      <section ref={servicesRef} id="services" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('services.title')}</h2>
            <div className="w-20 h-1 bg-navy-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t('services.consulting'),
                icon: <Globe2 className="text-navy-400" size={32} />,
                desc: "Expert guidance for successful international market expansion."
              },
              {
                title: t('services.research'),
                icon: <BarChart3 className="text-navy-400" size={32} />,
                desc: "In-depth market analysis to identify high-potential opportunities."
              },
              {
                title: t('services.mission'),
                icon: <Users className="text-navy-400" size={32} />,
                desc: "Connecting businesses through strategic on/offline trade missions."
              },
              {
                title: t('services.meeting'),
                icon: <Calendar className="text-navy-400" size={32} />,
                desc: "Facilitating domestic and overseas export consultation meetings."
              },
              {
                title: t('services.exhibition'),
                icon: <Megaphone className="text-navy-400" size={32} />,
                desc: "Comprehensive support for exhibition and fair participation."
              },
              {
                title: t('services.promotion'),
                icon: <FileText className="text-navy-400" size={32} />,
                desc: "Strategic promotion and PR events to enhance brand visibility."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 group transition-all hover:bg-navy-900/20"
              >
                <div className="mb-6 p-4 bg-navy-900/30 rounded-xl w-fit group-hover:bg-navy-800/50 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
