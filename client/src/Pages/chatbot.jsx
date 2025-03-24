import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, X } from "lucide-react";

const initialMessages = [
  {
    id: 1,
    text: "Hi! I'm your PropertyFinder assistant. How can I help you today?",
    isBot: true,
  },
];

export default function ChatBot() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { id: messages.length + 1, text: input, isBot: false };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse = getBotResponse(input);
      const botMessage = { id: messages.length + 2, text: botResponse, isBot: true };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);

    setInput("");
  };

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase();

    if (input.includes("price") || input.includes("cost")) {
      return "Our properties range from $200,000 to $2,000,000. What's your budget range?";
    }
    if (input.includes("location") || input.includes("where")) {
      return "We have properties available in various prime locations including downtown Seattle, Miami waterfront, and Portland's Arts District. Which area interests you?";
    }
    if (input.includes("mortgage") || input.includes("loan")) {
      return "We work with several trusted mortgage providers. Would you like to speak with a mortgage specialist?";
    }
    if (input.includes("agent") || input.includes("realtor")) {
      return "I can connect you with one of our experienced real estate agents. Would you like me to arrange that?";
    }
    return "I'm here to help with any questions about our properties. What would you like to know more about?";
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 bg-primary text-white px-4 py-2 rounded-full shadow-lg hover:bg-primary/90"
      >
        Chat with Us
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-lg shadow-lg p-4">
          {/* Chat Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Property Assistant</h3>
            <Button onClick={toggleChat} size="icon" variant="ghost" className="rounded-full">
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Chat Messages */}
          <ScrollArea className="h-64 overflow-y-auto mb-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`rounded-lg px-4 py-2 max-w-[80%] ${
                      message.isBot ? "bg-muted text-muted-foreground" : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Chat Input */}
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="w-full"
            />
            <Button size="icon" onClick={handleSend}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}