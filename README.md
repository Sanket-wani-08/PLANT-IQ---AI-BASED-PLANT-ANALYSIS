# 🌿 PLANTIQ - AI Based Plant Analysis System

PLANTIQ is an AI-powered plant analysis web application that helps users identify plant diseases, analyze plant health, and receive care recommendations using Artificial Intelligence.

The system allows users to upload plant images, get AI-generated analysis, download professional PDF reports, and manage analysis history.

---

# 🚀 Features

## 🔐 Authentication System
- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Secure Password Hashing using bcrypt

---

## 🌱 AI Plant Analysis
- Upload plant images
- AI-based disease detection
- Plant identification
- Health status analysis
- Care & treatment recommendations

---

## 📄 PDF Report Generation
- Professional analysis reports
- Plant image included in PDF
- Downloadable reports
- Multi-page formatted reports

---

## 🕘 History Management
- Save plant analysis history
- View previous analyses
- Delete analysis records

---

# 🛠️ Technologies Used

## Frontend
- HTML5
- CSS3
- JavaScript

## Backend
- Node.js
- Express.js

## Database
- MongoDB
- Mongoose

## AI Integration
- Google Gemini AI API

## Authentication
- JWT (JSON Web Token)
- bcryptjs

## File Handling
- Multer

## PDF Generation
- PDFKit

## Image Processing
- Sharp

---

# 📂 Project Structure

```bash
PLANTIQ/
│
├── config/
│   └── conn.js
│
├── controllers/
│   ├── authController.js
│   └── plantController.js
│
├── middleware/
│   └── authmiddleware.js
│
├── models/
│   ├── Register.js
│   └── History.js
│
├── public/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── style.css
│   └── script.js
│
├── routes/
│   └── plantRoutes.js
│
├── uploads/
├── reports/
├── .env
├── app.js
├── package.json
└── README.md
```

---

# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/plantiq.git
```

---

## 2️⃣ Navigate Into Project

```bash
cd plantiq
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file in the root directory.

```env
PORT=4000

MONGO_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret_key

GEMINI_API_KEY=your_gemini_api_key
```

---

# ▶️ Run Project

## Development Mode

```bash
npm start
```

OR

```bash
nodemon app.js
```

---

# 🌐 Open In Browser

```bash
http://localhost:4000
```

---

# 🔄 Project Workflow

## Step 1
User registers or logs in.

## Step 2
User uploads a plant image.

## Step 3
Image is uploaded using Multer.

## Step 4
Backend sends image to Gemini AI.

## Step 5
AI analyzes:
- Plant type
- Diseases
- Health condition
- Care tips

## Step 6
Result stored in MongoDB.

## Step 7
Professional PDF report generated.

## Step 8
User can download report and manage history.

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing using bcrypt
- Protected API Routes
- Secure File Handling

---

# 📸 Main Functionalities

## ✅ Plant Image Upload
Users can upload plant images for analysis.

## ✅ AI Disease Detection
Gemini AI analyzes uploaded plant images.

## ✅ PDF Report Generation
Download professional plant analysis reports.

## ✅ History Tracking
Users can view and delete previous analyses.

---

# 📡 API Routes

## Authentication Routes

| Method | Route | Description |
|---|---|---|
| POST | `/register` | Register User |
| POST | `/login` | Login User |

---

## Plant Analysis Routes

| Method | Route | Description |
|---|---|---|
| POST | `/analyze` | Analyze Plant |
| POST | `/download` | Download PDF Report |
| GET | `/api/history` | Get User History |
| DELETE | `/api/history/:id` | Delete History |

---

# 🧠 AI Integration

PLANTIQ uses Google Gemini AI for:
- Plant identification
- Disease detection
- Plant health analysis
- Care recommendations

---

# 📄 PDF Report Includes

- Plant Image
- Plant Details
- Health Status
- Disease Information
- Care Recommendations
- Generated Date

---

# 🎯 Future Improvements

- Real-time camera scanning
- Multiple language support
- Plant growth tracking
- Admin dashboard
- Mobile application
- Email report delivery

---

# 👨‍💻 Author

## Wani Sanket Rajeshbhai

- 📧 Email: sanket1954c@gmail.com
- 📍 Gujarat, India

---

# 📜 License

This project is developed for educational and learning purposes.

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub.
