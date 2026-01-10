export const checkAuth = (req, res, next) => {
  const apiKey = req.headers["api-access-key"];
  console.log(req.headers)

  if (!apiKey || apiKey !== process.env.API_ACCESS_KEY) {
    return res.status(401).json({message: "Unauthorized"});
  }

  return res.status(200).json({message: "Authenticated"})
};
