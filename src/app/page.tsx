'use client';

import ChatInterface from '../components/ChatInterface';
import { 
  ChatBubbleLeftRightIcon, 
  ClockIcon, 
  ScaleIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const quickTips = [
  {
    icon: ScaleIcon,
    title: "Legal Documentation",
    tip: "Always keep detailed records of important legal documents, contracts, and correspondence. Documentation is crucial for legal proceedings.",
    color: "text-datadog-blue"
  },
  {
    icon: DocumentTextIcon,
    title: "Contract Review",
    tip: "Never sign a contract without thoroughly reading and understanding all terms. When in doubt, seek professional legal counsel.",
    color: "text-datadog-green"
  },
  {
    icon: ClockIcon,
    title: "Statute of Limitations",
    tip: "Be aware of time limits for legal actions. Missing deadlines can permanently bar your ability to pursue legal remedies.",
    color: "text-datadog-orange"
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Legal Consultation",
    tip: "For complex legal matters, always consult with a qualified attorney. Early legal advice can prevent costly mistakes.",
    color: "text-datadog-red"
  }
];

const conversationStarters = [
  "What should I include in a rental lease agreement?",
  "How do I handle a workplace discrimination issue?",
  "What are my rights if I'm injured in an accident?",
  "How do I protect my intellectual property?",
  "What should I know about estate planning?",
  "How do I resolve a contract dispute?",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-datadog-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-datadog-gray-900">⚖️ LegalGPT Assistant</h1>
          <p className="mt-2 text-datadog-gray-600">
            Get preliminary legal guidance from our AI legal assistant. Receive informational responses to your legal questions and understand your rights.
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
              <h3 className="text-lg font-semibold text-datadog-gray-900 mb-4">📚 Legal Guidelines</h3>
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
              <h3 className="text-lg font-semibold text-datadog-gray-900 mb-4">💬 Common Legal Questions</h3>
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

            {/* Legal Disclaimer */}
            <div className="bg-gradient-to-br from-datadog-purple-light to-datadog-purple text-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-3">⚠️ Important Disclaimer</h3>
              <p className="text-sm leading-relaxed">
                This AI assistant provides general legal information only and does not constitute legal advice. 
                The information provided should not be relied upon as a substitute for professional legal counsel.
              </p>
              <div className="mt-4 text-xs text-white">
                📞 For specific legal matters, always consult with a qualified attorney in your jurisdiction.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
