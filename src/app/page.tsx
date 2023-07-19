import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-xl font-bold">Goo</h1>
      <Button className="bg-red-500 w-full">Click</Button>
    </main>
  );
}
