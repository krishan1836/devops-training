"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    const baseUrl =
      process.env.NEXT_PUBLIC_API_URL ||
      "https://devops-training-37b8.onrender.com";

    console.log("Calling API:", baseUrl);

    fetch(`${baseUrl}/api`)
      .then((res) => res.json())
      .then((res) => {
        console.log("API response:", res);
        setData(res.status);
      })
      .catch((err) => {
        console.error(err);
        setData("Backend not reachable");
      });
  }, []);

  // ✅ IMPORTANT: avoid hydration mismatch
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Frontend Connected</h1>
      <p>{data}</p>
    </div>
  );
}