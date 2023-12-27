const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const authHeader = req.headers.authorization || req.headers.Authorization;
  if (!authHeader) res.sendStatus(401);
  const [type, token] = authHeader.split(/\s+/);
  if (type !== "Bearer") res.sendStatus(401);
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = payload.sub; // ID de l'utilisateur
    req.commentId = payload.commentId; // ID du commentaire 
    next();
  } catch (e) {
    res.sendStatus(401);
    console.error(e);
  }
};
