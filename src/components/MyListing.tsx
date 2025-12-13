import { Button } from "./ui/button";
import Link from "next/link";
import Loading from "@/app/profile/loading";
import PaginationDemo from "./shared/PaginationDemo";
import { Package, Plus } from "lucide-react";
import ErrorState from "./shared/ErrorState";
import dynamic from "next/dynamic";
import { getUserData } from "@/lib/data";
const MyProductsCard = dynamic(() => import("./MyProductsCard"), {
  loading: () => <Loading />,
});

const MyListing = async ({
  page,
  userID,
}: {
  page: number;
  userID: string;
}) => {
  const result = await getUserData(userID, page);
  if (!result?.success) {
    return (
      <ErrorState
        message={
          result?.message || "Something went wrong. Please try again later.  "
        }
      />
    );
  }

  return (
    <div>
      {/* static */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold">My Listings {page}</h2>
          <p className="text-sm text-muted-foreground">
            Manage and track your listings
          </p>
        </div>
        <Button>
          <Link href={"/add-listing"}>Add Listing</Link>
        </Button>
      </div>
      {/* Dynamic */}
      {result?.data?.length === 0 ? (
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
        <>
          <MyProductsCard data={result?.data || []} />
          <div className="flex justify-center my-4">
            <PaginationDemo
              meta={
                result?.meta || {
                  count: 0,
                  page: 0,
                  postPerPage: 0,
                  totalPages: 0,
                }
              }
            />{" "}
          </div>
        </>
      )}
    </div>
  );
};

export default MyListing;
