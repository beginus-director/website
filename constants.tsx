
import { Project, ServiceItem, ArchiveProject } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'yourown',
    title: 'YOUROWN 유로운',
    category: 'Art Commission Service Branding',
    period: '2025.06 — 2026.01',
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
    period: '2025.06 — 2026.01',
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
      "인플루언서 마케팅 업체 선정 및 협업 콘텐츠 전략 기획·집행",
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
    tagline: '브랜드 리뉴얼 콘텐츠 전략 및 제작',
    client: '(주)림피드',
    brand: 'TRUSTYFOOD 트러스티푸드',
    product: '동결건조 펫푸드',
    role: '프리랜서 마케터 (SNS 콘텐츠 기획/운영)',
    period: '2025.04 — 2025.05',
    tags: ["#반려동물", "#브랜딩", "#SNS마케팅"],
    image: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_trusty.png',
    visual: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_trusty.png',
    media: [
      {
        type: 'link',
        url: 'https://www.instagram.com/p/DJDs43Tv0sD/',
        thumb: 'https://raw.githubusercontent.com/beginus-director/website/99541c2c995dc82857e573a4ad0a926e79f8644c/archive_trusty_v1.png'
      },
      {
        type: 'link',
        url: 'https://www.instagram.com/p/DJF7G6NSW6H/?img_index=1',
        thumb: 'https://raw.githubusercontent.com/beginus-director/website/99541c2c995dc82857e573a4ad0a926e79f8644c/archive_trusty_v2.jpg'
      },
      {
        type: 'link',
        url: 'https://www.instagram.com/p/DJN1yMJPVB9/',
        thumb: 'https://raw.githubusercontent.com/beginus-director/website/99541c2c995dc82857e573a4ad0a926e79f8644c/archive_trusty_v3.png'
      }
    ],
    challenge: '동결건조 펫푸드 브랜드 트러스티푸드의 인스타그램 콘텐츠 리뉴얼 시점에서, 제품의 차별점을 효과적으로 전달하고 반려인들의 자발적 참여를 이끌어낼 새로운 콘텐츠 전략이 필요했습니다.',
    solution: [
      "핵심 키워드 '저속노화' 제안 및 브랜드 메시지 재정립",
      "2-track 콘텐츠 전략 수립 및 실행: 브랜드 에셋 기반 정보 카드뉴스·참여형 이벤트(게시물), 반려동물 인터뷰 <트푸터뷰>·수의사 협업 <반려견 저속노화 클래스>(릴스)",
      "1개월 집중 운영 기간 동안 섭외·촬영·편집 등 통합 콘텐츠 디렉팅"
    ],
    result: [
      "리뉴얼 1개월 내 2개 오리지널 릴스 시리즈 론칭 및 브랜드 정체성 구축",
      "수의사 협업 콘텐츠를 통한 전문성 및 신뢰도 확보",
      "인터뷰 형식의 진정성 있는 스토리텔링으로 커뮤니티 참여 유도"
    ]
  },
  {
    id: 'archive-03',
    title: 'Restylane 레스틸렌',
    tagline: '브랜드 마케팅 총괄',
    client: 'Galderma Korea 갈더마코리아',
    brand: 'Restylane 레스틸렌',
    product: '프리미엄 HA 필러',
    role: '브랜드 마케팅 총괄 (Nexpaper M&C 재직 당시)',
    period: '2023.07 - 2024.09',
    tags: ["#헬스케어", "#뷰티", "#SNS마케팅", "#디지털콘텐츠"],
    image: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_restylane.png',
    visual: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_restylane.png',
    media: [
      {
        type: 'link',
        url: 'https://youtube.com/shorts/GwqIcukHJGU?feature=share',
        thumb: 'https://raw.githubusercontent.com/beginus-director/website/55eaf23f3d1ef90d48bc18c31427cbe016d71060/archive_restylane_v01.png'
      },
      {
        type: 'link',
        url: 'https://youtu.be/-fvlFP2yqus?si=1taeRw4aN70XNG23',
        thumb: 'https://raw.githubusercontent.com/beginus-director/website/55eaf23f3d1ef90d48bc18c31427cbe016d71060/archive_restylane_v02.png'
      },
      {
        type: 'link',
        url: 'https://dorestylane.com/skinboosters/index_dev.php',
        thumb: 'https://raw.githubusercontent.com/beginus-director/website/55eaf23f3d1ef90d48bc18c31427cbe016d71060/archive_restylane_v03.png'
      },
      {
        type: 'link',
        url: 'https://www.instagram.com/reel/C7i2wURszY2/',
        thumb: 'https://raw.githubusercontent.com/beginus-director/website/55eaf23f3d1ef90d48bc18c31427cbe016d71060/archive_restylane_v04.jpg'
      }
    ],
    challenge: '의료기기 광고 심의 규제로 인해 제품의 핵심 차별점을 직접 언급하거나 효능을 구체적으로 표현할 수 없는 상황. 정보 전달 위주의 딱딱한 기존 방식을 벗어나, 타겟에게 브랜드를 직관적이고 효과적으로 각인시킬 새로운 커뮤니케이션 전략이 필요했습니다.',
    solution: [
      "전략 기획 및 실행 관리: 연간 브랜드 전략 제안, 채널별 프로젝트·예산 관리, 브랜드 키 메시지 개발, 키 비주얼·브랜드 필름 제작, 메타 광고 집행 및 성과 분석",
      "B2B2C 통합 마케팅: 인플루언서 마케팅, 캠페인 프로모션 콘텐츠 제작·운영, SNS 채널 운영(@restylanekorea)",
      "아이라이트 릴스 챌린지: AI 브랜드 사운드(Suno.com) 및 포인트 안무 개발, B2B(HCP) 영상 챌린지 운영으로 온오프라인 통합 경험 설계",
      "의료기기 광고 심의: 까다로운 사전 심의 프로세스 관리, 글로벌 에셋 로컬라이제이션"
    ],
    result: [
      "1년 이상 연간 마케팅 기획 및 실행, 클라이언트 높은 만족도 및 신뢰 확보",
      "아이라이트 릴스 챌린지: 의료 전문가층 자발적 참여 유도 및 갈더마 본사·글로벌 지사 벤치마킹 문의",
      "보수적 제약 산업 내 AI 기술 선제 도입한 혁신적 마케팅 사례 구축"
    ]
  },
  {
    id: 'archive-04',
    title: 'LG StanbyME 스탠바이미',
    tagline: '글로벌 라이프스타일 콘텐츠 기획 및 총괄 디렉팅',
    client: 'LG Electronics LG전자',
    brand: 'LG StanbyME 스탠바이미',
    product: '무선 이동형 스크린',
    role: 'Instagram·네이버 카페 콘텐츠 디렉팅 및 해외 크리에이터 콘텐츠 제작 총괄 (뉴이미지클럽 재직 당시)',
    period: '2023.01 — 2023.05',
    tags: ["#IT", "#라이프스타일", "#SNS마케팅", "#디지털콘텐츠"],
    image: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_lg.png',
    visual: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_lg.png',
    media: [
      {
        type: 'link',
        url: 'https://www.instagram.com/p/CqcM1r0LRip/?img_index=1',
        thumb: 'https://raw.githubusercontent.com/beginus-director/website/b34bcc9bf072bebd10b49c36e4851c11459e5b73/archive_lg_v01.jpg'
      },
      {
        type: 'link',
        url: 'https://www.instagram.com/p/CrSRUFkrgFm/?img_index=1',
        thumb: 'https://raw.githubusercontent.com/beginus-director/website/b34bcc9bf072bebd10b49c36e4851c11459e5b73/archive_lg_v02.jpg'
      },
      {
        type: 'link',
        url: 'https://youtu.be/ZujUVImHCqw?si=AjVdxtgTHDkcjMrY',
        thumb: 'https://raw.githubusercontent.com/beginus-director/website/b34bcc9bf072bebd10b49c36e4851c11459e5b73/archive_lg_v03.png'
      },
      {
        type: 'image',
        url: 'https://raw.githubusercontent.com/beginus-director/website/b34bcc9bf072bebd10b49c36e4851c11459e5b73/archive_lg_v04.png',
        thumb: 'https://raw.githubusercontent.com/beginus-director/website/b34bcc9bf072bebd10b49c36e4851c11459e5b73/archive_lg_v04.png'
      }
    ],
    challenge: '글로벌 시장에서 현지 유저들의 다양한 라이프스타일에 자연스럽게 녹아드는 고감도 비주얼 소스 확보가 필요했습니다. 국내 중심 마케팅 문법을 탈피하여 해외 시장에서도 선호될 수 있는 진정성 있는 브랜드 내러티브 구축이 과제였습니다.',
    solution: [
      "해외 크리에이터 3인 섭외 및 뉴욕 현지 로케이션 촬영 기획·편집 총괄 (비주얼 무드, 스토리보드, 인터뷰 가이드라인 수립)",
      "Instagram & 네이버 카페 통합 콘텐츠 전략 수립 및 운영",
      "How To 시리즈, 월별 플레이리스트/OTT 큐레이션, 꿀팁카드 등 다채널 맞춤형 콘텐츠 제작 디렉팅",
      "월별 홈 디자인 및 이벤트 배너 등 채널 전반 비주얼 디렉팅"
    ],
    result: [
      "해외 크리에이터 3인 콘텐츠 제작 총괄 및 글로벌 시장 맞춤형 고감도 브랜드 비주얼 에셋 확보",
      "Instagram·네이버 카페 통합 운영을 통한 다양한 콘텐츠 시리즈 제작 및 채널별 최적화 경험",
      "진정성 있는 콘텐츠를 통한 브랜드 신뢰도 및 친밀도 제고"
    ]
  },
  {
    id: 'archive-05',
    title: 'DOOSAN MAGAZINE 얼루어/보그/W',
    tagline: '에디토리얼 콘텐츠 기획 및 제작',
    client: 'Doosan Magazine 두산매거진',
    brand: 'ALLURE Korea, VOGUE Korea, W Korea',
    product: '뷰티·패션 매거진 (온·오프라인)',
    role: '컨트리뷰팅 에디터 (프리랜서)',
    period: '2019 — 2022',
    tags: ["#뷰티", "#라이프스타일", "#매거진", "#에디토리얼"],
    image: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_doosan.png',
    visual: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_doosan.png',
    media: [
      {
        type: 'link',
        url: 'https://www.allurekorea.com/2019/05/26/2019-allure-greencampaign/',
        thumb: 'https://raw.githubusercontent.com/beginus-director/website/08cd69811ae3330ad5b7469893f99759cd7402e0/archive_doosan_v01.jpg'
      },
      {
        type: 'link',
        url: 'https://www.instagram.com/p/B1Ii3wan28G/?img_index=2',
        thumb: 'https://raw.githubusercontent.com/beginus-director/website/08cd69811ae3330ad5b7469893f99759cd7402e0/archive_doosan_v02.jpg'
      },
      {
        type: 'link',
        url: 'https://www.vogue.co.kr/2018/03/20/%EB%AF%B8%ED%8A%B8-%EB%9F%AC%EB%B2%84%EC%9D%98-%EC%B5%9C%EC%8B%A0-%EC%A6%90%EA%B2%A8%EC%B0%BE%EA%B8%B0/',
        thumb: 'https://raw.githubusercontent.com/beginus-director/website/08cd69811ae3330ad5b7469893f99759cd7402e0/archive_doosan_v03.jpg'
      },
      {
        type: 'link',
        url: 'https://www.wkorea.com/2019/09/29/%eb%82%b4-%eb%aa%b8-%ea%b8%8d%ec%a0%95%ec%a3%bc%ec%9d%98-%ec%8b%9c%eb%8c%80%ec%9d%98-%eb%b3%b4%eb%94%94-%ec%bc%80%ec%96%b4-%eb%b8%8c%eb%9e%9c%eb%93%9c/',
        thumb: 'https://raw.githubusercontent.com/beginus-director/website/08cd69811ae3330ad5b7469893f99759cd7402e0/archive_doosan_v04.jpg'
      }
    ],
    challenge: '컨트리뷰팅 에디터로서 ALLURE, VOGUE, W Korea 세 개 매거진의 서로 다른 톤앤매너와 독자층을 이해하고, 각 매체의 지면·웹·SNS를 아우르는 통합 콘텐츠를 일관된 퀄리티로 제작해야 했습니다. 특히 뷰티와 라이프스타일 피처 영역에서 브랜드 협업 애드버토리얼은 광고와 에디토리얼의 경계에서 매거진의 신뢰도를 유지하면서도 브랜드 메시지를 효과적으로 전달하는 섬세한 균형이 필요했습니다.',
    solution: [
      "ALLURE Korea 애드버토리얼 콘텐츠 총괄: 월별 특집 기사 기획·제작 및 크리에이터 튜토리얼 영상 기획",
      "Editor's Pick & 리뷰 콘텐츠: 지면 기사 + 웹(<르뷰> 웹&앱 페이지) + SNS 콘텐츠를 통합 기획·제작",
      "그린얼루어 프로젝트: 친환경 뷰티 캠페인 현장 취재 및 브랜디드 콘텐츠·지면 기사 제작",
      "멀티 매거진 협업: VOGUE Korea, W Korea의 뷰티·라이프스타일 피처 콘텐츠 컨트리뷰팅 에디터로 참여"
    ],
    result: [
      "3년간 ALLURE, VOGUE, W Korea 세 개 프리미엄 매거진에서 컨트리뷰팅 에디터로 활동하며 뷰티·라이프스타일 에디토리얼 전문성 구축",
      "지면·웹·SNS를 관통하는 통합 콘텐츠 기획 및 제작 역량 확보",
      "애드버토리얼 및 브랜디드 콘텐츠 제작을 통한 브랜드 협업 커뮤니케이션 경험 축적",
      "매거진 에디토리얼 경험을 바탕으로 이후 다양한 브랜드 콘텐츠 프로젝트로 확장"
    ]
  },
  {
    id: 'archive-06',
    title: 'SSF SHOP 삼성물산 패션',
    tagline: '온라인 패션 콘텐츠 기획·제작 및 프로모션 운영',
    client: 'Samsung C&T Fashion 삼성물산 패션부문',
    brand: 'SSF SHOP',
    product: '온라인 패션 편집샵 플랫폼',
    role: '대리, 온라인 프로모션팀',
    period: '2017 — 2019',
    tags: ["#패션", "#이커머스", "#디지털콘텐츠"],
    image: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_ssf.png',
    visual: 'https://raw.githubusercontent.com/beginus-director/website/106edbd05d670597ae82329c7061c7379bdc0167/archive_ssf.png',
    media: [
      {
        type: 'image',
        url: 'https://raw.githubusercontent.com/beginus-director/website/51664990dd14aa9e477e3a32f14b0e8dc31359a5/archive_ssf_v1.app.jpg',
        thumb: 'https://raw.githubusercontent.com/beginus-director/website/51664990dd14aa9e477e3a32f14b0e8dc31359a5/archive_ssf_v1.app.jpg'
      },
      {
        type: 'image',
        url: 'https://raw.githubusercontent.com/beginus-director/website/51664990dd14aa9e477e3a32f14b0e8dc31359a5/archive_ssf_v2.png',
        thumb: 'https://raw.githubusercontent.com/beginus-director/website/51664990dd14aa9e477e3a32f14b0e8dc31359a5/archive_ssf_v2.png'
      },
      {
        type: 'image',
        url: 'https://raw.githubusercontent.com/beginus-director/website/51664990dd14aa9e477e3a32f14b0e8dc31359a5/archive_ssf_v3.png',
        thumb: 'https://raw.githubusercontent.com/beginus-director/website/51664990dd14aa9e477e3a32f14b0e8dc31359a5/archive_ssf_v3.png'
      },
      {
        type: 'image',
        url: 'https://raw.githubusercontent.com/beginus-director/website/51664990dd14aa9e477e3a32f14b0e8dc31359a5/archive_ssf_v4.png',
        thumb: 'https://raw.githubusercontent.com/beginus-director/website/51664990dd14aa9e477e3a32f14b0e8dc31359a5/archive_ssf_v4.png'
      }
    ],
    challenge: 'SSF SHOP은 빈폴, 구호, 갤럭시 등 수십 개의 자체 브랜드와 글로벌 브랜드를 함께 운영하는 온라인 편집샵으로, 각 브랜드의 고유한 아이덴티티를 존중하면서도 플랫폼 차원의 통합된 브랜드 경험을 제공해야 했습니다. 경쟁사 대비 차별화된 콘텐츠 전략과 고객 참여를 이끌어낼 스타일링 큐레이션이 필요했고, 기획전과 프로모션을 통한 지속적인 고객 유입과 매출 증대가 요구되었습니다.',
    solution: [
      "Get the Style 콘텐츠 시리즈 기획 및 운영: 여러 브랜드 아이템을 통합 스타일링한 '브랜드 크로스 큐레이션' 콘텐츠 기획, 촬영 디렉팅, 발행 및 사이트 내 노출 관리",
      "기획전 비주얼 콘텐츠 제작: 시즌별·테마별 기획전을 위한 메인 비주얼 및 상세페이지 제작, 촬영 협력 업체 커뮤니케이션 및 아이템 사진 촬영·편집 프로세스 관리",
      "사이트 UX Writing 및 검수: 프로모션 배너, 기획전 소개 문구, 상품 상세 페이지 등 사이트 전반의 카피 작성 및 브랜드 톤앤매너 검수",
      "협력 업체 관리: 상품 상세 페이지용 아이템 사진 촬영 및 편집을 제공하는 외부 협력 업체와의 일정 조율, 결과물 품질 관리, 피드백 커뮤니케이션"
    ],
    result: [
      "Get the Style 시리즈 정기 발행을 통한 브랜드 통합 스타일링 콘텐츠 확립 및 고객 참여율 증대",
      "시즌별 기획전 다수 진행, 기획전 페이지 비주얼 콘텐츠 제작 및 프로모션 성과 기여",
      "사이트 전반 UX Writing 및 협력 업체 관리를 통한 콘텐츠 품질 일관성 확보",
      "이커머스 환경에서 콘텐츠 기획부터 제작, 운영, 성과 분석까지 전 과정 실무 경험 구축"
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
