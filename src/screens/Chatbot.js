import React, { Component } from 'react';

const chatbotStyles = {
  background: '#C9FF8F',
  headerBgColor: '#197B22',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FF5733',
  userFontColor: 'white',
};

class Chatbot extends Component {
  constructor() {
    super();
    this.state = {
      messages: [
        {
          text: "Hello! I'm FlavourDash. How can I assist you today?",
          isBot: true,
        },
      ],
      newMessage: "",
    };
  }

  handleUserInput = (e) => {
    this.setState({ newMessage: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { newMessage } = this.state;

    if (newMessage.trim() !== "") {
      this.setState((prevState) => ({
        messages: [
          ...prevState.messages,
          { text: newMessage, isBot: false },
        ],
        newMessage: "",
      }));

      // Simulate bot response with predefined answers
      setTimeout(() => {
        let botResponse = "I'm a static chatbot response.";
        if (newMessage.includes("hello")) {
          botResponse = "Hello! How can I help you today?";
        } else if (newMessage.includes("menu")) {
          botResponse = "Here is our menu: [list of items].";
        } else if (newMessage.includes("opening hours")) {
          botResponse = "Our opening hours are [opening hours].";
        }
        
        this.setState((prevState) => ({
          messages: [
            ...prevState.messages,
            {
              text: botResponse,
              isBot: true,
            },
          ],
        }));
      }, 1000);
    }
  }

  render() {
    const { messages, newMessage } = this.state;

    return (
      <div style={{ background: chatbotStyles.background }}>
        <div className="chatbot-container">
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.isBot ? 'bot' : 'user'}`}
                style={{
                  backgroundColor: message.isBot ? chatbotStyles.botBubbleColor : chatbotStyles.userBubbleColor,
                  color: message.isBot ? chatbotStyles.botFontColor : chatbotStyles.userFontColor,
                }}
              >
                {message.text}
              </div>
            ))}
          </div>
          <form onSubmit={this.handleSubmit} className="user-input">
            <input
              type="text"
              value={newMessage}
              onChange={this.handleUserInput}
              placeholder="Type a message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Chatbot;
