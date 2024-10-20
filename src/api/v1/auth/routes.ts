import { Hono } from "hono";
import { csrf } from "hono/csrf";
import { Env } from "../../../env";
import { handleGoogleCallback, handleGoogleLogin } from "./handlers";

const authRouter = new Hono<{ Bindings: Env }>();
authRouter.use("*", csrf());

authRouter.get("/google", handleGoogleLogin);
authRouter.get("/google/callback", handleGoogleCallback);

export default authRouter;
