import React, { useState } from "react";
import { FaCog, FaPaperPlane, FaPlus, FaSearch } from "react-icons/fa";

const ChatUI = () => {
  const [selectContact, setSelectContact] = useState(null);

  const contacts = [
    {
      id: 1,
      name: "John Doe",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
      lastSeen: "Last seen at 3:45 PM",
    },
    {
      id: 2,
      name: "Jane Smith",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
      lastSeen: "Last seen at 2:15 PM",
    },
    {
      id: 3,
      name: "Alex Brown",
      profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
      lastSeen: "Last seen at 4:00 PM",
    },
    {
      id: 4,
      name: "Chris red",
      profileImage: "https://randomuser.me/api/portraits/men/4.jpg",
      lastSeen: "Last seen at 1:30 PM",
    },
  ];

  const messages = [
    {
      id: 1,
      text: "Hi, how are you?",
      sender: true, // true for sender, false for receiver
      timeSent: "16 min ago", // Time elapsed since sent
      timeSeen: "1:03 PM", // Time when seen
    },
    {
      id: 2,
      text: "What's the update on the project?",
      sender: true,
      timeSent: "10 min ago",
      timeSeen: "1:05 PM",
    },
    {
      id: 3,
      text: "I'm good! I will update you by the end of the day.",
      sender: false,
      timeSent: "5 min ago",
      timeSeen: "1:02 PM",
    },
    {
      id: 4,
      text: "Any specific details you want to know?",
      sender: false,
      timeSent: "3 min ago",
      timeSeen: "1:01 PM",
    },
  ];

  const onChangeContact = (id) => {
    setSelectContact(id);
  };
  return (
    <div className="w-full h-screen flex items-start justify-evenly bg-gradient-to-r from-[#0D1427] to-[#172F4C]">
      {/* Portion 1: Contact List with Profile Image and Last Seen Time */}
      <div className="w-[30%] h-full p-4 flex flex-row overflow-y-auto">
        <div className="flex justify-center mb-4 pr-4 pt-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLoIdEZY66DvqWa_7QPACJ9dkAiwUxj6xtsJgm4M6sSKVgP3MU"
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
        </div>

        {/* Search Bar and Contact List */}
        <div className="flex-grow">
          <div className="mb-4 flex items-center">
            <button className="flex items-center bg-[#0D1427] text-white shadow-sm shadow-white/10 hover:bg-[#0b1020] py-2 pr-9 rounded-md ">
              <FaPlus className="h-5 w-14 mr-1" />
              New Conversation
            </button>
          </div>
            <h2 className="text-white font-bold text-2xl mb-2">Chats</h2>
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full p-2  rounded-md outline-none text-gray-800"
            />
            <div className="absolute right-3 top-3">
              <FaSearch className="h-4 w-4 text-black/70" />
            </div>
          </div>
          {/* Contact List - Rendered Dynamically Using map() */}
          <ul className="space-y-1">
            {contacts.map((contact) => (
              <li
                key={contact.id}
                onClick={() => onChangeContact(contact.id)}
                className={`flex items-center space-x-3  p-3 rounded-md cursor-pointer 
            ${selectContact === contact.id ? "bg-[#070b16]" : "bg-[#0D1427]"}`}
              >
                <div className="relative">
                  <img
                    src={contact.profileImage}
                    alt={contact.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <span className="absolute right-1 bottom-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                </div>
                <div className="flex-grow">
                  <p className="font-semibold text-white/70">{contact.name}</p>
                  <p className="text-sm text-gray-500">{contact.lastSeen}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Portion 2: converstion or messaging */}
      <div className="w-[50%] h-full border-x-[1px] border-white/10 bo  flex flex-col">
        {/* Profile Navbar */}
        <div className="flex items-center justify-between bg-[#0c1326] p-4  mb-4">
          <h2 className="text-white font-bold">John Doe</h2>
          <FaCog className="text-white  h-5 w-5 cursor-pointer" />
        </div>
        <div className="flex-grow overflow-y-auto px-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-end  ${
                  message.sender ? "" : "justify-end"
                }`}
              >
                {message.sender ? (
                  <>
                    <div className="relative">
                      <img
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt="Sender"
                        className="w-12 h-12 rounded-full mr-2"
                      />
                      {/* Online Status Dot */}
                      <span className="absolute right-2 bottom-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                    </div>
                    <div className="custom-rounded-sender bg-white  p-3  shadow-md max-w-sm">
                      <p>{message.text}</p>
                      <p className="text-xs text-gray-500">
                        {message.timeSent} - Seen at {message.timeSeen}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-blue-600 custom-rounded-receiver p-3  shadow-md max-w-sm mr-2">
                      <p className="text-white">{message.text}</p>
                      <p className="text-xs text-gray-300">
                        {message.timeSent} - Seen at {message.timeSeen}
                      </p>
                    </div>
                    <div className="relative">
                      <img
                        src="https://randomuser.me/api/portraits/women/2.jpg"
                        alt="Sender"
                        className="w-12 h-12 rounded-full mr-2"
                      />
                      {/* Online Status Dot */}
                      <span className="absolute right-2 bottom-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2 mb-4 px-4 flex items-center">
          <button className="ml-2 mr-2  p-3 rounded-md bg-white">
            <FaPlus className="text-gray-600" />
          </button>
          <input
            type="text"
            className="w-full p-2 rounded-md mr-2 outline-none shadow-md"
            placeholder="Type a message..."
          />
          <button className=" p-3 mr-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 flex items-center">
            <FaPaperPlane />
          </button>
        </div>
      </div>

      {/* Portion 3:  Information about CEO*/}
      <div className="w-[20%] p-5">
        <div className="w-full bg-[#0c1326] rounded-full rounded-b-none pt-10 p-4 flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/men/4.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full mb-2"
          />

          <h2 className="text-xl font-bold text-white text-center">
            Fernando Faucho
          </h2>
          <div className="w-12 pb-8 ">
            <p className="text-sm mt-4 text-gray-600">
              CEO & Founder at highly Inc
            </p>
          </div>
        </div>
        <div className="mt-2 ">
          <select className=" bg-[#0c1326] rounded-md w-full pl-8 pr-2 text-white py-3">
            <option className="text-white" value="information">
              Information
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
