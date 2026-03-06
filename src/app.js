import express from "express";
import usuarioRoutes from "../src/routes/usuario.route.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/usuarios", usuarioRoutes);

app.get("/", (req, res) => {
    res.status(200).send({msg: "Hello Worldd"})
})
// app.use("/jogos", jogosRoutes);
// app.use("/players", playersRoutes);
// app.use("/partidas", partidasRoutes);

export default app;

