import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, ChevronRight } from 'lucide-react';

export const Contact = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend or a service like Formspree
    // The user requested it to go to info@tricos.co.kr
    console.log("Form submitted to info@tricos.co.kr");
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">{t('contact.title')}</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to take your business global? Contact our expert consultants today for a personalized strategy.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div className="space-y-8 glass-card p-8 md:p-12">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-navy-900/30 rounded-xl text-navy-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <a href="mailto:info@tricos.co.kr" className="text-gray-400 hover:text-navy-400 transition-colors">info@tricos.co.kr</a>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="p-4 bg-navy-900/30 rounded-xl text-navy-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-gray-400">Office: 031-8014-2645</p>
                  <p className="text-gray-400">Fax: 031-8014-2646</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="p-4 bg-navy-900/30 rounded-xl text-navy-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {t('contact.address')}
                  </p>
                </div>
              </div>
            </div>

            {/* Map Link Section */}
            <div className="glass-card p-8 md:p-12 flex flex-col items-center justify-center text-center space-y-6 border-t md:border-t-0 md:border-l border-white/5">
              <div className="w-20 h-20 bg-navy-900/50 rounded-full flex items-center justify-center">
                <MapPin size={40} className="text-navy-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">네이버 지도 링크</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  지도를 클릭하시면 트리코스의 상세 위치를<br />네이버 지도에서 확인하실 수 있습니다.
                </p>
              </div>
              <a 
                href="https://naver.me/GRo4Z2kt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full md:w-auto px-10 py-4 bg-navy-800 border border-navy-500/30 rounded-xl text-white hover:bg-navy-700 transition-all font-bold flex items-center justify-center gap-2 group"
              >
                지도상세보기 <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
