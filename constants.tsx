
import { Project, ServiceItem, ArchiveProject } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'yourown',
    title: 'YOUROWN 유로운',
    category: 'Art Commission Service Branding',
    period: '2025.07 — 2026.01',
    client: 'YOUROWN 유로운',
    role: 'Content Director & Editor',
    scope: ['Brand Identity', 'Content Strategy', 'Visual Design', 'Social Media Management'],
    link: 'https://yourown.kr/',
    description: '미술 작품 의뢰라는 새로운 영역을 대중에게 소개하기 위해 Story / Artist Interview / Art Life 3가지 시리즈로 브랜드 스토리를 구축하고 54+ 브랜드 콘텐츠를 제작했습니다.',
    challenge: '미술 작품 의뢰라는 새로운 영역을 대중에게 소개',
    approach: 'Story / Artist Interview / Art Life 3가지 시리즈로 브랜드 스토리 구축',
    result: '54개 이상의 브랜드 콘텐츠 제작',
    image: 'https://raw.githubusercontent.com/beginus-director/website/8f229e40e707630d570e978cb6bad72a37c18a88/yourown_mockup.png',
    caseStudies: [
      {
        id: 'case-01',
        title: 'FROM ART TO PASTRY',
        subtitle: 'JAEIN Patisserie',
        thumbnail: 'https://raw.githubusercontent.com/beginus-director/website/5a9a04403e4be3d06902859bbe717940e80999e1/case1_3.png',
        images: [
          'https://raw.githubusercontent.com/beginus-director/website/5a9a04403e4be3d06902859bbe717940e80999e1/case1_3.png',
          'https://raw.githubusercontent.com/beginus-director/website/5a9a04403e4be3d06902859bbe717940e80999e1/case1_6.png',
          'https://raw.githubusercontent.com/beginus-director/website/5a9a04403e4be3d06902859bbe717940e80999e1/case1_1.png',
          'https://raw.githubusercontent.com/beginus-director/website/5a9a04403e4be3d06902859bbe717940e80999e1/case1_4.jpg',
          'https://raw.githubusercontent.com/beginus-director/website/5a9a04403e4be3d06902859bbe717940e80999e1/case1_5.jpg'
        ],
        partner: 'JAEIN 한남동 파티세리 | 이재인 셰프',
        artist: '김한나 작가',
        type: '크리에이티브 콜라보레이션 (예술 × 미식)',
        overview: '신메뉴 개발 과정에서 영감을 받아 이재인 셰프가 김한나 작가에게 그림을 의뢰하고, 완성된 작품을 토대로 한정 케이크를 제작. 케이크 구매 고객에게 유로운 서비스 할인권을 증정하여 매장 방문 시 작품 감상과 케이크 시식을 함께 경험할 수 있도록 기획.',
        achievements: [
          '예술과 미식의 크로스오버 협업 모델 구축',
          '작품 → 제품 전환 사례 (artwork to pastry)',
          '상호 고객 확장 전략 (할인권 증정)'
        ]
      },
      {
        id: 'case-03',
        title: 'PERSONAL COLLECTION',
        subtitle: 'Magazine C',
        thumbnail: 'https://raw.githubusercontent.com/beginus-director/website/6c18c60e8c781f1590d96c07a72aadb5fb152adf/case3_1.png',
        images: [
          'https://raw.githubusercontent.com/beginus-director/website/6c18c60e8c781f1590d96c07a72aadb5fb152adf/case3_1.png',
          'https://raw.githubusercontent.com/beginus-director/website/6c18c60e8c781f1590d96c07a72aadb5fb152adf/case3_2.png',
          'https://raw.githubusercontent.com/beginus-director/website/6c18c60e8c781f1590d96c07a72aadb5fb152adf/case3_3.png',
          'https://raw.githubusercontent.com/beginus-director/website/6c18c60e8c781f1590d96c07a72aadb5fb152adf/case3_4.png',
          'https://raw.githubusercontent.com/beginus-director/website/6c18c60e8c781f1590d96c07a72aadb5fb152adf/case3_5.png'
        ],
        partner: '매거진 C 디렉터 | 전은경',
        artist: '정이지 작가',
        type: '개인 콜렉션 (Personal Commission)',
        overview: '샤를로트 페리앙의 명작 셰즈롱그(Chaise Longue)에서 영감받은 작품 의뢰. 의자를 다루는 매거진 디렉터의 취향과 브랜드 철학을 반영.',
        achievements: [
          '전문가 취향 기반 개인 콜렉션 사례',
          '브랜드 정체성과 연결된 작품 기획',
          '에디토리얼 디렉터 협업 레퍼런스'
        ]
      },
      {
        id: 'case-04',
        title: 'FROM PERSONAL TO PUBLIC',
        subtitle: 'Oh!Boy Magazine',
        thumbnail: 'https://raw.githubusercontent.com/beginus-director/website/155d102e68ff7a59eddaafc9072f7f878448a4c6/case4_1.png',
        images: [
          'https://raw.githubusercontent.com/beginus-director/website/155d102e68ff7a59eddaafc9072f7f878448a4c6/case4_1.png',
          'https://raw.githubusercontent.com/beginus-director/website/155d102e68ff7a59eddaafc9072f7f878448a4c6/case4_2.png',
          'https://raw.githubusercontent.com/beginus-director/website/155d102e68ff7a59eddaafc9072f7f878448a4c6/case4_3.png',
          'https://raw.githubusercontent.com/beginus-director/website/155d102e68ff7a59eddaafc9072f7f878448a4c6/case4_4.jpeg',
          'https://raw.githubusercontent.com/beginus-director/website/155d102e68ff7a59eddaafc9072f7f878448a4c6/case4_5.jpeg'
        ],
        partner: 'Oh!Boy 매거진 편집장 | 김현성 (패션 포토그래퍼)',
        artist: '정이지 작가 (개인 의뢰) | 장승근, 황예랑 작가 (행사 전시)',
        type: '개인 의뢰 → 오프라인 행사 참여 확장',
        overview: '환경과 동물 이슈를 전하는 매거진 편집장이 반려묘 그림을 개인 의뢰. 이후 연례 행사 UNSELF 2025에 유로운 초청.',
        achievements: [
          '개인 의뢰 → 브랜드 협업 확장 사례',
          '오프라인 행사 참여: 동물 주제 작품 전시 판매',
          '현장 디지털 드로잉 (즉석 반려동물 그림 제공)',
          '패션/에디토리얼 업계 네트워크 확보'
        ]
      },
      {
        id: 'case-02',
        title: 'BRAND COMMISSION',
        subtitle: 'PEER COFFEE',
        thumbnail: 'https://raw.githubusercontent.com/beginus-director/website/f7c6366414c17ecea3f42df7a944b8d8b89b694b/case2_1.png',
        images: [
          'https://raw.githubusercontent.com/beginus-director/website/f7c6366414c17ecea3f42df7a944b8d8b89b694b/case2_1.png',
          'https://raw.githubusercontent.com/beginus-director/website/f7c6366414c17ecea3f42df7a944b8d8b89b694b/case2_2.png',
          'https://raw.githubusercontent.com/beginus-director/website/f7c6366414c17ecea3f42df7a944b8d8b89b694b/case2_3.png',
          'https://raw.githubusercontent.com/beginus-director/website/f7c6366414c17ecea3f42df7a944b8d8b89b694b/case2_4.png',
          'https://raw.githubusercontent.com/beginus-director/website/f7c6366414c17ecea3f42df7a944b8d8b89b694b/case2_5.jpg'
        ],
        partner: 'PEER COFFEE 피어커피 | 종각점 (리뉴얼 오픈)',
        artist: '모유진 작가',
        type: '브랜드 차원의 작품 의뢰 (5점)',
        overview: '개인이 아닌 브랜드가 직접 의뢰한 케이스. 스페셜티 커피 브랜드 디렉터 및 인테리어 담당 아키플로우 디렉터와 협업하여 브랜드의 이야기를 담은 5점의 작품 제작.',
        achievements: [
          '공간의 핵심적 인테리어 요소로 활용 (종각점)',
          '시즌 블렌드 패키지 디자인 적용',
          'B2B 작품 의뢰 모델 구축',
          '시즌 블렌드 구매 고객 대상 할인권 증정'
        ]
      }
    ]
  }
];

export const ARCHIVE_PROJECTS: ArchiveProject[] = [
  {
    id: 'archive-01',
    title: 'YOUROWN 유로운',
    client: 'YOUROWN',
    period: '2025.07 — 2026.01',
    tags: ["#브랜딩", "#예술", "#라이프스타일", "#SNS마케팅"],
    image: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_yourown.png',
    description: ''
  },
  {
    id: 'archive-02',
    title: 'TRUSTYFOOD 트러스티푸드',
    client: 'TRUSTYFOOD',
    period: '2025.04 — 2025.05',
    tags: ["#반려동물", "#F&B", "#SNS마케팅"],
    image: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_trusty.png',
    description: ''
  },
  {
    id: 'archive-03',
    title: 'Restylane 레스틸렌',
    client: 'Galderma Korea',
    period: '2024 H2',
    tags: ["#헬스케어", "#뷰티", "#SNS마케팅", "#디지털콘텐츠"],
    image: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_restylane.png',
    description: ''
  },
  {
    id: 'archive-04',
    title: 'LG StanbyME 스탠바이미',
    client: 'LG Electronics',
    period: '2023.01 — 2023.05',
    tags: ["#IT", "#라이프스타일", "#SNS마케팅", "#디지털콘텐츠"],
    image: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_lg.png',
    description: ''
  },
  {
    id: 'archive-05',
    title: 'DOOSAN MAGAZINE 얼루어/보그/W',
    client: 'Doosan Magazine',
    period: '2019 — 2022',
    tags: ["#뷰티", "#매거진", "#브랜딩", "#영상"],
    image: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_doosan.png',
    description: ''
  },
  {
    id: 'archive-06',
    title: 'SSF SHOP 삼성물산 패션',
    client: 'Samsung C&T Fashion',
    period: '2017 — 2019',
    tags: ["#패션", "#이커머스", "#디지털콘텐츠"],
    image: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_ssf.png',
    description: ''
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Content Marketing & Branding',
    description: '콘텐츠 전략부터 실행까지 통합적으로 지원합니다.',
    details: [
      { title: '— 브랜드 전략 & 메시지 체계', description: '브랜드 아이덴티티, 네이밍 & 슬로건' },
      { title: '— 콘텐츠 전략 & 기획', description: '브랜드 정체성 기반 콘텐츠 방향성 수립' },
      { title: '— 브랜드 스토리텔링 & 에디토리얼 캠페인', description: '에디토리얼 콘텐츠, 인터뷰, 캠페인 스토리 기획' },
      { title: '— 콘텐츠 제작 & 채널 운영', description: '카드뉴스, 릴스, 매거진·미디어 콘텐츠 제작 / Instagram, Threads, Blog, YouTube 등 채널별 운영' },
      { title: '— 마케팅 캠페인 실행', description: '온/오프라인 캠페인, 프로모션, 전시/팝업, 데이터 기반 최적화' },
      { title: '— UX Writing', description: '서비스/제품 UI 텍스트, 마이크로카피' }
    ]
  },
  {
    title: 'Creative Collaboration',
    description: '전문적인 제작 영역은 검증된 크리에이티브 파트너와 협업으로 진행합니다.',
    details: [
      { title: '— 그래픽 디자인', description: 'BI, 패키지, 프로모션' },
      { title: '— 영상 제작', description: '숏폼, 브랜드 필름' },
      { title: '— 웹/앱 디자인 & 개발', description: '브랜드 사이트, 랜딩 페이지, 모바일 앱' },
      { title: '— 공간 디자인', description: '전시, 팝업, 매장' },
      { title: '— 아티스트 협업', description: '아트 커미션, 콜라보레이션' }
    ]
  }
];

export const SERVICE_TOOLS = [
  'Notion', 'Figma', 'CapCut', 'ChatGPT/Claude/Gemini', 'Midjourney', 'Canva', 'Google Analytics', 'Meta Business Suite'
];

export const WORK_PROCESS = [
  { step: '01', title: 'Discover (발굴)', description: '브랜드가 지닌 고유한 이야기와 잠재력을 발견합니다.' },
  { step: '02', title: 'Define (정의)', description: '에디토리얼 시선으로 결을 다듬고 명확한 전략을 수립합니다.' },
  { step: '03', title: 'Deliver (전달)', description: '최적의 비주얼과 메시지로 브랜드 경험을 전달하고, 성과를 만들어갑니다.' }
];
