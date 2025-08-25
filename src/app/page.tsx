'use client';

import ChatInterface from '../components/ChatInterface';
import { 
  ChatBubbleLeftRightIcon, 
  ClockIcon, 
  SparklesIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const quickTips = [
  {
    icon: HeartIcon,
    title: "Puppy Training",
    tip: "Start training early! Puppies learn best between 3-6 months old. Keep sessions short and fun!",
    color: "text-datadog-red"
  },
  {
    icon: SparklesIcon,
    title: "Positive Reinforcement",
    tip: "Reward good behavior immediately with treats, praise, or play. Never punish - redirect instead!",
    color: "text-datadog-green"
  },
  {
    icon: ClockIcon,
    title: "Exercise Timing",
    tip: "Most dogs need 30min-2hrs daily exercise. Mental stimulation is just as important as physical!",
    color: "text-datadog-orange"
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Communication",
    tip: "Dogs communicate through body language, vocalizations, and energy. Learn to read the signs!",
    color: "text-datadog-blue"
  }
];

const conversationStarters = [
  "How do I stop my dog from pulling on walks?",
  "What's the best food for a senior dog?",
  "Why does my puppy bite everything?",
  "How can I help my anxious dog during thunderstorms?",
  "What vaccines does my dog need?",
  "How much exercise does a golden retriever need?",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-datadog-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-datadog-gray-900">🐕 PawGPT Chat</h1>
          <p className="mt-2 text-datadog-gray-600">
            Chat with your AI dog expert! Get instant answers to all your dog-related questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chat Interface */}
          <div className="lg:col-span-2">
            <div className="h-[600px]">
              <ChatInterface />
            </div>
          </div>

          {/* Sidebar with Tips and Starters */}
          <div className="space-y-6">
            {/* Quick Tips */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-datadog-gray-900 mb-4">🎾 Quick Dog Tips</h3>
              <div className="space-y-4">
                {quickTips.map((tip, index) => {
                  const Icon = tip.icon;
                  return (
                    <div key={index} className="border-l-4 border-datadog-purple pl-4">
                      <div className="flex items-start space-x-3">
                        <Icon className={`h-5 w-5 mt-1 ${tip.color}`} />
                        <div>
                          <h4 className="font-medium text-datadog-gray-900 text-sm">{tip.title}</h4>
                          <p className="text-sm text-datadog-gray-600 mt-1">{tip.tip}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Conversation Starters */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-datadog-gray-900 mb-4">💡 Ask Me About...</h3>
              <div className="space-y-2">
                {conversationStarters.map((starter, index) => (
                  <button
                    key={index}
                    className="w-full text-left p-3 text-sm bg-datadog-gray-50 hover:bg-datadog-purple-light hover:bg-opacity-10 rounded-lg transition-colors group"
                    onClick={() => {
                      // This could be expanded to actually send the question to the chat
                      console.log('Selected starter:', starter);
                    }}
                  >
                    <span className="text-datadog-gray-700 group-hover:text-datadog-purple">
                      &ldquo;{starter}&rdquo;
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Dog Facts */}
            <div className="bg-gradient-to-br from-datadog-purple-light to-datadog-purple text-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-3">🐾 Did You Know?</h3>
              <p className="text-sm leading-relaxed">
                Dogs can understand over 150 words and can even count to four or five! They&apos;re also capable of 
                learning and remembering the names of hundreds of different objects and toys.
              </p>
              <div className="mt-4 text-xs text-white">
                💡 This changes every day - chat with PawGPT to learn more amazing dog facts!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
