import express from "express";
import User from "../models/User.js";
import { hashPassword, comparePassword } from "../utils/hash.js";
import { signToken } from "../utils/jwt.js";

const router = express.Router();


router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Email and password required" });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res
      .status(400)
      .json({ error: "User already exists" });
  }

  const passwordHash = await hashPassword(password);
  const user = await User.create({
    email,
    passwordHash,
  });

  const token = signToken(user._id);

  res.json({ token });
});


router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(401)
      .json({ error: "Invalid credentials" });
  }

  const isMatch = await comparePassword(
    password,
    user.passwordHash
  );

  if (!isMatch) {
    return res
      .status(401)
      .json({ error: "Invalid credentials" });
  }

  const token = signToken(user._id);

  res.json({ token });
});

export default router;
