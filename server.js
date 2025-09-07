// server.js
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// API nhận tin nhắn từ client
app.post("/send", (req, res) => {
    const { message } = req.body;
    console.log("Tin nhắn gửi ông trời:", message);

    res.json({ success: true, msg: "Đã nhận được rồi!" });
});

// phục vụ file tĩnh (trang HTML của bạn)
app.use(express.static("public")); // bỏ file html, css, js vào folder public

app.listen(port, () => {
    console.log(`Server chạy tại http://localhost:${port}`);
});
