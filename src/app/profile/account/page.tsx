import { Card } from "@/components/ui/card";
import { auth } from "@/auth";
import { prisma } from "@/utils/prisma";
import AccountClient from "@/components/AccountClient";

const Page = async () => {
  const session = await auth();
  const user = await prisma.user.findUnique({
   where: { id: session?.user.id },
  });

  return (
    <div>
      <div className="grid grid-cols-1 gap-6">
        {/* Personal Information */}
        <Card className="hover:shadow-lg transition-all duration-300">
          {/* AccountClient */}
          {user ? <AccountClient user={user} /> : <div>User not found</div>}
        </Card>
      </div>
    </div>
  );
};

export default Page;
