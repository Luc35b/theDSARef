'use client';

import { Search } from 'lucide-react';

interface FilterProps {
  onSearch: (query: string) => void;
}

export function Filter({ onSearch }: FilterProps) {
  return (
    <div className="mt-8 max-w-md mx-auto relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center justify-center">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search data structures and algorithms..."
        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-gray-900"
      />
    </div>
  );
}