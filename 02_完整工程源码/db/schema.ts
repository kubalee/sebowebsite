import { sql } from "drizzle-orm";
import { index, integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const leads = sqliteTable(
  "leads",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    leadNumber: text("lead_number").notNull(),
    name: text("name").notNull(),
    company: text("company").notNull(),
    phone: text("phone").notNull(),
    email: text("email").notNull(),
    interest: text("interest").notNull().default("未指定"),
    contactType: text("contact_type").notNull().default("项目咨询"),
    message: text("message").notNull().default(""),
    locale: text("locale").notNull().default("zh"),
    mode: text("mode").notNull().default("contact"),
    source: text("source").notNull().default("/"),
    consent: integer("consent", { mode: "boolean" }).notNull(),
    marketing: integer("marketing", { mode: "boolean" }).notNull().default(false),
    userAgent: text("user_agent").notNull().default(""),
    status: text("status").notNull().default("new"),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => [
    uniqueIndex("leads_lead_number_unique").on(table.leadNumber),
    index("leads_created_at_idx").on(table.createdAt),
    index("leads_contact_type_idx").on(table.contactType),
    index("leads_status_idx").on(table.status),
  ],
);

export const leadRateLimits = sqliteTable(
  "lead_rate_limits",
  {
    rateKey: text("rate_key").primaryKey(),
    windowStart: integer("window_start").notNull(),
    requestCount: integer("request_count").notNull().default(0),
    updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => [index("lead_rate_limits_window_start_idx").on(table.windowStart)],
);
