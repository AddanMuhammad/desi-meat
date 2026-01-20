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
      <div className="flex flex-col justify-center items-center py-20">
        <span className="inline-block mb-6 rounded-full bg-[#FFB9004D] px-5 py-2 text-xs font-semibold tracking-widest text-[#FFB900] border border-[#FFB9004D]">
          Food • Lifestyle • Wellness
        </span>

        <h2 className="text-2xl lg:text-4xl font-bold leading-tight mb-6 ">
          The Dhesi{" "}
          <span className=" italic bg-linear-to-l from-[#B38934] to-[#E8CC7B] bg-clip-text text-transparent">
            Kitchen
          </span>
        </h2>
        <p className="max-w-xl text-center text-gray-300 px-4 mb-10">
          Discover the perfect blend of flavor and nutrition with our curated
          recipes, expert tips and lifestyle guides for the modern food
          enthusiast.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center pb-20 ">
        <div className="flex justify-center items-center gap-2 mb-8">
          <img
            src="/icons/blog1.svg"
            alt="Feature Icons"
            width={20}
            height={20}
          />
          <h1 className="font-bold lg:text-3xl">Feature</h1>
        </div>
        <div className="w-full flex justify-center items-center mx-4 ">
          <div className="max-w-6xl  mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-center bg-white/5  rounded-2xl border border-gray-700/50 ">
            {/* LEFT IMAGE */}
            <div className="relative w-full h-110">
              <Image
                src="/images/blog1.png"
                alt="Chef"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="h-120 overflow-hidden relative  flex flex-col justify-center items-start text-start px-6">
              {/* Badge */}
              <span className="inline-block mb-6 rounded-full bg-[#FFB9004D] px-5 py-2 text-xs font-semibold tracking-widest text-[#FFB900] border border-[#FFB9004D]">
                <span className="text-base">• </span>
                FIT Series
              </span>

              {/* Heading */}
              <h2 className="text-2xl lg:text-4xl font-bold leading-tight mb-6">
                Eating Clean Without Losing Flavor
              </h2>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed text-sm mb-8 max-w-md">
                Struggling to balance your fitness goals with delicious food?
                Discover how our FIT Series uses lean cuts, light marinades, and
                smart preparation to deliver high-protein meals that are
                anything but boring.
              </p>

              {/* CTA */}
              <PrimaryButton
                primaryColor="#d4a64a"
                text="READ FULL ARTICLE"
                className="uppercase tracking-wider"
                gradientToWhite={true}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center pb-20 ">
        <div className="flex justify-center items-center gap-2 mb-8">
          <img
            src="/icons/blog1.svg"
            alt="Feature Icons"
            width={20}
            height={20}
          />
          <h1 className="text-2xl lg:text-3xl font-bold leading-tight ">
            Latest{" "}
            <span className=" italic bg-linear-to-l from-[#B38934] to-[#E8CC7B] bg-clip-text text-transparent">
              Articles
            </span>
          </h1>
        </div>
        <div></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-500/90" />
      <Footer />
    </>
  );
};

export default Blog;
