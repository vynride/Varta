import Image from "next/image";

export default function Player() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed z-50 bottom-0 left-0 w-full overflow-hidden">
        <div className="flex bg-[#111217] p-2">
          {/* PLAYING ITEM */}
          <div className="relative justify-start h-[70px] w-[70px] rounded-full overflow-hidden ml-8">
            <Image
              src="https://i.pinimg.com/736x/11/9f/28/119f28ce28fdf6fc5c02c8ab4ba6f425.jpg"
              width={80}
              height={80}
              alt="artwork"
              className=""
            />
          </div>
          {/* CONTROLS */}
          <div></div>
          {/* VOLUME MANAGER */}
          <div></div>
        </div>
      </div>
    </div>
  );
}
