import { DocumentCardProps } from '@/types';


const DocumentCard = ({
  documentTitle,
  creationTime,
  documentUrl,
}: DocumentCardProps) => {
  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col overflow-hidden justify-center items-center gap-2 border border-blue-1 w-60 m-6 p-6">
        <h1 className="text-lg font-semibold">{documentTitle}</h1>
        <p className="text-sm text-slate-300">{creationTime}</p>
        <a href={documentUrl} target="_blank" rel="noreferrer">
          <button className="bg-blue-1 text-white rounded-md p-2">
            View Document
          </button>
        </a>
        {/*  TODO: docviewer */}
      </figure>
    </div>
  );
};

export default DocumentCard;
