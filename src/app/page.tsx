import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-amber-400 via-blue-900 to-zinc-950 min-h-screen">
      <div className="flex pt-8 justify-between items-center ml-9">
        <Link
          href="/"
          className="text-4xl font-bold font-mono text-zinc-950 hover:text-zinc-900"
        >
          Varta
        </Link>
        <div className="flex space-x-4">
          <Button
            variant="outline"
            className="text-zinc-200 text-lg font-mono bg-transparent border-none shadow-none hover:bg-transparent hover:text-zinc-200/90"
          >
            <Link href="/">Login</Link>
          </Button>
          <Button
            variant="outline"
            className="bg-zinc-950 text-white text-lg font-mono mr-8 border-blue-600 border-2 hover:bg-zinc-900 hover:text-white/90"
          >
            <Link href="/">Join Now</Link>
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-end min-h-screen font-mono">
        <Footer />
      </div>
    </div>
  );
}
