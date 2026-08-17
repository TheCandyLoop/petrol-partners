import './ConversationListItem.css';

function ConversationListItem({ conversation, active, onClick }) {
  const lastMessage = conversation.messages[conversation.messages.length - 1];

  return (
    <button
      type="button"
      className={`conversation-item ${active ? 'conversation-item-active' : ''}`}
      onClick={onClick}
    >
      <div className="conversation-avatar">{conversation.participant.initials}</div>
      <div className="conversation-item-body">
        <div className="conversation-item-header">
          <span className="conversation-item-name">{conversation.participant.name}</span>
          <span className="conversation-item-time">{conversation.lastMessageAt}</span>
        </div>
        <div className="conversation-item-route">{conversation.route}</div>
        <div className="conversation-item-preview">{lastMessage.text}</div>
      </div>
      {conversation.unread && <span className="conversation-item-dot" aria-label="Unread" />}
    </button>
  );
}

export default ConversationListItem;
