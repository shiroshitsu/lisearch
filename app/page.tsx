import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert w-[100px]"
          src="/logo.png"
          alt="lisearch logo"
          width={100}
          height={100}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            lisearch
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            ​留学生の​英語のゼミ発表を、事前のスライド共有が​なくても​発表中に​理解するためのアプリです。
          </p>

          <div className="border border-gray-300 rounded-lg p-4"> 
            <h2 className="text-[#D38006] font-bold text-xl"> 背景</h2>
            <p>移動時間は短いほど良いと考えられているが、移動自体に価値がある場合もある。</p>
          </div>

          <div className="border border-gray-300 rounded-lg p-4"> 
            <h2 className="text-[#D38006] font-bold text-xl"> 目的</h2>
            <p>移動時間を短くしたいという意向を調べることで、人が移動をどのように捉えているのかを明らかにする。</p>
          </div>

          <div className="border border-gray-300 rounded-lg p-4"> 
            <h2 className="text-[#D38006] font-bold text-xl"> 関連研究</h2>
            <p style={{ color: "gray"}}>話していません。</p>
          </div>

          <div className="border border-gray-300 rounded-lg p-4"> 
            <h2 className="text-[#D38006] font-bold text-xl"> 手法</h2>
            <p>対象者に1日の移動を振り返ってもらい、移動時間を短縮できる場合にどの移動を短くしたいかを調査する。</p>
          </div>

          <div className="border border-gray-300 rounded-lg p-4"> 
            <h2 className="text-[#D38006] font-bold text-xl"> 実験 </h2>
            <p>移動手段・同行者・仕事の有無などの条件と、移動時間を短くしたいかどうかの関係を分析する。</p>
          </div>

          <div className="border border-gray-300 rounded-lg p-4"> 
            <h2 className="text-[#D38006] font-bold text-xl"> 結論</h2>
            <p>移動に対する感じ方は状況によって異なり、特に大人の同行者がいることなどが移動時間を受け入れることに関係している。</p>
          </div>

          <div className="border border-gray-300 rounded-lg p-4"> 
            <h2 className="text-[#D38006] font-bold text-xl"> 要約</h2>
            <p>移動時間は単に短ければよいのではなく、移動中の状況や過ごし方によって、その時間を短くしたいかどうかが変わることを示した研究。</p>
          </div>
        </div>
      </main>
    </div>
  );
}
