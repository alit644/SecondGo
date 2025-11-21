// app/profile/page.tsx
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
export const revalidate = 3600;
export const dynamic = "force-static";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "../../components/ui/table";
import { Eye, Edit, Trash2 } from "lucide-react";
import { auth } from "@/auth";
import { getListingCached } from "@/lib/data";
import { Listing } from "@prisma/client";

export default async function test() {
  const session = await auth();

  const data = await getListingCached(session?.user.id as string);
 const listings = data?.map((p: Listing) => {
    return (
      <TableRow key={p.id}>
        <TableCell>
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative size-12 overflow-hidden rounded-md">
              <Image
                src={p.image[0] || ""}
                alt={p.title}
                fill
                sizes="48px"
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
            <Button variant="outline" size="sm" aria-label="Edit">
              <Edit className="size-4" />
              <span className="ml-1">Edit</span>
            </Button>
            <Button variant="destructive" size="sm" aria-label="Delete">
              <Trash2 className="size-4" />
              <span className="ml-1">Delete</span>
            </Button>
          </div>
        </TableCell>
      </TableRow>
    );
  });

  return (
    <div className="w-full space-y-4">
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
          <TableBody>
            {" "}
            {data?.length === 0 ? (
              <p className="text-center text-lg text-muted-foreground">
                {" "}
                No Products Found{" "}
              </p>
            ) : (
              listings
            )}{" "}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
