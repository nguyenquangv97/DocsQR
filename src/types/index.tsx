export interface UserAccountNavProps {
  name: string | null;
  email: string;
  imgUrl: string;
}

export interface UploadDocumentProps {
  setDocument: React.Dispatch<React.SetStateAction<File | null>>
}