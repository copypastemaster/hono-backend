import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { zValidator } from "@hono/zod-validator";
import { Credentials } from "../utils/validators/credential.validator";

const factory = createFactory();

const authController = factory.createHandlers(
	logger(),
	zValidator("json", Credentials),
	async (c) => {
		const { username, password } = c.req.valid("json");

		return c.json({
			typeshi: "Yessir",
			username,
			password,
		});
	}
);

export { authController };
