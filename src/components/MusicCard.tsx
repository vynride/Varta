interface MusicCardProps {
  title: string;
  author?: string;
  coverUrl?: string;
  onSelect: () => void;
}

export default function MusicCard({
  title,
  author,
  coverUrl,
  onSelect,
}: MusicCardProps) {
  const valid =
    coverUrl && coverUrl.startsWith("data:image") && coverUrl.length > 100;

  return (
    <div
      onClick={onSelect}
      className="cursor-pointer flex flex-col w-full max-w-[180px] h-[220px] rounded-xl overflow-hidden bg-black backdrop-blur-md border border-white/20 hover:shadow-xl transition"
    >
      <div className="w-full h-[160px]">
        {valid ? (
          <img
            src={coverUrl}
            alt={title}
            className="object-cover w-full h-full rounded-t-xl"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white text-sm">
            No Image
          </div>
        )}
      </div>
      <div className="p-2 flex-1 flex flex-col justify-center">
        <p className="text-white font text-wrap truncate">{title}</p>
        <p className="text-white text-sm truncate">{author}</p>
      </div>
    </div>
  );
}
