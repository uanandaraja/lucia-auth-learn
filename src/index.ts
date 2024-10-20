import { Hono } from "hono";
import { cors } from "hono/cors";
import { Env } from "./env";
import v1Router from "./api/v1";
const app = new Hono<{ Bindings: Env }>();

app.use("*", cors());

app.get("/", (c) => c.text("Fascribe FTW!"));
app.get("/", (c) => c.text("Fascribe FTW!"));

app.route("/api/v1", v1Router);

export default app;

