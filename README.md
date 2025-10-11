# Video Meeting App with WebRTC & Socket.IO

A real-time video conferencing application built using WebRTC, Socket.IO, and React. It allows users to join virtual rooms, enable video/audio, share screens, chat in real-time, and more features. This application uses peer-to-peer connections to ensure a smooth video call experience.

# Table of Contents
	1.	Features
	2.	Installation
	3.	Usage
	4.	Technologies
	5.	Folder Structure
	6.	Contributions
	7.	License

# Highlights
- **Real-time video/audio steaming** with WebRTC
- **Screen sharing** functionality for collaborative meetings
- **Real-time chat** with a message history
- **Automatic handling of peer connections**: Dynamic creation of WebRTC connections based on incoming signals.
- **Efficient resource management**: Automatic cleanup of connections and media streams when users leave or disconnect
- **Backend signaling** with Express and Socket.IO for WebRTC peer connections

# Installation
1. **Clone the repository:**
```bash
git clone https://github.com/your-username/video-meeting-app.git
cd video-meeting-app 
```
2. **Backend (server)**
   - Navigate to backend directory
   ```
   cd backend
   ```
   - Install backend dependencies:
   ```
   npm install
   ```
   - Start the backend server:
     + In development mode:
     ```
      npm run dev
     ```
     + In production mode:
     ```
     npm run prod
     ```
  The backend will be available at http://localhost:8080 (or the specified port in your server config).

3. **Frontend (Client)**
   - Navigate to frontend directory
   ```
   cd frontend
   ```
   - Install frontend dependencies:
   ```
   npm install
   ```
   - Start the frontend server:
     ```
      npm start
     ```
 
The frontend will be available at http://localhost:3000  

# Usage






