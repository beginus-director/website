
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Instagram, Mail, Phone, Menu, X, ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import { PROJECTS, SERVICES, WORK_PROCESS, SERVICE_TOOLS, ARCHIVE_PROJECTS } from './constants';
import { CaseStudy, ArchiveProject } from './types';
import Logo from './Logo';

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => handleLinkClick(e, 'hero')}
          className="flex items-center hover:opacity-80 transition-opacity"
          aria-label="Beginus Home"
        >
          <span className="text-xl font-medium tracking-tight text-brandBlack">studiobeginus.com</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-12 text-sm font-medium uppercase tracking-widest text-brandBlack">
          <a href="#" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-morningSky transition-colors">About</a>
          <a href="#" onClick={(e) => handleLinkClick(e, 'work')} className="hover:text-morningSky transition-colors">Work</a>
          <a href="#" onClick={(e) => handleLinkClick(e, 'service')} className="hover:text-morningSky transition-colors">Service</a>
          <a href="#" onClick={(e) => handleLinkClick(e, 'method')} className="hover:text-morningSky transition-colors">Method</a>
          <a href="#" onClick={(e) => handleLinkClick(e, 'contact')} className="hover:text-morningSky transition-colors">Contact</a>
        </div>

        <button onClick={() => setIsOpen(true)} className="md:hidden text-brandBlack p-2" aria-label="Open menu">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Full Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 w-screen h-screen z-[9999] flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}
        style={{ backgroundColor: '#111111' }}
      >
        
        {/* Mobile Header Inside Menu */}
        <div className="h-20 flex items-center justify-between px-6 lg:px-8 shrink-0">
          <a 
            href="#" 
            onClick={(e) => handleLinkClick(e, 'hero')}
            className="text-xl font-medium tracking-tight text-morningSky cursor-pointer hover:opacity-70 transition-opacity"
          >
            studiobeginus.com
          </a>
          <button 
            onClick={() => setIsOpen(false)} 
            className="w-12 h-12 flex items-center justify-center text-morningSky hover:text-white transition-all" 
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
        </div>

        {/* Links Area */}
        <div className="flex-grow flex flex-col items-center justify-center space-y-8">
          {['home', 'about', 'work', 'service', 'method', 'contact'].map((item) => (
            <a 
              key={item}
              href={`#${item === 'home' ? 'hero' : item}`} 
              onClick={(e) => handleLinkClick(e, item === 'home' ? 'hero' : item)}
              className="text-4xl md:text-5xl font-medium text-morningSky hover:text-white transition-colors lowercase"
            >
              {item}
            </a>
          ))}
          
          {/* Mobile Social Icons Section */}
          <div className="flex space-x-6 pt-10">
            <a 
              href="https://instagram.com/studio.beginus" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-morningSky text-brandBlack flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="mailto:hello@studiobeginus.com"
              className="w-12 h-12 rounded-full bg-morningSky text-brandBlack flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Padding for aesthetics */}
        <div className="h-20 shrink-0"></div>
      </div>
    </nav>
  );
};

const SectionHeader = ({ title, subtitle, light }: { title: string; subtitle?: React.ReactNode; light?: boolean }) => (
  <div className="mb-12 md:mb-16">
    <h2 className={`text-[32px] md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-[-0.04em] mb-6 break-keep ${light ? 'text-morningSky' : 'text-brandBlack'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-[16px] md:text-[18px] leading-[1.6] tracking-[-0.01em] max-w-2xl break-keep ${light ? 'text-morningSky/80' : 'text-gray-500'}`}>
        {subtitle}
      </p>
    )}
  </div>
);

const Footer = () => (
  <footer className="py-16 md:py-20 bg-brandBlack text-morningSky border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div>
          <Logo className="h-8 md:h-10 w-auto text-morningSky mb-8" />
          <div className="text-[14px] text-morningSky/80 space-y-2 uppercase tracking-widest font-bold break-keep">
            <p>Studio Beginus 스튜디오 비기너스</p>
            <p>Director Jiyoung Lee</p>
            <p>Business: 260-09-03112</p>
          </div>
        </div>
        <div className="text-[14px] text-morningSky/80 text-right md:max-w-md">
          <p className="mb-4 font-bold text-morningSky leading-relaxed break-keep">Beginus for Beginners — Begin again. Fail better. Grow together.</p>
          <p className="text-[12px] opacity-60 break-keep">&copy; 2026 Studio Beginus. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
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
      
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-beginningIvory rounded-none shadow-2xl overflow-hidden animate-fade-in flex flex-col lg:flex-row">
        
        {/* Floating Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-5 right-5 lg:top-8 lg:right-8 z-[120] p-3 bg-brandBlack/10 hover:bg-brandBlack text-brandBlack hover:text-white rounded-none backdrop-blur-sm transition-all duration-300"
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
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-none bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-brandBlack transition-all opacity-0 group-hover:opacity-100 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImg}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-none bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-brandBlack transition-all opacity-0 group-hover:opacity-100 z-10"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {caseStudy.images.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setCurrentImgIndex(i)}
                    className={`h-1 transition-all duration-500 rounded-none ${i === currentImgIndex ? 'bg-white w-8' : 'bg-white/30 w-3'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        
        {/* Right: Content Section */}
        <div className="w-full lg:w-[45%] bg-beginningIvory flex flex-col justify-center p-10 lg:p-14 overflow-hidden">
          <div className="max-w-md mx-auto w-full space-y-5 lg:space-y-6">
            <div className="space-y-1">
              <span className="text-morningSky font-black uppercase tracking-[0.2em] text-[10px] block">
                CASE {caseId} / {caseStudy.partner.split('|')[0].trim()}
              </span>
              <h3 className="text-[28px] md:text-[32px] font-extrabold text-brandBlack leading-[1.1] tracking-[-0.04em] break-keep">
                {caseStudy.title}
              </h3>
              <p className="text-[14px] font-bold text-gray-400 italic leading-tight break-keep">{caseStudy.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:gap-5">
              <div className="space-y-1">
                <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 border-b border-gray-200 pb-0.5">Partner</h5>
                <p className="text-[16px] text-brandBlack font-extrabold leading-tight break-keep">{caseStudy.partner}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 border-b border-gray-200 pb-0.5">Artist</h5>
                  <p className="text-[16px] text-brandBlack font-extrabold leading-tight break-keep">{caseStudy.artist}</p>
                </div>
                <div className="space-y-1">
                  <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 border-b border-gray-200 pb-0.5">Type</h5>
                  <p className="text-[16px] text-brandBlack font-extrabold leading-tight break-keep">{caseStudy.type}</p>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 border-b border-gray-200 pb-0.5">Overview</h5>
              <p className="text-gray-600 text-[15px] leading-[1.6] tracking-[-0.01em] font-medium break-keep">{caseStudy.overview}</p>
            </div>

            <div className="space-y-2">
              <h5 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 border-b border-gray-200 pb-0.5">Achievements</h5>
              <ul className="space-y-1.5">
                {caseStudy.achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="text-morningSky mr-2 mt-1 flex-shrink-0" size={14} />
                    <span className="text-brandBlack font-bold leading-tight text-[14px] break-keep">{ach}</span>
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

const ArchiveModal = ({ project, onClose }: { project: ArchiveProject; onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  const InfoItem = ({ label, value }: { label: string; value: string }) => (
    <div className="flex flex-col">
      <span className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">{label}</span>
      <span className="text-[15px] font-bold text-brandBlack break-keep leading-tight">{value}</span>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4 bg-brandBlack/50 backdrop-blur-sm">
      <div 
        className="relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-4xl bg-white shadow-2xl overflow-y-auto animate-fade-in flex flex-col md:rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fixed Close Button */}
        <button 
          onClick={onClose} 
          className="fixed md:absolute top-0 right-0 z-[120] p-5 md:p-6 text-brandBlack hover:text-morningSky transition-colors bg-white/80 backdrop-blur-sm md:bg-transparent"
          aria-label="Close modal"
        >
          <X size={28} strokeWidth={1.5} />
        </button>

        <div className="p-6 md:p-12 pb-20 md:pb-12">
          {/* 1. Header */}
          <div className="mb-10 max-w-2xl pt-8 md:pt-0">
            <h2 className="text-[28px] md:text-[40px] font-extrabold leading-[1.1] tracking-[-0.03em] mb-3 text-brandBlack break-keep">
              {project.title}
            </h2>
            {project.tagline && (
              <p className="text-[16px] md:text-[18px] text-gray-600 font-medium leading-relaxed tracking-[-0.01em] mb-5 break-keep">
                {project.tagline}
              </p>
            )}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-gray-100 text-brandBlack text-[12px] font-bold rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 2. Info Grid - Editorial Style Box */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-lg mb-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 md:gap-x-8 lg:gap-x-12">
              <InfoItem label="Client" value={project.client} />
              <InfoItem label="Brand" value={project.brand} />
              <InfoItem label="Product" value={project.product} />
              <div className="md:col-span-1">
                 <InfoItem label="Role" value={project.role} />
              </div>
              <div className="md:col-span-4 border-t border-gray-200 pt-6 mt-2">
                 <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Period</span>
                    <span className="text-[14px] font-bold text-brandBlack">{project.period}</span>
                 </div>
              </div>
            </div>
          </div>

          {/* 3. Visual Archive Section */}
          <div className="mb-12">
             <h3 className="text-[12px] font-black uppercase tracking-widest text-morningSky mb-6">Visual Archive</h3>
             
             {project.media && project.media.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.media.map((item, idx) => {
                    // Logic to span full width if it's the last item and we have an odd number of items to make it look balanced
                    const isLastAndOdd = idx === project.media!.length - 1 && project.media!.length % 2 !== 0;
                    const spanClass = isLastAndOdd ? "md:col-span-2" : "";

                    return (
                      <div key={idx} className={`relative rounded-lg overflow-hidden h-64 md:h-80 w-full ${spanClass}`}>
                        {item.type === 'video' && (
                          <iframe 
                            src={item.url} 
                            className="w-full h-full object-cover" 
                            title={`Project Video ${idx + 1}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                          />
                        )}
                        {item.type === 'image' && (
                           <img 
                              src={item.url} 
                              alt={`Project Visual ${idx + 1}`} 
                              className="w-full h-full object-cover cursor-zoom-in hover:scale-105 transition-transform duration-700"
                              onClick={() => window.open(item.url, '_blank')}
                           />
                        )}
                        {item.type === 'link' && (
                           <a 
                              href={item.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="group block w-full h-full relative"
                           >
                              {item.thumb && (
                                <img 
                                   src={item.thumb} 
                                   alt="Link Thumbnail" 
                                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                              )}
                              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex flex-col items-center justify-center text-white">
                                 <div className="flex items-center space-x-2 border-b border-white/30 pb-1 mb-2">
                                    <span className="text-lg font-bold">View Original</span>
                                    <ArrowUpRight size={20} />
                                 </div>
                              </div>
                           </a>
                        )}
                      </div>
                    )
                  })}
                </div>
             ) : (
                // Fallback to legacy single visual
                <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-inner">
                  <img 
                    src={project.visual} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
             )}
          </div>

          {/* 4. Content Body */}
          <div className="max-w-3xl space-y-12">
            {/* Challenge */}
            <div className="border-l-4 border-morningSky pl-6 py-1">
              <h3 className="text-[12px] font-black uppercase tracking-widest text-morningSky mb-3">The Challenge</h3>
              <p className="text-[18px] md:text-[20px] font-medium text-brandBlack italic leading-[1.6] break-keep">
                "{project.challenge}"
              </p>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-[20px] md:text-[24px] font-extrabold text-brandBlack mb-4">Solution</h3>
              <ul className="space-y-3">
                {project.solution.map((item, idx) => (
                  <li key={idx} className="flex items-start text-[16px] text-gray-700 leading-relaxed break-keep">
                    <span className="mr-3 mt-2 w-1.5 h-1.5 bg-brandBlack rounded-full flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Result */}
            <div>
              <h3 className="text-[20px] md:text-[24px] font-extrabold text-brandBlack mb-4">Key Results</h3>
              <ul className="space-y-3">
                {project.result.map((item, idx) => (
                  <li key={idx} className="flex items-start text-[16px] text-gray-700 leading-relaxed break-keep">
                     <span className="mr-3 mt-2 w-1.5 h-1.5 bg-morningSky rounded-full flex-shrink-0"></span>
                    {item}
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
  const [selectedCase, setSelectedCase] = useState<{case: CaseStudy, index: number} | null>(null);
  const [selectedArchive, setSelectedArchive] = useState<ArchiveProject | null>(null);
  const [showLogo, setShowLogo] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'archive'>('home');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowLogo((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="antialiased text-brandBlack bg-white font-sans">
      <CustomCursor />
      
      {currentPage === 'home' ? (
        <>
          <Navbar onScroll={scrollToSection} />

          {selectedCase && <CaseStudyModal caseStudy={selectedCase.case} index={selectedCase.index} onClose={() => setSelectedCase(null)} />}

          {/* Hero Section */}
          <section id="hero" className="pt-32 pb-16 md:pt-60 md:pb-32 bg-morningSky">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h1 className="text-[44px] md:text-[80px] font-extrabold leading-[1.1] tracking-[-0.04em] mb-10 md:mb-12 break-keep">
                The<br />
                Brand<br />
                Story.
              </h1>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
                <p className="text-[16px] md:text-[18px] max-w-2xl font-medium leading-[1.6] tracking-[-0.01em] break-keep">
                  매거진 에디터 출신 콘텐츠 디렉터가 만드는 브랜드 스토리. <br className="hidden md:block" />
                  감도 높은 브랜딩과 데이터 기반 성과를 연결합니다.
                </p>
                <a 
                  href="javascript:void(0)" 
                  onClick={() => scrollToSection('work')}
                  className="inline-flex items-center justify-center h-16 px-10 rounded-full bg-brandBlack text-white hover:bg-white hover:text-brandBlack transition-all border border-brandBlack group flex-shrink-0 font-bold mt-8 md:mt-0"
                >
                  View Case Study <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </section>

          {/* Intro Bar */}
          <div className="bg-brandBlack text-white py-12 overflow-hidden">
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

          {/* About Section */}
          <section id="about" className="py-16 md:py-32 bg-beginningIvory border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 className="text-[32px] md:text-5xl lg:text-6xl font-extrabold mb-12 md:mb-16 leading-[1.1] tracking-[-0.04em] text-brandBlack max-w-5xl break-keep">
                매거진의 감도 <span className="text-morningSky inline-block mx-0.5 md:mx-1">×</span> UX의 논리 <span className="text-morningSky inline-block mx-0.5 md:mx-1">×</span> 광고의 성과
              </h2>
              <div className="max-w-3xl space-y-8 md:space-y-12">
                <p className="text-[20px] md:text-[24px] font-bold text-gray-800 leading-[1.4] tracking-[-0.02em] break-keep">
                  스튜디오 비기너스는 <br />
                  콘텐츠 중심의 기획과 실행을 전문으로 하는 <br className="hidden md:block" />
                  크리에이티브 에이전시입니다.
                </p>
                <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.6] tracking-[-0.01em] font-medium break-keep">
                  트렌드를 포착하되 고유한 시선으로 재해석하고, <br className="hidden md:block" />
                  함께 성장하며 브랜드 경험을 만들어갑니다.
                </p>
              </div>
            </div>
          </section>

          {/* Director Section */}
          <section id="director" className="py-16 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-[1fr_240px] lg:grid-cols-[1fr_280px] gap-12 md:gap-24 items-start">
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
                    <h4 className="text-[10px] font-bold uppercase tracking-widest mb-4 text-morningSky">PROFILE</h4>
                    <h3 className="text-[32px] md:text-[40px] font-extrabold mb-2 leading-[1.1] tracking-[-0.03em] break-keep">이지영 LEE JIYOUNG</h3>
                    <p className="text-[18px] text-gray-500 italic mb-6 break-keep">Content Director</p>
                    <p className="text-[16px] md:text-[18px] text-gray-700 leading-[1.6] tracking-[-0.01em] font-medium max-w-2xl break-keep">
                      플랫폼 및 스타트업 환경에서 브랜드 성장 경험을 보유하고 있으며, 데이터 기반 캠페인부터 고객 여정 최적화까지 브랜드 경험을 통합적으로 디자인합니다.
                    </p>
                  </div>
                  
                  <div className="space-y-16 pt-8">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-widest mb-10 text-morningSky">주요 경력</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                        <div>
                          <h5 className="text-[16px] font-bold mb-4 border-b border-gray-100 pb-2 break-keep">디지털 마케팅</h5>
                          <ul className="space-y-2 text-[14px] text-gray-600 leading-relaxed font-medium break-keep">
                            <li>갈더마 레스틸렌, 농심 라이필, 유한양행</li>
                            <li>삼성물산 패션부문 프로모션팀</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-[16px] font-bold mb-4 border-b border-gray-100 pb-2 break-keep">UX Writing</h5>
                          <ul className="space-y-2 text-[14px] text-gray-600 leading-relaxed font-medium break-keep">
                            <li>현대카드 Product Design팀</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-[16px] font-bold mb-4 border-b border-gray-100 pb-2 break-keep">브랜딩 & 콘텐츠</h5>
                          <ul className="space-y-2 text-[14px] text-gray-600 leading-relaxed font-medium break-keep">
                            <li>트러스티푸드, LG 스탠바이미</li>
                            <li>두산매거진 ALLURE, VOGUE, W</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-[16px] font-bold mb-4 border-b border-gray-100 pb-2 break-keep">이커머스</h5>
                          <ul className="space-y-2 text-[14px] text-gray-600 leading-relaxed font-medium break-keep">
                            <li>삼성물산 SSFSHOP, 코오롱몰</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="w-full mt-4">
                  <img 
                    src="https://raw.githubusercontent.com/beginus-director/website/0aedd91010a82f886b06ceff4d3d81c52d05c6c2/director_1.png" 
                    alt="Director Lee Jiyoung" 
                    className="w-full h-auto block"
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

          {/* Work Section */}
          <section id="work" className="py-16 md:py-32 bg-brandBlack">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <SectionHeader 
                title="The Work." 
                light={true}
                subtitle={
                  <span className="whitespace-pre-line break-keep">
                    Brand storytelling & content strategy{"\n"}
                    across editorial, social media & digital marketing.
                  </span>
                }
              />
              
              <div className="space-y-32">
                {PROJECTS.map((project) => (
                  <div key={project.id} className="group">
                    <div className={`grid grid-cols-1 gap-12 items-center mb-20 ${project.id === 'yourown' ? 'lg:grid-cols-[4fr_6fr]' : 'md:grid-cols-2'}`}>
                      <div className="order-2 md:order-1 text-morningSky">
                        <span className="inline-block px-4 py-1 rounded-full border border-morningSky text-[10px] font-black uppercase tracking-[0.2em] mb-6">CASE STUDY</span>
                        <h3 className="text-[32px] md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1] tracking-[-0.04em] text-white break-keep">{project.title}</h3>
                        <p className={`text-[16px] md:text-[18px] text-morningSky/90 mb-8 leading-[1.6] tracking-[-0.01em] ${project.id === 'yourown' ? 'max-w-3xl whitespace-normal' : 'max-w-xl whitespace-pre-line'} break-keep`}>
                          {project.description}
                        </p>
                        <div className="grid grid-cols-2 gap-6 text-[14px]">
                          <div>
                            <p className="font-extrabold text-morningSky uppercase tracking-wider mb-1">Period</p>
                            <p className="text-morningSky/80 break-keep">{project.period}</p>
                          </div>
                          <div>
                            <p className="font-extrabold text-morningSky uppercase tracking-wider mb-1">Client</p>
                            <p className="text-morningSky/80 break-keep">{project.client}</p>
                          </div>
                          <div className="col-span-2">
                            <p className="font-extrabold text-morningSky uppercase tracking-wider mb-1">Scope</p>
                            <p className="text-morningSky/80 break-keep">{project.scope.join(' / ')}</p>
                          </div>
                        </div>
                      </div>
                      <div className={`order-1 md:order-2 flex justify-center lg:justify-end transition-all duration-500 hover:scale-[1.01] ${project.id === 'yourown' ? '' : 'overflow-hidden aspect-[3/2] bg-morningSky shadow-2xl rounded-none'}`}>
                        {project.link ? (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className={`block w-full transition-all duration-300 ease-in-out ${project.id === 'yourown' ? 'mx-auto' : ''}`}
                            title={`Visit ${project.title} website`}
                          >
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className={project.id === 'yourown' 
                                ? "block w-auto max-w-[160px] md:max-w-[240px] h-auto mx-auto object-contain"
                                : "w-full h-full object-cover"} 
                              loading="lazy"
                            />
                          </a>
                        ) : (
                          <div className={`w-full ${project.id === 'yourown' ? 'mx-auto' : 'h-full'}`}>
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className={project.id === 'yourown' 
                                ? "block w-auto max-w-[160px] md:max-w-[240px] h-auto mx-auto object-contain"
                                : "w-full h-full object-cover"} 
                              loading="lazy"
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Case Study Grid - 4 Columns Square Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 gap-x-4 md:gap-x-6 lg:gap-x-8">
                      {project.caseStudies?.map((caseStudy, cIdx) => (
                        <div 
                          key={caseStudy.id} 
                          className="group/card cursor-pointer flex flex-col"
                          onClick={() => setSelectedCase({case: caseStudy, index: cIdx})}
                        >
                          <div className="overflow-hidden aspect-[3/4] bg-morningSky rounded-none">
                            <img 
                              src={caseStudy.thumbnail} 
                              alt={caseStudy.title} 
                              className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700 ease-out rounded-none" 
                              loading="lazy"
                            />
                          </div>
                          <div className="mt-4 flex flex-col items-start">
                            <h4 className="text-[10px] font-black text-morningSky uppercase tracking-[0.2em] mb-1 leading-none">
                              {caseStudy.title}
                            </h4>
                            <h3 className="text-[18px] md:text-[20px] font-extrabold text-white leading-[1.2] tracking-[-0.03em] mb-2 line-clamp-1 break-keep">
                              {caseStudy.subtitle}
                            </h3>
                            <div className="inline-flex items-center text-[12px] font-bold text-gray-400 group-hover/card:text-morningSky transition-colors">
                              View details <ChevronRight size={14} className="ml-1 group-hover/card:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* View Archive Button */}
              <div className="w-full flex justify-center mt-16">
                <button 
                  onClick={() => {
                    setCurrentPage('archive');
                    window.scrollTo(0, 0);
                  }}
                  className="group flex items-center px-8 py-4 rounded-full border border-morningSky text-morningSky hover:bg-morningSky hover:text-brandBlack transition-all duration-300 font-bold text-lg"
                >
                  View Archive <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </section>

          {/* Service Section */}
          <section id="service" className="py-16 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <SectionHeader 
                title="The Service." 
                subtitle="에디토리얼 감각과 마케팅 전략을 연결하는 서비스를 제공합니다."
              />
              <div className="grid md:grid-cols-2 gap-12 items-stretch">
                {/* Left Card: Content Marketing & Branding */}
                <div className="p-10 md:p-14 rounded-[2.5rem] bg-earlySky flex flex-col h-full">
                  <h3 className="text-[28px] md:text-[32px] font-extrabold mb-4 leading-[1.1] tracking-[-0.04em] break-keep">{SERVICES[0].title}</h3>
                  <p className="text-[16px] md:text-[18px] text-gray-700 mb-10 font-medium leading-[1.6] tracking-[-0.01em] break-keep">{SERVICES[0].description}</p>
                  <div className="space-y-8 flex-grow">
                    {SERVICES[0].details.map((item, dIdx) => (
                      <div key={dIdx} className="space-y-1.5">
                        <h4 className="font-bold text-[16px] md:text-[18px] text-brandBlack leading-tight break-keep">
                          {item.title}
                        </h4>
                        <p className="text-[14px] md:text-[15px] text-gray-700 font-medium leading-relaxed pl-4 border-l border-brandBlack/10 break-keep">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Card: Collaboration & Tools */}
                <div className="p-10 md:p-14 rounded-[2.5rem] bg-beginningIvory flex flex-col h-full">
                  <div className="mb-14">
                    <h3 className="text-[28px] md:text-[32px] font-extrabold mb-4 leading-[1.1] tracking-[-0.04em] break-keep">{SERVICES[1].title}</h3>
                    <p className="text-[16px] md:text-[18px] text-gray-700 mb-8 font-medium leading-[1.6] tracking-[-0.01em] break-keep">{SERVICES[1].description}</p>
                    <div className="space-y-6">
                      {SERVICES[1].details.map((item, dIdx) => (
                        <div key={dIdx} className="flex flex-col space-y-1">
                          <h4 className="font-bold text-[16px] text-brandBlack leading-tight break-keep">
                            {item.title}
                          </h4>
                          <p className="text-[14px] text-gray-600 font-medium leading-relaxed pl-4 border-l border-brandBlack/10 break-keep">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools Part */}
                  <div className="mt-auto pt-10 border-t border-brandBlack/5">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-morningSky">Tools</h4>
                    <div className="flex flex-wrap gap-3">
                      {SERVICE_TOOLS.map((tool, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="px-5 py-2.5 bg-white text-brandBlack text-[12px] font-black rounded-full shadow-sm ring-1 ring-brandBlack/5"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Method Section */}
          <section id="method" className="py-16 md:py-32 bg-beginningIvory text-brandBlack border-t border-brandBlack">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="mb-12 md:mb-20">
                <h2 className="text-[32px] md:text-[56px] font-extrabold leading-[1.1] tracking-[-0.04em] mb-6 break-keep">The Method.</h2>
                <p className="text-[16px] md:text-[18px] max-w-2xl text-gray-700 font-medium leading-[1.6] tracking-[-0.01em] break-keep">
                  복잡한 절차 대신, 본질에 집중하는 3단계 워크플로우를 지향합니다.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 border-t border-brandBlack">
                {WORK_PROCESS.map((item, index) => (
                  <div 
                    key={index} 
                    className={`py-12 md:py-16 px-0 md:px-10 border-b md:border-b-0 border-brandBlack ${index < 2 ? 'md:border-r border-brandBlack' : ''}`}
                  >
                    <span className="block text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-morningSky">{item.step}</span>
                    <h3 className="text-[28px] md:text-[32px] font-extrabold mb-6 leading-[1.1] tracking-[-0.04em] break-keep">{item.title}</h3>
                    <p className="text-[16px] md:text-[18px] text-gray-700 leading-[1.6] tracking-[-0.01em] font-medium break-keep">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-16 md:py-32 bg-beginningIvory overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
              <div className="mb-12 h-32 md:h-40 flex items-center justify-center relative">
                {/* Text */}
                <p className={`absolute text-[32px] md:text-[56px] font-extrabold leading-[1.1] tracking-[-0.04em] text-brandBlack transition-opacity duration-1000 ${showLogo ? 'opacity-0' : 'opacity-100'}`}>
                  The story begins with us
                </p>
                {/* Image - Using Footer Logo Source (logo_2.png) as requested */}
                <img 
                  src="https://raw.githubusercontent.com/beginus-director/website/0ee73fcf93582ee0899847969c2d9fd60b76757a/logo_2.png"
                  alt="Studio Beginus"
                  className={`absolute h-16 md:h-24 w-auto object-contain transition-opacity duration-1000 ${showLogo ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>
              <div className="flex flex-col items-center space-y-8">
                <p className="text-[18px] md:text-[20px] max-w-2xl text-gray-600 font-medium leading-[1.6] tracking-[-0.01em] break-keep">
                  새로운 브랜드 스토리, 스튜디오 비기너스와 함께 시작해보세요.
                </p>
                <div className="flex flex-wrap justify-center gap-6 mt-8">
                  <a href="mailto:hello@studiobeginus.com" className="flex items-center bg-brandBlack text-white px-8 py-4 rounded-full font-bold hover:bg-morningSky transition-colors break-keep">
                    <Mail className="mr-3" /> hello@studiobeginus.com
                  </a>
                  <a href="tel:+821066897073" className="flex items-center bg-white border border-gray-200 px-8 py-4 rounded-full font-bold hover:border-morningSky transition-colors break-keep">
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

          <Footer />
        </>
      ) : (
        <div className="min-h-screen bg-white">
           {selectedArchive && <ArchiveModal project={selectedArchive} onClose={() => setSelectedArchive(null)} />}
           
          {/* Archive Header */}
          <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
              <button 
                onClick={() => {
                  setCurrentPage('home');
                  window.scrollTo(0, 0);
                }}
                className="text-brandBlack flex items-center gap-2 font-medium hover:text-morningSky transition-colors"
              >
                 <ArrowLeft size={20} /> Back to Home
              </button>
              <span className="text-xl font-medium tracking-tight text-brandBlack">studiobeginus.com</span>
            </div>
          </nav>

          {/* Archive Content */}
          <div className="pt-32 pb-20">
             {/* Title */}
             <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
                <h1 className="text-[44px] md:text-[80px] font-extrabold leading-[1.1] tracking-[-0.04em] text-brandBlack">The Archive.</h1>
             </div>

             {/* Grid */}
             <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                {ARCHIVE_PROJECTS.map((p, i) => (
                   <div 
                    key={i} 
                    className="group cursor-pointer"
                    onClick={() => setSelectedArchive(p)}
                   >
                      <div className="aspect-square bg-gray-50 border border-black/5 overflow-hidden mb-4 relative">
                         <img 
                           src={p.image} 
                           alt={p.title}
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                         />
                      </div>
                      <h3 className="text-xl font-bold text-brandBlack mt-4 group-hover:text-morningSky transition-colors">{p.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {p.tags.map((tag, tIdx) => (
                           <span key={tIdx} className="text-sm text-gray-500 font-medium">{tag}</span>
                        ))}
                      </div>
                   </div>
                ))}
             </div>
          </div>
          
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
