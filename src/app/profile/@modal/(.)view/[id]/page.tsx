import { getListingById } from "@/actions/listing-action";
import ViewProductModal from "@/components/ViewProductModal";

type PageProps = {
  params: Promise<{ id: string }>;
};

export const ViewListingModal = async ({params} :PageProps ) => {
  const { id } = await params;

  const result = await getListingById(id);

  if (!result.success || !result.data) {
    return <div className="p-6">Listing not found</div>;
  }

  const listing = result.data;

  return (
 <>
 <ViewProductModal listing={listing}/>
 </>
  );
};
export default ViewListingModal;
