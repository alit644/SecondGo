
export type ApiResponse<T> =
  | { success: true; data: T; message?: string  }
  | { success: false; data?: null; message: string };
 

export const ok = <T>(data: T, message?: string): ApiResponse<T> => ({
  success: true,
  data,
  message, 
});

export const fail = <T>(message: string): ApiResponse<T> => ({
  success: false,
  data: null,
  message,
});