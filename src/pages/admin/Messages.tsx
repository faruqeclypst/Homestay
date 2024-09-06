// src/pages/admin/Messages.tsx

import React, { useEffect, useState } from 'react';

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
}

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    // Ambil pesan dari API
    fetch('/api/messages')
      .then((response) => response.json())
      .then((data) => setMessages(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Pesan Masuk</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {messages.length === 0 ? (
          <p>Tidak ada pesan masuk.</p>
        ) : (
          <ul>
            {messages.map((message) => (
              <li key={message.id} className="border-b border-gray-200 py-4">
                <h2 className="font-semibold">{message.name} ({message.email})</h2>
                <p>{message.message}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Messages;