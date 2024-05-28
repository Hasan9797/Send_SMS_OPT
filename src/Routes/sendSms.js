import { Router } from "express";
import { sendSms } from "../Helper/smsHelper.js";

const router = Router();

router.get("/", (req, res) => {});

router.post("/send", (req, res) => {
  const { phone } = req.body;

  const result = sendSms(phone);
  // if(result === )
  res.status(200).json({
    status: true,
    timestamp: new Date().getTime(),
    message: "Сообщение отправлено",
    result: result,
  });
});

export default router;
