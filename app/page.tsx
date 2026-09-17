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
            事前に​スライド共有が​ない、​研究を​詳しく​説明する​ゼミで​留学生の​英語発表を​発表中に​理解したい
          </p>

          <div> 
            <h2> 背景</h2>
            <p></p>
          </div>

          <div> 
            <h2> 目的</h2>
            <p></p>
          </div>

          <div> 
            <h2> 手法</h2>
            <p></p>
          </div>

          <div> 
            <h2> 結論</h2>
            <p></p>
          </div>

          <div> 
            <h2> 要約</h2>
            <p></p>
          </div>
        </div>
      </main>
    </div>
  );
}
