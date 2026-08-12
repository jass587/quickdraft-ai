# ✨ QuickDraft AI

### Write better emails. Faster.

Turn rough thoughts into polished, professional emails in seconds.

🌐 **Live Demo:** https://quickdraft-ai.vercel.app

---

## 🚀 What is QuickDraft AI?

QuickDraft AI is an AI-powered email writing assistant built around one simple workflow:

**Rough draft → Choose a tone → Get a polished email → Copy and send**

Instead of writing prompts from scratch, users can paste an email draft, select the tone they want, and get a clearer, more professional version in seconds.

QuickDraft AI is being developed as a production SaaS product, with a focus on a simple user experience, controlled AI usage, and eventually paid plans.

---

## 💡 Why QuickDraft AI?

General-purpose AI tools can help with almost anything. QuickDraft AI focuses on making one common communication task fast and straightforward:

**turning an imperfect email draft into a send-ready message.**

The product is intentionally focused so that real user behavior and feedback can guide what gets built next.

---

## ✨ Current Features

* ✍️ Rewrite rough email drafts
* 🎯 Multiple writing tones

  * Professional
  * Friendly
  * Formal
  * Casual
* ⚡ Fast AI-powered responses
* 📋 One-click copy output
* 🔄 Loading and error handling
* 📱 Responsive interface
* 🌐 Production deployment

---

## 🏗 Architecture

```text
                    React + Vite
                         │
                         │ HTTPS / REST API
                         ▼
                   FastAPI Backend
                         │
                         │ OpenAI API
                         ▼
                    OpenAI Model
```

The frontend is responsible for the user experience, while the backend handles API requests and communication with the AI service.

---

## 🛠 Tech Stack

### Frontend

* React
* Vite
* JavaScript
* Tailwind CSS
* Axios

### Backend

* Python
* FastAPI
* Pydantic
* OpenAI API

### Deployment

* Vercel — frontend
* Railway — backend

### Development

* Git
* GitHub
* REST APIs
* Environment-based configuration

---

## 🚀 Engineering Highlights

QuickDraft AI is built and deployed as a real full-stack application rather than a frontend-only AI demo.

* React + Vite frontend
* FastAPI REST backend
* OpenAI API integration
* Environment-based configuration
* Frontend/backend separation
* Production deployment
* API error handling
* Loading and failure states
* Responsive UI
* Secure backend-side AI API integration

The next development phase adds authentication, usage limits, billing, and production SaaS infrastructure.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/jass587/quickdraft-ai.git
cd quickdraft-ai
```

### 2. Backend Setup

```bash
cd backend

python -m venv .venv
```

Activate the virtual environment:

```bash
# macOS / Linux
source .venv/bin/activate

# Windows
.venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file in `backend`:

```env
OPENAI_API_KEY=your_api_key
OPENAI_MODEL=gpt-5.5
FRONTEND_URL=http://localhost:5173
```

Start the backend:

```bash
uvicorn app.main:app --reload
```

The backend will run locally on:

```text
http://localhost:8000
```

### 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
```

Create a `.env` file in `frontend`:

```env
VITE_API_BASE_URL=http://localhost:8000
```

Start the frontend:

```bash
npm run dev
```

The frontend will run locally on:

```text
http://localhost:5173
```

---

## 🔐 Environment Variables & Security

Secrets are provided through environment variables and should never be committed to the repository.

Required backend configuration:

```env
OPENAI_API_KEY=
OPENAI_MODEL=
FRONTEND_URL=
```

Required frontend configuration:

```env
VITE_API_BASE_URL=
```

**Do not commit real API keys, payment secrets, database credentials, or other private credentials.**

Use `.env.example` files with placeholder values when documenting configuration.

---

## 🌍 Production

QuickDraft AI is deployed as a production application.

**Frontend**

Vercel

**Backend**

Railway

**AI**

OpenAI API

🌐 **Live:** https://quickdraft-ai.vercel.app

---

## 📁 Project Structure

```text
quickdraft-ai
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── ...
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
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🎯 Roadmap

### ✅ Current

* AI email rewriting
* Multiple writing tones
* Responsive UI
* Production deployment

### 🚧 In Progress

* User authentication
* Free usage credits
* Usage tracking
* Subscription plans
* Stripe payments
* Usage and cost protection
* User feedback

### 🔮 After Launch

Product direction will be guided by real user feedback, usage patterns, and willingness to pay.

Potential areas may include deeper communication workflows, niche user experiences, integrations, and productivity features — but no major direction is being locked in before market validation.

---

## 📈 Product Approach

QuickDraft AI is being developed with a:

**Build → Launch → Measure → Learn → Improve**

approach.

The goal is not to build features simply because AI makes them possible.

The goal is to discover:

* Who gets the most value from QuickDraft AI
* Which communication problems users repeatedly face
* How often users return
* What users are willing to pay for
* Which product improvements have the highest impact

Real user behavior will guide the next stage of the product.

---

## 🤝 Contributing

Contributions, ideas, and feedback are welcome.

Feel free to open an issue or submit a pull request.

For product feedback, please open an issue describing the problem or idea clearly.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👩‍💻 Author

**Jyoti Singh**

* GitHub: https://github.com/jass587
* LinkedIn: https://linkedin.com/in/jyoti-singh-b46ab4102

---

## ⭐ Support

If you find QuickDraft AI useful, consider giving the repository a ⭐ on GitHub.

Feedback from users and developers is always welcome.
