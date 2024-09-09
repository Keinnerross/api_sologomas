import express from "express";
import beltsRoutes from "./routes/belts.routes.js";
import appRoutes from "./routes/app.routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(appRoutes);
app.use("/api", beltsRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    mensaje: "Algo salió mal",
  }); 
});

  export default app;
