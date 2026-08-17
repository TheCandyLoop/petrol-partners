import { useState } from 'react';
import ConversationListItem from '../components/ConversationListItem';
import { conversations as initialConversations } from '../data/conversations';
import './Messages.css';

function Messages() {
  const [conversations, setConversations] = useState(initialConversations);
  const [activeId, setActiveId] = useState(initialConversations[0]?.id);
  const [draft, setDraft] = useState('');

  const activeConversation = conversations.find((c) => c.id === activeId);

  const handleSelectConversation = (id) => {
    setActiveId(id);
    setConversations((prev) => prev.map((c) => (c.id === id ? { ...c, unread: false } : c)));
  };

  const handleSend = (e) => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;

    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeId
          ? {
              ...c,
              lastMessageAt: 'Just now',
              messages: [
                ...c.messages,
                { id: `local-${c.messages.length + 1}`, from: 'me', text, time: 'Just now' },
              ],
            }
          : c
      )
    );
    setDraft('');
  };

  return (
    <div className="messages-page">
      <div className="container messages-content">
        <div className="messages-heading">
          <h1>Messages</h1>
          <p className="messages-tagline">Conversations with drivers and passengers you've matched with.</p>
        </div>

        <div className="messages-layout card">
          <div className="messages-list">
            {conversations.map((conversation) => (
              <ConversationListItem
                key={conversation.id}
                conversation={conversation}
                active={conversation.id === activeId}
                onClick={() => handleSelectConversation(conversation.id)}
              />
            ))}
          </div>

          {activeConversation ? (
            <div className="messages-thread">
              <div className="messages-thread-header">
                <div className="messages-thread-avatar">{activeConversation.participant.initials}</div>
                <div>
                  <div className="messages-thread-name">{activeConversation.participant.name}</div>
                  <div className="messages-thread-route">{activeConversation.route}</div>
                </div>
              </div>

              <div className="messages-thread-body">
                {activeConversation.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`messages-bubble-row ${
                      message.from === 'me' ? 'messages-bubble-row-me' : ''
                    }`}
                  >
                    <div className="messages-bubble">
                      <p>{message.text}</p>
                      <span className="messages-bubble-time">{message.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              <form className="messages-thread-input" onSubmit={handleSend}>
                <input
                  type="text"
                  placeholder="Write a message..."
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </form>
            </div>
          ) : (
            <div className="messages-empty">Select a conversation to start messaging.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Messages;
