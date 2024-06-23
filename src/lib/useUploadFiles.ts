'use client';
import { useEffect, useState } from 'react';
import { api } from '@/../convex/_generated/api';
import { useMutation } from 'convex/react';
import { useToast } from '@/components/ui/use-toast';

// Custom hook to manage file upload state
export const useUploadFiles = () => {
  // State to track if the file is currently being uploaded
  const [isUploading, setIsUploading] = useState<boolean>(false);

  // State to track if the file upload is completed
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // State to track the current file being uploaded

  const { toast } = useToast();
  // API call to upload file
  const generateUploadUrl = useMutation(api.documents.generateUploadUrl);
  const createDocument = useMutation(api.documents.createDocument);
  // upload file function
  const uploadFile = async (fileName: string, file: File | null) => {
    setIsUploading(true);
    setIsCompleted(false);

    try {
      const uploadUrl = await generateUploadUrl();
      const result = await fetch(uploadUrl, {
        method: 'POST',
        headers: { 'Content-Type': file!.type },
        body: file,
      });

      if (result.ok) {
        const { storageId } = await result.json();
        await createDocument({
          documentTitle: file!.name,
          documentName: fileName,
          documentStorageId: storageId,
          documentUrl: uploadUrl,
        });

        setIsCompleted(true);
        return uploadFile;
      }
    } catch (error) {
      console.log(error);
      toast({
        title: 'Error Uploading Document',
        variant: 'destructive',
      });
    } finally {
      setIsUploading(false);
    }
    return false;
  };

  return { isUploading, isCompleted, uploadFile };
};
