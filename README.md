# Project List Management App

## Overview
A full-stack project management application that allows users to create, read, update, and delete projects. The app features a clean, responsive UI with intuitive controls for managing projects.

[Frontend Demo](https://project-list-management-app-frontend.netlify.app/)
[Backend Demo](https://project-list-management-app-api.vercel.app/api/projects)

![screenshot](/client/src/assets/frontend%20screenshot.png)

## Features

### Core Functionality

- Create new projects with validation
- View all projects in a clean list
- Edit existing projects
- Delete individual projects
- Delete all projects at once
- Real-time project count display
- Refresh project list on demand

### Enhanced Features

- Attractive and modern UI.
- Refresh button to sync with server data
- Comprehensive error handling and user feedback
- Fully responsive design for all device sizes
- Confirmation dialogs for destructive actions
- Loading states for better UX

### Technical Features

- Deployed backend on Vercel
- Deployed frontend on Netlify
- Real-time data synchronization
- Input validation on both client and server
- Separate project count endpoint

## Project Structure


```bash
project-list-management-app/
├── client/                      # Frontend React application
│   ├── public/
│   ├── src/
│   │   ├── api/                 # API service functions
│   │   │   └── projectService.js
│   │   ├── components/          # Reusable components
│   │   │   ├── DeleteButton.jsx
│   │   │   ├── EditButton.jsx
│   │   │   ├── ProjectEntryForm.jsx
│   │   │   ├── ProjectItem.jsx
│   │   │   └── ProjectList.jsx
│   │   ├── styles/              # CSS styles
│   │   │   ├── App.css
│   │   │   └── component/       # Component-specific styles
│   │   └── App.jsx              # Main application component
│   ├── package.json
│   └── README.md
├── server/                      # Backend Express server
│   ├── server.js                # Main server file
│   └── package.json
└── README.md                    # This file
```

## Technology Stack

- React (Functional components with Hooks)
- React Icons (FaTrash, FaSync, MdAdd)
- CSS for styling
- Fetch API for HTTP requests
- Node.js with Express
- CORS middleware
- RESTful API design
- Mock database (in-memory array)

## Installation

1. Clone the repository
```bash
git clone https://github.com/mariamkhan04/Project-List-Management-App.git
```

2. Install backend dependencies
```bash
cd server
npm install
```

3. Install frontend Dependencies
```bash
cd ../client
npm install
```

4. Start backend Server
```bash
cd ../server
npm start
```

5. Start Frontend Server
```bash
cd ../client
npm start
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.