import { NavBar } from "@/app/components/navbar";
import Footer from "@/app/components/ui/footer";
import { PrimaryButton } from "@/app/components/ui/primary-button";
import Image from "next/image";
import { articles } from "./../../json-data/articles-data";
import ArticleCard from "./../../components/ui/article-card";

const Blog = () => {
  return (
    <>
      <NavBar />
      <div className="border-t border-gray-500/90" />

      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center py-16 sm:py-20 px-4">
        <span className="mb-6 rounded-full bg-[#FFB9004D] px-5 py-2 text-xs font-semibold tracking-widest text-[#FFB900] border border-[#FFB9004D]">
          Food • Lifestyle • Wellness
        </span>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
          The Dhesi{" "}
          <span className="italic bg-linear-to-l from-[#B38934] to-[#E8CC7B] bg-clip-text text-transparent">
            Kitchen
          </span>
        </h2>

        <p className="max-w-xl sm:max-w-2xl text-gray-300 text-sm sm:text-base px-2">
          Discover the perfect blend of flavor and nutrition with our curated
          recipes, expert tips, and lifestyle guides for the modern food
          enthusiast.
        </p>
      </section>

      {/* FEATURE SECTION */}
      <section className="pb-20 px-4">
        <div className="flex justify-center items-center gap-2 mb-8">
          <img
            src="/icons/blog1.svg"
            alt="Feature Icons"
            width={20}
            height={20}
          />
          <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl">Feature</h1>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/5 rounded-2xl border border-gray-700/50 p-6 sm:p-8">
            {/* IMAGE */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
              <img
                src="/images/blog1.png"
                alt="Chef"
                loading="eager"
                className="w-full h-full object-contain"
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col items-start">
              <span className="mb-6 rounded-full bg-[#FFB9004D] px-5 py-2 text-xs font-semibold tracking-widest text-[#FFB900] border border-[#FFB9004D]">
                • FIT Series
              </span>

              <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-6">
                Eating Clean Without Losing Flavor
              </h2>

              <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-lg">
                Struggling to balance your fitness goals with delicious food?
                Discover how our FIT Series uses lean cuts, light marinades, and
                smart preparation to deliver high-protein meals that are
                anything but boring.
              </p>

              <PrimaryButton
                primaryColor="#d4a64a"
                text="READ FULL ARTICLE"
                className="uppercase tracking-wider"
                gradientToWhite
              />
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES SECTION */}
      <section className="pb-20 px-10 sm:pb-25 sm:px-15 lg:pb-30 lg:px-20 2xl:pb-35 2xl:px-25">
        <div className="flex justify-center items-center gap-2 mb-10">
          <img
            src="/icons/blog1.svg"
            alt="Feature Icons"
            width={20}
            height={20}
          />
          <h1 className="text-2xl sm:text-3xl font-bold">
            Latest{" "}
            <span className="italic bg-linear-to-l from-[#B38934] to-[#E8CC7B] bg-clip-text text-transparent">
              Articles
            </span>
          </h1>
        </div>

        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-gray-500/90" />
      <Footer />
    </>
  );
};

export default Blog;
