import { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { portfolioContext } from "../data/portfolioContext";

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: "👋 Hey there! I'm Salman's AI assistant. Ask me anything about his journey!"
        }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    // Scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Format portfolio data as context for AI
    const getSystemPrompt = () => {
        return `You are Salman's portfolio AI assistant. Answer questions about Salman based ONLY on this information:

PROFILE:
Name: ${portfolioContext.profile.name}
Role: ${portfolioContext.profile.role}
Bio: ${portfolioContext.profile.bio}
Philosophy: "${portfolioContext.profile.philosophy}"

SKILLS:
${portfolioContext.skills.join(", ")}

CERTIFICATIONS:
${portfolioContext.certifications.map(c => `- ${c.title} from ${c.institution} (${c.year})`).join("\n")}

EXPERIENCE:
${portfolioContext.experience.map(e => `- ${e.title} at ${e.company} (${e.period})`).join("\n")}

EDUCATION:
${portfolioContext.education.map(e => `- ${e.title} from ${e.institution} (${e.year})`).join("\n")}

PROJECTS:
${portfolioContext.projects.map(p => `- ${p.name}: ${p.description}. Tech: ${p.tech.join(", ")}. GitHub: ${p.github}`).join("\n")}

EVENTS:
${portfolioContext.events.map(e => `- ${e.title} (${e.role}, ${e.date})`).join("\n")}

CONTACT:
- Website: ${portfolioContext.profile.website}
- LinkedIn: ${portfolioContext.profile.linkedin}
- GitHub: ${portfolioContext.profile.github}

GUIDELINES:
- Be friendly and conversational
- Keep answers concise (2-3 sentences max)
- If asked something not in the data, say "I don't have that information, but you can check Salman's website at ${portfolioContext.profile.website}"
- Always refer to Salman in third person
- Don't make up information`;
    };

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = { role: "user", content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            // Call Groq API
            const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}` // We'll add this
                },
                body: JSON.stringify({
                    model: "llama-3.1-8b-instant", // Fast & free model
                    messages: [
                        { role: "system", content: getSystemPrompt() },
                        ...messages.filter(m => m.role !== "assistant" || m.content !== messages[0].content),
                        userMessage
                    ],
                    temperature: 0.7,
                    max_tokens: 200,
                    top_p: 1
                })
            });

            if (!response.ok) {
                throw new Error("API request failed");
            }

            const data = await response.json();
            const aiResponse = data.choices[0].message.content;

            setMessages(prev => [...prev, {
                role: "assistant",
                content: aiResponse
            }]);
        } catch (error) {
            console.error("Chat error:", error);
            setMessages(prev => [...prev, {
                role: "assistant",
                content: "Sorry, I'm having trouble connecting. Please try again or contact Salman directly at " + portfolioData.contact.email
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 120);
        }
    }, [isOpen]);

    return (
        <>
            {/* Floating Chat Button - Eye-catching with pulse animation */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 z-50 group"
                    aria-label="Open AI Assistant"
                >
                    {/* Pulse ring effect (non-interactive) */}
                    <div className="absolute inset-0 pointer-events-none rounded-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-ping opacity-50"></div>
                    </div>

                    {/* Main button */}
                    <div className="relative w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg hover:shadow-2xl transition-transform duration-200 hover:scale-110 flex items-center justify-center ring-2 ring-transparent focus:outline-none focus-visible:ring-white/30">
                        <FaRobot size={28} className="text-white drop-shadow-lg" />
                    </div>
                </button>
            )}

            {/* Chat Window - Glassmorphism theme-aware design */}
            {isOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="chatbot-title"
                    className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-1.5rem)] h-[min(70vh,650px)] z-50 flex flex-col card-theme border border-theme rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl animate-slide-up"
                >
                    {/* Header - Gradient with theme integration */}
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 flex items-center justify-between relative overflow-hidden">
                        <div className="absolute inset-0 opacity-12 pointer-events-none">
                            <div className="absolute top-0 left-0 w-28 h-28 bg-white rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute bottom-0 right-0 w-20 h-20 bg-white rounded-full blur-2xl animate-pulse delay-75"></div>
                        </div>

                        <div className="flex items-center gap-3 relative z-10">
                            <div className="w-10 h-10 bg-white/18 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-inner">
                                <FaRobot size={20} className="text-white" />
                            </div>
                            <div>
                                <h3 id="chatbot-title" className="font-bold text-white text-lg flex items-center gap-2">
                                    AI Assistant
                                </h3>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 relative z-10">
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                                className="w-8 h-8 hover:bg-white/12 rounded-full transition-all duration-150 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                                aria-label="Close chat"
                            >
                                <FaTimes size={16} className="text-white" />
                            </button>
                        </div>
                    </div>

                    {/* Messages Area - Theme-aware scrollbar */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-theme-secondary custom-scrollbar">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                                style={{ animationDelay: `${Math.min(idx * 0.04, 0.4)}s` }}
                            >
                                <div
                                    className={`max-w-[85%] p-3 rounded-2xl shadow-sm break-words ${msg.role === "user"
                                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-br-none"
                                        : "bg-theme-primary text-theme-primary border border-theme rounded-bl-none"
                                        }`}
                                >
                                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                                </div>
                            </div>
                        ))}

                        {/* Typing indicator with smooth animation */}
                        {isLoading && (
                            <div className="flex justify-start animate-fade-in">
                                <div className="bg-theme-primary text-theme-primary border border-theme p-3 rounded-2xl rounded-bl-none shadow-sm">
                                    <div className="flex gap-1.5 items-center">
                                        <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></span>
                                        <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: "0.15s" }}></span>
                                        <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }}></span>
                                        <span className="text-xs text-theme-tertiary ml-2">Thinking...</span>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area - Enhanced with theme support */}
                    <div className="p-3 border-t border-theme bg-theme-secondary">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSend();
                            }}
                            className="flex gap-2 items-end"
                        >
                            <textarea
                                ref={inputRef}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder="Type a question about Salman..."
                                disabled={isLoading}
                                rows={1}
                                aria-label="Message input"
                                className="resize-none flex-1 px-4 py-3 bg-theme-primary border border-theme rounded-2xl text-theme-primary placeholder-theme-tertiary focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:opacity-50 transition-all duration-150 min-h-[44px] max-h-[140px] overflow-auto"
                            />

                            <button
                                type="submit"
                                disabled={!input.trim() || isLoading}
                                className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-transform duration-150 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
                                aria-label="Send message"
                                title={(!input.trim() || isLoading) ? "Enter a message to send" : "Send message"}
                            >
                                <FaPaperPlane size={16} className={`${isLoading ? 'animate-pulse' : ''}`} />
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
