import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ImageModalProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageModal = ({ src, alt, className = "" }: ImageModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          src={src}
          alt={alt}
          className={`cursor-pointer hover:opacity-90 transition-opacity ${className}`}
        />
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-none">
        <DialogHeader>
          <DialogTitle className="sr-only">{alt}</DialogTitle>
        </DialogHeader>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain"
        />
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;