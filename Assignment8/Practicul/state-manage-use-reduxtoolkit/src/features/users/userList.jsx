import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from './userSlice';

export default function UserList({ setSelectedUser }) {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-3">User List</h2>
      {users.length === 0 ? (
        <p>No users added yet.</p>
      ) : (
        <ul className="space-y-2">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex justify-between items-center border p-2 rounded-lg"
            >
              <div>
                <strong>{user.name}</strong> — {user.email}
              </div>
              <div>
                <button
                  onClick={() => setSelectedUser(user)}
                  className="text-green-600 mr-3 hover:text-green-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteUser(user.id))}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
