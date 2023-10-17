import React, { useCallback } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { Icon } from "../Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";
import axios from "axios";
declare global {
  var cloudinary: any;
}

interface Props {
  onChange: (value: string) => void;
  value?: string;
  isAboveSmallScreens?: boolean;
  disabled?: boolean;
  label: string;
  type?: "main" | "secondary" | "third";
}

export const ImageUpload = ({
  onChange,
  value,
  disabled,
  label,
  type = "main",
}: Props) => {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  const uploadFileToCloudinary = async (files: FileList | null) => {
    if (files && files.length > 0) {
      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
      const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "";
      
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("file", files[i]);
      }
      formData.append("upload_preset", uploadPreset);

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
        );
        
        console.log("Image URL:", response.data.secure_url);
      } catch (error) {
        console.error("Image upload failed:", error);
      }
    }
  };
  return (
    <div>
      <div className="h-full w-full cursor-pointer">
        <input onChange={(e)=>uploadFileToCloudinary(e.target.files)} type="file" name="UploadImage" id="UploadImage" hidden />
        {type === "main" ? (
          <label htmlFor="UploadImage" className="w-full cursor-pointer h-full border-[1px] border-secondaryGray border-solid py-[3rem] px-4 rouned-md flex justify-center items-center">
            <div className="flex flex-col gap-[10px] items-center justify-center">
              <div className="w-[50px] h-[50px]">
                <Icon svg={WebsiteIcons["Camera"]} />
              </div>
              <h3 className="text-secondaryGray font-bold text-[16px]">
                {label}
              </h3>
            </div>
          </label>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
