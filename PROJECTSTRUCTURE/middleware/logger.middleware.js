export const loggerMiddleware = (req, res, next) => {
  const time = new Date().toISOString().replace("T", " ").split(".")[0];
  console.log(`[${time}] ${req.method} ${req.url}`);
  next();
};
