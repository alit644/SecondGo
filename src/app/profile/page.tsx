import { auth } from "@/auth";
import LogoutButton from "@/components/LogoutButton";
// start logic 
const Page = async () => {
  const session = await auth();
  return (
    <div>
      <div className="flex justify-between align-center p-4 border-b border-input">
        <div>
          <p>
            Hi,{" "}
            {session?.user?.name ||
              `${session?.user?.firstName} ${session?.user?.lastName}`}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default Page;
