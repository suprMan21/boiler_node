export default function logger (req, res, next) {
    console.log(req.body);
    next();
  }
  