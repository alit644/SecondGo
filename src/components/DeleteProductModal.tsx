"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { deleteListingAction } from "@/actions/listing-action";
import { notify } from "@/utils/notify";
import { Loader2 } from "lucide-react";

const DeleteProductModal = ({ id }: { id: string }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handelDelete = async () => {
    try {
      setIsLoading(true);

      const result = await deleteListingAction(id);
      if (result.success) {
        router.back();
        notify(result.message || "Listing deleted successfully", "success");
      } else {
        notify(result.message || "Something went wrong", "error");
      }
    } catch (error) {
      notify("Something went wrong", "error");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the
            product from our database.
            <br />
            Product ID: {id}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={() => router.back()}>Cancel</Button>
          <Button
            onClick={() => handelDelete()}
            disabled={isLoading}
            variant="destructive"
            title="Delete"
            aria-label="Delete"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={16} /> Deleting...
              </>
            ) : (
              "Delete"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteProductModal;
