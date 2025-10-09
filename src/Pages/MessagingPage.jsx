// src/Pages/MessagingPage.jsx
import React from 'react';
import './MessagingPage.css'; // ⬅️ Create this CSS file next

const MessagingPage = () => {
    return (
        <div className="messaging-layout">
            
            {/* Left Panel: Conversation List */}
            <div className="conversation-list-panel">
                <Input placeholder="Search" style={{margin: '10px 0'}} />
                <div className="conversation-item active">
                    <h4>Alex Johnson</h4>
                    <p>Hey! How's it going?</p>
                </div>
                {/* ... more conversation items ... */}
            </div>

            {/* Right Panel: Chat Window */}
            <div className="chat-window-panel">
                <header className="chat-header">
                    <h4>Alex Johnson</h4>
                    <span className="status">3m ago</span>
                </header>
                
                <div className="chat-messages">
                    {/* Placeholder Messages */}
                    <div className="message received">Hi Alex, thank you for applying...</div>
                    <div className="message sent">Great! Here's the Zoom link...</div>
                </div>

                <div className="chat-input-area">
                    <input type="text" placeholder="Type a message..." />
                    <button>🎤</button>
                    <button>📎</button>
                </div>
            </div>
        </div>
    );
};

export default MessagingPage;