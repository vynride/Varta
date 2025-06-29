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
      className="cursor-pointer flex flex-col w-full max-w-[160px] rounded-xl overflow-hidden bg-black/30 backdrop-blur-md border border-white/10 hover:shadow-xl hover:scale-105 transition-transform duration-300"
    >
      <div className="w-full h-[140px]">
        {valid ? (
          <img
            src={coverUrl}
            alt={title}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-purple-700 flex flex-col items-center justify-center text-slate-200 text-xs font-semibold gap-1">
            🎵
            <span>No Cover</span>
          </div>
        )}
      </div>
      <div className="px-3 py-2 flex flex-col text-center gap-1">
        <p className="text-slate-100 text-sm font-medium leading-snug line-clamp-2">
          {title}
        </p>
        {author && (
          <p className="text-slate-400 text-xs truncate">
            {author}
          </p>
        )}
      </div>
    </div>
  );
}
