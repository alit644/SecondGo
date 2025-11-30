import { Suspense } from "react";
import MyProductsCard from "./MyProductsCard";


import { Button } from "./ui/button";
import Link from "next/link";
import Loading from "@/app/profile/loading";
const MyListing = () => {
  return (
    <div>
      {/* static */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold">My Listings</h2>
          <p className="text-sm text-muted-foreground">
            Manage and track your listings
          </p>
        </div>
        <Button>
          <Link href={"/add-listing"}>Add Listing</Link>
        </Button>
      </div>
      {/* Dynamic */}
      <Suspense fallback={<Loading />}>
        <MyProductsCard />{" "}
      </Suspense>
    </div>
  );
};

export default MyListing;
