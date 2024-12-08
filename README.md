# Harmony Headlines News App - Backend

This is the backend service for the **Harmony Headlines News App**, which allows users to customize the mood of news articles through AI integration. The backend handles the logic for interacting with the Google Gemini AI API to adjust the mood of the news based on user input from the mood slider.

## Features

- **AI-Powered Mood Adjustment:** Adjusts the tone of news articles in real-time using the Google Gemini AI API.
- **Integration with Google Gemini AI API:** The backend processes mood changes and interacts with the Google Gemini AI API to modify the content of news articles.
- **Express.js Web Server:** The backend is built with Node.js and Express.js, providing efficient routing and handling of API requests.

## Technologies

- **Backend Framework:** Node.js, Express.js
- **AI Integration:** Google Gemini AI API
- **Environment Variables:** To securely manage API keys and configuration settings
- **API:** RESTful API endpoints for handling mood updates and retrieving customized news

## Setup Instructions

### Prerequisites
Make sure you have the following installed:

- Node.js (version 14.x or higher)
- npm or yarn for package management
- Google Gemini AI API key (sign up at Google Cloud for access)

### Install Dependencies
1. Clone this repository:

    ```bash
    git clone https://github.com/expozonee/harmony-headlines-news-backend-app.git
    ```

2. Navigate into the project directory:

    ```bash
    cd harmony-headlines-news-backend-app
    ```

3. Install the backend dependencies:

    ```bash
    npm install
    ```

### Environment Configuration
1. Create a `.env` file in the root directory.
2. Add the following variables to your `.env` file:

    ```
    AI_API_KEY=your_google_api_key_here
    ```

### Running the Backend

To start the backend server, run the following command:

```bash
npm start
