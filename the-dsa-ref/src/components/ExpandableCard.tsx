'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableCardProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  category: 'data-structures' | 'algorithms';
}

export function ExpandableCard({ title, children, isOpen: isOpenProp, onToggle, category }: ExpandableCardProps) {
  const [isOpenState, setIsOpenState] = useState(false);
  const isControlled = isOpenProp !== undefined;
  const isOpen = isControlled ? isOpenProp : isOpenState;

  const borderColor = category === 'data-structures' ? 'border-l-4 border-l-green-500' : 'border-l-4 border-l-purple-500';

  const toggle = () => {
    if (isControlled && onToggle) {
      onToggle();
    } else {
      setIsOpenState(!isOpenState);
    }
  };

  return (
    <div className={`border border-gray-200 rounded-lg overflow-hidden shadow-sm mb-4 ${borderColor}`}>
      <button
        className="w-full px-6 py-4 bg-white text-left flex justify-between items-center hover:bg-gray-50 transition-colors group"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <div className="relative p-1">
          <div className="absolute inset-0 p-2 opacity-0 group-hover:opacity-60 bg-gray-200 rounded-md transition-opacity"></div>
          {isOpen ? (
            <ChevronUp className="h-6 w-6 text-gray-500 relative transition-transform duration-200" />
          ) : (
            <ChevronDown className="h-6 w-6 text-gray-500 relative transition-transform duration-200" />
          )}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
        style={{
          transitionProperty: 'max-height, opacity',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDuration: '200ms',
        }}
      >
        <div className="px-6 pb-4 pt-2 bg-white">
          <div className="prose max-w-none">{children}</div>
        </div>
      </div>
    </div>
  );
}
