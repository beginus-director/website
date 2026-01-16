
import React, { useState, useEffect } from 'react';
import { ArrowRight, Instagram, Mail, Phone, Plus, Minus, Menu, X, ArrowUpRight } from 'lucide-react';
import { PROJECTS, SERVICES, WORK_PROCESS } from './constants';
import { Project, CaseStudy } from './types';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#hero" className="logo-font text-2xl lowercase">beginus</a>
        
        <div className="hidden md:flex items-center space-x-12 text-sm font-medium uppercase tracking-widest">
          <a href="#about" className="hover:text-morningSky transition-colors">About</a>
          <a href="#work" className="hover:text-morningSky transition-colors">Work</a>
          <a href="#service" className="hover:text-morningSky transition-colors">Service</a>
          <a href="#contact" className="hover:text-morningSky transition-colors">Contact</a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white fixed inset-0 top-20 z-40 p-8 flex flex-col space-y-8 text-3xl font-bold">
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#work" onClick={() => setIsOpen(false)}>Work</a>
          <a href="#service" onClick={() => setIsOpen(false)}>Service</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: React.ReactNode }) => (
  <div className="mb-16">
    <h2 className="heading-lg mb-6">{title}</h2>
    {subtitle && <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">{subtitle}</p>}
  </div>
);

const App: React.FC = () => {
  const [activeProcess, setActiveProcess] = useState<number | null>(0);

  return (
    <div className="antialiased text-brandBlack">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="pt-40 pb-24 md:pt-60 md:pb-40 bg-morningSky px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="heading-xl mb-12">
            The<br />
            Brand<br />
            Story.
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="text-xl md:text-2xl max-w-xl font-medium leading-tight">
              매거진 에디터 출신 콘텐츠 디렉터가 만드는 브랜드 스토리.<br />
              감도 높은 브랜딩과 데이터 기반 성과를 연결합니다.
            </p>
            <a href="#work" className="inline-flex items-center justify-center h-16 px-10 rounded-full bg-brandBlack text-white hover:bg-white hover:text-brandBlack transition-all border border-brandBlack group">
              See the work <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Intro Bar */}
      <div className="bg-brandBlack text-white py-12 px-6 overflow-hidden">
        <div className="flex whitespace-nowrap space-x-12 animate-marquee items-center text-sm font-bold uppercase tracking-widest">
          <span>Editorial Sensibility</span>
          <span className="w-2 h-2 rounded-full bg-morningSky"></span>
          <span>UX Logic</span>
          <span className="w-2 h-2 rounded-full bg-morningSky"></span>
          <span>Marketing Performance</span>
          <span className="w-2 h-2 rounded-full bg-morningSky"></span>
          <span>Brand Identity</span>
          <span className="w-2 h-2 rounded-full bg-morningSky"></span>
          <span>Content Strategy</span>
          <span className="w-2 h-2 rounded-full bg-morningSky"></span>
          <span>Editorial Sensibility</span>
          <span className="w-2 h-2 rounded-full bg-morningSky"></span>
          <span>UX Logic</span>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_320px] lg:grid-cols-[1fr_380px] gap-12 md:gap-24 items-start">
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
                <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-morningSky">Profile</h4>
                <h3 className="text-3xl font-bold mb-2">이지영 LEE JIYOUNG</h3>
                <p className="text-gray-500 italic">Magazine Editor & Content Director</p>
              </div>
              
              <div className="space-y-12">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-morningSky">주요 경력 (Career)</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between border-b border-gray-100 pb-2">
                      <span>삼성물산 패션부문</span>
                      <span className="text-gray-400">온라인 프로모션팀</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-100 pb-2">
                      <span>현대카드</span>
                      <span className="text-gray-400">Product Design팀</span>
                    </li>
                    <li className="flex justify-between border-b border-gray-100 pb-2">
                      <span>코오롱 인더스트리 FnC</span>
                      <span className="text-gray-400">온라인팀</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-morningSky">주요 프로젝트 (Projects)</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
                    <li className="flex items-center border-b border-gray-100 py-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-morningSky mr-3 flex-shrink-0"></span>
                      갈더마코리아 Restylane
                    </li>
                    <li className="flex items-center border-b border-gray-100 py-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-morningSky mr-3 flex-shrink-0"></span>
                      농심 Lifill
                    </li>
                    <li className="flex items-center border-b border-gray-100 py-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-morningSky mr-3 flex-shrink-0"></span>
                      유한양행 Wellness & Whimzees
                    </li>
                    <li className="flex items-center border-b border-gray-100 py-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-morningSky mr-3 flex-shrink-0"></span>
                      LG StanbyME
                    </li>
                    <li className="flex items-center border-b border-gray-100 py-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-morningSky mr-3 flex-shrink-0"></span>
                      두산매거진 ALLURE, VOGUE, W
                    </li>
                    <li className="flex items-center border-b border-gray-100 py-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-morningSky mr-3 flex-shrink-0"></span>
                      삼성물산 패션부문 SSF SHOP 외 다수
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 shadow-sm mt-4">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop" 
                alt="Director Lee Jiyoung" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1598550874175-4d0fe4a2c90b?q=80&w=1288&auto=format&fit=crop";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="The Work." 
            subtitle="브랜드의 철학을 담아낸 협업 사례들입니다."
          />
          
          <div className="space-y-32">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                  <div className="order-2 md:order-1">
                    <span className="inline-block px-4 py-1 rounded-full border border-brandBlack text-xs font-bold uppercase mb-6">Featured Project</span>
                    <h3 className="text-5xl font-extrabold mb-6 tracking-tight">{project.title}</h3>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                      {project.challenge} 해결을 위해 {project.approach}를 통해 {project.result} 성과를 달성했습니다.
                    </p>
                    <div className="grid grid-cols-2 gap-6 text-sm">
                      <div>
                        <p className="font-bold text-gray-400 uppercase tracking-wider mb-1">Period</p>
                        <p>{project.period}</p>
                      </div>
                      <div>
                        <p className="font-bold text-gray-400 uppercase tracking-wider mb-1">Client</p>
                        <p>{project.client}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="font-bold text-gray-400 uppercase tracking-wider mb-1">Scope</p>
                        <p>{project.scope.join(' / ')}</p>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 overflow-hidden rounded-2xl aspect-[3/2] bg-morningSky shadow-2xl transition-transform group-hover:scale-[1.02]">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Case Study Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                  {project.caseStudies?.map((caseStudy) => (
                    <div key={caseStudy.id} className="bg-white p-10 rounded-2xl border border-gray-100 hover:border-morningSky transition-colors">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h4 className="text-sm font-bold text-morningSky uppercase tracking-widest mb-1">{caseStudy.subtitle}</h4>
                          <h3 className="text-2xl font-bold">{caseStudy.title}</h3>
                        </div>
                        <ArrowUpRight className="text-gray-300" />
                      </div>
                      <p className="text-gray-500 text-sm mb-6 leading-relaxed">{caseStudy.overview}</p>
                      <ul className="space-y-2">
                        {caseStudy.achievements.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-earlySky mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method Section (Accordion style) */}
      <section className="py-32 bg-brandBlack text-white px-6">
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
              <div key={idx} className={`p-12 rounded-3xl ${idx === 0 ? 'bg-earlySky' : 'bg-beginningIvory'}`}>
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
          <h2 className="heading-lg mb-12">Let's Create<br />Together.</h2>
          <div className="flex flex-col items-center space-y-8">
            <p className="text-2xl max-w-2xl text-gray-600">
              브랜드의 새로운 시작, 스튜디오 비기너스와 함께 만들어보세요.
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
              <a href="https://instagram.com/studio.beginus" target="_blank" className="p-4 bg-white rounded-full shadow-lg hover:text-morningSky transition-all hover:-translate-y-1">
                <Instagram size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div>
              <h2 className="logo-font text-4xl lowercase mb-6">beginus</h2>
              <div className="text-sm text-gray-400 space-y-2 uppercase tracking-widest font-bold">
                <p>Studio Beginus 스튜디오 비기너스</p>
                <p>Director Jiyoung Lee</p>
                <p>Business: 260-09-03112</p>
              </div>
            </div>
            <div className="text-sm text-gray-400 text-right">
              <p className="mb-4">Designed for the beginnings.</p>
              <p>&copy; 2026 Studio Beginus. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky CTA (Mobile) */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <a href="#contact" className="flex items-center justify-center w-full h-16 bg-brandBlack text-white rounded-full shadow-2xl font-bold">
          Start a project <ArrowRight className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default App;
