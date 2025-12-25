import { insertUsers } from "./seeds/user.seed";

/**
 * Seeds the database.
 */
async function main() {

	await Promise.all(
		[
			insertUsers(), 
		]
	)
}

main();
