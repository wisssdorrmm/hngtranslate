// import React, { useState } from "react";
// import axios from "axios";
// import Select from "react-select";

// const languages = [
//   { value: "en", label: "English" },
//   { value: "pt", label: "Portuguese" },
//   { value: "es", label: "Spanish" },
//   { value: "ru", label: "Russian" },
//   { value: "tr", label: "Turkish" },
//   { value: "fr", label: "French" },
// ];

// export default function App() {
//   const [inputText, setInputText] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
//   const [error, setError] = useState(null);

//   const handleSend = async () => {
//     if (!inputText.trim()) {
//       setError("Input text cannot be empty.");
//       return;
//     }

//     setError(null);
//     const newMessage = { text: inputText, language: null, summary: null, translation: null };
//     setMessages((prev) => [...prev, newMessage]);

//     try {
//       const languageResponse = await axios.post("https://example.com/language-detection", { text: inputText });
//       newMessage.language = languageResponse.data.language;

//       if (newMessage.language === "en" && inputText.length > 150) {
//         const summaryResponse = await axios.post("https://example.com/summarizer", { text: inputText });
//         newMessage.summary = summaryResponse.data.summary;
//       }
//     } catch (err) {
//       setError("An error occurred while processing the text.");
//     }

//     setMessages((prev) => {
//       const updatedMessages = [...prev];
//       updatedMessages[updatedMessages.length - 1] = newMessage;
//       return updatedMessages;
//     });
//     setInputText("");
//   };

//   const handleTranslate = async (index) => {
//     try {
//       const translationResponse = await axios.post("https://example.com/translator", {
//         text: messages[index].text,
//         targetLanguage: selectedLanguage.value,
//       });
//       setMessages((prev) => {
//         const updatedMessages = [...prev];
//         updatedMessages[index].translation = translationResponse.data.translation;
//         return updatedMessages;
//       });
//     } catch (err) {
//       setError("An error occurred while translating the text.");
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen p-4 bg-gray-100">
//       <div className="flex-grow overflow-y-auto bg-white rounded shadow p-4">
//         {messages.map((message, index) => (
//           <div key={index} className="mb-4">
//             <p className="text-gray-800">{message.text}</p>
//             {message.language && (
//               <p className="text-sm text-gray-500">Detected Language: {message.language}</p>
//             )}
//             {message.summary && (
//               <p className="text-sm text-gray-600">Summary: {message.summary}</p>
//             )}
//             {message.translation && (
//               <p className="text-sm text-gray-700">Translation: {message.translation}</p>
//             )}
//             <div className="flex items-center mt-2">
//               <Select
//                 options={languages}
//                 value={selectedLanguage}
//                 onChange={(option) => setSelectedLanguage(option)}
//                 className="mr-2"
//               />
//               <button
//                 onClick={() => handleTranslate(index)}
//                 className="px-4 py-2 bg-green-500 text-white rounded"
//               >
//                 Translate
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex items-center mt-4">
//         <textarea
//           value={inputText}
//           onChange={(e) => setInputText(e.target.value)}
//           className="flex-grow p-2 border rounded mr-2"
//           placeholder="Type your text here..."
//         />
//         <button
//           onClick={handleSend}
//           className="px-4 py-2 bg-blue-600 text-white rounded"
//         >
//           Send
//         </button>
//       </div>
//       {error && <p className="text-red-500 mt-2">{error}</p>}
//     </div>
//   );
// }
