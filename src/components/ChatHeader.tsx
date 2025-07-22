import React from 'react';
import { MessageCircle, Sparkles, Calendar, Gift } from 'lucide-react';

interface ChatHeaderProps {
  currentEventType?: string | null;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ currentEventType }) => {
  const getEventIcon = () => {
    switch (currentEventType) {
      case 'birthday':
        return <Gift className="w-5 h-5" />;
      case 'wedding':
        return <Sparkles className="w-5 h-5" />;
      case 'graduation':
        return <Calendar className="w-5 h-5" />;
      default:
        return <MessageCircle className="w-5 h-5" />;
    }
  };

  const getEventTitle = () => {
    if (!currentEventType) return 'Event Planning Assistant';
    
    const eventTitles = {
      birthday: 'Birthday Party Planner',
      wedding: 'Wedding Planner',
      graduation: 'Graduation Celebration',
      babyShower: 'Baby Shower Planner',
      anniversary: 'Anniversary Planner',
      housewarming: 'Housewarming Planner'
    };
    
    return eventTitles[currentEventType as keyof typeof eventTitles] || 'Event Planner';
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-t-lg">
      <div className="flex items-center gap-3">
        <div className="bg-white/20 p-2 rounded-full">
          {getEventIcon()}
        </div>
        <div>
          <h2 className="font-semibold text-lg">{getEventTitle()}</h2>
          <p className="text-blue-100 text-sm">
            {currentEventType 
              ? 'Let\'s plan your perfect celebration!' 
              : 'Your personal event planning assistant'
            }
          </p>
        </div>
      </div>
      
      {currentEventType && (
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium">
            🎉 Planning Mode: {currentEventType.charAt(0).toUpperCase() + currentEventType.slice(1)}
          </span>
        </div>
      )}
    </div>
  );
};