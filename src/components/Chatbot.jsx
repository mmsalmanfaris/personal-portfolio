import { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes, FaPaperPlane, FaPlus, FaArrowLeft, FaUser, FaBars } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { portfolioContext } from "../data/portfolioContext";

export default function Chatbot({ isChatMode, setIsChatMode }) {
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: "👋 Hey there! I'm Salman's AI assistant. Ask me anything about his journey!"
        }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false); // For mobile sidebar toggle
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // Scroll to bottom when messages change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Focus input when entering chat mode
    useEffect(() => {
        if (isChatMode) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isChatMode]);

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
- Be friendly, professional, and concise.
- Use markdown formatting (bold, lists) for better readability.
- If asked something not in the data, politely say you don't have that info and suggest checking the website.
- Always refer to Salman in the third person.`;
    };

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = { role: "user", content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            // Forward request to server-side proxy
            const response = await fetch(`/api/chat.php`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    model: "llama-3.1-8b-instant",
                    messages: [
                        { role: "system", content: getSystemPrompt() },
                        ...messages.filter(m => m.role !== "assistant" || m.content !== messages[0].content),
                        userMessage
                    ],
                    temperature: 0.7,
                    max_tokens: 300,
                })
            });

            if (!response.ok) throw new Error("Network response was not ok");

            const data = await response.json();
            const aiResponse = data?.choices?.[0]?.message?.content || "I'm having trouble connecting right now.";

            setMessages(prev => [...prev, { role: "assistant", content: aiResponse }]);
        } catch (error) {
            console.error("Chat error:", error);
            setMessages(prev => [...prev, {
                role: "assistant",
                content: "Sorry, I encountered an error. Please try again later."
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

    const clearChat = () => {
        setMessages([{
            role: "assistant",
            content: "👋 Hey there! I'm Salman's AI assistant. Ask me anything about his journey!"
        }]);
    };

    // --- RENDER: FLOATING BUTTON (Normal Mode) ---
    if (!isChatMode) {
        return (
            <button
                onClick={() => setIsChatMode(true)}
                className="fixed bottom-6 right-6 z-50 group"
                aria-label="Open AI Assistant"
            >
                {/* Pulse ring */}
                <div className="absolute inset-0 pointer-events-none rounded-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-ping opacity-50"></div>
                </div>
                {/* Button */}
                <div className="relative w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg hover:shadow-2xl transition-transform duration-200 hover:scale-110 flex items-center justify-center ring-2 ring-transparent focus:outline-none focus-visible:ring-white/30">
                    <FaRobot size={28} className="text-white drop-shadow-lg" />
                </div>
            </button>
        );
    }

    // --- RENDER: FULL SCREEN CHAT (Chat Mode) ---
    return (
        <div className="fixed inset-0 z-50 flex bg-theme-primary text-theme-primary font-sans">
            {/* Sidebar - Desktop & Mobile Drawer */}
            <div className={`
                fixed inset-y-0 left-0 z-40 w-64 bg-theme-secondary border-r border-theme transform transition-transform duration-300 ease-in-out
                md:relative md:translate-x-0
                ${showSidebar ? "translate-x-0" : "-translate-x-full"}
            `}>
                <div className="flex flex-col h-full p-4">
                    {/* Sidebar Header */}
                    <div className="flex items-center gap-3 mb-8 px-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                            <FaRobot className="text-white text-sm" />
                        </div>
                        <span className="font-bold text-lg tracking-tight">Portfolio Ai</span>
                        <button
                            onClick={() => setShowSidebar(false)}
                            className="md:hidden ml-auto text-theme-secondary"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    {/* New Chat Button */}
                    <button
                        onClick={() => {
                            clearChat();
                            setShowSidebar(false);
                        }}
                        className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-theme hover:bg-theme-tertiary transition-colors mb-4 text-sm font-medium"
                    >
                        <FaPlus className="text-cyan-500" />
                        New Chat
                    </button>

                    {/* Navigation Links */}
                    <div className="mt-auto space-y-2">
                        <button
                            onClick={() => setIsChatMode(false)}
                            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-theme-tertiary transition-colors text-sm font-medium text-theme-secondary hover:text-theme-primary"
                        >
                            <FaArrowLeft />
                            Back to Portfolio
                        </button>
                    </div>
                </div>
            </div>

            {/* Overlay for mobile sidebar */}
            {showSidebar && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 md:hidden"
                    onClick={() => setShowSidebar(false)}
                />
            )}

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col h-full relative bg-theme-primary">
                {/* Mobile Header */}
                <div className="md:hidden flex items-center justify-between p-4 border-b border-theme bg-theme-secondary/80 backdrop-blur-md sticky top-0 z-20">
                    <button onClick={() => setShowSidebar(true)} className="p-2 -ml-2 text-theme-secondary">
                        <FaBars />
                    </button>
                    <span className="font-semibold">Portfolio GPT</span>
                    <button onClick={() => setIsChatMode(false)} className="p-2 -mr-2 text-theme-secondary">
                        <FaTimes />
                    </button>
                </div>

                {/* Messages List */}
                <div className="flex-1 overflow-y-auto custom-scrollbar scroll-smooth">
                    <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`flex gap-4 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                {/* Avatar (Assistant) */}
                                {msg.role === "assistant" && (
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex-shrink-0 flex items-center justify-center mt-1">
                                        <FaRobot className="text-white text-xs" />
                                    </div>
                                )}

                                {/* Message Bubble */}
                                <div className={`max-w-[85%] md:max-w-[75%] rounded-2xl px-5 py-3.5 shadow-sm text-sm md:text-base leading-relaxed ${msg.role === "user"
                                    ? "bg-theme-tertiary text-theme-primary rounded-br-none"
                                    : "bg-transparent text-theme-primary pl-0 pt-1"
                                    }`}>
                                    {/* User Avatar (Optional, visually distinct) */}
                                    {msg.role === "user" && (
                                        <div className="hidden">User</div>
                                    )}

                                    <div className="whitespace-pre-wrap">{msg.content}</div>
                                </div>

                                {/* Avatar (User) - Optional */}
                                {msg.role === "user" && (
                                    <div className="w-8 h-8 rounded-full bg-theme-tertiary flex-shrink-0 flex items-center justify-center mt-1 border border-theme">
                                        <FaUser className="text-theme-secondary text-xs" />
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Loading Indicator */}
                        {isLoading && (
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex-shrink-0 flex items-center justify-center mt-1">
                                    <FaRobot className="text-white text-xs" />
                                </div>
                                <div className="flex items-center gap-1.5 pt-2 pl-1">
                                    <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></span>
                                    <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-150"></span>
                                    <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-300"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} className="h-4" />
                    </div>
                </div>

                {/* Input Area */}
                <div className="p-4 bg-theme-primary border-theme">
                    <div className="max-w-3xl mx-auto relative">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSend();
                            }}
                            className="relative flex items-end gap-2 bg-theme-tertiary border border-theme rounded-3xl p-2 shadow-sm focus-within:ring-2 focus-within:ring-cyan-500/50 transition-all"
                        >
                            <input
                                ref={inputRef}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder="Message Portfolio Ai..."
                                disabled={isLoading}
                                rows={1}
                                className="w-full bg-transparent b py-3 px-4 max-h-32 min-h-[48px] text-theme-primary placeholder-theme-secondary/70 custom-scrollbar"
                                style={{ height: 'auto', minHeight: '48px' }}
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isLoading}
                                className="p-2.5 mb-1 mr-1 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-400 text-white rounded-full transition-colors flex-shrink-0"
                            >
                                <FaPaperPlane size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
