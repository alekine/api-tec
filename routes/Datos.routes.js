import routerx from "express-promise-router";
import Datosctr from "../controllers/Datos.controller";

const router = routerx();

router.post("/saveData", Datosctr.postDatos);
router.get("/buscar", Datosctr.getDatos);

export default router;