import { insertUsers } from "./seeds/user.seed";

/**
 * Seeds the database.
 */
async function main() {
	try {
		await Promise.all([insertUsers()]);
	} catch (err) {
		if (err instanceof Error) {
			console.log("Failure to seed database:", err.message);
			console.log("----------DEETS---------", {
				cauze: err.cause,
				name: err.name,
				message: err.message,
			});

			throw err;
		}
	}
}

main();
