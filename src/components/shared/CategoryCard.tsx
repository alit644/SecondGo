import { Card, CardContent } from "../ui/card";
import Image from "next/image";
const CategoryCard = () => {
  return (
    <div className="w-[250px] mb-2 cursor-pointer">
      <Card className="p-0 gap-0 ">
        <CardContent className="flex items-center justify-between gap-2 py-3">
          {/* image */}
          <div className="relative w-[90px] h-[60px]">
            <Image
              src="/2151050620.jpg"
              alt="Category"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          {/* title */}
          <div className="flex flex-col gap-1">
            <h3 className="text-md font-semibold w-full ">Digital Art</h3>
            <span className="text-xs text-muted-foreground">123 Products</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryCard;
