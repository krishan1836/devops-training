"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<string>("Loading...");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const baseUrl =
      process.env.NEXT_PUBLIC_API_URL ||
      "https://devops-training-37b8.onrender.com";

    console.log("Calling API:", baseUrl);

    fetch(`${baseUrl}/api`)
      .then(async (res) => {
        if (!res.ok) throw new Error("API failed");
        const json = await res.json();
        console.log("Response:", json);
        setData(json.status);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("Backend not reachable");
      });
  }, []);

  return (
    <div>
      <h1>Frontend Connected</h1>
      <p>{error ? error : data}</p>
    </div>
  );
}