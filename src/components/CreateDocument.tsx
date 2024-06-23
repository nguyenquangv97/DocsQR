'use client';
import UploadDocument from '@/components/UploadDocument';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUploadFiles } from '@/lib/useUploadFiles';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Loader2 } from 'lucide-react';
import { useToast } from './ui/use-toast';

const CreateDocument = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [document, setDocument] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const { isUploading, isCompleted, uploadFile } = useUploadFiles();
  const handleUploadDocument = async () => {
    uploadFile(fileName, document);
  };

  useEffect(() => {
    console.log(isCompleted);
    if (isCompleted) {
      toast({
        title: 'Document uploaded successfully! Redirecting to dashboard...',
      });
      setTimeout(() => {
        router.push('/');
      }, 2000);
    }
  }, [isCompleted]);

  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Upload new document</CardTitle>
        <CardDescription>
          Give your PDF a unique name and upload it in a snap!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label className="pb-2" htmlFor="name">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Name of your document"
                onChange={(e) => setFileName(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label className="pb-2" htmlFor="framework">
                PDF Document
              </Label>
              <UploadDocument setDocument={setDocument} />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button
          className="bg-blue-1"
          onClick={handleUploadDocument}
          disabled={isUploading}
        >
          {isUploading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            'Upload Document'
          )}
        </Button>
      </CardFooter>
    </Card>
  );
  // return (

  // <Card>
  //   <UploadDocument setDocument={setDocument} />
  //   <Button onClick={handleUploadDocument}>Upload Document</Button>
  // </Card>
  // );
};

export default CreateDocument;
