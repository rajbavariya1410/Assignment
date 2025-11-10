import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(null); // doc id
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    const q = query(collection(db, "notes"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snapshot) => {
      setNotes(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return unsub;
  }, []);

  const createNote = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await addDoc(collection(db, "notes"), {
      title: title.trim(),
      uid: user.uid,
      createdAt: new Date(),
    });
    setTitle("");
  };

  const startEdit = (note) => {
    setEditing(note.id);
    setEditingText(note.title);
  };

  const saveEdit = async () => {
    if (!editing) return;
    const docRef = doc(db, "notes", editing);
    await updateDoc(docRef, { title: editingText });
    setEditing(null);
    setEditingText("");
  };

  const remove = async (id) => {
    await deleteDoc(doc(db, "notes", id));
  };

  return (
    <div style={{ padding: 20 }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <h2>Notes — {user.displayName}</h2>
        <div>
          <button onClick={logout}>Sign Out</button>
        </div>
      </div>

      <form onSubmit={createNote} style={{ marginTop: 12 }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New note"
        />
        <button type="submit">Add</button>
      </form>

      <ul style={{ marginTop: 16 }}>
        {notes.map((n) => (
          <li key={n.id} style={{ marginBottom: 8 }}>
            {editing === n.id ? (
              <>
                <input value={editingText} onChange={(e) => setEditingText(e.target.value)} />
                <button onClick={saveEdit}>Save</button>
                <button onClick={() => { setEditing(null); setEditingText(""); }}>Cancel</button>
              </>
            ) : (
              <>
                <strong>{n.title}</strong>
                <span style={{ marginLeft: 8, color: "#666" }}>
                  {n.uid === user.uid ? "(yours)" : ""}
                </span>
                <button style={{ marginLeft: 8 }} onClick={() => startEdit(n)}>Edit</button>
                <button style={{ marginLeft: 8 }} onClick={() => remove(n.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
