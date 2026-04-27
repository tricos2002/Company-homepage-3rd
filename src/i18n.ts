import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About Us",
        services: "Services",
        partners: "Key Partners",
        contact: "Contact",
        admin: "Admin"
      },
      hero: {
        title: "Bridging Markets, Building Futures",
        subtitle: "Global Trade Consulting & Overseas Market Entry Support for Visionary Businesses.",
        cta: "Explore Our Services"
      },
      about: {
        title: "About Tricos",
        intro: "Tricos Co., Ltd. is a specialized overseas market entry consulting firm that supports the successful international expansion of small and medium-sized enterprises (SMEs) based on its global network and professional consulting capabilities.",
        vision: "Our Vision",
        visionText: "To be the most trusted global bridge for domestic businesses entering international markets.",
        ceoMessage: "CEO Message",
        ceoText: "Greetings. This is Tricos Co., Ltd.\n\nTricos Co., Ltd. is a specialized overseas market entry consulting firm established in 2002. Starting with the establishment of the Almaty branch in Kazakhstan in 2003, we have continuously supported the overseas market entry and marketing of promising domestic SMEs.\n\nAs an executing agency for the Overseas Private Network Utilization Project and the Export Voucher Project organized by the Korea SMEs and Startups Agency (KOSME), and as a consulting firm for the Korea Agro-Fisheries & Food Trade Corporation (aT), we provide systematic overseas entry services by performing various public projects.\n\nIn addition, we are helping companies enter local markets by operating in connection with various programs such as overseas exchange projects and market development mission projects of central agencies and local governments.\n\nWe will continue to be a practical partner for companies wishing to enter overseas markets based on our global network, including Central Asia.\n\nIn the midst of a shrinking domestic market, fierce competition in the global market, and a difficult business environment, we will do our best to ensure that the efforts of companies that want to pioneer overseas markets with an active will can achieve meaningful results.\n\nThank you."
      },
      services: {
        title: "Key Services",
        consulting: "Overseas Entry Consulting",
        research: "Market Research",
        mission: "On/Offline Trade Mission",
        meeting: "Export Consultation (Domestic/Overseas)",
        exhibition: "Exhibition/Fair Support",
        promotion: "Promotion/PR Events",
        support: "Export/Import Support"
      },
      contact: {
        title: "Get in Touch",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        address: "401, Ace Gwanggyo Tower 2, 91, Changnyong-daero 256beon-gil, Yeongtong-gu, Suwon-si, Gyeonggi-do"
      }
    }
  },
  ko: {
    translation: {
      nav: {
        home: "홈",
        about: "회사소개",
        services: "서비스",
        partners: "주요 협력 기관",
        contact: "문의하기",
        admin: "관리자"
      },
      hero: {
        title: "시장을 잇고, 미래를 짓다",
        subtitle: "비전을 가진 기업을 위한 글로벌 무역 컨설팅 및 해외 시장 진출 지원.",
        cta: "서비스 둘러보기"
      },
      about: {
        title: "트리코스 소개",
        intro: "㈜트리코스는 글로벌 네트워크와 전문 컨설팅 역량을 기반으로, 중소기업의 성공적인 해외시장 진출을 지원하는 해외진출 전문 컨설팅 기업입니다.",
        vision: "우리의 비전",
        visionText: "국내 기업의 성공적인 해외 진출을 돕는 가장 신뢰받는 글로벌 가교가 되는 것.",
        ceoMessage: "CEO 메시지",
        ceoText: "안녕하십니까. (주)트리코스입니다.\n\n(주)트리코스는 2002년에 설립된 해외 진출 컨설팅 전문 기업으로서, 2003년 카자흐스탄 알마티 지사 설립을 시작으로 국내 유망 중소기업의 해외시장 진출과 마케팅을 지속적으로 지원해왔습니다.\n\n당사는 중소벤처기업진흥공단 주관 해외민간네트워크 활용사업 및 수출바우처사업 수행기관으로, aT한국농수산식품유통공사 해외진출컨설팅 수행사 등 다양한 다양한 공공사업을 수행하며 체계적인 해외진출 서비스를 제공하고 있습니다.\n\n또한 중앙기관과 지방자치단체의 해외 교류 사업 및 시장개척단 사업 등 다양한 프로그램과 연계 운영하며 기업들의 현지 진출에 도움이 되고 있습니다.\n\n앞으로도 중앙아시아를 비롯한 글로벌 네트워크를 기반으로, 해외시장 진출을 희망하는 기업들의 실질적인 동반자가 되도록 하겠습니다.\n\n내수시장의 위축과 세계시장에서의 치열한 경쟁, 어려워지는 경영환경 속에서, 적극적인 의지로 해외시장을 개척하고자하는 기업들의 노력이 의미 있는 성과를 거둘 수 있도록 최선을 다하겠습니다.\n\n감사합니다."
      },
      services: {
        title: "주요 서비스",
        consulting: "해외진출컨설팅",
        research: "시장조사",
        mission: "온/오프라인 무역사절단",
        meeting: "수출상담회(국내/해외)",
        exhibition: "전시회/박람회 참가 지원",
        promotion: "판촉/홍보행사",
        support: "수출입지원"
      },
      contact: {
        title: "문의하기",
        name: "이름",
        email: "이메일",
        message: "메시지",
        send: "메시지 보내기",
        address: "경기도 수원시 영통구 창룡대로256번길 91 에이스광교타워2차 401호"
      }
    }
  },
  ru: {
    translation: {
      nav: {
        home: "Главная",
        about: "О нас",
        services: "Услуги",
        partners: "Ключевые партнеры",
        contact: "Контакты",
        admin: "Админ"
      },
      hero: {
        title: "Соединяя рынки, созидая будущее",
        subtitle: "Глобальный торговый консалтинг и поддержка выхода на зарубежные рынки для дальновидного бизнеса.",
        cta: "Наши услуги"
      },
      about: {
        title: "О компании Tricos",
        intro: "Tricos Co., Ltd. — специализированная консалтинговая фирма по выходу на зарубежные рынки, которая поддерживает успешную международную экспансию малых и средних предприятий (МСП) на основе своей глобальной сети и профессиональных консалтинговых возможностей.",
        vision: "Наше видение",
        visionText: "Стать самым надежным глобальным мостом для отечественных предприятий, выходящих на международные рынки.",
        ceoMessage: "Послание генерального директора",
        ceoText: "Приветствуем вас. Это компания Tricos Co., Ltd.\n\nTricos Co., Ltd. — специализированная консалтинговая компания по выходу на зарубежные рынки, основанная в 2002 году. Начав с открытия филиала в Алматы (Казахстан) в 2003 году, мы постоянно поддерживаем выход на зарубежные рынки и маркетинг перспективных отечественных МСП.\n\nЯвляясь исполнительным агентством по Проекту использования зарубежных частных сетей и Проекту экспортных ваучеров, организованному Корейским агентством по малым и средним предприятиям и стартапам (KOSME), а также консалтинговой фирмой для Корейской корпорации по торговле агро-рыбной продукцией и продуктами питания (aT), мы предоставляем систематические услуги по выходу на зарубежные рынки, выполняя различные государственные проекты.\n\nКроме того, мы помогаем компаниям выходить на местные рынки, работая в связи с различными программами, такими как проекты зарубежного обмена и проекты миссий по развитию рынка центральных агентств и местных органов власти.\n\nМы продолжим быть практическим партнером для компаний, желающих выйти на зарубежные рынки, опираясь на нашу глобальную сеть, включая Центральную Азию.\n\nВ условиях сокращения внутреннего рынка, жесткой конкуренции на мировом рынке и сложной деловой среды мы сделаем все возможное, чтобы усилия компаний, желающих осваивать зарубежные рынки с активной волей, могли достичь значимых результатов.\n\nСпасибо."
      },
      services: {
        title: "Основные услуги",
        consulting: "Консалтинг по выходу на зарубежные рынки",
        research: "Исследование рынка",
        mission: "Онлайн/оффлайн торговые миссии",
        meeting: "Экспортные консультации (внутренние/зарубежные)",
        exhibition: "Поддержка участия в выставках/ярмарках",
        promotion: "Продвижение/PR-мероприятия",
        support: "Поддержка экспорта/импорта"
      },
      contact: {
        title: "Связаться с нами",
        name: "Имя",
        email: "Электронная почта",
        message: "Сообщение",
        send: "Отправить сообщение",
        address: "401, Ace Gwanggyo Tower 2, 91, Changnyong-daero 256beon-gil, Yeongtong-gu, Suwon-si, Gyeonggi-do"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ko',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
