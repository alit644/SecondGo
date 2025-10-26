import Link from "next/link";
import { Button } from "./ui/button";

const MyListing = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">My Listings</h1>
        <Button>
          <Link href={"/add-listing"}>Add Listing</Link>
        </Button>
      </div>
      <div className="flex items-center justify-center mt-4">
        <p className="text-center text-lg text-muted-foreground"> No Products Found </p>
      </div>
    </div>
  );
};

export default MyListing;
