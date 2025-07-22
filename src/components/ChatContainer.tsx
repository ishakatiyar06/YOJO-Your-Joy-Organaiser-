import React, { useState, useRef, useEffect } from 'react';
import { ChatHeader } from './ChatHeader';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { yojoChatBot } from '../utils/chatBot';
import { ChatMessage as ChatMessageType } from '../types/chat';
import { RotateCcw } from 'lucide-react';

export const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initial greeting
    const initialMessage = yojoChatBot.generateResponse('', true);
    setMessages([initialMessage]);
  }, []);

  const handleSendMessage = async (text: string) => {
    const userMessage: ChatMessageType = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate a small delay for better UX
    setTimeout(() => {
      const botResponse = yojoChatBot.generateResponse(text);
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const handleRestart = () => {
    yojoChatBot.resetConversation();
    const initialMessage = yojoChatBot.generateResponse('', true);
    setMessages([initialMessage]);
  };

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden border border-orange-200">
      <div className="relative">
        <ChatHeader currentEventType={yojoChatBot.getCurrentEventType()} />
        
        {/* Restart Button */}
        <button
          onClick={handleRestart}
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors duration-200"
          title="Start new conversation"
        >
          <RotateCcw className="w-4 h-4 text-white" />
        </button>
      </div>
      
      <div className="h-96 overflow-y-auto p-6 bg-gradient-to-b from-orange-25 to-yellow-25">
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}
        
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="bg-white p-4 rounded-lg rounded-bl-sm shadow-lg border border-gray-100">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
    </div>
  );
};