"use client";
import React from "react";
import Sandbox from "../Sandbox/Sandbox";

function InterviewSandbox() {
  return (
    <Sandbox
      template="react"
      files={{
        "/App.js": `// App.js

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="app">
      <h1>User Cards</h1>
      <div className="user-cards">
        {users.map(user => (
          <div className="user-card" key={user.id}>
            <h2>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
`,
        "/App.css": `/* App.css */

.app {
  text-align: center;
  padding: 20px;
}

.user-card {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: inline-block;
  width: 200px;
  text-align: left;
}

.user-card h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.user-card p {
  font-size: 1em;
  color: #666;
}
`,
      }}
    />
  );
}

export default InterviewSandbox;
