'use client';

import Dropzone from 'react-dropzone';
import { useDropzone } from 'react-dropzone';
import { useToast } from './ui/use-toast';
import { Cloud, File, Loader2 } from 'lucide-react';
import { UploadDocumentProps } from '@/types';

const UploadDocument = ({ setDocument }: UploadDocumentProps) => {
  const { toast } = useToast();
  const _ = useDropzone({
    accept: {
      'application/pdf': ['application/pdf'],
    },
  });
  return (
    <Dropzone
      accept={{ 'application/pdf': ['application/pdf'] }}
      onDropRejected={() => {
        toast({
          title: 'Only PDF files are allowed',
          variant: 'destructive',
        });
      }}
      multiple={false}
      onDrop={(acceptedFiles) => {
        setDocument(acceptedFiles[0]);
      }}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => (
        <div
          {...getRootProps()}
          className="border h-64 m-4 border-dashed border-gray-300 rounded-lg"
        >
          <div className="flex items-center justify-center h-full w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Cloud className="h-6 w-6 text-zinc-500 mb-2" />
                <p className="mb-2 text-sm text-zinc-700">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-zinc-500">PDF (up to 4MB)</p>
              </div>

              {acceptedFiles && acceptedFiles[0] ? (
                <div className="max-w-xs bg-white flex items-center rounded-md overflow-hidden outline outline-[1px] outline-zinc-200 divide-x divide-zinc-200">
                  <div className="px-3 py-2 h-full grid place-items-center">
                    <File className="h-4 w-4 text-blue-500" />
                  </div>
                  <div className="px-3 py-2 h-full text-sm truncate">
                    {acceptedFiles[0].name}
                  </div>
                </div>
              ) : null}
              <input
                {...getInputProps}
                type="file"
                id="dropzone-file"
                className="hidden"
              />
            </label>
          </div>
        </div>
      )}
    </Dropzone>
  );
};

export default UploadDocument;
