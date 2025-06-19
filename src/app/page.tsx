import Content from "./components/Content";

export default function Home({ searchParams }: { searchParams?: { [key: string]: string } }) {
  return (
    <main className="p-6">
      <Content searchParams={searchParams || {}} />
    </main>
  );
}
