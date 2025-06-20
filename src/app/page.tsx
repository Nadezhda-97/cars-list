import { Suspense } from "react";
import Content from "./components/Content";

export default function Home() {
  return (
    <main className="p-6">
      <Suspense fallback={<p>Загрузка...</p>}>
        <Content />
      </Suspense>
    </main>
  );
}
