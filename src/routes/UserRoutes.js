import { Router } from "express";
import userController from "../controllers/UserController.js";
import loginRequired from "../middlewares/loginRequired.js";
const router = Router();

router.post("/", loginRequired, userController.store);
router.get("/", userController.index);
router.get("/:id", loginRequired, userController.show);
router.put("/:id", loginRequired, userController.update);
router.delete("/:id", loginRequired, userController.delete);
export default router;
