import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "./ui/table";
import { Eye, Edit } from "lucide-react";
import { Listing } from "@prisma/client";
import DeleteButton from "./shared/DeleteButton";
import Link from "next/link";
interface IProductsCard {
  data: Listing[];
}
const MyProductsCard = ({ data }: IProductsCard) => {
  const listings = data?.map((p: Listing) => {
    return (
      <TableRow key={p.id}>
        <TableCell>
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative size-12 overflow-hidden rounded-md">
              <Image
                src={p.image[0] || "/no-image.jpg"}
                alt={`${p.title} product image`}
                fill
                sizes="48px"
                className="object-cover select-none pointer-events-none"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-medium">{p.title}</p>
              <p className="text-xs text-muted-foreground">ID: {p.id}</p>
            </div>
          </div>
        </TableCell>
        <TableCell>${p.price.toFixed(2)}</TableCell>
        <TableCell>
          <Badge className="text-xs" variant="secondary">
            {p.status}
          </Badge>
        </TableCell>
        <TableCell>{p.category}</TableCell>
        <TableCell>{p.condition}</TableCell>
        <TableCell className="text-right">
          <div className="flex items-center justify-end gap-1">
            <Link href={`/profile/view/${p.id}`} scroll={false}>
              <Button
                title="View"
                variant="ghost"
                size="icon"
                aria-label="View"
              >
                <Eye className="size-4" />
              </Button>
            </Link>
            <Link href={`/add-listing/${p.id}`}>
              <Button
                title="Edit"
                variant="outline"
                size="sm"
                aria-label="Edit"
              >
                <Edit className="size-4" />
                <span className="ml-1">Edit</span>
              </Button>
            </Link>
            <DeleteButton id={p.id} />
          </div>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <div className="w-full space-y-4">
      <div className="rounded-xl border bg-background shadow-sm">
        <Table>
          <TableCaption>Your Listings overview</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>category</TableHead>
              <TableHead>condition</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>{listings}</TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MyProductsCard;
