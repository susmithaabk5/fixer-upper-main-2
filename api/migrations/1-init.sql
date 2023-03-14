
CREATE TABLE "bookings" (
  "id" TEXT PRIMARY KEY, 
  "createdDate" TIMESTAMP NOT NULL, 
  "bookingDate" TEXT NOT NULL,
  "location" TEXT NOT NULL,
  "username" TEXT NOT NULL
);
