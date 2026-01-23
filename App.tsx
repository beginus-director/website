import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Instagram, Mail, Phone, Plus, Minus, Menu, X, ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS, SERVICES, WORK_PROCESS } from './constants';
import { Project, CaseStudy } from './types';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);

      const target = e.target as HTMLElement;
      const isClickable = 
        target.closest('a') || 
        target.closest('button') || 
        window.getComputedStyle(target).cursor === 'pointer';
      setIsPointer(!!isClickable);
    };

    const onMouseLeave = () => setIsHidden(true);
    const onMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  const cursorSize = 20;

  return (
    <div 
      className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] transition-all duration-300 ease-out ${isHidden ? 'opacity-0' : 'opacity-100'}`}
      style={{ 
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
        transform: `translate3d(${position.x - cursorSize/2}px, ${position.y - cursorSize/2}px, 0) scale(${isPointer ? 1.2 : 1})`,
        backgroundColor: isPointer ? '#c5e5ff' : '#869969',
      }}
    />
  );
};

const Navbar = ({ onScroll }: { onScroll: (id: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onScroll(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => handleLinkClick(e, 'hero')}
          className="logo-font text-2xl lowercase text-brandBlack"
        >
          beginus
        </a>
        
        <div className="hidden md:flex items-center space-x-12 text-sm font-medium uppercase tracking-widest text-brandBlack">
          <a href="#" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-morningSky transition-colors">About</a>
          <a href="#" onClick={(e) => handleLinkClick(e, 'work')} className="hover:text-morningSky transition-colors">Work</a>
          <a href="#" onClick={(e) => handleLinkClick(e, 'service')} className="hover:text-morningSky transition-colors">Service</a>
          <a href="#" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-morningSky transition-colors">Contact</a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-brandBlack" aria-label="Toggle menu">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white fixed inset-0 top-20 z-40 p-8 flex flex-col space-y-8 text-3xl font-bold">
          <a href="#" onClick={(e) => handleLinkClick(e, 'about')}>About</a>
          <a href="#" onClick={(e) => handleLinkClick(e, 'work')}>Work</a>
          <a href="#" onClick={(e) => handleLinkClick(e, 'service')}>Service</a>
          <a href="#" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a>
        </div>
      )}
    </nav>
  );
};

const SectionHeader = ({ title, subtitle, light }: { title: string; subtitle?: React.ReactNode; light?: boolean }) => (
  <div className="mb-16">
    <h2 className={`heading-lg mb-6 ${light ? 'text-morningSky' : 'text-brandBlack'}`}>{title}</h2>
    {subtitle && <p className={`text-xl max-w-2xl leading-relaxed ${light ? 'text-morningSky/80' : 'text-gray-500'}`}>{subtitle}</p>}
  </div>
);

const CaseStudyModal = ({ caseStudy, index, onClose }: { caseStudy: CaseStudy; index: number; onClose: () => void }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  const caseId = (index + 1).toString().padStart(2, '0');

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % caseStudy.images.length);
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + caseStudy.images.length) % caseStudy.images.length);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-brandBlack/90 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-beginningIvory rounded-[2rem] shadow-2xl overflow-hidden animate-fade-in flex flex-col lg:flex-row">
        
        {/* Floating Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-5 right-5 lg:top-8 lg:right-8 z-[120] p-3 bg-brandBlack/10 hover:bg-brandBlack text-brandBlack hover:text-white rounded-full backdrop-blur-sm transition-all duration-300"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Left: Carousel Section */}
        <div className="w-full lg:w-[55%] relative group bg-black aspect-[4/5] overflow-hidden">
          <div className="absolute inset-0 flex transition-transform duration-700 cubic-bezier(0.19, 1, 0.22, 1)" style={{ transform: `translateX(-${currentImgIndex * 100}%)` }}>
            {caseStudy.images.map((img, i) => (
              <img 
                key={i}
                src={img} 
                alt={`${caseStudy.title} - ${i + 1}`} 
                className="w-full h-full object-cover flex-shrink-0"
                decoding="async"
              />
            ))}
          </div>
          
          {caseStudy.images.length > 1 && (
            <>
              <button 
                onClick={prevImg}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-brandBlack transition-all opacity-0 group-hover:opacity-100 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImg}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-brandBlack transition-all opacity-0 group-hover:opacity-100 z-10"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {caseStudy.images.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentImgIndex(i)}
                    className={`h-1 rounded-full transition-all duration-500 ${i === currentImgIndex ? 'bg-white w-8' : 'bg-white/30 w-3'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        
        {/* Right: Refined Compact Content Section */}
        <div className="w-full lg:w-[45%] bg-beginningIvory flex flex-col justify-center p-10 lg:p-14 overflow-hidden">
          <div className="max-w-md mx-auto w-full space-y-5 lg:space-y-6">
            <div className="space-y-1">
              <span className="text-morningSky font-black uppercase tracking-[0.2em] text-[9px] block">
                CASE {caseId} / {caseStudy.partner.split('|')[0].trim()}
              </span>
              <h3 className="text-2xl lg:text-3xl font-black text-brandBlack leading-tight tracking-tight">
                {caseStudy.title}
              </h3>
              <p className="text-sm lg:text-base font-bold text-gray-400 italic leading-none">{caseStudy.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:gap-5">
              <div className="space-y-1">
                <h5 className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-400 border-b border-gray-200 pb-0.5">Partner</h5>
                <p className="text-sm lg:text-base text-brandBlack font-extrabold leading-tight">{caseStudy.partner}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <h5 className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-400 border-b border-gray-200 pb-0.5">Artist</h5>
                  <p className="text-sm lg:text-base text-brandBlack font-extrabold leading-tight">{caseStudy.artist}</p>
                </div>
                <div className="space-y-1">
                  <h5 className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-400 border-b border-gray-200 pb-0.5">Type</h5>
                  <p className="text-sm lg:text-base text-brandBlack font-extrabold leading-tight">{caseStudy.type}</p>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <h5 className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-400 border-b border-gray-200 pb-0.5">Overview</h5>
              <p className="text-gray-600 text-[13px] lg:text-[15px] leading-snug font-medium">{caseStudy.overview}</p>
            </div>

            <div className="space-y-2">
              <h5 className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-400 border-b border-gray-200 pb-0.5">Achievements</h5>
              <ul className="space-y-1.5">
                {caseStudy.achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="text-morningSky mr-2 mt-0.5 flex-shrink-0" size={12} />
                    <span className="text-brandBlack font-bold leading-tight text-[12px] lg:text-[14px]">{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [activeProcess, setActiveProcess] = useState<number | null>(0);
  const [selectedCase, setSelectedCase] = useState<{case: CaseStudy, index: number} | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="antialiased text-brandBlack bg-white">
      <CustomCursor />
      <Navbar onScroll={scrollToSection} />

      {selectedCase && <CaseStudyModal caseStudy={selectedCase.case} index={selectedCase.index} onClose={() => setSelectedCase(null)} />}

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 md:pt-60 md:pb-40 bg-morningSky px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="heading-xl mb-10 md:mb-12">
            The<br />
            Brand<br />
            Story.
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <p className="text-[17px] md:text-2xl max-w-xl font-medium leading-[1.6] md:leading-tight tracking-tight">
              매거진 에디터 출신 콘텐츠 디렉터가 만드는 브랜드 스토리. <br className="hidden md:block" />
              감도 높은 브랜딩과 데이터 기반 성과를 연결합니다.
            </p>
            <a 
              href="javascript:void(0)" 
              onClick={() => scrollToSection('work')}
              className="inline-flex items-center justify-center h-16 px-10 rounded-full bg-brandBlack text-white hover:bg-white hover:text-brandBlack transition-all border border-brandBlack group flex-shrink-0"
            >
              View Case Study <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Intro Bar */}
      <div className="bg-brandBlack text-white py-12 px-6 overflow-hidden">
        <div className="flex whitespace-nowrap space-x-12 animate-marquee items-center text-sm font-bold uppercase tracking-widest">
          <span>CREATIVE STUDIO FOR BRANDING & CONTENT</span>
          <span className="w-2 h-2 rounded-full bg-morningSky"></span>
          <span>CREATIVE STUDIO FOR BRANDING & CONTENT</span>
          <span className="w-2 h-2 rounded-full bg-morningSky"></span>
          <span>CREATIVE STUDIO FOR BRANDING & CONTENT</span>
          <span className="w-2 h-2 rounded-full bg-morningSky"></span>
          <span>CREATIVE STUDIO FOR BRANDING & CONTENT</span>
          <span className="w-2 h-2 rounded-full bg-morningSky"></span>
          <span>CREATIVE STUDIO FOR BRANDING & CONTENT</span>
          <span className="w-2 h-2 rounded-full bg-morningSky"></span>
          <span>CREATIVE STUDIO FOR BRANDING & CONTENT</span>
          <span className="w-2 h-2 rounded-full bg-morningSky"></span>
          <span>CREATIVE STUDIO FOR BRANDING & CONTENT</span>
          <span className="w-2 h-2 rounded-full bg-morningSky"></span>
          <span>CREATIVE STUDIO FOR BRANDING & CONTENT</span>
          <span className="w-2 h-2 rounded-full bg-morningSky"></span>
        </div>
      </div>

      {/* Intro Section */}
      <section id="about" className="py-24 md:py-40 bg-beginningIvory px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[22px] md:text-3xl lg:text-[42px] font-extrabold mb-12 md:mb-20 leading-[1.4] tracking-tight text-brandBlack">
            매거진의 감도 <span className="text-morningSky inline-block mx-0.5 md:mx-1">×</span> UX의 논리 <span className="text-morningSky inline-block mx-0.5 md:mx-1">×</span> 광고의 성과
          </h2>
          <div className="max-w-5xl space-y-8 md:space-y-12">
            <p className="text-[19px] md:text-2xl lg:text-[34px] font-bold text-gray-800 leading-[1.5] md:leading-tight">
              스튜디오 비기너스는 <br />
              콘텐츠 중심의 기획과 실행을 전문으로 하는 <br className="hidden md:block" />
              크리에이티브 에이전시입니다.
            </p>
            <p className="text-[16px] md:text-xl lg:text-[24px] text-gray-600 leading-relaxed font-medium">
              트렌드를 포착하되 고유한 시선으로 재해석하고, <br className="hidden md:block" />
              함께 성장하며 브랜드 경험을 만들어갑니다.
            </p>
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section id="director" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_240px] lg:grid-cols-[1fr_280px] gap-12 md:gap-24 items-start">
          <div className="order-2 md:order-1">
            <SectionHeader 
              title="The Director." 
              subtitle={
                <>
                  10+ years experience in editorial,<br />
                  branding & digital marketing.
                </>
              } 
            />
            <div className="space-y-12">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-morningSky">PROFILE</h4>
                <h3 className="text-4xl font-extrabold mb-2">이지영 LEE JIYOUNG</h3>
                <p className="text-xl text-gray-500 italic mb-6">Content Director</p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium max-w-2xl">
                  플랫폼 및 스타트업 환경에서 브랜드 성장 경험을 보유하고 있으며, 데이터 기반 캠페인부터 고객 여정 최적화까지 브랜드 경험을 통합적으로 디자인합니다.
                </p>
              </div>
              
              <div className="space-y-16 pt-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-10 text-morningSky">주요 경력</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                    <div>
                      <h5 className="text-lg font-bold mb-4 border-b border-gray-100 pb-2">디지털 마케팅</h5>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>갈더마 레스틸렌, 농심 라이필, 유한양행</li>
                        <li>삼성물산 패션부문 프로모션팀</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold mb-4 border-b border-gray-100 pb-2">UX Writing</h5>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>현대카드 Product Design팀</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold mb-4 border-b border-gray-100 pb-2">브랜딩 & 콘텐츠</h5>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>트러스티푸드, LG 스탠바이미</li>
                        <li>두산매거진 ALLURE, VOGUE, W</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-lg font-bold mb-4 border-b border-gray-100 pb-2">이커머스</h5>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>삼성물산 SSFSHOP, 코오롱몰</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 shadow-sm mt-4">
              <img 
                src="https://raw.githubusercontent.com/beginus-director/website/ebd9366d327e97bb73b7e8a87e15152c39cc08a8/my-profile-f.png" 
                alt="Director Lee Jiyoung" 
                className="w-full h-full object-cover"
                decoding="async"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-32 px-6 bg-brandBlack">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="The Work." 
            light={true}
            subtitle={
              <span className="whitespace-pre-line">
                Brand storytelling & content strategy{"\n"}
                across editorial, social media & digital marketing.
              </span>
            }
          />
          
          <div className="space-y-32">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                  <div className="order-2 md:order-1 text-morningSky">
                    <span className="inline-block px-4 py-1 rounded-full border border-morningSky text-[10px] font-black uppercase tracking-[0.2em] mb-6">CASE STUDY</span>
                    <h3 className="text-5xl font-extrabold mb-6 tracking-tight text-white">{project.title}</h3>
                    <p className="text-xl text-morningSky/90 mb-8 leading-relaxed whitespace-pre-line">
                      {project.description}
                    </p>
                    <div className="grid grid-cols-2 gap-6 text-sm">
                      <div>
                        <p className="font-extrabold text-morningSky uppercase tracking-wider mb-1">Period</p>
                        <p className="text-morningSky/80">{project.period}</p>
                      </div>
                      <div>
                        <p className="font-extrabold text-morningSky uppercase tracking-wider mb-1">Client</p>
                        <p className="text-morningSky/80">{project.client}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="font-extrabold text-morningSky uppercase tracking-wider mb-1">Scope</p>
                        <p className="text-morningSky/80">{project.scope.join(' / ')}</p>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 overflow-hidden rounded-[2.5rem] aspect-[3/2] bg-morningSky shadow-2xl transition-all duration-500 hover:scale-[1.01]">
                    {project.link ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block w-full h-full hover:scale-[1.02] hover:brightness-[0.6] transition-all duration-300 ease-in-out"
                        title={`Visit ${project.title} website`}
                      >
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover" 
                          loading="lazy"
                        />
                      </a>
                    ) : (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover" 
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>

                {/* Case Study Grid: Strict 4:5 Aspect Ratio Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                  {project.caseStudies?.map((caseStudy, cIdx) => (
                    <div 
                      key={caseStudy.id} 
                      className="group/card cursor-pointer aspect-[4/5] flex flex-col rounded-[2.5rem] overflow-hidden bg-morningSky shadow-lg ring-1 ring-white/10 hover:ring-morningSky transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(134,208,252,0.15)]"
                      onClick={() => setSelectedCase({case: caseStudy, index: cIdx})}
                    >
                      {/* Top 80%: Image Area */}
                      <div className="flex-[4] overflow-hidden">
                        <img 
                          src={caseStudy.thumbnail} 
                          alt={caseStudy.title} 
                          className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-1000 ease-out" 
                          loading="lazy"
                        />
                      </div>
                      
                      {/* Bottom 20%: Info Bar Area (Beginning Ivory) */}
                      <div className="flex-1 bg-beginningIvory p-6 md:p-8 flex justify-between items-center">
                        <div className="max-w-[80%]">
                          <h4 className="text-[10px] font-black text-morningSky uppercase tracking-[0.3em] mb-1.5 leading-none">
                            {caseStudy.title}
                          </h4>
                          <h3 className="text-xl md:text-2xl font-black text-brandBlack leading-tight tracking-tight line-clamp-1">
                            {caseStudy.subtitle}
                          </h3>
                        </div>
                        <div className="bg-brandBlack p-3 rounded-full text-white group-hover/card:bg-morningSky group-hover/card:scale-110 transition-all duration-500 flex-shrink-0">
                          <ArrowUpRight size={18} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Archive Button */}
            <div className="flex justify-center pt-20">
              <a 
                href="archive.html" 
                className="group flex items-center justify-center px-12 py-5 border border-morningSky text-morningSky font-bold rounded-full transition-all duration-300 hover:bg-morningSky hover:text-brandBlack"
              >
                Archive <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section id="method" className="py-32 bg-brandBlack text-white px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="heading-lg mb-8">The Method.</h2>
              <p className="text-xl text-gray-400 leading-relaxed max-w-md">
                브랜드의 본질에 접근하여 결과물을 도출하는 5단계 프로세스입니다.
              </p>
            </div>
            <div className="space-y-4">
              {WORK_PROCESS.map((item, index) => (
                <div 
                  key={index}
                  className={`border-b border-gray-800 transition-all ${activeProcess === index ? 'pb-8' : 'pb-4'}`}
                >
                  <button 
                    className="w-full flex items-center justify-between py-6 text-left group"
                    onClick={() => setActiveProcess(activeProcess === index ? null : index)}
                    aria-expanded={activeProcess === index}
                  >
                    <div className="flex items-center space-x-6">
                      <span className="text-sm font-bold text-morningSky">{item.step}</span>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                    </div>
                    {activeProcess === index ? <Minus className="text-morningSky" /> : <Plus className="group-hover:text-morningSky transition-colors" />}
                  </button>
                  {activeProcess === index && (
                    <p className="text-gray-400 pl-11 text-lg leading-relaxed animate-fade-in">
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section id="service" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="The Service." 
            subtitle="에디토리얼의 감도와 마케팅 성과를 모두 잡는 서비스를 제공합니다."
          />
          <div className="grid md:grid-cols-2 gap-12">
            {SERVICES.map((service, idx) => (
              <div key={idx} className={`p-12 rounded-[2.5rem] ${idx === 0 ? 'bg-earlySky' : 'bg-beginningIvory'}`}>
                <h3 className="text-3xl font-extrabold mb-4">{service.title}</h3>
                <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                <div className="space-y-4">
                  {service.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center group">
                      <div className="w-8 h-[1px] bg-brandBlack mr-4 group-hover:w-12 transition-all"></div>
                      <span className="font-medium">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-beginningIvory">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="heading-lg mb-4">Story Begins with U</h2>
            <h3 className="text-4xl logo-font lowercase text-morningSky">Beginus</h3>
          </div>
          <div className="flex flex-col items-center space-y-8">
            <p className="text-2xl max-w-2xl text-gray-600 font-medium">
              새로운 브랜드 스토리, 스튜디오 비기너스와 함께 시작해보세요.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:hello@studiobeginus.com" className="flex items-center bg-brandBlack text-white px-8 py-4 rounded-full font-bold hover:bg-morningSky transition-colors">
                <Mail className="mr-3" /> hello@studiobeginus.com
              </a>
              <a href="tel:+821066897073" className="flex items-center bg-white border border-gray-200 px-8 py-4 rounded-full font-bold hover:border-morningSky transition-colors">
                <Phone className="mr-3" /> +82 10-6689-7073
              </a>
            </div>
            <div className="flex space-x-6 pt-12">
              <a href="https://instagram.com/studio.beginus" target="_blank" className="p-4 bg-white rounded-full shadow-lg hover:text-morningSky transition-all hover:-translate-y-1" aria-label="Instagram">
                <Instagram size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-brandBlack text-morningSky border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div>
              <h2 className="logo-font text-4xl lowercase mb-6 text-morningSky">beginus</h2>
              <div className="text-sm text-morningSky/80 space-y-2 uppercase tracking-widest font-bold">
                <p>Studio Beginus 스튜디오 비기너스</p>
                <p>Director Jiyoung Lee</p>
                <p>Business: 260-09-03112</p>
              </div>
            </div>
            <div className="text-sm text-morningSky/80 text-right">
              <p className="mb-4 font-bold text-morningSky">Beginus for Beginners — Begin again. Fail better. Grow together.</p>
              <p className="text-xs">&copy; 2026 Studio Beginus. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky CTA (Mobile) */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <a href="javascript:void(0)" onClick={() => scrollToSection('contact')} className="flex items-center justify-center w-full h-16 bg-brandBlack text-white rounded-full shadow-2xl font-bold">
          Start a project <ArrowRight className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default App;