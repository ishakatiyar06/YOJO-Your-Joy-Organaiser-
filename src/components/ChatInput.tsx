import React, { useState } from 'react';
import { Send, Mic, Sparkles } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const quickSuggestions = [
    "Birthday party for a 6-year-old girl, unicorn theme, ₹4000 budget",
    "Wedding for 200 guests in Mumbai, ₹8 lakh budget",
    "Kitty party for 15 ladies, high tea theme, ₹3000",
    "Trip to Goa for 6 friends, 4 days, ₹20000 per person",
    "Family get-together for 30 people, traditional theme",
    "Corporate team building for 50 people in Bangalore"
  ];

  const handleSuggestionClick = (suggestion: string) => {
    if (!disabled) {
      onSendMessage(suggestion);
    }
  };

  return (
    <div className="border-t border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
      {/* Quick Suggestions */}
      <div className="p-4 border-b border-orange-100">
        <p className="text-xs text-gray-600 mb-3 flex items-center gap-1">
          <Sparkles size={12} className="text-orange-500" />
          Quick suggestions to get started:
        </p>
        <div className="flex flex-wrap gap-2">
          {quickSuggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              disabled={disabled}
              className="text-xs bg-white hover:bg-orange-50 text-orange-600 px-3 py-2 rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed border border-orange-200 hover:border-orange-300"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="p-4">
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your event... (e.g., 'Plan a birthday party for 10 kids, ₹5000 budget')"
              className="w-full px-4 py-3 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:opacity-50 pr-12 bg-white"
              disabled={disabled}
            />
            
            {/* Voice Input Button (placeholder) */}
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-600 transition-colors duration-200"
              disabled={disabled}
              title="Voice input (coming soon)"
            >
              <Mic size={18} />
            </button>
          </div>
          
          <button
            type="submit"
            disabled={disabled || !message.trim()}
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 disabled:from-gray-300 disabled:to-gray-300 text-white px-6 py-3 rounded-lg transition-all duration-200 flex items-center gap-2 font-medium shadow-lg hover:shadow-xl disabled:shadow-none"
          >
            <Send size={18} />
            Send
          </button>
        </div>
      </form>
    </div>
  );
};