
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
    challenge: '미술 작품 의뢰라는 새로운 영역을 대중에게 소개',
    approach: 'Story / Artist Interview / Art Life 3가지 시리즈로 브랜드 스토리 구축',
    result: '54개 이상의 브랜드 콘텐츠 제작',
    image: 'https://picsum.photos/seed/yourown/1200/800',
    caseStudies: [
      {
        id: 'case-01',
        title: 'JAEIN 한남동 파티세리',
        subtitle: 'From Art to Pastry — 그림에서 케이크로',
        client: 'JAEIN 한남동 파티세리 | 이재인 셰프',
        artist: '김한나 작가',
        type: '크리에이티브 콜라보레이션 (예술 × 미식)',
        overview: '이재인 셰프가 김한나 작가에게 그림을 의뢰하고, 완성된 작품에서 영감을 받아 한정 케이크를 제작.',
        achievements: [
          '예술과 미식의 크로스오버 협업 모델 구축',
          '작품 → 제품 전환 사례 (artwork to pastry)',
          '상호 고객 확장 전략 (할인권 증정)'
        ]
      },
      {
        id: 'case-02',
        title: 'PEER COFFEE 피어커피',
        subtitle: 'Brand Commission — 브랜드를 위한 맞춤 작품',
        client: 'PEER COFFEE 피어커피 | 종각점 리뉴얼 오픈',
        artist: '모유진 작가',
        type: '브랜드 차원의 작품 의뢰 (5점)',
        overview: '브랜드가 직접 의뢰한 케이스. 브랜드 디렉터 및 아키플로우 디렉터와 협업하여 작품 제작.',
        achievements: [
          '공간 인테리어 요소로 활용 (종각점)',
          '시즌 블렌드 패키지 디자인 적용',
          'B2B 작품 의뢰 모델 구축'
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
