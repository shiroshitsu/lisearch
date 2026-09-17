import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-5xl items-center gap-5 px-6">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/icon.png"
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
        <div className="hidden h-8 w-px bg-zinc-200 sm:block dark:bg-zinc-700" />
        <p className="hidden text-sm leading-snug text-zinc-500 sm:block dark:text-zinc-400">
          英語の研究発表を、
          <br />
          自分の専門分野で聞き取れるように。
        </p>
      </div>
      <div className="h-0.5 bg-linear-to-r from-[#D98A1C] via-[#D98A1C]/40 to-transparent" />
    </header>
  );
}
