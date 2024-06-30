import { Id } from '../../convex/_generated/dataModel';

export interface UserAccountNavProps {
  name: string | null;
  email: string;
  imgUrl: string;
}

export interface UploadDocumentProps {
  setDocument: React.Dispatch<React.SetStateAction<File | null>>
}

export interface DocumentCardProps {
  documentTitle: string;
  creationTime: number;
  documentUrl: string;
}

export interface PdfRendererProps {
  url: string;
}

export interface DocumentDetailPageProps {
  params: {
    fileid: string;
  };
}