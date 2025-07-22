import React from 'react';
import { ChatMessage as ChatMessageType } from '../types/chat';
import { ExternalLink, ShoppingCart, Package, CheckCircle, Plus, Minus } from 'lucide-react';

interface ChatMessageProps {
  message: ChatMessageType;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-6`}>
      <div
        className={`max-w-[85%] p-4 rounded-lg ${
          message.isUser
            ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-br-sm shadow-lg'
            : 'bg-white text-gray-800 rounded-bl-sm shadow-lg border border-gray-100'
        }`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
        
        {/* Event Items List */}
        {message.items && message.items.length > 0 && (
          <div className="mt-6">
            <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Package className="w-5 h-5 text-orange-500" />
              Complete Items List
            </h4>
            <div className="space-y-3">
              {message.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h5 className="font-semibold text-gray-800">{item.name}</h5>
                        {item.essential && (
                          <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-medium">
                            Essential
                          </span>
                        )}
                        <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="font-semibold text-green-600">{item.price}</span>
                        <span className="text-gray-500">Qty: {item.quantity}</span>
                      </div>
                      
                      {item.alternatives && (
                        <div className="mt-2">
                          <p className="text-xs text-gray-500">
                            <strong>Alternatives:</strong> {item.alternatives.join(', ')}
                          </p>
                        </div>
                      )}
                      
                      {item.diyOption && (
                        <div className="mt-2 bg-yellow-50 p-2 rounded border border-yellow-200">
                          <p className="text-xs text-yellow-700">
                            <strong>💡 DIY Option:</strong> {item.diyOption}
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col gap-2 ml-4">
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-orange-500 hover:bg-orange-600 text-white text-xs py-2 px-3 rounded-md transition-colors duration-200 flex items-center gap-1"
                        >
                          <ShoppingCart size={12} />
                          Buy Now
                        </a>
                      )}
                      <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs py-2 px-3 rounded-md transition-colors duration-200 flex items-center gap-1">
                        <Plus size={12} />
                        Add to List
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Product Recommendations */}
        {message.products && message.products.length > 0 && (
          <div className="mt-6">
            <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-orange-500" />
              Recommended Products
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {message.products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg p-4 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200 hover:scale-105"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-md mb-3"
                  />
                  <h5 className="font-semibold text-gray-800 text-sm mb-2">
                    {product.name}
                  </h5>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-green-600 text-sm">{product.price}</span>
                    {product.originalPrice && (
                      <>
                        <span className="text-gray-400 line-through text-xs">{product.originalPrice}</span>
                        {product.discount && (
                          <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                            {product.discount}
                          </span>
                        )}
                      </>
                    )}
                  </div>
                  
                  {product.rating && (
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      </div>
                      {product.reviews && (
                        <span className="text-xs text-gray-500">({product.reviews} reviews)</span>
                      )}
                      {product.prime && (
                        <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                          Prime
                        </span>
                      )}
                    </div>
                  )}
                  
                  <div className="flex gap-2">
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-xs py-2 px-3 rounded-md text-center transition-colors duration-200 flex items-center justify-center gap-1"
                    >
                      <ShoppingCart size={12} />
                      Buy Now
                    </a>
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs py-2 px-2 rounded-md transition-colors duration-200">
                      <ExternalLink size={12} />
                    </button>
                  </div>
                  
                  <div className="mt-2 flex items-center justify-between">
                    <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full capitalize">
                      {product.category}
                    </span>
                    {product.inStock ? (
                      <span className="text-green-600 text-xs flex items-center gap-1">
                        <CheckCircle size={12} />
                        In Stock
                      </span>
                    ) : (
                      <span className="text-red-600 text-xs">Out of Stock</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Budget Breakdown */}
        {message.budget && (
          <div className="mt-6 bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-lg border border-orange-200">
            <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
              💰 Budget Breakdown (₹{message.budget.total.toLocaleString()})
            </h4>
            <div className="space-y-2">
              {Object.entries(message.budget.categories).map(([category, details]) => (
                <div key={category} className="flex justify-between items-center">
                  <span className="text-sm text-gray-700 capitalize">{category}:</span>
                  <span className="text-sm font-semibold text-gray-800">
                    ₹{details.allocated.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <p className="text-xs mt-4 opacity-70">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
};