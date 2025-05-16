'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableCardProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function ExpandableCard({ title, children, isOpen: isOpenProp, onToggle }: ExpandableCardProps) {
  const [isOpenState, setIsOpenState] = useState(false);
  const isControlled = isOpenProp !== undefined;
  const isOpen = isControlled ? isOpenProp : isOpenState;

  const toggle = () => {
    if (isControlled && onToggle) {
      onToggle();
    } else {
      setIsOpenState(!isOpenState);
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm mb-4">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4 pt-2 bg-white">
          <div className="prose max-w-none">{children}</div>
        </div>
      )}
    </div>
  );
}
