/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Resolver, useForm } from "react-hook-form";
import { Send, UploadCloud } from "lucide-react";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { listingSchema, ListingSchema } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import BasicInfoSection from "./sections/BasicInfoSection";
import PricingSection from "./sections/PricingSection";
import ImagesSection from "./sections/ImagesSection";
import LocationSection from "./sections/LocationSection";
import TagsSection from "./sections/TagsSection";
import { addListingAction } from "@/actions/listing-action";
import { notify } from "@/utils/notify";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Listing } from "@prisma/client";
type ListingFormProps = {
  mode: "add" | "edit";
  initialData?: Listing;
};

const NewListingForm = ({ mode, initialData }: ListingFormProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<ListingSchema>({
    defaultValues: {
      title: initialData?.title || "",
      description: initialData?.description || "",
      category: initialData?.category || "other",
      price: initialData?.price || 0,
      condition: "new",
      isNegotiable: initialData?.isNegotiable || false,
      tags: initialData?.tags || [],
      image: initialData?.image || [],
      email: initialData?.email || "",
      location: initialData?.location || "",
      phone: initialData?.phone || "",
    },

    resolver: zodResolver(listingSchema) as unknown as Resolver<ListingSchema>,
  });

  const onSubmit = async (data: ListingSchema) => {
    console.log("✅ Submitted data:", data);
    setLoading(true);
    try {
      let result;

      if (mode === "add") {
        result = await addListingAction(data);
      } else {
    console.log("✅ Submitted to edit data:", data);
        // result = await updateListingAction(initialData!.id, data);
      }

      if (result?.success) {
        form.reset();
        notify(
          mode === "add"
            ? "Listing added successfully"
            : "Listing updated successfully",
          "success"
        );
        router.push("/profile");
      } else {
        notify(result?.message, "error");
      }
    } catch (error: any) {
      console.log(error);
      notify(
        error?.message || "Internal Server Error , Please try again later",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-center">
        {mode === "add" ? "Create New Listing" : "Edit Listing"}
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-6 bg-card p-6 rounded-lg shadow-sm border">
            {/* Basic Information Section */}
            <BasicInfoSection form={form} />

            {/* Price & Condition Section */}
            <PricingSection form={form} />
            {/* Images Section */}
            <ImagesSection form={form} />

            {/* Location & Contact Section */}
            <LocationSection form={form} />

            {/* Tags Section */}
            <TagsSection form={form} />
            {/* Submit Button */}
            <div className="pt-4">
              <div className="flex flex-col sm:flex-row justify-end gap-3">
                <Button
                  type="submit"
                  className="min-w-[120px]"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      Publishing... <UploadCloud />
                    </>
                  ) : (
                    <>
                      Publish Listing <Send />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default NewListingForm;
