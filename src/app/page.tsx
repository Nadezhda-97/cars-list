//import Image from "next/image";
/* 
<Image
  className="dark:invert"
  src="/next.svg"
  alt="Next.js logo"
  width={180}
  height={38}
  priority
/>
*/

import Content from "./components/Content";

export default function Home({ searchParams }: { searchParams?: { [key: string]: string } }) {
  return (
    <main className="p-6">
      <Content searchParams={searchParams || {}} />
    </main>
  );
}

/* 
export default function Home() {
  return (
    <Content />
  );
}
*/
