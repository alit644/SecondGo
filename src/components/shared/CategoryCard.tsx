import { Card, CardContent } from "../ui/card";
import Image from "next/image";

interface CategoryCardProps {
  title?: string;
  productCount?: number;
  imageSrc?: string;
  gradient?: string;
}

const CategoryCard = ({
  title = "Digital Art",
  productCount = 123,
  imageSrc = "/2151050620.jpg",
  gradient = "from-blue-500/20 to-purple-600/20",
}: CategoryCardProps) => {
  return (
    <div className="group w-[280px] mb-4 cursor-pointer">
      <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white/80 to-gray-50/80 dark:bg-card dark:from-card dark:to-card/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 hover:scale-[1.02]">
        {/* Background Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]">
          <div className="w-full h-full bg-card rounded-lg" />
        </div>

        <CardContent className="relative z-10">
          <div className="flex items-center gap-4">
            {/* Enhanced Image Container */}
            <div className="relative w-[100px] h-[80px] overflow-hidden rounded-xl group-hover:rounded-2xl transition-all duration-500">
              {/* Image Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
              />

              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            </div>

            {/* Enhanced Content */}
            <div className="flex-1 space-y-2">
              <h3 className="text-lg font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500 leading-tight">
                {title}
              </h3>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 font-medium">
                  {productCount} Products
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out" />
              </div>
            </div>
          </div>

          {/* Floating Particles Effect */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-100" />
          <div className="absolute top-8 right-8 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-300" />
          <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-200" />
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryCard;
