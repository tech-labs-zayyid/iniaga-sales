import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") || "";
  const subdomain = host.split(".")[0];

  // Cek apakah sedang di environment development (localhost)
  const isLocal = host.includes("localhost");
  let username = subdomain;

  if (isLocal) {
    // Ambil username dari query parameter (http://localhost:3000?username=dhani)
    const url = new URL(req.url);
    const queryUsername = url.searchParams.get("username");

    if (queryUsername) {
      username = queryUsername;
      // Update URL path agar sesuai dengan format `/[username]`
      url.pathname = `/${username}${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  // Jika domain utama (profile.id atau localhost tanpa username), biarkan tetap di halaman utama
  if (host === "airshare.web.id" || host === "localhost:3000") {
    return NextResponse.redirect('/iniaga.vercel.app');
  }

  // Jika ada subdomain valid, arahkan ke dynamic route [username]
  if (username && username !== "profile" && username !== "www") {
    const url = new URL(req.url);
    url.pathname = `/${username}${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

// Konfigurasi agar middleware bekerja pada semua route kecuali folder _next & API
export const config = {
  matcher: "/((?!api|_next|.*\\..*).*)",
};
