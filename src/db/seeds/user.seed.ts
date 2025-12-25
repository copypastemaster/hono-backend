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

// Call when needed
export async function insertUsers() {
	await db.insert(usersTable).values(users).onConflictDoNothing();
	console.log("Users seeded.");
}
