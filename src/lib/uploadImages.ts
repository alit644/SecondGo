import supabase from "@/supabase";

export const uploadImages = async (files: File[] , userId: string) => {
  const uploadImagesUrl: string[] = [];

  for (const file of files) {
    const fileName = `${Date.now()}-${file.name}`;
    const path = `listing/${userId}/${fileName}`;
    const { data, error } = await supabase.storage
      .from("listing")
      .upload(path, file);
    if (error) throw new Error(error.message);
      console.log("✅ File uploaded successfully", data);

    // get the url of the uploaded image
    const {
      data: { publicUrl },
    } = supabase.storage.from("listing").getPublicUrl(path);
    uploadImagesUrl.push(publicUrl);
  }

  return await Promise.all(uploadImagesUrl);
};
