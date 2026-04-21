export const dynamic = "force-dynamic";
export const revalidate = 0;

async function getData() {
  try {
    const baseUrl =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

    const res = await fetch(`${baseUrl}/api/...`, {
      cache: "no-store",
});
    return await res.json();
  } catch (error) {
    console.log("API error:", error);
    return { status: "API not reachable" }; // fallback
  }
}

"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<{ status?: string } | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(() => setData({ status: "Backend not reachable" }));
  }, []);

  return (
    <div>
      <h1>Frontend Connected</h1>
      <p>{data?.status || "Loading..."}</p>
    </div>
  );
}