export default async function handler(req, res) {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  const title = "有人访问了礼物网页 ";
  const content = `访问者IP: ${ip}\n时间: ${new Date().toLocaleString()}`;

  // ⚠️ 替换成你的 Server酱 SendKey
  const resp = await fetch(`https://sctapi.ftqq.com/SCT297470TpQ8pTooho68lncQwTyCQjI36.send`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      title: title,
      desp: content
    })
  });

  const result = await resp.json();
  res.status(200).json({ status: "ok", result });
}
