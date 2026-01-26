import React from 'react';

const Logo = ({ className = "" }) => {
  // 상단 헤더용 로고 (logo_1.png)
  const headerLogoUrl = "https://raw.githubusercontent.com/beginus-director/website/0ee73fcf93582ee0899847969c2d9fd60b76757a/logo_1.png";
  // 하단 푸터용 로고 (logo_2.png - 브랜드 스카이 블루 적용)
  const footerLogoUrl = "https://raw.githubusercontent.com/beginus-director/website/0ee73fcf93582ee0899847969c2d9fd60b76757a/logo_2.png";

  // 푸터는 App.tsx에서 'text-morningSky' 클래스를 포함하고 있으므로 이를 기준으로 이미지를 전환합니다.
  const isFooter = className.includes('text-morningSky');
  const src = isFooter ? footerLogoUrl : headerLogoUrl;

  return (
    <img 
      src={src}
      alt="STUDIO BEGINUS"
      className={`${className} object-contain`}
      style={{ display: 'block' }}
      loading="eager"
    />
  );
};

export default Logo;