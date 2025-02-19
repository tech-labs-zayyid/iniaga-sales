"use client";

import { usePathname, useSearchParams } from "next/navigation";

export function useDynamicUrl(path: string, appendPath: string = "") {
  const searchParams = useSearchParams();
  const username = searchParams.get("username");
  const isLocal = typeof window !== "undefined" && window.location.hostname === "localhost";

  let finalPath = path;
  if (appendPath) {
    finalPath = `${path}/${appendPath}`;
  }

  if (isLocal && username) {
    return `${finalPath}?username=${username}`; 
  }

  return finalPath;
}
