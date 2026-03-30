ALTER TABLE "exhibition_events" ADD COLUMN "images" text[] DEFAULT '{}'::text[] NOT NULL;
--> statement-breakpoint
UPDATE "exhibition_events"
SET "images" = ARRAY["image"]
WHERE "image" IS NOT NULL AND cardinality("images") = 0;
