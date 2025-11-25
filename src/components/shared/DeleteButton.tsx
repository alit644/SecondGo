import React from "react";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import Link from "next/link";

const DeleteButton = ({id} : {id:string}) => {
  return (
    <Link href={`/profile/delete/${id}`} scroll={false} className="text-red-600 hover:underline">
      <Button variant="destructive" size="sm" aria-label="Delete">
        <Trash2 className="size-4" />
        <span className="ml-1">Delete</span>
      </Button>
    </Link>
  );
};

export default DeleteButton;
