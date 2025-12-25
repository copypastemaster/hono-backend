import {
	integer,
	pgTable,
	varchar,
	pgEnum,
	timestamp,
} from "drizzle-orm/pg-core";

// We cast it 'as [string, ...string[]]' to satisfy Drizzle's type requirement
// export const roleEnum = pgEnum(
// 	"role",
// 	Object.values(Roles) as [string, ...string[]]
// );

export const usersTable = pgTable("users", {
	id: integer().primaryKey().generatedAlwaysAsIdentity(),
	name: varchar({ length: 255 }).notNull(),
	phoneNumber: varchar({ length: 13 }),
	email: varchar({ length: 255 }).notNull().unique(),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
});
