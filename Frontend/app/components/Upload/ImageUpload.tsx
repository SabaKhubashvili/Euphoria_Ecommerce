'use client'

import React, { useState,useRef } from "react";
import Image from 'next/image'
import { Icon } from "../Icon";
import { WebsiteIcons } from "@/public/Svg/IconsObject";
import axios from "axios";
import { toast } from "react-toastify";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
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
  const [isDragging,setIsDragging] = useState(false)
  const [enterCount, setEnterCount] = useState(0);
  const [crop, setCrop] = useState()
  const cropperRef = useRef<ReactCropperElement>(null)
  const uploadFileToCloudinary = async (files: FileList | null) => {
    if (files && files.length > 0) {
      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
      const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "";

      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        if (files[i].type.startsWith('image/')) {
          formData.append("file", files[i]);
        }
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

        onChange(response.data.secure_url);
      } catch (error) {
        toast.error('Something went wrong', {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    }
  };
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (enterCount === 0) {
      setIsDragging(true);
      setEnterCount(prev=>prev + 1);
    }
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (enterCount === 1) {
      setIsDragging(false);
      setEnterCount(prev=>prev  - 1);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    setEnterCount(0);
    uploadFileToCloudinary(e.dataTransfer.files);
  };

  const hanldeCrop = () => {
    const cropper = cropperRef.current?.cropper;
    console.log(cropper?.getCroppedCanvas().toDataURL());
    cropperRef?.current?.cropper.getCroppedCanvas().toBlob((blob) => {
      if (blob) {
        const croppedFile = new File([blob], 'cropped-image.jpg', { type: 'image/jpeg' });
        console.log(croppedFile);
        
      }
    }, 'image/jpeg');
  };



  return (
    <div
    onDragOver={handleDragOver}
    onDragEnter={handleDragEnter}
    onDrop={handleDrop}
    onDragLeave={handleDragLeave}
    className="h-full w-full cursor-pointer">
      <Cropper
        src="/Images/Product/Product.webp"
        style={{ height: 400, width: "100%" }}
        initialAspectRatio={9 / 16}
        guides={false}
        ref={cropperRef}
     />
      <input accept="image/*" onChange={(e) => uploadFileToCloudinary(e.target.files)} type="file" name="UploadImage" id="UploadImage" hidden />
      {type === "main" ? (
        <label
          htmlFor="UploadImage"
          className={`w-full cursor-pointer h-full border-[1px] border-secondaryGray border-solid py-[3rem] px-4 rouned-md flex justify-center items-center
          ${isDragging && ' opacity-50  '}
          `}
        >
          <div  className="flex flex-col gap-[10px] items-center justify-center">
            <div className="w-[50px] h-[50px]">
              <Icon svg={WebsiteIcons["Camera"]} />
            </div>
            <h3 className="text-secondaryGray font-bold text-[16px]">
              {isDragging ? 'Drop' :label}
            </h3>
          </div>
        </label>
      ) : (
        ""
      )}
    </div>
  );
};
