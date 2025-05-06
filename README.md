## 🤣 Joke API

This simple API delivers random jokes by reading from a predefined list. It's designed to be lightweight, fast, and easy to deploy.

## 🚀 Features

- 🎯 Serves a random joke on each request
- 🔁 Always returns a fresh joke
- 📦 Minimal and clean JSON output
- ⚡ Fast Node.js serverless function
- 🌐 Easy to deploy on Vercel

## 📦 Requirements

- Node.js 14+
- Vercel CLI (if deploying locally)

## 📡 Usage

**1. Endpoint**

Send a GET request to:

```
GET /api
```

✅ Example Request

```bash
curl "http://localhost:3000"
```

✅ Example Response

```json
{
  "joke": "Why don't scientists trust atoms? Because they make up everything!"
}
```

❌ Error Response (if something goes wrong)

```json
{
  "error": "Something went wrong"
}
```

## 🔍 Code Explanation

- Contains a list of jokes inside the code
- Randomly picks one joke on each request
- Returns JSON with a `joke` key
- Simple and clean structure using Node.js

## ⚠️ Error Handling

- 💥 500 Internal Server Error: Returned when the server fails unexpectedly

## 🚀 Vercel Deployment

1. Push the repo to GitHub
2. Connect the repo on Vercel
3. Done! You’ll have a public endpoint like:  
   `https://your.vercel.app/api`

## 🛠️ Setup

Watch the following video to learn how to deploy this API on Vercel:

[![Watch the video](https://img.youtube.com/vi/BWS8Lve3wKY/hqdefault.jpg)](https://youtu.be/BWS8Lve3wKY)

## 📄 License

This project is licensed under the License - see the [LICENSE](https://github.com/NotFlexCoder/joke-api/blob/main/LICENSE) file for details.
