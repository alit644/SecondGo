import UserContent from "@/components/UserContent";
export const revalidate = 60;
const ProfilePage = () => {
  return (
    <div className="min-h-screen  py-4">
     <UserContent />
    </div>
  );
};

export default ProfilePage;
