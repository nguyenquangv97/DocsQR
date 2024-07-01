'use client';

import PdfRenderer from '@/components/PdfRenderer';
import { DocumentDetailProps } from '@/types';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import QRCode from 'react-qr-code';
import { Authenticated, useQuery } from 'convex/react';
import { api } from '@/../convex/_generated/api';

const DocumentDetail = (documentId: DocumentDetailProps) => {
  const document = useQuery(api.documents.getDocumentById, documentId);
  return (
    <div className="flex-1 justify-between flex flex-col h-[calc(100vh-3.5rem)]">
      <div className="mx-auto w-full max-w-8xl grow lg:flex xl:px-2">
        {/* Left sidebar & main wrapper */}
        <div className="flex-1 xl:flex">
          <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
            {/* Main area */}
            <PdfRenderer url={document ? document.documentUrl : ''} />
          </div>
        </div>
        <div className="flex justify-center items-center shrink-0 flex-[0.75] border-t border-gray-200 lg:w-96 lg:border-l lg:border-t-0">
          <QRCode value={document ? document.documentUrl : ''} />
        </div>
      </div>
    </div>
  );
};

export default DocumentDetail;
