import { createAdminLog } from "../services/adminLog.service.js";

const adminLogger = (action) => {
  return async (req, res, next) => {
    try {
      // Solo registramos acciones de administradores
      if (req.user?.role === "ADMIN") {

        await createAdminLog({
          adminId: req.user.userId,
          action,
          resource: req.originalUrl,
        });

      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default adminLogger;