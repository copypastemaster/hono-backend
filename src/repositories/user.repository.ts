import db from "../db/db.config";
import { usersTable } from "../db/migrations/user.schema";
import { eq } from "drizzle-orm";

type User = typeof usersTable.$inferSelect;

class UserRepository {
    constructor(private dbconn = db) {};

    async getUserById(id: string): Promise<User> {
        const userId = Number(id);

        const [user] = await this.dbconn
            .select()
            .from(usersTable)
            .where(eq(usersTable.id, userId))
            .limit(1);

        return user;
    };
};

export const userRepo = new UserRepository();