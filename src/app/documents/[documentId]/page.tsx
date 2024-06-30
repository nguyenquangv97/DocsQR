import PdfRenderer from '@/components/PdfRenderer';
import { DocumentDetailPageProps } from '@/types';

const page = ({ params }: DocumentDetailPageProps) => {
  // TODO: pass in params.documentId to fetch the document
  const file = {
    url: 'https://quirky-chipmunk-852.convex.cloud/api/storage/0fb6b900-3754-4c95-a9f8-af539fc997bb',
  };

  return (
    <div className="flex-1 justify-between flex flex-col h-[calc(100vh-3.5rem)]">
      <div className="mx-auto w-full max-w-8xl grow lg:flex xl:px-2">
        {/* Left sidebar & main wrapper */}
        <div className="flex-1 xl:flex">
          <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
            {/* Main area */}
            <PdfRenderer url={file.url} />
          </div>
        </div>

        <div className="shrink-0 flex-[0.75] border-t border-gray-200 lg:w-96 lg:border-l lg:border-t-0">
          {/* TODO: QR Code */}
        </div>
      </div>
    </div>
  );
};

export default page;
