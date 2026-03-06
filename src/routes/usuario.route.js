import { Router } from "express";
import * as usuarioController from "../controllers/usuario.controller.js";

const router = Router();

router.post("/login", usuarioController.login);

router.get("/", usuarioController.listar); // Como a função já possui o req e res, não precisa passar o valor 
// desses parâmetros, pois ele já entende dentro do código que o valor req e res estão sendo chamados
router.get("/:id", usuarioController.buscarPorId);
router.post("/", usuarioController.criarUser);

export default router; // Exportar todas as rotas