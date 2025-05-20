# AI Tweet Rewriter

A simple web application that rewrites your tweets in different tones using Groq's LLM API and Llama 4.

## Features

- Rewrite tweets in multiple tones: Witty, Professional, Casual, and Motivational
- Real-time processing with Groq's meta-llama/llama-4-scout-17b-16e-instruct model
- Clean, responsive UI built with React and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js and npm installed
- A Groq API key ([Sign up here](https://console.groq.com/))

### Installation

1. Clone the repository
```
git clone https://github.com/decagondev/tweet-rewriter.git
cd tweet-rewriter
```

2. Install dependencies
```
npm install
```

3. Create a `.env` file in the root directory with your Groq API key
```
VITE_GROQ_API_KEY=your_groq_api_key_here
```

4. Start the development server
```
npm run dev
```

5. Open your browser and navigate to the local development server URL

## Usage

1. Enter the tweet you want to rewrite in the text area
2. Select your desired tone from the dropdown menu
3. Click the "Rewrite Tweet" button
4. View your rewritten tweet in the results area

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Groq API with Llama 4 model

## License

[MIT](LICENSE)
