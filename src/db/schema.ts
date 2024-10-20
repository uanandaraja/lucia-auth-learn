import { pgTable, text, timestamp, boolean } from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
  id: text("id").primaryKey(),
  googleId: text("google_id").notNull().unique(),
  email: text("email").notNull(),
  emailVerified: boolean("email_verified").notNull(),
  name: text("name").notNull(),
  givenName: text("given_name"),
  familyName: text("family_name"),
  profileImageUrl: text("profile_image_url"),
});

export const sessionTable = pgTable("session", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => userTable.id),
  expiresAt: timestamp("expires_at", {
    withTimezone: true,
    mode: "date",
  }).notNull(),
});
