import { Hono } from "hono";
import { Env } from "../../env";
import authRouter from "./auth/routes";

const v1Router = new Hono<{ Bindings: Env }>();

v1Router.route("/auth", authRouter);

export default v1Router;
