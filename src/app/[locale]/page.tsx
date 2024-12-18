"use client";
// import Image from "next/image";
// import { useTranslations } from "next-intl";
// import { Link } from "@/i18n/routing";
// import { Button } from "@/components/ui/button";

// export default function Home() {
//   const t = useTranslations("HomePage");
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <div>
//         <Button variant="outline">Button</Button>
//         <h1 className="text-2xl text-red-400">{t("title")}</h1>
//         <Link href="/about">{t("about")}</Link>
//       </div>
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

import Image from "next/image";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
// import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  const [text] = useTypewriter({
    words: ["开发者", "程序员", "电影爱好者"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        {/* 主要内容区 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* 左侧文字区域 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h1 className="text-4xl font-bold mb-4">你好, 我是小明</h1>
            <p className="text-xl mb-4">
              我是一名 <span className="font-semibold">{text}</span>
              <Cursor cursorStyle="|" />
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              热爱编程、热爱生活。专注于 Web 开发，擅长 React 和 TypeScript。
            </p>
          </motion.div>

          {/* 右侧头像 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700">
              <Image
                src="/globe.svg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* 社交图标 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-6 mt-12"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            {/* <FaGithub /> */}
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-400 transition-colors"
          >
            {/* <FaTwitter /> */}
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-600 transition-colors"
          >
            {/* <FaLinkedin /> */}
          </a>
        </motion.div>
      </div>
    </div>
  );
}
