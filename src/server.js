import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
import sendSmsRouter from "./Routes/sendSms.js";

// API
app.use("/api/sms", sendSmsRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
