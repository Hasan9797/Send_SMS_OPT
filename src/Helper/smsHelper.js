import axios from "axios";
// const rp = require("request-promise");

// const sendSms = async () => {
//   const code = Math.floor(1000 + Math.random() * 8999);

//   const options = {
//     method: "POST",
//     uri: "https://send.smsxabar.uz/broker-api/send",
//     json: true,
//     body: {
//       messages: [
//         {
//           recipient: "+" + 998999893328,
//           "message-id": new Date().getTime().toString(),
//           sms: {
//             originator: "3700",
//             content: {
//               text: "Проверочный код для регистрации в приложении FVV " + code,
//             },
//           },
//         },
//       ],
//     },
//     headers: {
//       Authorization:
//         "Basic " + Buffer.from("247time:Z6f597VcrPpD").toString("base64"),
//     },
//   };

//   const data = await rp(options);
//   return data.data;
// };

export const sendSms = async (phone) => {
  const url = "https://send.smsxabar.uz/broker-api/send";
  const code = Math.floor(1000 + Math.random() * 8999);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${Buffer.from("247time:Z6f597VcrPpD").toString(
      "base64"
    )}`,
  };

  const requestData = {
    messages: [
      {
        recipient: "+" + phone,
        "message-id": new Date().getTime().toString(),
        sms: {
          originator: "3700",
          content: {
            text: "Проверочный код для регистрации в приложении FVV " + code,
          },
        },
      },
    ],
  };

  try {
    const response = await axios.post(url, requestData, { headers });
    return response.data;
  } catch (error) {
    console.error("Error sending SMS:", error.message);
    return error.message;
  }
};
