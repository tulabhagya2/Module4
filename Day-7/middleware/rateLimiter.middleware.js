let requestStore = {};
const LIMIT = 15;
const TIME_WINDOW = 60 * 1000; // 1 minute

const rateLimiter = (req, res, next) => {
  const ip = req.ip;
  const currentTime = Date.now();

  if (!requestStore[ip]) {
    requestStore[ip] = { count: 1, startTime: currentTime };
    return next();
  }

  const timeDiff = currentTime - requestStore[ip].startTime;

  if (timeDiff > TIME_WINDOW) {
    requestStore[ip] = { count: 1, startTime: currentTime };
    return next();
  }

  if (requestStore[ip].count >= LIMIT) {
    return res.status(429).json({
      error: "Too many requests, please try again later"
    });
  }

  requestStore[ip].count++;
  next();
};

export default rateLimiter;
