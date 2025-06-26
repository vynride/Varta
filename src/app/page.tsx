import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-amber-600 via-violet-950 to-zinc-950 min-h-screen">
      <div className="flex py-8 justify-between">
        <Link
          href="/"
          className="text-4xl font-bold font-mono px-15 text-zinc-950 hover:text-zinc-900 hover:cursor-pointer"
        >
          Varta
        </Link>
        <div className="flex pr-8">
          <div>
            <Button
              variant="outline"
              className="text-zinc-200 font-mono bg-transparent border-transparent shadow-none hover:border-transparent hover:bg-transparent hover:text-zinc-200/90 hover:cursor-pointer"
            >
              <Link href="/">Login</Link>
            </Button>
          </div>
          <div className="px-4">
            <Button
              variant="outline"
              className="bg-zinc-950 font-mono text-white border-violet-600 hover:bg-zinc-900 hover:text-white/90 hover:cursor-pointer"
            >
              <Link href="/">Join Now</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex font-mono justify-center place-items-end min-h-screen">
        <Footer />
      </div>
    </div>
  );
}
