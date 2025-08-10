'use client';

import { useState, useRef, useEffect } from 'react';

const CustomDropdown = ({ 
  options, 
  value, 
  onChange, 
  placeholder = "Sélectionner...",
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectedOption = options.find(option => option.value === value);

  const handleOptionClick = (optionValue) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Bouton principal du dropdown */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-4 rounded-full bg-nude-100 text-nude-700 font-medium text-base border border-nude-200 focus:outline-none focus:ring-2 focus:ring-nude-600 focus:border-transparent flex items-center justify-between"
      >
        <span className="truncate">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Menu dropdown */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-nude-200 rounded-2xl shadow-lg max-h-80 overflow-y-auto">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleOptionClick(option.value)}
              className={`w-full px-6 py-4 text-left hover:bg-nude-50 transition-colors duration-200 first:rounded-t-2xl last:rounded-b-2xl ${
                value === option.value 
                  ? 'bg-nude-100 text-nude-800 font-medium' 
                  : 'text-nude-700'
              }`}
              style={{ fontSize: '18px', lineHeight: '1.6' }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
