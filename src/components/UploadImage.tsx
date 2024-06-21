'use client';
import { Input } from './ui/input';
import { Label } from './ui/label';

// upload file imports
import { useMutation } from 'convex/react';
import { UploadDropzone, UploadFileResponse } from '@xixixao/uploadstuff/react';
import '@xixixao/uploadstuff/react/styles.css';
import { api } from '../../convex/_generated/api';

const UploadImage = () => {
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  );
};

export default UploadImage;
