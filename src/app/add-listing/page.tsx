import { auth } from "@/auth";
import NewListingForm from "@/components/listings/NewListingForm";
import { redirect } from "next/navigation";

const Page = async () => {
 const session = await auth()
  if (!session?.user) {
    redirect("/login");
  }

  if (session.user.role !== "SALLER") {
    redirect("/become-seller");
  }
  return (
    <div className="bg-background my-6">
      <NewListingForm />
    </div>
  );
};

export default Page;
