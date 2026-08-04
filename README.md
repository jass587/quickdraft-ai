# ✨ QuickDraft AI

### Write better emails. Faster.

Transform rough drafts into polished, professional emails in seconds using AI.

🌐 **Live Demo:** https://quickdraft-ai.vercel.app

---

## 🚀 Overview

QuickDraft AI is an AI-powered email rewriting assistant that helps users transform rough email drafts into clear, professional, and natural communication with a single click.

Built as a modern SaaS application using React, FastAPI, and OpenAI GPT-5.5, QuickDraft AI focuses on speed, simplicity, and productivity.

---

## ✨ Features

- ✍️ Rewrite rough email drafts
- 🎯 Multiple writing tones
  - Professional
  - Friendly
  - Formal
  - Casual
- ⚡ Fast AI-powered responses
- 📋 One-click copy output
- 🔄 Loading & error handling
- 📱 Responsive UI
- 🌐 Production deployment

---

## 🛠 Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Axios

### Backend

- FastAPI
- Python
- OpenAI GPT-5.5
- Pydantic

### Deployment

- Vercel
- Railway

---

## 🏗 Architecture

```
                 React + Vite
                      │
                      │ HTTPS
                      ▼
               FastAPI Backend
                      │
                      ▼
                OpenAI GPT-5.5
```

---

## 📸 Screenshots

### Home

> Add homepage screenshot here

### AI Rewrite

> Add rewrite result screenshot here

---

## 🚀 Getting Started

### Clone

```bash
git clone https://github.com/jass587/quickdraft-ai.git
cd quickdraft-ai
```

---

## Backend Setup

```bash
cd backend

python -m venv .venv

source .venv/bin/activate
# Windows
.venv\Scripts\activate

pip install -r requirements.txt
```

Create `.env`

```env
OPENAI_API_KEY=your_api_key
OPENAI_MODEL=gpt-5.5
FRONTEND_URL=http://localhost:5173
```

Run

```bash
uvicorn app.main:app --reload
```

---

## Frontend Setup

```bash
cd frontend

npm install
```

Create `.env`

```env
VITE_API_BASE_URL=http://localhost:8000
```

Run

```bash
npm run dev
```

---

## 🌍 Production

Frontend

```
Vercel
```

Backend

```
Railway
```

---

## 📁 Project Structure

```
quickdraft-ai
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── app
│   │   ├── api
│   │   ├── core
│   │   ├── prompts
│   │   ├── schemas
│   │   ├── services
│   │   └── main.py
│   └── requirements.txt
│
└── README.md
```

---

## 🎯 Roadmap

### ✅ Current

- Email rewriting
- Multiple writing tones
- Production deployment

### 🚧 Next

- Analytics
- User feedback collection
- Authentication
- Rewrite history
- AI reply generation
- Gmail integration
- Smart templates

---

## 🤝 Contributing

Contributions, ideas, and feedback are always welcome.

Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👩‍💻 Author

**Jyoti Singh**

- GitHub: https://github.com/jass587
- LinkedIn: https://linkedin.com/in/jyoti-singh-b46ab4102

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
