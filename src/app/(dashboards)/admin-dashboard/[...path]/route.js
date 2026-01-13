import { NextResponse } from "next/server";

// ------------------------
// Dummy admin check
// Later replace this with real auth (JWT / session / DB)
// ------------------------
function getUserRole(req) {
  // Example: cookie check
 document.cookie = "role=admin; path=/";

  const role = req.cookies.get("role")?.value; // cookie name "role"
  return role || "guest"; // default guest
}

// GET requests
export async function GET(req) {
  const role = getUserRole(req);

  if (role !== "admin") {
    // Admin না হলে /login এ redirect
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next(); // Admin হলে access
}

// POST requests (optional)
export async function POST(req) {
  const role = getUserRole(req);

  if (role !== "admin") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
