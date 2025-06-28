import Image from "next/image";

export default function MusicCard() {
  return (
    <div className="flex flex-col w-[150px] h-[200px] m-4 rounded-md backdrop-blur-3xl bg-[#111217] mt-5 hover:shadow-xl">
      <div className="relative w-full h-[170px] overflow-hidden">
        <Image
          src="https://i.pinimg.com/736x/11/9f/28/119f28ce28fdf6fc5c02c8ab4ba6f425.jpg"
          fill
          alt="artwork"
          className="object-cover rounded-md"
        />
      </div>
      <p className="text-zinc-300 px-4 font-mono pt-1 text-xl font-bold">
        Numb
      </p>
      <p className="text-zinc-300 px-4 font-mono py-1 pb-2 text-sm">
        Linkin Park
      </p>
    </div>
  );
}
