/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MSelect } from "@/components/shared/MSelect";
import { Tag } from "lucide-react";
import React, { memo } from "react";
import { Switch } from "@/components/ui/switch";
const conditionOptions = [
  { value: "new", label: "New" },
  { value: "used", label: "Used - Like New" },
  { value: "good", label: "Used - Good" },
  { value: "fair", label: "Used - Fair" },
];

const PricingSection = ({ form }: { form: any }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <Tag className="h-5 w-5 text-primary" />
        Pricing & Condition
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price (USD) *</FormLabel>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                  $
                </span>
                <FormControl>
                  <Input
                    disabled={form.formState.isSubmitting}
                    type="number"
                    placeholder="0.00"
                    className="pl-8 h-12"
                    step="0.01"
                    {...field}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="condition"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Condition *</FormLabel>
              <FormControl>
                <MSelect
                  disabled={form.formState.isSubmitting}
                  options={conditionOptions}
                  placeholder="Select condition"
                  value={field.value}
                  onValueChange={field.onChange}
                  name="condition"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="isNegotiable"
        render={({ field }) => (
          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <FormLabel className="text-base">Price is negotiable</FormLabel>
              <FormDescription>
                Allow buyers to negotiate the price
              </FormDescription>
            </div>
            <FormControl>
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
                disabled={form.formState.isSubmitting}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default memo(PricingSection);
