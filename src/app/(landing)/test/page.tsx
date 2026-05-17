import { headers } from "next/headers";

export default async function Test() {
  const cookieHeader = headers().get("cookie") || ""; 
  const parsedCookies = cookieHeader.split("; ").map((cookie) => {
    const [name, value] = cookie.split("=");
    return { name, value, domain: "Unavailable (Client-Side)" }; 
  });

  return (
    <div>
      {parsedCookies.map((cookie) => (
        <div key={cookie.name}>
          <p>Name: {cookie.name}</p>
          <p>Value: {cookie.value}</p>
          <p>Domain: {cookie.domain}</p>
        </div>
      ))}
    </div>
  );
}
