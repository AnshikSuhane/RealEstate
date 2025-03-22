import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export function FAQPage() {
  const [openSection, setOpenSection] = useState('general');
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqSections = [
    {
      id: 'general',
      title: 'General Questions',
      questions: [
        {
          id: 'what-is',
          question: 'What is PropertyFinder?',
          answer: 'PropertyFinder is a comprehensive real estate platform that helps users find, compare, and inquire about properties. We provide detailed listings, advanced search features, and valuable market insights to make your property search easier.'
        },
        {
          id: 'how-search',
          question: 'How do I search for properties?',
          answer: 'You can search for properties using our search bar, filters, or map view. Filter by price, location, property type, number of bedrooms/bathrooms, and more to find exactly what you\'re looking for.'
        },
        {
          id: 'cost',
          question: 'Is it free to use PropertyFinder?',
          answer: 'Yes, PropertyFinder is completely free for users to search properties, save favorites, and contact agents. There are no hidden fees or subscription costs.'
        }
      ]
    },
    {
      id: 'buying',
      title: 'Buying a Property',
      questions: [
        {
          id: 'first-steps',
          question: 'What are the first steps to buying a property?',
          answer: 'Start by determining your budget, getting pre-approved for a mortgage, and deciding on your must-have features. Then use our search tools to find properties that match your criteria.'
        },
        {
          id: 'contact-agent',
          question: 'How do I contact a listing agent?',
          answer: 'Each property listing includes contact information for the listing agent. You can reach out through the contact form, email, or phone number provided on the listing page.'
        },
        {
          id: 'offer',
          question: 'How do I make an offer on a property?',
          answer: 'Contact the listing agent to express your interest and discuss making an offer. They will guide you through the process and help you submit a formal offer.'
        }
      ]
    },
    {
      id: 'technical',
      title: 'Technical Support',
      questions: [
        {
          id: 'save-searches',
          question: 'How do I save my searches?',
          answer: 'Create an account to save your searches and receive notifications when new properties matching your criteria become available.'
        },
        {
          id: 'favorites',
          question: 'Where can I find my saved properties?',
          answer: 'Access your saved properties by clicking the heart icon in the navigation bar. You\'ll need to be logged in to use this feature.'
        },
        {
          id: 'notifications',
          question: 'How do I manage my notification settings?',
          answer: 'Go to your account settings to customize your email notifications for saved searches, price changes, and new listings.'
        }
      ]
    }
  ];

  return (
    <div className="container py-8">
      <div className="flex items-center mb-8">
        <HelpCircle className="h-8 w-8 mr-3 text-blue-600" />
        <h1 className="text-4xl font-bold text-center">Frequently Asked Questions</h1>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {faqSections.map((section) => (
            <div key={section.id} className="border-b last:border-b-0">
              <button
                className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
              >
                <h2 className="text-xl font-semibold">{section.title}</h2>
                {openSection === section.id ? (
                  <ChevronUp className="h-5 w-5 text-gray-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-600" />
                )}
              </button>

              {openSection === section.id && (
                <div className="px-6 py-4">
                  {section.questions.map((item) => (
                    <div key={item.id} className="mb-4 last:mb-0">
                      <button
                        className="w-full text-left py-2 flex items-center justify-between"
                        onClick={() => setOpenQuestion(openQuestion === item.id ? null : item.id)}
                      >
                        <h3 className="text-lg font-medium">{item.question}</h3>
                        {openQuestion === item.id ? (
                          <ChevronUp className="h-4 w-4 text-gray-600" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-gray-600" />
                        )}
                      </button>
                      {openQuestion === item.id && (
                        <p className="mt-2 text-gray-600 pl-4">{item.answer}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-4">
            Can't find the answer you're looking for? Please contact our support team.
          </p>
          <div className="flex space-x-4">
            <a
              href="mailto:support@propertyfinder.com"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="/guides"
              className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-colors"
            >
              View Guides
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}