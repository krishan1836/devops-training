"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<{ status?: string } | null>(null);

  useEffect(() => {
    const baseUrl =
      process.env.NEXT_PUBLIC_API_URL ||
      "https://devops-training-37b8.onrender.com"; // 👈 hard fallback

    console.log("Calling API:", baseUrl); // 👈 debug

    fetch(`${baseUrl}/api`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => {
        console.log("Fetch error:", err);
        setData({ status: "Backend not reachable" });
      });
  }, []);

  return (
    <div>
      <h1>Frontend Connected</h1>
      <p>{data?.status || "Loading..."}</p>
    </div>
  );
}