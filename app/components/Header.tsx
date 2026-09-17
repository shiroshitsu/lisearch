import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-200 dark:bg-zinc-950/80 dark:border-zinc-800">
      <div className="mx-auto flex h-16 max-w-5xl items-center gap-5 px-6">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/favicon.png"
            alt=""
            width={217}
            height={365}
            className="h-11 w-auto transition-transform group-hover:-rotate-6"
            preload
          />
          <Image
            src="/logo.png"
            alt="ヨウヤクゼミ"
            width={996}
            height={302}
            className="h-10 w-auto dark:invert dark:hue-rotate-180"
            preload
          />
        </Link>
      </div>
    </header>
  );
}
