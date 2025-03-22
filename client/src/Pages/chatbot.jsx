import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from 'lucide-react';

const initialMessages = [
  {
    id: 1,
    text: "Hi! I'm your PropertyFinder assistant. How can I help you today?",
    isBot: true,
  },
];

export default function ChatBot() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: input,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);

    setInput('');
  };

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();

    if (input.includes('price') || input.includes('cost')) {
      return "Our properties range from $200,000 to $2,000,000. What's your budget range?";
    }
    if (input.includes('location') || input.includes('where')) {
      return "We have properties available in various prime locations including downtown Seattle, Miami waterfront, and Portland's Arts District. Which area interests you?";
    }
    if (input.includes('mortgage') || input.includes('loan')) {
      return "We work with several trusted mortgage providers. The typical interest rates currently range from 3.5% to 5%. Would you like to speak with a mortgage specialist?";
    }
    if (input.includes('agent') || input.includes('realtor')) {
      return "I can connect you with one of our experienced real estate agents. They typically respond within 1 business hour. Would you like me to arrange that?";
    }
    return "I'm here to help with any questions about our properties, financing options, or the buying process. What would you like to know more about?";
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Property Assistant</h2>
      </div>

      <ScrollArea className="flex-1 pr-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`rounded-lg px-4 py-2 max-w-[80%] ${
                  message.isBot
                    ? 'bg-muted text-muted-foreground'
                    : 'bg-primary text-primary-foreground'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="flex gap-2 mt-4">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <Button size="icon" onClick={handleSend}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}