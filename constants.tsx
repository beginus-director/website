
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
    tagline: '미술 작품 의뢰 서비스 브랜드 콘텐츠 전략 및 제작 총괄',
    client: 'BGA 백그라운드아트웍스',
    brand: 'YOUROWN 유로운',
    product: '미술 작품 의뢰 서비스',
    role: '콘텐츠 디렉팅 및 제작 총괄',
    period: '2025.07 — 2026.01',
    tags: ["#브랜딩", "#예술", "#라이프스타일", "#SNS마케팅"],
    image: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_yourown.png',
    visual: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_yourown.png',
    media: [
      {
        type: 'link',
        url: 'https://www.instagram.com/p/DTuqNB8k32y/',
        thumb: 'https://raw.githubusercontent.com/beginus-director/website/06e62332f83bc99f737d07d954b5407a345ece8b/archive_yourown_v01.png'
      },
      {
        type: 'link',
        url: 'https://yourown.ghost.io/story-10-yorisa-jaeryoyi-sancaeg-jeoja-yona/',
        thumb: 'https://raw.githubusercontent.com/beginus-director/website/06e62332f83bc99f737d07d954b5407a345ece8b/archive_yourown_v02.png'
      },
      {
        type: 'link',
        url: 'https://www.instagram.com/p/DMK2IMLTkmv/?img_index=1',
        thumb: 'https://raw.githubusercontent.com/beginus-director/website/06e62332f83bc99f737d07d954b5407a345ece8b/archive_yourown_v03.png'
      },
      {
        type: 'link',
        url: 'https://www.instagram.com/p/DNp2zjNzx3M/?img_index=1',
        thumb: 'https://raw.githubusercontent.com/beginus-director/website/06e62332f83bc99f737d07d954b5407a345ece8b/archive_yourown_v04.png'
      }
    ],
    challenge: "'미술 작품 의뢰'라는 새로운 영역을 대중에게 소개하고, 브랜드만의 고유한 정체성을 구축할 콘텐츠 전략이 필요했습니다.",
    solution: [
      "3가지 콘텐츠 시리즈 기획: Story (의뢰자 에피소드), Artist Interview (작가 철학), Art Life (의뢰 가이드)",
      "Instagram, Blog, 오프라인 이벤트를 아우르는 통합 콘텐츠 전략 수립",
      "54개 이상의 브랜드 콘텐츠 제작 및 소셜 미디어 운영"
    ],
    result: [
      "Story 8편, Artist Interview 3편, Art Life 6편 등 총 54개 이상의 브랜드 콘텐츠 제작",
      "통합 콘텐츠 전략을 통한 브랜드 정체성 확립",
      "미술 작품 의뢰 시장 내 브랜드 인지도 구축"
    ]
  },
  {
    id: 'archive-02',
    title: 'TRUSTYFOOD 트러스티푸드',
    tagline: '릴스 중심 SNS 콘텐츠 기획 및 운영',
    client: '(주)림피드',
    brand: 'TRUSTYFOOD 트러스티푸드',
    product: '반려동물 사료',
    role: '프리랜서 마케터 (SNS 콘텐츠 기획/운영)',
    period: '2025.04 — 2025.05',
    tags: ["#반려동물", "#F&B", "#SNS마케팅"],
    image: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_trusty.png',
    visual: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_trusty.png',
    challenge: '반려동물 사료 브랜드의 인지도 제고와 고객 참여를 이끌어낼 릴스 중심의 숏폼 콘텐츠 전략이 필요했습니다.',
    solution: [
      "'트푸터뷰' 시리즈 등 릴스 콘텐츠 기획 및 제작 (인터뷰 형식의 숏폼 콘텐츠)",
      "Instagram 릴스 중심의 브랜드 스토리텔링 및 제품 소개 콘텐츠 제작",
      "고객 인터뷰 및 사용 후기 기반의 진정성 있는 콘텐츠 구성"
    ],
    result: [
      "릴스 중심 SNS 콘텐츠 전략을 통한 브랜드 인지도 제고",
      "'트푸터뷰' 시리즈를 통한 고객 참여 및 커뮤니티 형성",
      "숏폼 콘텐츠 기획 및 제작 역량 강화"
    ]
  },
  {
    id: 'archive-03',
    title: 'Restylane 레스틸렌',
    tagline: '의료기기 브랜드를 위한 AI 사운드 & 릴스 챌린지 캠페인',
    client: 'Galderma Korea 갈더마코리아',
    brand: 'Restylane 레스틸렌',
    product: '프리미엄 HA 필러',
    role: '캠페인 총괄 기획 및 전략 디렉팅 (Nexpaper M&C 재직 당시)',
    period: '2024 H2',
    tags: ["#헬스케어", "#뷰티", "#SNS마케팅", "#디지털콘텐츠"],
    image: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_restylane.png',
    visual: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_restylane.png',
    challenge: '의료기기 광고 심의 규제로 인해 제품의 핵심 차별점(눈밑 필러)을 직접 언급하거나 효능을 구체적으로 표현할 수 없는 상황. 정보 전달 위주의 딱딱한 기존 방식을 벗어나, 타겟에게 브랜드를 직관적이고 효과적으로 각인시킬 새로운 커뮤니케이션 전략이 필요했습니다.',
    solution: [
      "AI 사운드 기획 (Suno.com 활용): 제품 무드를 청각화한 오리지널 브랜드 사운드 제작",
      "포인트 안무 개발 및 영상 제작: 제품명을 직관적으로 형상화한 비언어적 메시지 시각화",
      "릴스 챌린지 & B2B 오프라인 행사: 피부과 전문의 등 의료 전문가를 대상으로 한 오프라인 이벤트에서 활용하여 전문가층 참여를 유도하고 온오프라인 통합 경험 설계"
    ],
    result: [
      "클라이언트 내부에서 높은 만족도 확보 및 마케팅 성과에 대한 신뢰 구축",
      "갈더마 본사 및 여러 글로벌 마케팅 지사로부터 프로세스 벤치마킹 문의",
      "보수적 제약 산업 내 AI 기술을 선제 도입한 마케팅 사례 구축"
    ]
  },
  {
    id: 'archive-04',
    title: 'LG StanbyME 스탠바이미',
    tagline: '글로벌 크리에이티브 라이프스타일 콘텐츠 기획 및 총괄 디렉팅',
    client: 'LG Electronics LG전자',
    brand: 'LG StanbyME 스탠바이미',
    product: '무선 이동형 스크린',
    role: 'SNS 콘텐츠 디렉팅 및 해외 크리에이터 콘텐츠 제작 총괄 (뉴이미지클럽 재직 당시)',
    period: '2023.01 — 2023.05',
    tags: ["#IT", "#라이프스타일", "#SNS마케팅", "#디지털콘텐츠"],
    image: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_lg.png',
    visual: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_lg.png',
    challenge: '글로벌 시장에서 현지 유저들의 다양한 라이프스타일에 자연스럽게 녹아드는 고감도 비주얼 소스 확보가 필요했습니다. 국내 중심 마케팅 문법을 탈피하여 해외 시장에서도 선호될 수 있는 진정성 있는 브랜드 내러티브 구축이 과제였습니다.',
    solution: [
      "해외 크리에이터 3인 섭외 및 맞춤형 라이프스타일 테마 설정",
      "해외 현지 로케이션 촬영 총괄 디렉팅 (비주얼 무드, 스토리보드, 인터뷰 가이드라인 수립)",
      "글로벌 소셜 채널 활용 가능한 고퀄리티 콘텐츠 라이브러리 구축"
    ],
    result: [
      "각 시장별 특성에 최적화된 고감도 브랜드 비주얼 에셋 확보",
      "진정성 있는 콘텐츠를 통한 브랜드 신뢰도 및 친밀도 제고",
      "총괄 디렉팅 체계를 통한 글로벌 촬영 퀄리티 컨트롤 및 일관된 브랜드 메시지 유지"
    ]
  },
  {
    id: 'archive-05',
    title: 'DOOSAN MAGAZINE',
    tagline: '얼루어/보그/W 프리랜스 에디터',
    client: 'Doosan Magazine 두산매거진',
    brand: 'ALLURE Korea, VOGUE Korea, W Korea',
    product: '뷰티·패션 매거진 (온·오프라인)',
    role: '프리랜스 에디터 / 컨트리뷰팅 에디터',
    period: '2019 — 2022',
    tags: ["#뷰티", "#라이프스타일", "#매거진", "#에디토리얼"],
    image: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_doosan.png',
    visual: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_doosan.png',
    challenge: '뷰티 및 패션 매거진의 지면, 웹, SNS를 아우르는 통합 콘텐츠 제작과 브랜드 협업 애드버토리얼 기획이 필요했습니다.',
    solution: [
      "월별 특집 기사 및 크리에이터 튜토리얼 영상 기획 및 제작",
      "Editor's Pick/리뷰 지면·웹·SNS 통합 콘텐츠 제작",
      "ALLURE 코리아 애드버토리얼 기획/제작 및 그린얼루어 현장 취재"
    ],
    result: [
      "3개 주요 패션 매거진에서 다양한 에디토리얼 콘텐츠 제작",
      "브랜디드 콘텐츠 기획 및 제작 경험 축적",
      "지면-웹-SNS 통합 콘텐츠 전략 수립 역량 강화"
    ]
  },
  {
    id: 'archive-06',
    title: 'SSF SHOP 삼성물산 패션',
    tagline: '온라인 프로모션 기획 및 운영',
    client: 'Samsung C&T Fashion 삼성물산 패션부문',
    brand: 'SSF SHOP',
    product: '온라인 패션 편집샵 플랫폼',
    role: '대리, 온라인 프로모션팀',
    period: '2017 — 2019',
    tags: ["#패션", "#이커머스", "#디지털콘텐츠"],
    image: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_ssf.png',
    visual: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_ssf.png',
    challenge: '온라인 편집샵의 프로모션 기획 및 브랜드 콘텐츠 제작을 통한 고객 참여 유도 및 매출 증대가 필요했습니다.',
    solution: [
      "온라인 프로모션 기획 및 실행 (시즌별 캠페인, 이벤트 등)",
      "브랜드 콜라보레이션 및 마케팅 콘텐츠 제작",
      "데이터 기반 프로모션 성과 분석 및 최적화"
    ],
    result: [
      "다수의 온라인 프로모션 기획 및 성공적 실행",
      "브랜드 협업 프로젝트를 통한 고객 참여율 증대",
      "온라인 커머스 마케팅 실무 경험 및 데이터 분석 역량 구축"
    ]
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
