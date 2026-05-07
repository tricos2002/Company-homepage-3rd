import React, { createContext, useContext, useState, useEffect } from 'react';

interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
  };
  colors: {
    primary: string;
    accent: string;
  };
}

const defaultContent: SiteContent = {
  hero: {
    title: "Bridging Markets, Building Futures",
    subtitle: "Global Trade Consulting & Overseas Market Entry Support for Visionary Businesses."
  },
  colors: {
    primary: "#000000",
    accent: "#1a237e"
  }
};

interface ContentContextType {
  content: SiteContent;
  updateContent: (newContent: Partial<SiteContent>) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(() => {
    const saved = localStorage.getItem('tricos_content');
    return saved ? JSON.parse(saved) : defaultContent;
  });

  const updateContent = (newContent: Partial<SiteContent>) => {
    const updated = { ...content, ...newContent };
    setContent(updated);
    localStorage.setItem('tricos_content', JSON.stringify(updated));
  };

  return (
    <ContentContext.Provider value={{ content, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error('useContent must be used within a ContentProvider');
  return context;
};
