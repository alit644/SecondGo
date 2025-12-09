import { auth } from "@/auth";
import MyListing from "@/components/MyListing";
export const dynamic = "force-dynamic";
const ProfilePage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string | null | undefined }>;
}) => {
  const page = await searchParams;
  const session = await auth();
 if (!session) {
    return (
      //TODO :   redirect("/login");
      <div className="text-red-500 p-6 text-center">
        ❌ User not authenticated. Please login.
      </div>
    );
  }
  
    if (session?.user.role !== "SALLER") {
      return (
        //TODO :   redirect("/unauthorized");
        <div className="text-red-500 p-6 text-center">
          ❌ User role is not SELLER. Please login.
        </div>
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
