'use client';

import { useState, useEffect, useRef } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

interface Message {
  id: string;
  text: string;
  isAI: boolean;
  timestamp: Date;
}

const legalResponses = [
  "Thank you for your question. Let me provide you with some general legal information on this matter.",
  "This is an important legal topic. Based on general legal principles, I can offer the following guidance.",
  "I understand your concern. Here's some general information that may help clarify this legal issue.",
  "That's a common legal question. Let me explain the general principles that typically apply.",
  "This matter involves several legal considerations. I'll outline the key points for you.",
  "Legal matters can be complex. Here's some general information to help you understand this topic.",
  "I can provide some general guidance on this legal issue for your information.",
  "Thank you for reaching out. Let me share some general legal information that may be helpful."
];

const generateLegalResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase();
  
  if (lowerMessage.includes('contract') || lowerMessage.includes('agreement') || lowerMessage.includes('lease')) {
    return "Contracts are legally binding agreements between parties. Key elements include offer, acceptance, consideration, and mutual consent. Before signing any contract, carefully review all terms, conditions, and obligations. Pay special attention to termination clauses, liability provisions, and dispute resolution procedures. If you're unsure about any terms, consider consulting with an attorney before signing.";
  }
  
  if (lowerMessage.includes('discrimination') || lowerMessage.includes('workplace') || lowerMessage.includes('harassment')) {
    return "Workplace discrimination and harassment are serious legal matters protected by federal and state laws. Document all incidents with dates, times, witnesses, and details. Report issues through your company's HR processes while preserving records. You may have rights under Title VII, ADA, ADEA, or other protective statutes. Consider consulting with an employment attorney to understand your options and potential remedies.";
  }
  
  if (lowerMessage.includes('accident') || lowerMessage.includes('injury') || lowerMessage.includes('personal injury')) {
    return "Personal injury cases involve harm caused by another party's negligence or intentional acts. Important steps include seeking immediate medical attention, documenting the incident, preserving evidence, and avoiding statements of fault. Be aware of statute of limitations deadlines. Insurance companies may contact you, but consider consulting a personal injury attorney before providing detailed statements or accepting settlements.";
  }
  
  if (lowerMessage.includes('intellectual property') || lowerMessage.includes('patent') || lowerMessage.includes('trademark') || lowerMessage.includes('copyright')) {
    return "Intellectual property rights protect creative works, inventions, and business identifiers. Copyright protects original works of authorship, trademarks protect brand identifiers, and patents protect inventions. Registration provides enhanced protection and legal remedies. Consider conducting searches before developing new IP and implement proper notices and registrations to protect your rights.";
  }
  
  if (lowerMessage.includes('estate') || lowerMessage.includes('will') || lowerMessage.includes('inheritance') || lowerMessage.includes('probate')) {
    return "Estate planning involves preparing for the management and distribution of assets upon death or incapacity. Key documents include wills, trusts, powers of attorney, and healthcare directives. Regular updates are important after major life events. Proper planning can minimize taxes, avoid probate delays, and ensure your wishes are carried out. Consider consulting an estate planning attorney for comprehensive guidance.";
  }
  
  if (lowerMessage.includes('dispute') || lowerMessage.includes('litigation') || lowerMessage.includes('lawsuit') || lowerMessage.includes('court')) {
    return "Legal disputes can often be resolved through negotiation, mediation, or arbitration before resorting to litigation. Document all communications and preserve relevant evidence. Be aware of applicable statutes of limitations and procedural deadlines. Consider the costs, time, and emotional impact of litigation versus alternative dispute resolution methods. Professional legal representation is typically advisable for significant disputes.";
  }
  
  // Default responses with legal disclaimer - use a deterministic selection to avoid hydration issues
  const responseIndex = userMessage.length % legalResponses.length;
  const randomResponse = legalResponses[responseIndex];
  const legalDisclaimer = "\n\nPlease note: This response provides general legal information only and does not constitute legal advice. Laws vary by jurisdiction and individual circumstances matter. For specific legal guidance, consult with a qualified attorney in your area.";
  
  return randomResponse + " " + legalDisclaimer;
};

export default function ChatInterface() {
  const messageIdCounter = useRef(1);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm LegalGPT, your AI legal information assistant. I can provide general legal information and guidance on various legal topics including contracts, employment law, personal injury, intellectual property, estate planning, and more. Please note that I provide general information only, not legal advice. How may I assist you today?",
      isAI: true,
      timestamp: new Date(0) // Use epoch time to ensure consistent server/client rendering
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Set client flag after hydration to handle timestamp display
  useEffect(() => {
    setIsClient(true);
    // Update initial message timestamp after hydration
    setMessages(prev => prev.map(msg => 
      msg.id === '1' ? { ...msg, timestamp: new Date() } : msg
    ));
  }, []);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    messageIdCounter.current += 1;
    const userMessage: Message = {
      id: messageIdCounter.current.toString(),
      text: inputText,
      isAI: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      messageIdCounter.current += 1;
      const aiResponse: Message = {
        id: messageIdCounter.current.toString(),
        text: generateLegalResponse(inputText),
        isAI: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-lg">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-datadog-purple to-datadog-purple-light p-4 rounded-t-lg">
        <h2 className="text-xl font-bold text-white">⚖️ Chat with LegalGPT</h2>
        <p className="text-white text-sm opacity-90">Your AI legal information assistant is ready to help!</p>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-96">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isAI ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.isAI
                  ? 'bg-gray-100 text-datadog-gray-900'
                  : 'bg-datadog-purple text-white'
              }`}
            >
              <div className="flex items-start space-x-2">
                <span className="text-sm">
                  {message.isAI ? '⚖️' : '👤'}
                </span>
                <div>
                  <p className="text-sm font-medium">
                    {message.isAI ? 'LegalGPT' : 'You'}
                  </p>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {message.text}
                  </p>
                  <p className="text-xs opacity-75 mt-1">
                    {isClient ? message.timestamp.toLocaleTimeString() : '--:--:--'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-xs lg:max-w-md px-4 py-2 rounded-lg bg-gray-100 text-datadog-gray-900">
              <div className="flex items-center space-x-2">
                <span className="text-sm">⚖️</span>
                <div>
                  <p className="text-sm font-medium">LegalGPT</p>
                  <p className="text-sm">
                    <span className="inline-flex space-x-1">
                      <span className="animate-pulse">💭</span>
                      <span className="animate-pulse delay-100">thinking...</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t p-4">
        <div className="flex space-x-2">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about legal topics: contracts, employment law, personal injury, intellectual property..."
            className="flex-1 resize-none border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-datadog-purple focus:border-transparent"
            rows={2}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim() || isTyping}
            className="bg-datadog-purple text-white px-4 py-2 rounded-lg hover:bg-datadog-purple-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <PaperAirplaneIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
