'use client';

import { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

interface Message {
  id: string;
  text: string;
  isAI: boolean;
  timestamp: Date;
}

const dogResponses = [
  "Woof! That's a great question! Let me think about that with my tail-wagging wisdom... 🐕",
  "Arf arf! I'm paws-itively sure I can help you with that! 🐾",
  "Tail-wagging tip coming right up! Every good dog knows... 🦴",
  "Woof! Based on my extensive experience chasing squirrels and being a good boy, I'd say... 🌳",
  "Ruff! Let me consult my inner golden retriever wisdom for this one... ✨",
  "Bow wow! That reminds me of when I was a puppy learning the same thing! 🐶",
  "Arf! Every dog parent should know this paw-some fact... 🏠",
  "Woof woof! My canine instincts are telling me... 🎾"
];

const generateDogResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase();
  
  if (lowerMessage.includes('sit') || lowerMessage.includes('train')) {
    return "Woof! Training is tail-wagginly important! For 'sit' training, hold a treat close to your pup's nose, then slowly lift it over their head. Their bottom will naturally touch the ground. Say 'sit!' clearly and give treats and praise immediately! Remember: practice makes paw-fect, and patience is key! 🐕🦴";
  }
  
  if (lowerMessage.includes('bark') || lowerMessage.includes('noise')) {
    return "Arf arf! Barking is how we communicate! If it's excessive, try identifying the trigger - are we protecting our territory, bored, or excited? Positive reinforcement training works wonders! Redirect that energy into something paw-sitive like a puzzle toy or training session! 🗣️🐾";
  }
  
  if (lowerMessage.includes('food') || lowerMessage.includes('eat')) {
    return "Tail-wagging nutrition question! Every good dog needs high-quality protein, healthy fats, and balanced nutrients. Look for foods with real meat as the first ingredient. Always consult your vet for breed-specific recommendations - some of us have sensitive tummies! And remember, treats should only be 10% of our daily calories! 🦴🥗";
  }
  
  if (lowerMessage.includes('walk') || lowerMessage.includes('exercise')) {
    return "WOOF WOOF! Did someone say WALK?! 🚶‍♂️ Exercise is paw-some for both physical and mental health! Most dogs need 30 minutes to 2 hours daily, depending on breed and age. Mix it up with different routes, sniffing time, and play - variety makes walks more tail-waggingly fun! 🌳🎾";
  }
  
  if (lowerMessage.includes('puppy') || lowerMessage.includes('young')) {
    return "Aww, puppies! 🐶 The most adorable little furballs! Puppy training is all about consistency, patience, and lots of positive reinforcement. Start with basic commands like 'sit', 'stay', and 'come'. Socialization is super important too - expose them to different people, sounds, and experiences in a safe way! Remember, we're just learning about this big, exciting world! 🌟";
  }
  
  if (lowerMessage.includes('health') || lowerMessage.includes('sick') || lowerMessage.includes('vet')) {
    return "Woof! Health is paws-itively important! Regular vet checkups, proper nutrition, exercise, and dental care keep us happy and healthy. If you notice changes in appetite, energy, or behavior, it's always better to ask a vet. We can't tell you when something hurts, so you're our voice! Take care of us like we take care of you! 💗🏥";
  }
  
  // Default responses with some personality
  const randomResponse = dogResponses[Math.floor(Math.random() * dogResponses.length)];
  const genericAdvice = "That's a paw-some question! While I love to help with all things dog-related, every pup is unique. For the best advice, especially about health or serious behavior issues, always consult with a professional veterinarian or certified dog trainer. They know best! 🐕‍🦺✨";
  
  return randomResponse + " " + genericAdvice;
};

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Woof woof! Hi there! I'm PawGPT, your friendly AI dog assistant! 🐕 I'm here to help with all things dog-related - training, behavior, health, nutrition, and more! What would you like to chat about today?",
      isAI: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isAI: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateDogResponse(inputText),
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
        <h2 className="text-xl font-bold text-white">🐕 Chat with PawGPT</h2>
        <p className="text-white text-sm opacity-90">Your AI dog expert is ready to help!</p>
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
                  {message.isAI ? '🐕' : '🧑'}
                </span>
                <div>
                  <p className="text-sm font-medium">
                    {message.isAI ? 'PawGPT' : 'You'}
                  </p>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {message.text}
                  </p>
                  <p className="text-xs opacity-75 mt-1">
                    {message.timestamp.toLocaleTimeString()}
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
                <span className="text-sm">🐕</span>
                <div>
                  <p className="text-sm font-medium">PawGPT</p>
                  <p className="text-sm">
                    <span className="inline-flex space-x-1">
                      <span className="animate-pulse">🐾</span>
                      <span className="animate-pulse delay-100">typing...</span>
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
            placeholder="Ask me anything about dogs! Training, health, behavior, nutrition..."
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
