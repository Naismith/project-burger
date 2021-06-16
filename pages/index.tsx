import Head from "next/head";
import { useQueryClient, useQuery } from "react-query";
import { Menu } from "../types";

export default function Home() {
  const { isLoading, error, data, isError } = useQuery<Menu, { error: true }>(
    "menu",
    () => fetch("/api/menu").then((res) => res.json())
  );

  if (isLoading || isError) return null;

  return (
    <div>
      {data.items.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <h3>{item.description}</h3>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}
