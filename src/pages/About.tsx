import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Target, Users, History, Award } from 'lucide-react';

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-navy-400 font-bold uppercase tracking-widest text-sm mb-4 block">Our Identity</span>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                {t('about.title')}
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                {t('about.intro')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-navy-800/20 rounded-3xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
                alt="Global Network Map"
                className="relative rounded-2xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="glass-card p-10">
            <Target className="text-navy-400 mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">{t('about.vision')}</h3>
            <p className="text-gray-400 leading-relaxed">
              {t('about.visionText')}
            </p>
          </div>
          <div className="glass-card p-10">
            <Users className="text-navy-400 mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To empower businesses with the knowledge, networks, and support needed to thrive in the global economy.
            </p>
          </div>
        </section>

        {/* CEO Message */}
        <section className="glass-card p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Award size={200} className="text-white" />
          </div>
          <div className="max-w-4xl relative z-10">
            <h3 className="text-3xl font-bold mb-8">{t('about.ceoMessage')}</h3>
            <div className="text-lg text-gray-300 leading-relaxed mb-8 space-y-4 whitespace-pre-line">
              {t('about.ceoText')}
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-1 bg-navy-500" />
              <div>
                <div className="text-white font-bold">(주)트리코스</div>
                <div className="text-gray-500 text-sm">Tricos Co., Ltd.</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
