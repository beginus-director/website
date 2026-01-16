import { Project, ServiceItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'yourown',
    title: 'YOUROWN 유로운',
    category: 'Art Commission Service Branding',
    period: '2025.07 — 2026.01',
    client: 'YOUROWN 유로운',
    role: 'Content Director & Editor',
    scope: ['Brand Identity', 'Content Strategy', 'Visual Design', 'Social Media Management'],
    description: '미술 작품 의뢰라는 새로운 영역을 대중에게 소개하기 위해\nStory / Artist Interview / Art Life 3가지 콘텐츠 시리즈로\n브랜드 스토리를 구축하고 54+ 브랜드 콘텐츠를 제작했습니다.',
    challenge: '미술 작품 의뢰라는 새로운 영역을 대중에게 소개',
    approach: 'Story / Artist Interview / Art Life 3가지 시리즈로 브랜드 스토리 구축',
    result: '54개 이상의 브랜드 콘텐츠 제작',
    image: 'https://raw.githubusercontent.com/beginus-director/website/08a385248eb598e03c5bb3a78390ec31378a145d/work_1.png',
    caseStudies: [
      {
        id: 'case-01',
        title: 'FROM ART TO PASTRY — 그림에서 케이크로',
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
        id: 'case-02',
        title: 'BRAND COMMISSION — 브랜드를 위한 맞춤 작품',
        subtitle: 'PEER COFFEE',
        thumbnail: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=75&w=800&auto=format&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=75&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=75&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=75&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=75&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1524350303359-8683aa55d116?q=75&w=1200&auto=format&fit=crop'
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
      },
      {
        id: 'case-03',
        title: 'PERSONAL COLLECTION — 취향과 철학이 담긴 콜렉션',
        subtitle: 'Magazine C',
        thumbnail: 'https://images.unsplash.com/photo-1513519247388-443b70b39ed4?q=75&w=800&auto=format&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1513519247388-443b70b39ed4?q=75&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1581850518616-bcb8186c443e?q=75&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=75&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=75&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=75&w=1200&auto=format&fit=crop'
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
        title: 'FROM PERSONAL TO PUBLIC — 개인 의뢰에서 오프라인 행사로',
        subtitle: 'Oh!Boy Magazine',
        thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=75&w=800&auto=format&fit=crop',
        images: [
          'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=75&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=75&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1542435503-956c469947f6?q=75&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1517331156634-57147ed5679a?q=75&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=75&w=1200&auto=format&fit=crop'
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
      }
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Content Marketing & Branding',
    description: '브랜드의 본질을 발견하고 전달하는 에디토리얼 기반 브랜딩',
    details: [
      '콘텐츠 전략 & 기획 (브랜드 정체성 기반)',
      '소셜 미디어 운영 (IG, Blog, YouTube)',
      '브랜드 스토리텔링 & 에디토리얼 캠페인',
      '브랜드 전략 & 메시지 체계 (네이밍, 슬로건)',
      'UX Writing (UI 텍스트, 마이크로카피)'
    ]
  },
  {
    title: 'Creative Collaboration',
    description: '검증된 파트너와 함께하는 고감도 비주얼 결과물',
    details: [
      '그래픽 디자인 (BI, 패키지, 프로모션)',
      '영상 제작 (숏폼, 브랜드 필름)',
      '웹 디자인 & 개발'
    ]
  }
];

export const WORK_PROCESS = [
  { step: '01', title: 'Discovery', description: '브랜드 분석 및 목표 설정' },
  { step: '02', title: 'Strategy', description: '브랜딩 방향성 및 콘텐츠 전략 수립' },
  { step: '03', title: 'Creation', description: '콘텐츠 제작 & 비주얼 작업' },
  { step: '04', title: 'Launch', description: '브랜드 런칭 및 콘텐츠 배포' },
  { step: '05', title: 'Growth', description: '지속적인 관리 및 최적화' }
];
