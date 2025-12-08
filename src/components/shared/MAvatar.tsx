import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const MAvatar = ({userAvatar} : {userAvatar: string | null}) => {
  return (
    <Avatar className="h-[35px] w-[35px]">
      <AvatarImage alt="avatar"  src={userAvatar || "/user-profile.jpg"} className="select-none pointer-events-none"/>
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default MAvatar;
