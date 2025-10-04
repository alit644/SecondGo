import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const MAvatar = () => {
  return (
    <Avatar className="h-[35px] w-[35px]">
      <AvatarImage alt="avatar"  src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default MAvatar;
