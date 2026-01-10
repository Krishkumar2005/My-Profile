export const Auth = (req, res, next) => {
  const apiKey = req.headers["api-access-key"];

  if (!apiKey || apiKey !== process.env.API_ACCESS_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  next();
};
