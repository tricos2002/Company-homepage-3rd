import React, { useEffect, useRef } from 'react';

interface NaverMapProps {
  className?: string;
}

declare global {
  interface Window {
    naver: any;
  }
}

export const NaverMap: React.FC<NaverMapProps> = ({ className }) => {
  const mapElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    // Location: 경기도 수원시 영통구 창룡대로256번길 91 에이스광교타워2차
    const location = new naver.maps.LatLng(37.2995, 127.0543);
    const mapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };

    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map: map,
      title: 'Tricos Co., Ltd.',
    });
  }, []);

  return (
    <div 
      ref={mapElement} 
      className={className} 
      style={{ minHeight: '300px' }}
    />
  );
};
