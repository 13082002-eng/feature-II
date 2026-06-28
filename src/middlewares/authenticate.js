import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Comprobar que existe el header
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      ok: false,
      message: "Token no proporcionado",
    });
  }

  // Extraer el token
  const token = authHeader.split(" ")[1];

  try {
    // Verificar token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Guardar usuario en req
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      ok: false,
      message: "Token inválido",
    });
  }
};

export default authenticate;