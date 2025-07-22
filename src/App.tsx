import React from 'react';
import { ChatContainer } from './components/ChatContainer';
import { PartyPopper, Sparkles, Calendar, Gift, Camera, Music, MapPin, ShoppingBag } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-orange-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-3">
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-3 rounded-full shadow-lg">
              <PartyPopper className="w-8 h-8 text-white" />
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                YOJO - Your Joy Organiser
              </h1>
              <p className="text-gray-600 text-lg">
                Smart Event Planning & Travel Assistant with Complete Item Lists
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Features Bar */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
            <Gift className="w-8 h-8 text-pink-500 mx-auto mb-2" />
            <p className="font-semibold text-gray-800">Events</p>
            <p className="text-xs text-gray-600">Complete item lists</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
            <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="font-semibold text-gray-800">Travel</p>
            <p className="text-xs text-gray-600">Trip essentials</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
            <Camera className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <p className="font-semibold text-gray-800">Media</p>
            <p className="text-xs text-gray-600">Photo & video services</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
            <ShoppingBag className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="font-semibold text-gray-800">Shopping</p>
            <p className="text-xs text-gray-600">Real products & prices</p>
          </div>
        </div>

        {/* Chat Interface */}
        <ChatContainer />

        {/* Footer Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            🎉 Complete event item lists with real prices • 🛍️ Shopping links included • 📸 Media services • ✈️ Travel planning
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;