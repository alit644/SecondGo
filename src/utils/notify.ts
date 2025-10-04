

import type { CSSProperties } from "react";
import { toast } from "sonner";

type NotifyType = "success" | "error";

type NotifyOptions = {
  description?: string;
  duration?: number;
  style?: CSSProperties;
};

const STYLES: Record<NotifyType, CSSProperties> = {
  success: {
    // border: "1px solid #22c55e",
    // background: "#f0fdf4",
    // color: "#16a34a",
    border: "1px solid #22c55e",
    background: "#052e16",
    color: "#22c55e",
  },
 
  error: {
    // border: "1px solid #ef4444",
    // background: "#fef2f2",
    // color: "#ef4444",
    border: "1px solid #ef4444",
    background: "#450a0a",
    color: "#ef4444",
  },
};

export const notify = (
  message: string,
  type: NotifyType = "success",
  options: NotifyOptions = {}
) => {
  const { style, ...rest } = options;
  const base = { style: { ...STYLES[type], ...style }, ...rest } as const;

  if (type === "success") {
    toast.success(message, base);
  } else {
    toast.error(message, base);
  }
};
