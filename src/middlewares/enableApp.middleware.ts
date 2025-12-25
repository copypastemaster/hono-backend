import { DOWN_THE_SITE } from "../utils/resources/configs";
import { createMiddleware } from "hono/factory";

export const enableApp = createMiddleware(async (c, next) => {
	if (DOWN_THE_SITE) {
		return c.html(`
            <!DOCTYPE html>
                <head>
                    <title>APP DOWN</title>
                </head>
                <body>
                    <h1>APP IS DOWN! Contact the devs ASAP!</h1>
                </body>
            </html>    
        `);
	}

	await next();
});
