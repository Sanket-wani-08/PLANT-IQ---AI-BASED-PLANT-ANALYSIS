import express from "express";
import multer from "multer";
import path from "path";
import { homepage, analyzePlant, downloadPDF, getHistory, deleteHistory } from "../controllers/plantController.js";
import { verifyToken } from "../middleware/authmiddleware.js";
import { showReg, registerData, Showlog, login, getProfile } from "../controllers/authController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Page Routes
router.get('/', homepage);
router.get('/history', (req, res) => res.sendFile(path.resolve("public/history.html")));
router.get('/profile', (req, res) => res.sendFile(path.resolve("public/profile.html")));

// Plant API Routes
router.post("/analyze", verifyToken, upload.single("image"), analyzePlant);
router.post("/download", verifyToken, downloadPDF);
router.get("/api/history", verifyToken, getHistory);
router.delete("/api/history/:id", verifyToken, deleteHistory);

// Auth API & Page Routes
router.get('/register', showReg);
router.post('/register', registerData);

router.get('/login', Showlog);
router.post('/login', login);
router.get("/api/profile", verifyToken, getProfile);

export default router;