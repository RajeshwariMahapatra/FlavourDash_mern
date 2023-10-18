import React, { Component } from 'react';

const chatbotStyles = {
  headerBgColor: '#197B22',
  headerFontSize: '20px',
  botBubbleColor: 'black',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: 'green',
  userFontColor: 'white',
};

const chatbotContainerStyles = {
  position: 'fixed',
  bottom: '60px', // Adjust the bottom position
  right: '10px',
  maxWidth: '400px',
  background: 'black',
  border: '1px solid #ccc',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  borderRadius: '20px',
  zIndex: '1000',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Arial, sans-serif',
};

const userInputStyles = {
  display: 'flex',
  margin: '10px',
};

const userInputInputStyles = {
  flex: '1',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  color: 'white',
  background: 'transparent',
  fontSize: '16px',
};

const userInputButtonStyles = {
  background: '#197B22',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  padding: '10px 20px',
  marginLeft: '5px',
  cursor: 'pointer',
  fontSize: '16px',
};

const chatbotToggleButtonStyles = {
  position: 'fixed',
  bottom: '10px',
  right: '10px',
  background: '#197B22',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  padding: '20px',
  cursor: 'pointer',
  fontSize: '20px',
  zIndex: '1000',
};

class Chatbot extends Component {
  constructor() {
    super();
    this.state = {
      isChatbotOpen: false,
      messages: [
        {
          text: "Hello! I'm FlavourDash.",
          isBot: true,
        },
      ],
      newMessage: "",
    };
  }

  toggleChatbot = () => {
    this.setState((prevState) => ({
      isChatbotOpen: !prevState.isChatbotOpen,
    }));
  };

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

      // Simulate bot response with food recommendations
      setTimeout(() => {
        let botResponse = "I'm a static chatbot response.";

        if (newMessage.includes("recommend food")) {
          botResponse = "Sure, I can recommend some delicious options. What would you like to ask? (e.g. spicy option, vegetarian dishes, healthy lunch, budget-friendly, chef's pick)";
        } else if (newMessage.includes("italian")) {
          botResponse = "How about trying some classic spaghetti carbonara or a margherita pizza?";
        } else if (newMessage.includes("mexican")) {
          botResponse = "You can go for some tasty tacos or a hearty burrito!";
        } else if (newMessage.includes("thank you")) {
          botResponse = "You're welcome! Enjoy your meal!";
        }else if (newMessage.includes("today's special")) {
          botResponse = "prawn fried rice – Chef's special!";
        } else if (newMessage.includes("spicy option?")) {
          botResponse = "Chicken tikka/ Paneer tikka– It's hot!";
        } else if (newMessage.includes("vegetarian dishes?")) {
          botResponse = "Paneer 65/Chilli Paneer/Veg fried rice– Meat-free";
        } else if (newMessage.includes("healthy lunch?")) {
          botResponse = "Veg Biryani – Nutritious.";
        }else if (newMessage.includes("quick delivery?")) {
          botResponse = "Chicken cheese pizza/ mix veg pizza  – Speedy!";
        } else if (newMessage.includes("special occasion?")) {
          botResponse = "Chicken biryani/ Fish biryani  – Celebrate!";
        } else if (newMessage.includes("budget-friendly?")) {
          botResponse = "Veg fried rice/ Mix veg pizza– Wallet-friendly.";
        } else if (newMessage.includes("hello")) {
          botResponse = "How can I assit you today?";
        }else if (newMessage.includes("chef's pick?")) {
          botResponse = "Chicken tikka– A delight!";
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
    const { isChatbotOpen, messages, newMessage } = this.state;

    return (
      <div>
        <button style={chatbotToggleButtonStyles} onClick={this.toggleChatbot}>
          {isChatbotOpen ? 'Close Chatbot' : 'Open Chatbot'}
        </button>
        {isChatbotOpen && (
          <div style={chatbotContainerStyles}>
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
            <form onSubmit={this.handleSubmit} style={userInputStyles}>
              <input
                type="text"
                value={newMessage}
                onChange={this.handleUserInput}
                placeholder="Type a message..."
                style={userInputInputStyles}
              />
              <button type="submit" style={userInputButtonStyles}>Send</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Chatbot;