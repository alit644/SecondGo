/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { memo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const ImagesSection = ({ form }: { form: any }) => {

  const inputRef = useRef<HTMLInputElement>(null);
   const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { watch, setValue } = form;
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).slice(0, 5);
      setSelectedFiles((prev) => [...prev, ...files].slice(0, 5));
      // sync with RHF form value for validation
      const current = watch("image") || [];
      setValue("image", [...current, ...files].slice(0, 5));
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
    const current = watch("image") || [];
    const updated = current.filter((_: any, i: number) => i !== index);
    setValue("image", updated);
  };
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold">Images</h2>
      <FormField
        control={form.control}
        name="image"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                type="file"
                {...field}
                hidden
                ref={inputRef}
                multiple
                accept="image/*"
                onChange={handleFileChange}
                value=""
              />
            </FormControl>
            <FormMessage />

            {/* File Upload with Gradient Border */}
            <motion.div
              className="relative p-0.5 rounded-lg group mt-2"
              initial={false}
              animate="rest"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px]">
                <div className="w-full h-full bg-card rounded-lg" />
              </div>
              <motion.div
                onClick={() => inputRef.current?.click()}
                className="relative cursor-pointer flex flex-col items-center justify-center gap-3 p-6 bg-background rounded-lg border-2 border-dashed border-input transition-colors hover:border-transparent"
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Upload className="h-12 w-12 text-muted-foreground group-hover:text-[#8b5cf6] transition-colors" />
                </motion.div>
                <motion.p
                  className="text-center text-muted-foreground group-hover:text-foreground transition-colors font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedFiles.length > 0
                    ? `Add more images (${selectedFiles.length}/5)`
                    : "Drop files here or click to upload"}
                </motion.p>
                <motion.p
                  className="text-sm text-muted-foreground/70 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  PNG, JPG, GIF up to 5MB (max 5 files)
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Selected Files Preview */}
            {selectedFiles.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">
                  Selected Images ({selectedFiles.length}/5)
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedFiles.map((file, index) => (
                    <div key={index} className="relative group">
                      <Image
                        src={URL.createObjectURL(file)}
                        alt={`Preview ${index + 1}`}
                        width={80}
                        height={80}
                        className="h-20 w-20 object-cover rounded-md border"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFile(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white  opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </FormItem>
        )}
      />
    </div>
  );
};

export default memo(ImagesSection);
