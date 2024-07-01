'use client';
import { Authenticated, useQuery } from 'convex/react';
import { api } from '../../../convex/_generated/api';
import DocumentCard from '@/components/documents/DocumentCard';
import CreateNewDocument from '@/components/CreateDocument';
const Dashboard = () => {
  // TODO: fetch all documents
  const documents = useQuery(api.documents.getDocuments);
  return (
    <section className="flex flex-1 flex-col p-4 sm:px-14">
      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="mb-3 font-bold text-5xl text-gray-900">My Files</h1>
      </div>
      <div>
        <CreateNewDocument />
      </div>
      <div className="flex flex-wrap">
        {documents ? (
          documents.map((doc) => (
            <DocumentCard
              key={doc._id}
              documentId={doc._id}
              documentTitle={doc.documentName}
              creationTime={doc._creationTime}
              documentUrl={doc.documentUrl}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
        {/* {testUrl} */}
      </div>
    </section>
  );
};

export default Dashboard;
