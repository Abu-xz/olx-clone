

export const uploadImageToCloudinary = async (file) => {

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "products"); 

    try {
        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
                method: "POST",
                body: formData,
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(`Cloudinary Error: ${data.error.message}`);
        }
        return data.secure_url; // Return the image URL
    } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
        throw error;
    }
};