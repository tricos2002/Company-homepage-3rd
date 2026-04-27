import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { 
  Globe2, 
  Search, 
  Plane, 
  MessageSquare, 
  Warehouse, 
  Megaphone,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

export const Services = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 0,
      icon: <Globe2 size={32} />,
      title: "해외진출 컨설팅",
      tagline: "귀사의 제품에 맞는 최적의 해외진출 전략을 수립하고 실행합니다",
      intro: "해외시장 진출은 명확한 전략 없이는 실패로 이어질 수 있습니다. 2002년에 설립된 트리코스는 지금까지 축적된 현장 경험을 바탕으로, 기업의 역량과 제품 특성을 면밀히 분석한 후 홍콩 및 중앙아시아 등 특화 시장에서 검증된 맞춤형 진출 전략을 제시합니다. 단순한 정보 제공을 넘어, 바이어 발굴부터 계약 체결·사후관리까지 전 과정을 함께합니다.",
      features: [
        "해외진출 역량 진단 및 준비 현황 점검",
        "목표시장 선정 및 진출 타당성 분석",
        "SWOT·4P·Positioning 분석 기반 전략 수립",
        "현지 물류·통관·인증 등 진출 제반사항 컨설팅",
        "바이어 발굴 및 거래 제안·상담 대행",
        "현지어 마케팅 자료(소개서·카탈로그) 제작 지원",
        "수출 계약 체결 및 대금결제 실무 자문",
        "사후관리 및 A/S 지원"
      ],
      specialties: [
        "건강식품 · 농수산식품",
        "화장품 · 이너뷰티 제품",
        "의료기기 · K-Medi",
        "생활용품 · 소비재",
        "IT 제품 · 플랜트"
      ],
      process: [
        { step: "01", title: "기업 역량 진단", desc: "제품 분석, 내부 역량 및 외부 환경(경쟁사·시장 트렌드) 분석. 수출 준비 현황 점검 후 맞춤형 로드맵 수립.", tags: ["역량 진단", "환경 분석", "로드맵 수립"] },
        { step: "02", title: "목표시장 선정 및 시장조사", desc: "현지 시장 규모·수입 현황 조사, 소비자 반응·경쟁업체 동향 수집. 유통채널·관세·인증 요건 등 진입 장벽 사전 확인.", tags: ["시장 규모 조사", "경쟁 분석", "관세·인증"] },
        { step: "03", title: "해외 마케팅 전략 수립", desc: "유망 바이어 발굴 및 거래 제안, 온라인 수출상담 지원, 현지어 홍보 자료 제작, 현지 광고·SNS 홍보 컨설팅.", tags: ["바이어 발굴", "현지어 자료", "SNS 홍보"] },
        { step: "04", title: "현지 상담 대행 및 오더 추진", desc: "현지 출장 동행(통역·상담 지원), 해외 전시회 대행 참가, 수출상담회·시연 행사 개최, 유력 바이어와 실거래 조건 협의.", tags: ["현지 출장", "상담 대행", "오더 수주"] },
        { step: "05", title: "사후관리 및 성과 도출", desc: "수출 계약·선적 추진 지원, 바이어 방한 초청 심화 상담, 무역 실무 교육(무역영어·결제·통관), 지속적 거래선 관리.", tags: ["계약·선적", "무역 교육", "사후관리"] }
      ],
      banner: "트리코스는 중소벤처기업진흥공단 해외민간네트워크 등 다수의 유관기관에서 해외진출 지원 전문 수행사로 활동 중이며, 중소벤처기업부 지정 해외민간대사 및 우즈베키스탄 상공회의소 한국 대표부로 활동 중입니다."
    },
    {
      id: 1,
      icon: <Search size={32} />,
      title: "해외 시장조사",
      tagline: "현지 네트워크를 기반으로 한 실질적이고 정확한 시장 정보를 제공합니다",
      intro: "성공적인 해외 진출의 출발점은 정확한 시장 정보입니다. 트리코스는 홍콩 및 중앙아시아 현지 거점과 협력 네트워크를 활용해 인터넷 자료만으로는 파악할 수 없는 실질적 현장 정보를 제공합니다. 제품의 시장성부터 유력 바이어 리스트까지, 귀사의 의사결정에 필요한 데이터를 맞춤형으로 조사합니다.",
      gridItems: [
        { icon: "📊", label: "기초 시장조사", desc: "시장 규모·성장성·수요 동향 분석" },
        { icon: "🏪", label: "유통구조 조사", desc: "유통 채널·입점 조건·물류 정보" },
        { icon: "⚖️", label: "진입장벽 조사", desc: "관세·인증·등록 절차·통관 규정" },
        { icon: "🏢", label: "경쟁사 분석", desc: "경쟁 제품·가격·포지셔닝 분석" },
        { icon: "👥", label: "소비자 반응 조사", desc: "현지 소비자 선호도·구매패턴" },
        { icon: "🤝", label: "바이어 발굴", desc: "유력 바이어 리스트 및 기업분석" }
      ],
      process: [
        { step: "01", title: "의뢰 접수 및 조사 범위 확정", desc: "수출 희망 제품·목표 국가·조사 목적 파악. HS Code 확인 및 조사 항목(시장규모·경쟁사·바이어 등) 범위 협의." },
        { step: "02", title: "현지 시장 조사 실시", desc: "HS Code 기반 수입 현황·수요도 분석, 현지 유통 구조 Mapping, 경쟁 제품 가격·포지셔닝 조사. 현지 협력 파트너 네트워크 직접 활용." },
        { step: "03", title: "바이어 발굴 및 검증", desc: "현지 DB·네트워크 활용, 유력 바이어 소싱 및 기업 분석(연혁·취급 품목·레퍼런스 등). 구매 담당자 정보 및 핵심 구매요인 파악." },
        { step: "04", title: "진출 전략 제언", desc: "관세·인증·등록 절차 등 진입 장벽 정보 제공. 적정 가격 포지셔닝 및 현지화 제안. 공장 진출 타당성 조사(F/S) 연계 가능." },
        { step: "05", title: "결과 보고 및 사후 지원", desc: "종합 보고서 납품(시장 환경·바이어 리스트·전략 제언 포함). 관심 바이어 후속 응대(Follow-Up) 지원. 컨설팅·상담회 서비스 연계." }
      ]
    },
    {
      id: 2,
      icon: <Plane size={32} />,
      title: "온/오프라인 무역사절단",
      tagline: "현지 바이어를 직접 만나 실질적인 비즈니스 기회를 만듭니다",
      intro: "무역사절단은 귀사 제품을 목표 시장의 유력 바이어에게 직접 소개하고 상담할 수 있는 가장 효과적인 방법입니다. 트리코스는 현지 지사 및 협력 네트워크를 활용해 방문 전 바이어를 선별·섭외하고, 현장에서는 통역·상담 대행까지 일괄 지원합니다. 온라인 무역사절단(수출상담회)은 비용 효율적으로 다수의 바이어를 동시에 만날 수 있는 방식으로 함께 운영합니다.",
      comparison: [
        {
          type: "Online",
          title: "온라인 무역사절단",
          items: [
            "화상·이메일 기반 원격 수출상담회 운영",
            "다수 바이어와 단기간 집중 상담 가능",
            "현지 이동 없이 비용 절감 효과",
            "영상 통역·현지어 자료 번역 지원",
            "해외 플랫폼 활용 온라인 홍보 병행",
            "관심 바이어 사후 관리(Follow-Up) 지원"
          ]
        },
        {
          type: "Offline",
          title: "오프라인 무역사절단",
          items: [
            "현지 방문을 통한 대면 비즈니스 미팅",
            "유통매장·바이어 사무실 직접 방문",
            "통역·일정 조율·교통·숙박 안내 지원",
            "현지 시장·소비자 반응 현장 조사 병행",
            "행사 후 성과 보고서 제공"
          ]
        }
      ],
      process: [
        { step: "01", title: "사전 기획 및 참가기업 모집", desc: "목표 국가·품목 선정, 참가기업 수요 조사. 공공기관 연계 공동 사절단 기획 또는 단독 수행." },
        { step: "02", title: "참가기업 제품 분석 및 홍보 자료 준비", desc: "제품 소개서·카탈로그 현지어(영어·러시아어) 번역 제작, 바이어 매칭을 위한 제품 분석 자료 준비." },
        { step: "03", title: "현지 유력 바이어 발굴 및 섭외", desc: "현지 네트워크·협력기관 활용 유망 바이어 리스트 작성. 사절단 목적·제품에 부합하는 바이어 사전 섭외 및 상담 일정 확정." },
        { step: "04", title: "사절단 운영 (현장 지원)", desc: "1:1 수출 상담 진행, 통역 지원, 현지 유통매장·공장 방문 조율. 오프라인은 현장 사진·동영상 기록 병행." },
        { step: "05", title: "사후 관리 및 오더 연결", desc: "상담 결과 분석 보고서 제공, 관심 바이어 후속 연락·조건 협의 대행, 오더 수주 및 계약 체결 지원." }
      ]
    },
    {
      id: 3,
      icon: <MessageSquare size={32} />,
      title: "수출상담회",
      tagline: "국내·현지에서 유력 바이어와 1:1 집중 상담 기회를 제공합니다",
      intro: "수출상담회는 바이어와의 대면 접점을 단기간에 집중적으로 확보하는 핵심 마케팅 수단입니다. 트리코스는 국내 초청 상담회와 해외 현지 상담회를 모두 기획·운영하며, 사전 매칭부터 현장 운영·통역, 사후 오더 연결까지 전 과정을 대행합니다. 유관기관과의 협력을 통해 공신력 있는 바이어 초청이 가능합니다.",
      comparison: [
        {
          type: "Domestic",
          title: "해외 바이어 초청 상담회",
          items: [
            "해외 유력 바이어를 국내로 초청, 공장·사무실 방문",
            "제품 시음·시식·시연 행사 연계 가능",
            "바이어와 심화 신뢰 관계 형성 기회",
            "여러 기업 참가 시 공동 개최로 비용 분담",
            "중소벤처기업진흥공단 연계 바이어 방한 초청 지원"
          ]
        },
        {
          type: "Global",
          title: "현지 수출상담회",
          items: [
            "홍콩·카자흐스탄 현지에서 직접 상담회 개최",
            "현지 유통사·바이어 다수 초청 가능",
            "전시·시연 부스 설치 및 현장 홍보 병행",
            "현지 일간지·잡지 광고 연계 홍보 지원",
            "트리코스 현지 지사 운영 네트워크 적극 활용"
          ]
        }
      ],
      process: [
        { step: "01", title: "상담회 기획 및 참가기업 선정", desc: "상담회 목표(국가·품목·규모) 확정. 참가기업별 수출 희망 제품·조건 파악 및 바이어 매칭 전략 수립." },
        { step: "02", title: "바이어 발굴 및 사전 매칭", desc: "현지 네트워크·협력기관 활용, 품목 적합 바이어 발굴. 참가기업 제품·조건과의 사전 매칭 및 상담 의향 확인." },
        { step: "03", title: "상담 자료 준비 및 사전 홍보", desc: "제품 소개서(현지어) 번역·제작, 상담 일정표 작성, 현지 SNS·광고매체 사전 홍보 진행." },
        { step: "04", title: "1:1 상담 진행 및 현장 운영", desc: "기업-바이어 1:1 상담 진행, 통역 지원, 제품 시연·시음 행사 운영. 상담 내용 기록 및 실시간 피드백 공유." },
        { step: "05", title: "성과 분석 및 오더 연결", desc: "상담 결과 보고서 제출, 관심 바이어 후속 상담 대행, 오더 수주·선적·계약 체결 지원." }
      ]
    },
    {
      id: 4,
      icon: <Warehouse size={32} />,
      title: "전시회 / 박람회 참가 지원",
      tagline: "현지 주요 전시회 참가부터 부스 운영까지, 번거로운 모든 과정을 대행합니다",
      intro: "해외 전시회는 단기간에 다수의 현지 바이어·유통사를 만날 수 있는 최고의 마케팅 기회입니다. 트리코스는 신청 대행부터 부스 설치, 현장 통역, 바이어 초청, 사후 오더 연결까지 전 과정을 원스톱으로 지원합니다.",
      features: [
        "Brand & Product Expo (홍콩)",
        "Hong Kong Food Expo (홍콩)",
        "Central Asia Beauty Expo (카자흐스탄)",
        "카자흐스탄·중앙아시아 유관 전시회",
        "유관기관 지원 프로그램 연계 한국관 공동 참가",
        "귀사 품목별 적합 전시회 발굴·제안"
      ],
      serviceScope: [
        "전시회 선정 컨설팅 및 참가 신청 대행",
        "참가 신청서·번역 등 행정 지원",
        "부스 설치·디자인·제품 전시 지원",
        "현지어 홍보 자료·샘플 준비 지원",
        "사전 바이어 초청 및 상담 일정 세팅",
        "현장 통역 및 상담 지원",
        "전시회 결과 보고서 및 후속 오더 지원"
      ],
      process: [
        { step: "01", title: "전시회 선정 및 기획", desc: "수출 품목·목표 시장에 최적화된 전시회 발굴 및 제안. 참가 비용·효과·바이어 규모 비교 분석 후 최종 전시회 확정." },
        { step: "02", title: "참가 신청 및 행정 대행", desc: "주최측 신청서 번역·작성·제출, 계약금 납부 등 행정 절차 대행. 부스 위치 선정 및 전시 레이아웃 기획." },
        { step: "03", title: "사전 바이어 초청 및 홍보", desc: "현지 네트워크 활용 유망 바이어 사전 초청, 현지 SNS·일간지 홍보 진행. 현지어 제품 홍보물·샘플 키트 제작 지원." },
        { step: "04", title: "현장 운영 및 바이어 상담", desc: "부스 설치·제품 진열 지원, 현장 통역 및 바이어 상담 대행. 제품 시연 행사 진행. 방문 바이어 명함·관심 품목 기록." },
        { step: "05", title: "사후 관리 및 오더 연결", desc: "전시회 성과 결과 보고서 제출. 관심 바이어 후속 연락·샘플 발송 지원. 거래 조건 협의·오더 수주 연결." }
      ]
    },
    {
      id: 5,
      icon: <Megaphone size={32} />,
      title: "판촉 / 홍보행사",
      tagline: "현지 소비자와 바이어에게 귀사 브랜드를 직접 각인시킵니다",
      intro: "해외 시장에서 제품을 성공적으로 런칭하려면 현지 소비자와 유통 채널 모두를 공략하는 통합 홍보 전략이 필요합니다. 트리코스는 현지 유통매장 입점 판촉, SNS·현지 미디어 홍보, 시음·시식·제품 시연 행사를 결합한 맞춤형 판촉·홍보 프로그램을 기획하고 운영합니다.",
      gridItems: [
        { icon: "🛒", label: "유통매장 판촉전", desc: "현지 마트·전문점 입점 및 프로모션 행사" },
        { icon: "🍽️", label: "시음·시식·시연", desc: "소비자 체험 행사 기획 및 현장 운영" },
        { icon: "📱", label: "SNS 온라인 홍보", desc: "현지 SNS 채널 홍보·인플루언서 연계" },
        { icon: "📰", label: "현지 미디어 홍보", desc: "현지 잡지·일간지 광고 게재 대행" },
        { icon: "🎪", label: "세미나·컨퍼런스", desc: "현지 산업 세미나·홍보 이벤트 기획" },
        { icon: "🎨", label: "홍보물 제작", desc: "현지어 소개서·영상·패키지 기획" }
      ],
      process: [
        { step: "01", title: "홍보 전략 기획 및 채널 선정", desc: "제품 특성·목표 소비자·예산 분석. 온라인(SNS·포털) / 오프라인(유통매장·행사장) 홍보 채널 최적 조합 제안." },
        { step: "02", title: "현지어 홍보 콘텐츠 제작", desc: "제품 소개서·카탈로그·배너 현지어(영어·러시아어 등) 번역 및 디자인. SNS용 콘텐츠·홍보 영상 기획 지원." },
        { step: "03", title: "행사 준비 및 현장 셋업", desc: "현지 유통매장 입점 협의 및 판촉 조건 조율. 행사 공간 섭외, 시연 기자재·샘플 준비, 현장 스태프 배치." },
        { step: "04", title: "행사 운영 및 미디어 홍보", desc: "시음·시식·시연 행사 현장 운영, 현지 일간지·잡지 광고 게재, SNS 라이브 홍보. 소비자 반응 실시간 수집." },
        { step: "05", title: "성과 분석 및 후속 전략 제언", desc: "행사 결과(소비자 반응·바이어 관심도·미디어 노출) 종합 보고서 제출. 입점 협의 성과 및 후속 오더 연결 지원." }
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-indigo-950 via-navy-950 to-black">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-navy-400 font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Services
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-8 text-white"
          >
            해외진출, 처음부터 끝까지<br className="hidden md:block" /> 트리코스가 함께합니다
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            해외시장 전문가 팀이 귀사의 목표 시장에 최적화된<br className="hidden md:block" /> 맞춤형 서비스를 제공합니다.
          </motion.p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-20 z-40 bg-black/80 backdrop-blur-md border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex whitespace-nowrap">
            {services.map((svc, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-all border-b-2 ${
                  activeTab === i 
                  ? "border-navy-500 text-white" 
                  : "border-transparent text-gray-500 hover:text-gray-300"
                }`}
              >
                <span className="opacity-50 text-xs">0{i+1}</span>
                <span>{svc.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-16"
        >
          {/* Service Header */}
          <div className="glass-card p-10 border-l-4 border-navy-500">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="w-20 h-20 bg-navy-900 rounded-2xl flex items-center justify-center text-navy-400 flex-shrink-0">
                {services[activeTab].icon}
              </div>
              <div className="space-y-2">
                <span className="text-navy-400 font-bold uppercase tracking-widest text-xs">Service 0{activeTab + 1}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{services[activeTab].title}</h2>
                <p className="text-navy-300 italic text-lg">{services[activeTab].tagline}</p>
              </div>
            </div>
          </div>

          {/* Intro Block */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <p className="text-lg text-gray-300 leading-relaxed">
              {services[activeTab].intro}
            </p>
          </div>

          {/* Features/Grids */}
          {(services[activeTab].features || services[activeTab].specialties || services[activeTab].serviceScope) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services[activeTab].features && (
                <div className="glass-card p-8">
                  <h3 className="text-xl font-bold text-navy-400 mb-6 flex items-center">
                    <span className="w-2 h-2 bg-navy-500 rounded-full mr-3" />
                    주요 서비스 내용
                  </h3>
                  <ul className="space-y-3">
                    {services[activeTab].features.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-400 text-sm">
                        <ChevronRight size={16} className="text-navy-600 mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {services[activeTab].specialties && (
                <div className="glass-card p-8">
                  <h3 className="text-xl font-bold text-navy-400 mb-6 flex items-center">
                    <span className="w-2 h-2 bg-navy-500 rounded-full mr-3" />
                    특화 지원 분야
                  </h3>
                  <ul className="space-y-3">
                    {services[activeTab].specialties.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-400 text-sm">
                        <ChevronRight size={16} className="text-navy-600 mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {services[activeTab].serviceScope && (
                <div className="glass-card p-8">
                  <h3 className="text-xl font-bold text-navy-400 mb-6 flex items-center">
                    <span className="w-2 h-2 bg-navy-500 rounded-full mr-3" />
                    지원 서비스 범위
                  </h3>
                  <ul className="space-y-3">
                    {services[activeTab].serviceScope.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-400 text-sm">
                        <ChevronRight size={16} className="text-navy-600 mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {services[activeTab].gridItems && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {services[activeTab].gridItems.map((item, i) => (
                <div key={i} className="glass-card p-6 text-center group hover:bg-white/10 transition-colors">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.label}</h4>
                  <p className="text-sm text-gray-500 group-hover:text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Comparison Cards */}
          {services[activeTab].comparison && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services[activeTab].comparison.map((card, i) => (
                <div key={i} className={`p-8 rounded-2xl border-2 ${i === 0 ? "bg-indigo-950/20 border-indigo-900/50" : "bg-navy-950/20 border-navy-900/50"}`}>
                  <span className="text-xs font-bold uppercase tracking-widest text-navy-400 mb-2 block">{card.type}</span>
                  <h4 className="text-2xl font-bold text-white mb-6">{card.title}</h4>
                  <ul className="space-y-3">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-start text-gray-400 text-sm">
                        <ChevronRight size={16} className="text-navy-600 mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Process Section */}
          <div className="glass-card p-10">
            <h3 className="text-xs font-bold tracking-widest uppercase text-navy-400 mb-10">추진 프로세스</h3>
            <div className="space-y-0 relative">
              {services[activeTab].process.map((step, i) => (
                <div key={i} className="flex group">
                  <div className="flex flex-col items-center mr-8">
                    <div className="w-12 h-12 rounded-full bg-navy-900 border-2 border-navy-500/30 flex items-center justify-center text-sm font-bold text-white relative z-10">
                      {step.step}
                    </div>
                    {i !== services[activeTab].process.length - 1 && (
                      <div className="w-0.5 grow bg-white/10 my-1" />
                    )}
                  </div>
                  <div className="pb-12">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-navy-400 transition-colors">{step.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{step.desc}</p>
                    {step.tags && (
                      <div className="flex flex-wrap gap-2">
                        {step.tags.map((tag, j) => (
                          <span key={j} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-navy-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Banners */}
          {services[activeTab].banner && (
            <div className="bg-gradient-to-r from-navy-900 to-indigo-900 rounded-2xl p-8 border border-white/10 flex items-center gap-6">
              <div className="text-3xl hidden md:block opacity-50 flex-shrink-0">🏛️</div>
              <p className="text-gray-300 leading-relaxed">
                {services[activeTab].banner}
              </p>
            </div>
          )}

          {/* CTA Block */}
          <div className="bg-navy-600 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">무료 상담 신청하기</h3>
              <p className="text-blue-100">귀사의 상황에 맞는 진출 전략을 제안해 드립니다</p>
            </div>
            <button 
              onClick={() => {
                const element = document.getElementById('contact-info');
                if (element) {
                   element.scrollIntoView({ behavior: 'smooth' });
                } else {
                   window.location.href = '/contact';
                }
              }}
              className="px-8 py-4 bg-white text-navy-950 rounded-xl font-bold hover:bg-gray-100 transition-all"
            >
              상담 신청하기
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
};
