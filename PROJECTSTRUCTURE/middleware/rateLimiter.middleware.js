let requestCount = 0;
let startTime = Date.now();

export const rateLimiter = (req, res, next) => {
  const currentTime = Date.now();

  if (currentTime - startTime > 60000) {
    requestCount = 0;
    startTime = currentTime;
  }

  requestCount++;

  if (requestCount > 15) {
    return res.status(429).json({
      error: "Too many requests, please try again later"
    });
  }

  next();
};
