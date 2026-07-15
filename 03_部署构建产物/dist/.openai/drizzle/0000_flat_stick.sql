CREATE TABLE `lead_rate_limits` (
	`rate_key` text PRIMARY KEY NOT NULL,
	`window_start` integer NOT NULL,
	`request_count` integer DEFAULT 0 NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE INDEX `lead_rate_limits_window_start_idx` ON `lead_rate_limits` (`window_start`);--> statement-breakpoint
CREATE TABLE `leads` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`lead_number` text NOT NULL,
	`name` text NOT NULL,
	`company` text NOT NULL,
	`phone` text NOT NULL,
	`email` text NOT NULL,
	`interest` text DEFAULT '未指定' NOT NULL,
	`contact_type` text DEFAULT '项目咨询' NOT NULL,
	`message` text DEFAULT '' NOT NULL,
	`locale` text DEFAULT 'zh' NOT NULL,
	`mode` text DEFAULT 'contact' NOT NULL,
	`source` text DEFAULT '/' NOT NULL,
	`consent` integer NOT NULL,
	`marketing` integer DEFAULT false NOT NULL,
	`user_agent` text DEFAULT '' NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `leads_lead_number_unique` ON `leads` (`lead_number`);--> statement-breakpoint
CREATE INDEX `leads_created_at_idx` ON `leads` (`created_at`);--> statement-breakpoint
CREATE INDEX `leads_contact_type_idx` ON `leads` (`contact_type`);--> statement-breakpoint
CREATE INDEX `leads_status_idx` ON `leads` (`status`);