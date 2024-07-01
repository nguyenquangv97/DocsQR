'use client';

import PdfRenderer from '@/components/PdfRenderer';
import { DocumentDetailPageProps } from '@/types';
import React from 'react';
import ReactDOM from 'react-dom';
import QRCode from 'react-qr-code';
import { Authenticated, useQuery } from 'convex/react';
import { api } from '@/../convex/_generated/api';
import DocumentDetail from '@/components/documents/DocumentDetail';

const page = ({ params: { documentId } }: DocumentDetailPageProps) => {
  // TODO: pass in params.documentId to fetch the document
  // const file = {
  //   url: 'https://marvelous-hummingbird-584.convex.cloud/api/storage/c6458ea9-84b6-4c30-aabd-716a13341d90',
  // };

  // const document = useQuery(api.documents.getDocumentById, { documentId });

  return (
    <Authenticated>
      <DocumentDetail documentId={documentId} />
    </Authenticated>
  );
};

export default page;
