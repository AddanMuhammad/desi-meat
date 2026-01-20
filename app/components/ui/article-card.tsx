import Image from "next/image";

interface ArticleCardProps {
  article: any;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div className="bg-[#1b1b1b] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition p-4 border border-gray-600/50 ">
      {/* Image */}
      <div className="relative h-55">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />

        {/* Series Badge */}
        <span className="absolute top-4 left-4 text-xs bg-white/5  backdrop-blur-md text-white px-3 py-1 rounded-md border border-white/30">
          {article.series}
        </span>

        {article.status === "coming" && (
          <span className="absolute top-4 right-4 text-xs bg-white/90 text-black px-3 py-1 rounded-full border border-black/50">
            Coming Soon
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-3 text-white">
        <div className="flex items-center text-sm text-gray-400 mb-2">
          ⏱ {article.time}
        </div>

        <h3 className="text-lg font-semibold leading-snug mb-2">
          {article.title}
        </h3>

        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {article.description}
        </p>

        <span className="text-[#f5b400] text-sm font-medium cursor-pointer">
          {article.status === "coming" ? "Coming Soon →" : "Read Article →"}
        </span>
      </div>
    </div>
  );
};

export default ArticleCard;
