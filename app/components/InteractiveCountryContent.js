'use client';

import { useState, useEffect } from 'react';
import ContentCard from './ContentCard'; // We'll create this component
import TableOfContents from './TableOfContents';

export default function InteractiveCountryContent({ sections, frontmatter }) {
  return (
    <div className="grid lg:grid-cols-3 gap-12">
      {/* Sol: İçerik */}
      <div className="lg:col-span-2 space-y-8">
        {/* Custom H1 styling for the main title */}
        <h1 className="text-4xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-600">
          {frontmatter.title}
        </h1>
        {sections.map((section, idx) => (
          <ContentCard key={idx} section={section} />
        ))}
      </div>

      {/* Sağ: Sidebar with Table of Contents */}
      <div className="lg:col-span-1">
        <div className="sticky top-8 space-y-6">
          {/* Table of Contents */}
          <TableOfContents sections={sections} />
        </div>
      </div>
    </div>
  );
}