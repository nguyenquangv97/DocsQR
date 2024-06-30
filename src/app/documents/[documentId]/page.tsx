import PdfRenderer from '@/components/PdfRenderer';
import { DocumentDetailPageProps } from '@/types';
import React from 'react';
import ReactDOM from 'react-dom';
import QRCode from 'react-qr-code';

const page = ({ params }: DocumentDetailPageProps) => {
  // TODO: pass in params.documentId to fetch the document
  const file = {
    url: 'https://marvelous-hummingbird-584.convex.cloud/api/storage/c6458ea9-84b6-4c30-aabd-716a13341d90',
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
          <QRCode value={file.url} />
        </div>
      </div>
    </div>
  );
};

export default page;
