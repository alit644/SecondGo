import { auth } from "@/auth";
import BecomeSellerSection from "@/components/BecomeSellerSection";
import MyListing from "@/components/MyListing";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";
const ProfilePage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string | null | undefined }>;
}) => {
  const page = await searchParams;
  const session = await auth();
 if (!session) {
      redirect("/login");
  }
  
    if (session?.user.role !== "SALLER") {
      return (
      <BecomeSellerSection email={session?.user?.email as string} />
      );
    }
const currentPage = parseInt(page.page || "1", 10);
  const safePage = isNaN(currentPage) || currentPage < 1 ? 1 : currentPage;
  return (
    <div className="min-h-screen  py-4">
      <div className="max-w-7xl mx-auto space-y-6">
        <MyListing page={safePage} userID={session?.user?.id}/>
      </div>
    </div>
  );
};

export default ProfilePage;
