import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white min-h-screen font-mono flex flex-col">
      {/* TOP NAV */}
      <header className="flex justify-end items-center px-6 md:px-12 py-6">
        <Link href="/dashboard">
          <Button className="bg-gradient-to-r from-fuchsia-500 to-pink-600 text-white font-semibold hover:from-fuchsia-600 hover:to-pink-700 shadow-lg transition">
            Join Now
          </Button>
        </Link>
      </header>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6 py-12">
        <h1 className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-pink-500 to-red-500 animate-text drop-shadow-xl mb-4">
          Varta
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-xl leading-normal mt-2">
          Turn any story into immersive audio with expressive narration and vivid soundscapes.
        </p>
        <div className="mt-8">
          <Link href="/dashboard">
            <Button className="text-base md:text-lg px-6 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transition">
              Start Telling Stories <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-8 px-6 md:px-20 py-20">
        {[
          {
            icon: "🎧",
            title: "Immersive Audio",
            desc: "Layered voice, music, and ambiance bring your words to life.",
          },
          {
            icon: "🧠",
            title: "Smart Narration",
            desc: "Choose expressive AI voices that adapt tone, pace, and emotion.",
          },
          {
            icon: "🌐",
            title: "Cross-Platform",
            desc: "Create a story and listen to it anywhere.",
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 text-center hover:shadow-[0_0_40px_0_rgba(255,255,255,0.15)] hover:scale-[1.03] transition duration-300"
          >
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
            <p className="text-white/80 mt-3">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-6 md:mx-20 px-6 md:px-12 py-20 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white drop-shadow-lg">
          How Varta Works
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: "📝",
              title: "1. Write or Upload",
              desc: "Start from scratch or import your own story.",
            },
            {
              icon: "🎙️",
              title: "2. Choose Voice & Mood",
              desc: "Select a narrator and ambient mood to fit your story.",
            },
            {
              icon: "🚀",
              title: "3. Share Instantly",
              desc: "Generate and publish in just a few minutes.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:bg-white/20 transition hover:shadow-xl"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {step.title}
              </h3>
              <p className="text-white/80 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="text-center py-24 px-6">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 drop-shadow-xl">
          Ready to tell your story?
        </h3>
        <Link href="/dashboard">
          <Button className="text-lg px-6 py-4 rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 hover:from-fuchsia-600 hover:to-indigo-600 text-white shadow-xl hover:shadow-2xl transition">
            Get Started <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </section>

      <Footer />
    </div>
  );
}
