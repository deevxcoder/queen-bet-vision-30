
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AuthProvider } from './contexts/AuthContext.tsx';
import { NotificationProvider } from './contexts/NotificationContext.tsx';
import { TransactionProvider } from './contexts/TransactionContext.tsx';
import { GameProvider } from './contexts/GameContext.tsx';

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <NotificationProvider>
        <TransactionProvider>
          <GameProvider>
            <App />
          </GameProvider>
        </TransactionProvider>
      </NotificationProvider>
    </AuthProvider>
  </React.StrictMode>
);
