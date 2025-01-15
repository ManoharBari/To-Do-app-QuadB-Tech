# Weather-Integrated To-Do Application

## Project Overview

This project is a Weather-Integrated To-Do Application developed using **ReactJS**. It combines task management with real-time weather information based on the user's current location, making it a useful tool for planning tasks effectively.

## Features

- **To-Do Management**:
  - Add, view, and delete tasks.
  - Persistent task storage using `localStorage`.
- **Weather Integration**:
  - Fetch and display real-time weather based on the user's current location.
  - Fallback to default city weather (e.g., mumbai) if location access is denied.
- **Responsive Design**:
  - Fully responsive layout for mobile, tablet, and desktop.
- **User Authentication**:
  - Simulated login/logout feature to protect the To-Do list.

---

## Technologies Used

- **Frontend**:
  - ReactJS
  - React Hooks (useState, useEffect)
  - CSS for styling
- **State Management**:
  - Redux
  - Redux Thunk for asynchronous actions
- **API Integration**:
  - OpenWeatherMap API for fetching weather data
- **Storage**:
  - `localStorage` for persisting tasks and authentication state

---

## Installation and Setup

### Prerequisites

Make sure you have the following installed:

- Node.js (>=14.0)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/ManoharBari/To-Do-app-QuadB-Tech.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
   ```env
   VITE_REACT_APP_API_KEY=your_api_key
   ```
4. Start the development server:
   ```bash
   npm start
   ```

---

## Usage

1. **Login**:
   - Enter a username to log in. The username will be saved in `localStorage`.
2. **Add Tasks**:
   - Input tasks into the text field and click "Add Task."
3. **View Weather**:
   - Weather details are automatically fetched using the current location or the default city.
4. **Delete Tasks**:
   - Use the delete button next to a task to remove it.

---

## API Integration Details

- **API Used**: [OpenWeatherMap API](https://openweathermap.org/api)
- **Endpoints**:
  - `GET /weather` for current weather data
- **Sample Response**:
  ```json
  {
    "name": "Mumbai",
    "main": {
      "temp": 22.5
    },
    "weather": [
      {
        "description": "clear sky"
      }
    ]
  }
  ```

---

## Deployment

1. Deployed on [Vercel](https://vercel.com)

## Live Preview

[To-Do App](https://to-do-app-quad-b-tech.vercel.app)

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.
