// import React from 'react';
// import ChatBot from 'react-simple-chatbot';
// import { ThemeProvider } from 'styled-components';

// const theme = {
//   background: '#C9FF8F',
//   headerBgColor: '#197B22',
//   headerFontSize: '20px',
//   botBubbleColor: '#0F3789',
//   headerFontColor: 'white',
//   botFontColor: 'white',
//   userBubbleColor: '#FF5733',
//   userFontColor: 'white',
// };

// const steps = [
//   {
//     id: '0',
//     message: "Hello! I'm Dr. Sattva. How can I assist you today?",
//     trigger: '1',
//   },
//   {
//     id: '1',
//     user: true,
//     trigger: '2',
//   },
//   {
//     id: '2',
//     message: 'Please tell me which disease or condition you are currently treating with allopathic medicine:',
//     trigger: '3',
//   },
//   {
//     id: '3',
//     user: true,
//     trigger: '4',
//   },
//   {
//     id: '4',
//     message: 'Thank you for providing information about your condition. Ayurveda can offer alternative treatments for {previousValue}. Would you like to explore Ayurvedic options?',
//     trigger: '5',
//   },
//   {
//     id: '5',
//     options: [
//       { value: 'yes', label: 'Yes', trigger: '6' },
//       { value: 'no', label: 'No', end: true },
//     ],
//   },
//   {
//     id: '6',
//     message: 'Great! Ayurveda offers holistic and natural treatments. Let me recommend some Ayurvedic remedies for {previousValue}:',
//     trigger: '7',
//   },
//   {
//     id: '7',
//     message: '1. {Tulsi}',
//     trigger: '8',
//   },
//   {
//     id: '8',
//     message: '2. {Neem}',
//     trigger: '9',
//   },
//   {
//     id: '9',
//     message: '3. {Haldi}',
//     trigger: '10',
//   },
//   {
//     id: '10',
//     message: 'Please consult with an Ayurvedic practitioner for more personalized advice and guidance. Is there anything else I can assist you with?',
//     trigger: '11',
//   },
//   {
//     id: '11',
//     options: [
//       { value: 'yes', label: 'Yes', trigger: '12' },
//       { value: 'no', label: 'No', end: true },
//     ],
//   },
//   {
//     id: '12',
//     message: 'Of course! Feel free to ask any questions or share more about your health concerns. I am here to help.',
//     trigger: '11',
//   },
// ];

// const config = {
//   botAvatar: "https://w7.pngwing.com/pngs/695/247/png-transparent-chatbot-logo-robotics-robot-electronics-leaf-logo.png",
//   floating: true,
// };

// function ChatbotComponent() {
//   return (
//     <div className="App">
//       <ThemeProvider theme={theme}>
//         <ChatBot
//           headerTitle="Sattva"
//           steps={steps}
//           {...config}
//         />
//       </ThemeProvider>
//     </div>
//   );
// }

// export default ChatbotComponent;
