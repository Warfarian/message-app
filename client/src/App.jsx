import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UsernameForm from './components/UsernameForm';
import MessageBox from './components/MessageBox';
import { useState } from 'react';
import './App.css'

export default function App() {
  const [username, setUsername] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsernameForm setUsername={setUsername} />} />
        <Route 
          path="/chat" 
          element={username ? <MessageBox username={username} /> : <Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
}
