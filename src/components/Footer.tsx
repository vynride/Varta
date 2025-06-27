import Link from "next/link";

export default function Footer() {
  return (
    <div className="pb-3">
      <h2 className="text-center text-gray-400 text-base rounded-4xl px-3 py-1">
        <Link href="https://github.com/vynride" target="_blank">
          Made with ❤️ by Vivian
        </Link>
      </h2>
    </div>
  );
}
