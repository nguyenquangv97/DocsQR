'use client';

import PdfRenderer from '@/components/PdfRenderer';
import { DocumentDetailProps } from '@/types';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import QRCode from 'react-qr-code';
import { Authenticated, useQuery } from 'convex/react';
import { api } from '@/../convex/_generated/api';

const DocumentDetail = (documentId: DocumentDetailProps) => {
  // TODO: pass in params.documentId to fetch the document
  // const file = {
  //   url: 'https://marvelous-hummingbird-584.convex.cloud/api/storage/c6458ea9-84b6-4c30-aabd-716a13341d90',
  // };

  const [documentUrl, setDocumentUrl] = useState<string>();

  async function fetchDocument() {
    const document = await useQuery(api.documents.getDocumentById, documentId);
    if (document) {
      setDocumentUrl(document.documentUrl);
    }
  }

  useEffect(() => {
    fetchDocument();
  }, []);

  // const document = useQuery(api.documents.getDocumentById, documentId);

  return (
    <div className="flex-1 justify-between flex flex-col h-[calc(100vh-3.5rem)]">
      <div className="mx-auto w-full max-w-8xl grow lg:flex xl:px-2">
        {/* Left sidebar & main wrapper */}
        <div className="flex-1 xl:flex">
          <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
            {/* Main area */}
            <PdfRenderer url={documentUrl!} />
          </div>
        </div>

        <div className="flex justify-center items-center shrink-0 flex-[0.75] border-t border-gray-200 lg:w-96 lg:border-l lg:border-t-0">
          <QRCode value={documentUrl!} />
        </div>
      </div>
    </div>
  );
};

export default DocumentDetail;
