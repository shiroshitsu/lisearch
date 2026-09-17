import Image from "next/image";
import Link from "next/link";
import { details } from '@/data/details'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert w-[100px]"
          src="/logo.png"
          alt="lisearch logo"
          width={996}
          height={302}
          priority
        />
        <div className="flex w-full flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            留学生の英語のゼミ発表を、事前のスライド共有がなくても発表中に理解するためのアプリです。
          </p>

          <div className="w-full max-w-xl border border-gray-300 rounded-lg p-4">
            <Link href="/details/background">
              <h2 className="text-[#D38006] font-bold text-xl mb-3">背景</h2>
            </Link>
            <p>
              移動時間は短いほど良いと考えられているが、移動自体に価値がある場合もある。
            </p>
          </div>

          <div className="w-full max-w-xl border border-gray-300 rounded-lg p-4">
            <Link href="/details/objective">
              <h2 className="text-[#D38006] font-bold text-xl mb-3">目的</h2>
            </Link>
            <p>
              移動時間を短くしたいという意向を調べることで、人が移動をどのように捉えているのかを明らかにする。
            </p>
          </div>

          <div className="w-full max-w-xl border border-gray-300 rounded-lg p-4">
            <Link href="/details/related-works">
              <h2 className="text-[#D38006] font-bold text-xl mb-3">関連研究</h2>
            </Link>
            <p className="text-gray-500">話していません。</p>
          </div>

          <div className="w-full max-w-xl border border-gray-300 rounded-lg p-4">
            <Link href="/details/methods">
              <h2 className="text-[#D38006] font-bold text-xl mb-3">手法</h2>
            </Link>
            <p>
              対象者に1日の移動を振り返ってもらい、移動時間を短縮できる場合にどの移動を短くしたいかを調査する。
            </p>
          </div>

          <div className="w-full max-w-xl border border-gray-300 rounded-lg p-4">
            <Link href="/details/experiments">
              <h2 className="text-[#D38006] font-bold text-xl mb-3">実験</h2>
            </Link>
            <p>
              移動手段・同行者・仕事の有無などの条件と、移動時間を短くしたいかどうかの関係を分析する。
            </p>
          </div>

          <div className="w-full max-w-xl border border-gray-300 rounded-lg p-4">
            <Link href="/details/results">
              <h2 className="text-[#D38006] font-bold text-xl mb-3">結論</h2>
            </Link>
            <p>
              移動に対する感じ方は状況によって異なり、特に大人の同行者がいることなどが移動時間を受け入れることに関係している。
            </p>
          </div>

          <div className="w-full max-w-xl border border-gray-300 rounded-lg p-4">
            <Link href="/details/summary">
              <h2 className="text-[#D38006] font-bold text-xl mb-3">要約</h2>
            </Link>
            <p>
              移動時間は単に短ければよいのではなく、移動中の状況や過ごし方によって、その時間を短くしたいかどうかが変わることを示した研究。
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
