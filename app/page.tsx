import Link from "next/link";
import Card1 from "./components/Card1.jsx";
import Card2 from "./components/Card2.jsx";
import Card3 from "./components/Card3.jsx";

export default function Home() {
  return (
    <div
      className=" mx-auto min-h-screen  px-6 py-12  max-w-7xl 
    md:px-12 md:py-16 lg:py-0"
    >
      <div className="lg:flex lg:justify-between lg:gap-4 ">
        {/* header */}
        <header
          className="pb-24 lg:w-[48%] lg:sticky lg:top-0 
        lg:max-h-screen lg:flex-col lg:flex lg:justify-between lg:py-24"
        >
          <div>
            <div className="space-y-2 pb-16">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-normal">
                Bravet Zhang
              </h1>
              <h2 className="text-lg sm:text-xl font-medium tracking-normal">
                Full Stack AI Engineer
              </h2>
              <p className="max-w-xs tracking-wide">
                I create accessible webs with pixel-perfect visual .
              </p>
            </div>
            {/* 导航 */}
            <nav className="hidden lg:flex lg:flex-col space-y-2 opacity-80 uppercase text-xs tracking-widest font-bold">
              <ul>
                <li>
                  <a
                    className="group flex items-center py-3 active"
                    href="#about"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span>About</span>
                  </a>
                </li>

                <li>
                  <a
                    className="group flex items-center py-3 active"
                    href="#experience"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span>experience</span>
                  </a>
                </li>
                <li>
                  <a
                    className="group flex items-center py-3 active"
                    href="#project"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span>project</span>
                  </a>
                </li>
                <li>
                  <a
                    className="group flex items-center py-3 active"
                    href="#article"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                    <span>article</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex gap-2">
            <a href="https://github.com/Bravert09" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </a>

            <a href="https://www.zcool.com.cn/u/15360758" target="_blank">
              <svg
                data-t="1772948180462"
                className="icon h-6 w-6 opacity-90"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5557"
              >
                <path
                  d="M899.299556 472.126578c-24.143644 13.437156-58.652444 20.110222-87.466667 23.409778 45.693156-38.980267 90.055111-83.399111 107.997867-139.281067 24.337067-75.810133 25.070933-146.084978 2.309688-221.138489a17.7664 17.7664 0 0 0-14.2336-12.401778c-6.792533-1.1776-13.442844 1.792-17.3568 7.350045-60.3648 86.311822-140.191289 141.3632-227.441777 157.633422 26.077867-52.662044 54.8352-112.110933 48.64-174.250667a17.772089 17.772089 0 0 0-30.378667-10.695111c-92.501333 94.549333-166.326044 114.505956-255.488 116.047645-98.446222 1.700978-192.4608 47.263289-257.905778 125.024711-64.910222 77.090133-93.639111 176.526222-78.825244 272.810666 23.796622 154.936889 138.973867 270.887822 293.432889 295.389867a369.436444 369.436444 0 0 0 57.833244 4.596622c126.867911 0 240.713956-67.350756 305.755022-184.354133 7.418311-13.312 19.592533-26.373689 33.393778-35.879822 62.805333-43.133156 108.2368-98.963911 134.985956-165.984711 3.697778-9.272889 6.411378-20.679111 8.789333-30.748445l1.831822-7.594667a17.8176 17.8176 0 0 0-6.405689-18.477511 17.846044 17.846044 0 0 0-19.467377-1.456355zM130.844444 592.355556c15.121067 48.583111 108.088889 64.853333 108.088889 64.853333-77.596444 85.185422-108.088889-64.853333-108.088889-64.853333z m216.177778 60.740266s187.130311-20.980622 261.688889-83.495822c0 0-108.5952 240.110933-261.688889 83.495822z"
                  fill="#FFFFFF"
                  p-id="5558"
                ></path>
              </svg>
            </a>
            <div></div>
          </div>
        </header>
        <main className="lg:w-[52%] lg:py-24 space-y-24">
          {/* about */}
          <section className="" id="about">
            <h3 className="lg:hidden">About</h3>
            <div className="space-y-4">
              <p>
                我是一名前端工程师，学习能力强，能快速理解新技术并将其应用到实际项目中。{" "}
                享受解决问题的过程，在开发过程中遇到复杂问题时会耐心分析、逐步拆解并找到合适的解决方案，持续创造价值。
              </p>
              <p>
                最擅长将视觉和逻辑相结合，创造好用又好看的高性能页面，对技术本身充满热情，持续关注前端生态的发展，不断学习和优化自己的技术能力。
              </p>
              <p>
               喜欢游泳冲浪，拥抱每一朵浪花；经常户外徒步，呼吸每一口自由的新鲜空气。闲时宅家，动手组装，享受创造的乐趣。
              </p>
            </div>
          </section>
          {/* work */}
          <section className="mb-16" id="experience">
            <h3 className="lg:hidden mb-8">Experience</h3>
            <div className="">
              <ul className="flex flex-col space-y-12 group/list">
                <Card1
                  product="https://socrally.ai/"
                  time="2024.3 – 2026.1"
                  title="全栈偏前端"
                  company="Socrally AI"
                  description="项目：Socrally.ai – 雅思 AI 教育平台
开发课程、模考及 AI 交互模块，优化用户操作体验和页面性能。
使用 React + Next.js + Tailwind 构建高性能 SPA/SSR 页面，熟悉server action与全栈开发模式，实现前后端逻辑整合与高效数据流转。
优化前端架构，提升前端性能，包括组件懒加载、路由按需加载、虚拟滚动等策略，显著降低首屏加载时间，提升渲染效率和首屏加载速度。"
                />
                <Card1
                  product="https://www.posha.com/"
                  time="2023.2 – 2024.2 "
                  title="前端工程师"
                  company="AI 产品创业公司"
                  description="项目：Posha AI / Skild.ai / Figure.ai
 负责多个AI产品官网和用户界面前端开发，优化动画交互和响应式布局。
使用 React/Next.js 实现 SSR、SEO 和高性能页面。
构建可复用组件库，提升开发效率与维护性。"
                />
                <Card1
                  product=""
                  time="2017.7 – 2019.1"
                  title="UI设计师/前端"
                  company="深圳泉后科技"
                  description="项目：广告屏官网、OA 系统界面
负责官网及企业内部系统的界面设计与交互优化。
 建立设计系统和规范，与开发协作，提升界面一致性可用性。
 参与官网前端页面搭建与样式优化，提升页面响应速度与兼容性。"
                />
              </ul>

              {/* <div className="pt-8">
                <a
                  className="mt-10 group/link"
                  href="/resume.pdf"
                  target="_blank"
                >
                  <span className="group-hover/link:text-teal-500">
                    <span className="ml-2 font-bold">
                      Visit full resume下载完整简历
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block h-4 w-4 shrink-0
                      transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1
                      group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1
                      "
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </a>
              </div> */}
            </div>
          </section>
          {/* project */}
          <section className="mb-16" id="project">
            <h3 className="lg:hidden mb-8">Project</h3>
            <div className="">
              <ul className="flex flex-col space-y-12 group/list">
                <Card2
                  pic="/project_posha.png"
                  title="Posha AI"
                  product="https://www.posha.com/"
                  description="负责厨房机器人官网前端开发，使用 React 和 Tailwind 构建交互界面，
              实现菜谱展示与操作流程可视化。"
                />
                <Card2
                  pic="/project_skild.png"
                  title=" Skild.ai"
                  product="https://www.skild.ai/"
                  description="独立开发机器人“大脑”演示网页，优化交互动画与数据可视化，提升用户理解和体验。"
                />
                <Card2
                  pic="/project_figure.png"
                  title="Figure.ai"
                  product="https://www.figure.ai/"
                  description="设计并实现人形机器人项目官网前端，包括产品展示、任务演示与响应式布局，增强界面交互感。"
                />
              </ul>
            </div>
          </section>
          {/* blog */}
          <section className="mb-16" id="article">
            <h3 className="lg:hidden mb-8">Project</h3>
            <div className="">
              <ul className="flex flex-col space-y-12 group/list">
                <Card3
                  link="https://medium.com/"
                  pic="/blog_nextjs.png"
                  time="2026"
                  title="Next.js server action"
                />
                <Card3
                  link="https://cloud.tencent.com/developer/news/402163"
                  pic="/blog_2019.png"
                  time="2019"
                  title="设如何做好数据可视化设计，国外大神给出了十条实用建议"
                />
              </ul>
              <div className="pt-4">
                {" "}
                <span>博客持续整理更新中....</span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

// 在 现代前端布局中，尤其用 Tailwind 时：
// 大部分容器的边距和内部呼吸感用 padding
// 元素间的微调或者分散布局时用 margin
// 列表、按钮组、卡片组用 space-x/y 最省心
