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
import { getUserListing } from "@/actions/listing-action";
import DeleteButton from "./shared/DeleteButton";
import Link from "next/link";

const MyProductsCard = async () => {
  const { data } = await getUserListing();
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
                placeholder="blur"
                blurDataURL="/blur-placeholder.png"
                className="object-cover"
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
            <Button variant="ghost" size="icon" aria-label="View">
              <Eye className="size-4" />
            </Button>
            <Link href={`/add-listing/${p.id}`}>
              <Button variant="outline" size="sm" aria-label="Edit">
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
      {data === undefined || data?.length === 0 ? (
        <p className="text-center text-lg text-muted-foreground">
          {" "}
          No Listings Found{" "}
        </p>
      ) : (
        <div className="rounded-xl border bg-background shadow-sm">
          <Table>
            <TableCaption>Your products overview</TableCaption>
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
      )}
    </div>
  );
};

export default MyProductsCard;
