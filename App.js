import express from 'express'
import Hello from "./Hello.js"
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
const app = express()
Hello(app)
Lab5(app)
CourseRoutes(app);
app.use(cors());
app.use(express.json());
ModuleRoutes(app);
app.listen(process.env.PORT || 4000);