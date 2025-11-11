import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './features/users/userList';

export default function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">🧠 Redux Toolkit CRUD</h1>
      <div className="w-full max-w-md">
        <UserForm selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        <UserList setSelectedUser={setSelectedUser} />
      </div>
    </div>
  );
}
