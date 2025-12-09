import NewListingForm from "@/components/listings/NewListingForm";
import { notFound, redirect } from "next/navigation";
import { getDataById } from "@/lib/data";
import { auth } from "@/auth";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  // session Check
  const session = await auth();
  const result = await getDataById(id);
  // Check if the user is authorized to edit this listing
  if (session?.user?.id !== result?.data?.userId) {
    redirect("/unauthorized");
  }
  
  if (!result?.success) {
    if (result.message === "Listing not found") {
      notFound();
    } else {
      throw new Error(result?.message);
    }
  }

  

  return (
    <div>
      <NewListingForm mode="edit" initialData={result?.data} id={id} />
    </div>
  );
};

export default Page;
