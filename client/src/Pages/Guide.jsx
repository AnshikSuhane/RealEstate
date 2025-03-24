import { Book, BookOpen, FileText, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Guide() {
  const guides = [
    {
      title: "First-Time Buyer's Guide",
      description: "Everything you need to know about purchasing your first home",
      icon: Book,
      categories: ['Buying', 'Finance'],
      readTime: '15 min read'
    },
    {
      title: 'Understanding Mortgages',
      description: 'A comprehensive guide to mortgage types, rates, and terms',
      icon: FileText,
      categories: ['Finance', 'Education'],
      readTime: '12 min read'
    },
    {
      title: 'Home Inspection Checklist',
      description: 'What to look for when inspecting a potential property',
      icon: HelpCircle,
      categories: ['Buying', 'Inspection'],
      readTime: '10 min read'
    },
    {
      title: 'Investment Property Guide',
      description: 'Learn about real estate investment strategies and opportunities',
      icon: BookOpen,
      categories: ['Investment', 'Finance'],
      readTime: '20 min read'
    }
  ];

  return (
    <div className="container py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">Property Buying Guides</h1>

      {/* Guide Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {guides.map((guide) => {
          const Icon = guide.icon;
          return (
            <div key={guide.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                  <h3 className="text-xl font-semibold ml-3">{guide.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    {guide.categories.map((category) => (
                      <span
                        key={category}
                        className="px-2 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{guide.readTime}</span>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t">
                <Link
                  to={`/guides/${guide.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Popular Topics Section */}
      <div className="bg-blue-50 rounded-lg p-6 sm:p-8 mb-12">
        <h2 className="text-2xl font-bold mb-4">Popular Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            'Understanding Property Taxes',
            'Home Insurance Guide',
            'Negotiation Tips',
            'Closing Process Explained',
            'Property Value Assessment',
            'Renovation ROI Guide'
          ].map((topic) => (
            <Link
              key={topic}
              to={`/guides/${topic.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <FileText className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm sm:text-base">{topic}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              question: 'How much down payment do I need?',
              answer: 'The typical down payment ranges from 3.5% to 20% of the purchase price, depending on the type of loan and your financial situation.'
            },
            {
              question: 'What credit score do I need to buy a house?',
              answer: 'Most lenders require a minimum credit score of 620 for conventional loans, though FHA loans may accept scores as low as 580.'
            },
            {
              question: 'How long does the buying process take?',
              answer: 'The typical home buying process takes 30-60 days from offer acceptance to closing, though this can vary based on various factors.'
            }
          ].map((faq) => (
            <div key={faq.question} className="border-b pb-6">
              <h3 className="font-semibold mb-2 text-lg sm:text-xl">{faq.question}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}