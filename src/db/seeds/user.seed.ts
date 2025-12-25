import db from "../db.config";
import { usersTable } from "../migrations/user.schema";

type UserInsert = typeof usersTable.$inferInsert;

const users: UserInsert[] = [
	{
		name: "Enoch",
		email: "enochdgoat@testmail.com",
		phoneNumber: "+639369840616",
	},
	{
		name: "Guest",
		email: "gusettest@testmail.com",
		phoneNumber: "+639276463231",
	},
];

export async function insertUsers() {
	try {
		await db.insert(usersTable).values(users).onConflictDoNothing();
		console.log("Users seeded.");
	} catch (err) {
		if (err instanceof Error) {
			console.log("Error seeding db with users:", err.message);
			throw err;
		}
	}
}
