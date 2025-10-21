export default function ContentCard({ section }) {
  // Eğer başlık yoksa (ilk paragraf gibi), basit kart göster
  if (!section.title) {
    return (
      <div className="modern-card">
        <div className="modern-card-content">
          <div className="prose prose-lg max-w-none">
            {renderContent(section.content)}
          </div>
        </div>
      </div>
    );
  }

  const HeadingTag = section.level === 2 ? 'h2' : section.level === 3 ? 'h3' : section.level === 4 ? 'h4' : 'h5';
  const headingSize = section.level === 2 ? 'text-2xl md:text-3xl' : section.level === 3 ? 'text-xl md:text-2xl' : section.level === 4 ? 'text-lg md:text-xl' : 'text-base md:text-lg';
  
  return (
    <div className="modern-card" id={section.title.toLowerCase().replace(/\s+/g, '-')}>
      <div className="modern-card-header">
        <HeadingTag className={`font-bold text-slate-900 flex items-center gap-3 ${headingSize}`}>
          <span className="w-2 h-8 bg-blue-600 rounded-full flex-shrink-0"></span>
          <span>{section.title}</span>
        </HeadingTag>
      </div>
      <div className="modern-card-content">
        <div className="prose prose-lg max-w-none">
          {renderContent(section.content)}
        </div>
      </div>
    </div>
  );
}

function renderContent(lines) {
  if (!lines || lines.length === 0) return null;
  
  let elements = [];
  let currentParagraph = '';
  let inList = false;
  let listItems = [];

  const flushParagraph = () => {
    if (currentParagraph) {
      // Process bold text
      const formatted = currentParagraph.replace(/\*\*(.*?)\*\*/g, '<strong className="font-semibold text-slate-900">$1</strong>');
      elements.push(
        <p key={`p-${elements.length}`} className="text-gray-700 leading-relaxed mb-5 text-base md:text-lg corporate-gray" dangerouslySetInnerHTML={{ __html: formatted }} />
      );
      currentParagraph = '';
    }
  };

  const flushList = () => {
    if (inList && listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="space-y-3 my-6 pl-0">
          {listItems.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed text-base md:text-lg corporate-gray pl-6 relative">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0 absolute left-0 top-2.5"></span>
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      );
      listItems = [];
    }
    inList = false;
  };

  lines.forEach((line, idx) => {
    // Skip completely empty lines unless we need to break a paragraph
    if (!line.trim()) {
      if (currentParagraph) {
        flushParagraph();
      }
      return;
    }

    const trimmed = line.trim();
    
    // Check for subheadings (###, ####, etc.)
    const subHeadingMatch = trimmed.match(/^(#{3,6})\s+(.+)$/);
    if (subHeadingMatch) {
      // Flush any pending content before the heading
      flushParagraph();
      flushList();
      
      const level = subHeadingMatch[1].length;
      const HeadingTag = level === 3 ? 'h3' : level === 4 ? 'h4' : level === 5 ? 'h5' : 'h6';
      const sizeClass = level === 3 ? 'text-xl md:text-2xl' : level === 4 ? 'text-lg md:text-xl' : 'text-base md:text-lg';
      
      elements.push(
        <HeadingTag key={`h-${elements.length}`} className={`${sizeClass} font-bold text-slate-900 mt-10 mb-5 flex items-center gap-3 corporate-dark`}>
          <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
          <span>{subHeadingMatch[2].trim()}</span>
        </HeadingTag>
      );
      return;
    }
    
    // Check for list items
    if (trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
      // Flush paragraph before starting a list
      flushParagraph();
      
      inList = true;
      // Process bold text in list items
      const text = trimmed.replace(/^[-•]\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong className="font-semibold text-slate-900">$1</strong>');
      listItems.push(text);
    } else {
      // Regular paragraph text
      // If we were in a list, flush it first
      if (inList) {
        flushList();
      }
      
      // Add to current paragraph (with space if needed)
      if (currentParagraph) {
        currentParagraph += ' ' + line.trim();
      } else {
        currentParagraph = line.trim();
      }
    }
  });

  // Flush any remaining content
  flushParagraph();
  flushList();

  return elements;
}