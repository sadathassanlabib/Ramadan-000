"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Searchber = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const delay = setTimeout(() => {
      const params = new URLSearchParams();

      if (search) {
        params.set("search", search);
      }

      router.push(`${pathname}?${params.toString()}`);
    }, 500); // debounce 500ms

    return () => clearTimeout(delay);
  }, [search, pathname, router]);

  return (
    <main className="m-10">
      <input
        className="border p-2 rounded w-full"
        placeholder="Search meal..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </main>
  );
};

export default Searchber;
