/* eslint-disable @typescript-eslint/no-explicit-any */
import { Hash } from "lucide-react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { MSelect } from "../../shared/MSelect";
import { memo } from "react";
const categoryOptions = [
  { value: "electronics", label: "Electronics" },
  { value: "furniture", label: "Furniture" },
  { value: "clothing", label: "Clothing" },
  { value: "vehicles", label: "Vehicles" },
  { value: "services", label: "Services" },
  {value:"other", label:"Other"}
];
const BasicInfoSection = ({ form }: { form: any }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <Hash className="h-5 w-5 text-primary" />
        Basic Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title *</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter listing title"
                  {...field}
                  className="h-12"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category *</FormLabel>
              <FormControl>
                <MSelect
                  options={categoryOptions}
                  placeholder="Select a category"
                  value={field.value}
                  onValueChange={field.onChange}
                  name="category"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description *</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Provide a detailed description of your item"
                rows={7}
                {...field}
              />
            </FormControl>
            <FormDescription>
              Include details about features, condition, and reason for selling
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default memo(BasicInfoSection);
