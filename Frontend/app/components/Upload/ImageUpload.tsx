"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
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
  const [isDragging, setIsDragging] = useState(false);
  const [enterCount, setEnterCount] = useState(0);
  const [croppingImage, setCroppingImage] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<any>();
  const [crop, setCrop] = useState();
  const cropperRef = useRef<ReactCropperElement>(null);

  const uploadFileToCloudinary = async (files: FileList | File | null) => {

    if (files) {
      console.log('upload');
      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
      const uploadPreset =
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "";
        
      const formData = new FormData();
      if (files instanceof FileList) {
        for (let i = 0; i < files.length; i++) {
          if (files[i].type.startsWith("image/")) {
            formData.append("file", files[i]);
          }
        }
      } else {
        formData.append("file", files);
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
        toast.error("Something went wrong", {
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
      setEnterCount((prev) => prev + 1);
    }
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (enterCount === 1) {
      setIsDragging(false);
      setEnterCount((prev) => prev - 1);
    }
  };

  function handleImageFile(imageFile: File) {
    if (imageFile.type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(imageFile);
  
      if (cropperRef && cropperRef.current) {
        setPreviewImage(imageUrl);
        setCroppingImage(true);
      }
    } else {
      toast.error('Please upload an image', {
        position: 'top-center',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  }
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    setEnterCount(0);
  
    if (e.dataTransfer.files.length > 0) {
      handleImageFile(e.dataTransfer.files[0]);
    }
  };
  
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    setEnterCount(0);
  
    if (e.target.files && e.target.files.length > 0) {
      handleImageFile(e.target.files[0]);
    }
  };

  const handlecrop = () => {
    if (cropperRef.current) {
      const cropper = cropperRef.current.cropper;
      cropper.getCroppedCanvas().toBlob((blob) => {
        if (blob) {
          const croppedFile = new File([blob], "cropped-image.jpg", {
            type: "image/jpeg",
          });
          setCroppingImage(false);
          
          uploadFileToCloudinary(croppedFile);
        }
      }, "image/jpeg");
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
      className="h-full w-full cursor-pointer"
    >
      <div className={`${croppingImage ? "inline" : "hidden"} my-[10px] `}>
        <div className="h-full">
          <Cropper
            style={{ height: "100%", width: "100%" }}
            guides={false}
            src={previewImage}
            ref={cropperRef}
            initialAspectRatio={9 / 16}
            aspectRatio={9 / 16}
          />
        </div>
        <div
          className="w-full py-[15px] text-center my-[10px]  bg-purple text-white uppercase"
          onClick={handlecrop}
        >
          Crop
        </div>
      </div>

      {!croppingImage && (
        <React.Fragment>
          <input
            accept="image/*"
            onChange={handleOnChange}
            type="file"
            name="UploadImage"
            id="UploadImage"
            hidden
          />
          {type === "main" ? (
            <label
              htmlFor="UploadImage"
              className={`w-full cursor-pointer h-full border-[1px] border-secondaryGray border-solid py-[3rem] px-4 rouned-md flex justify-center items-center
        ${isDragging && " opacity-50  "}
        `}
            >
              <div className="flex flex-col gap-[10px] items-center justify-center">
                <div className="w-[50px] h-[50px]">
                  <Icon svg={WebsiteIcons["Camera"]} />
                </div>
                <h3 className="text-secondaryGray font-bold text-[16px]">
                  {isDragging ? "Drop" : label}
                </h3>
              </div>
            </label>
          ) : (
            ""
          )}
        </React.Fragment>
      )}
    </div>
  );
};
