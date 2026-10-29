# URBANPULSE AI

An AI Digital Twin for Self-Optimizing Indian Cities.

This repository contains the initial setup for the URBANPULSE AI project, featuring a FastAPI backend and a React (TypeScript + Vite) frontend.

## Technology Stack
- **Backend:** Python, FastAPI, Uvicorn, Pydantic
- **Frontend:** React, TypeScript, Vite
- **Testing:** Pytest

## How to Run Locally (Windows CMD)

Follow these exact steps to get the project running locally.

### 1. Set up and Run the Backend

Open a new Command Prompt window and execute:

```cmd
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

*To run tests for the backend (while in the activated virtual environment):*
```cmd
pytest test_main.py
```

### 2. Set up and Run the Frontend

Open a **second** Command Prompt window and execute:

```cmd
cd frontend
npm install
npm run dev
```

### 3. Verify Setup

Open your browser and navigate to the frontend URL (usually `http://localhost:5173`).
You should see the URBANPULSE AI home page with a green status message indicating a successful connection to the backend (`Status: ok, Message: Backend is healthy`).
