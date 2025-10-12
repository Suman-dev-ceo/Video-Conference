# 🎥 Video Meeting App with WebRTC & Socket.IO

A real-time video conferencing application built using WebRTC, Socket.IO, and React. It allows users to join virtual rooms, enable video/audio, share screens, chat in real-time, and more features. This application uses peer-to-peer connections to ensure a smooth video call experience.

## 📋 Table of Contents
1. [Highlights](#highlights)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Author](#author)
6. [Project Screenshots](#project-screenshots)

 

## Highlights
- **Real-time video/audio steaming** with WebRTC
- **Secure authentication** (user registration and login) using bcrypt
- **Join as guest** feature for hassel-free connectivity
- **Screen sharing** functionality for collaborative meetings
- **Real-time chat** with a message history
- **Automatic handling of peer connections**: Dynamic creation of WebRTC connections based on incoming signals.
- **Efficient resource management**: Automatic cleanup of connections and media streams when users leave or disconnect
- **Backend signaling** with Express and Socket.IO for WebRTC peer connections

## Tech Stack
```
Layer				Technology
Frontend		React • Material UI • Socket.IO-Client • Axios • CSS 
Backend			Express • Socket.IO • Mongoose • Bcrypt • CORS
Database		MongoDB (for user data & authentication)
WebRTC			Peer connection, SDP & ICE exchange via signaling server
Dev Tools		Nodemon 
```


## Installation
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
  > [!IMPORTANT]
> In development (local machine) : set value of **is_prod** as **false** by navigating into **frontend/src/environment.js** \
> In production : set value of **is_prod** as **true** using the same path as above.

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

## Usage
1. Register/ Login
   - Sign up using your email and password.
   - Login to access the dashboard
2. Start a Meeting 
   - Enter meeting code of your desired number (probably any 6 digit), send the same code to your friends to join same room.
   - Hit join button, it redirects to lobby where camera and microphone permissions will be asked, click both allow to see yourself live on screen.
   - In lobby enter username (any desired name to visible during meeting chat)
   - click connect, it sends directly into meeting room.
3. In the Meeting
   - Toggle camera/mic
   - Share screen
   - Chat with participants
   - Leave call anytime (connections auto-close)
4. After call end
   - Again redirects to dashboard
   - Here user can moniter history of previous meeting by clicking on history a data of meeting codes with respective dates are shown.
   - Finally upon hitting logout button user will walk out of the video conference application.
  
## Author
Suman Srinivas \
CSE | Parul University \
Full Stack Web Developer

## Project Screenshots

| Home Page | Login/ SignUP | Dashboard |
|------------|---------------|--------------|
| ![Home](frontend/Images/%20%202025-10-12%20at%2011.27.31.png) | ![Login/Signup]( https://github.com/Suman-dev-ceo/Video-Conference/blob/main/frontend/Images/%20%202025-10-12%20at%2011.27.55.png) | ![Dashboard]( https://github.com/Suman-dev-ceo/Video-Conference/blob/main/frontend/Images/%20%202025-10-12%20at%2011.28.39.png) |

| Dashboard | Lobby| Meeting Room |
|-------------|--------------|---------------|
| ![Login]( https://github.com/Suman-dev-ceo/Video-Conference/blob/main/frontend/Images/%20%202025-10-12%20at%2011.29.02.png) | ![Signup]( https://github.com/Suman-dev-ceo/Video-Conference/blob/main/frontend/Images/%20%202025-10-12%20at%2011.30.51.png) | ![Share]( https://github.com/Suman-dev-ceo/Video-Conference/blob/main/frontend/Images/%20%202025-10-12%20at%2011.33.47.png) |

| Share screen | History |
|------------------|-----------------|
| ![Participants]( https://github.com/Suman-dev-ceo/Video-Conference/blob/main/frontend/Images/%20%202025-10-12%20at%2011.36.41.png) | ![EndCall]( https://github.com/Suman-dev-ceo/Video-Conference/blob/main/frontend/Images/%20%202025-10-12%20at%2011.36.56.png) |





