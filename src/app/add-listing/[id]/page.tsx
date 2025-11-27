import NewListingForm from "@/components/listings/NewListingForm";
import { getListingById } from "@/actions/listing-action";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const result = await getListingById(id);

  if (!result.success) {
    if (result.message === "Listing not found") {
      notFound(); 
    } else {
      throw new Error(result.message);
    }
  }

  return (
    <div>
      <NewListingForm mode="edit" initialData={result.data} />
    </div>
  );
};

export default Page;
