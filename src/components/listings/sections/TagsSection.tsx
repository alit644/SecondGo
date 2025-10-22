/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const TagsSection = ({ form }: { form: any }) => {
  const [tagInput, setTagInput] = useState("");
  const { watch, setValue } = form;
  const tags = watch("tags");
  const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags?.includes(tagInput.trim())) {
        setValue("tags", [...tags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setValue(
      "tags",
      tags.filter((tag: string) => tag !== tagToRemove)
    );
  };

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold">Tags</h2>
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag: string) => (
            <Badge
              key={tag}
              variant="secondary"
              className="px-3 py-1 text-sm flex items-center gap-1.5"
            >
              {tag}
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="text-muted-foreground hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </Badge>
          ))}
        </div>
        <Input
          placeholder="Add tags (press Enter to add)"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={addTag}
          className="h-10"
        />
        <p className="text-sm text-muted-foreground">
          Add relevant tags to help buyers find your listing (e.g., brand,
          model, size, color)
        </p>
      </div>
    </div>
  );
};

export default TagsSection;
