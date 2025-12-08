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
import { Eye, Edit, Package, Plus } from "lucide-react";
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
      {data === undefined || data?.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-8 text-center border-2 border-dashed rounded-lg bg-muted/20">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10">
            <Package className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-lg font-medium text-foreground">
            No Listings Yet
          </h3>
          <p className="max-w-md mt-2 text-sm text-muted-foreground">
            You haven&apos;t created any listings yet. Start by adding your
            first product!
          </p>
          <Button className="mt-6" asChild>
            <Link href="/add-listing">
              <Plus className="w-4 h-4 mr-2" />
              Add Your First Listing
            </Link>
          </Button>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default MyProductsCard;
