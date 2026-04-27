import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Handshake } from 'lucide-react';

export const Partners = () => {
  const { t } = useTranslation();

  const partners = [
    { name: "강원테크노파크", logo: "https://www.gwtp.or.kr/images/common/logo.png" },
    { name: "경기대진테크노파크", logo: "https://www.gdtp.or.kr/images/layout/logo.png" },
    { name: "울산테크노파크", logo: "https://www.utp.or.kr/images/main/logo.png" },
    { name: "전북테크노파크", logo: "https://www.jbtp.or.kr/images/common/logo_jbtp.png" }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-6 text-navy-400"
          >
            <Handshake size={32} />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            {t('nav.partners')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            트리코스는 다양한 정부 부처 및 지방자치단체 산하 공공기관과 긴밀히 협력하여<br className="hidden md:block" /> 국내 중소기업의 글로벌 시장 진출을 앞장서서 지원하고 있습니다.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-10 flex flex-col items-center justify-center space-y-6 group"
            >
              <div className="w-full aspect-video bg-white rounded-lg flex items-center justify-center p-4">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/400x200/ffffff/00598a?text=${encodeURIComponent(partner.name)}`;
                  }}
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-lg font-bold text-center text-gray-300 group-hover:text-white transition-colors">{partner.name}</h3>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">함께 성장하는 파트너십</h3>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            트리코스는 단순한 용역 수행을 넘어, 각 유관기관의 지원 사업이 최대의 성과를 낼 수 있도록<br /> 현지 네트워크를 통한 실질적인 수출 계약 체결과 바이어 관리에 집중합니다.
          </p>
        </div>
      </div>
    </div>
  );
};
