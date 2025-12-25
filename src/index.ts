import { Hono } from "hono";
import { logger } from "hono/logger";
import { showRoutes } from "hono/dev";
import { enableApp } from "./middlewares/enableApp.middleware";
import signUpRoute from "./routes/auth.route";

const app = new Hono();

app.use(logger());
app.use(enableApp);

app.route("/signup", signUpRoute);

showRoutes(app, {
	colorize: true,
});

export default app;
