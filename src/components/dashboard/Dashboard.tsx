
import { useQuery } from 'convex/react';
import CreateNewDocument from '../../components/CreateDocument';
import LeftSideBar from './LeftSideBar';
import { api } from '../../../convex/_generated/api';
import DocumentCard from '@/components/documents/DocumentCard';
const Dashboard = () => {
  // TODO: fetch all documents
  const documents = useQuery(api.documents.getDocuments);
  return (
    <div className="relative flex flex-col border border-red-400">
      <main className="relative flex">
        <LeftSideBar />
        <section className="flex flex-1 flex-col p-4 sm:px-14">
          <div className="mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
            <h1 className="mb-3 font-bold text-5xl text-gray-900">My Files</h1>
          </div>
          {/* <div>
            <CreateNewDocument />
          </div> */}
          <div className="flex flex-wrap">
            {documents ? (
              documents.map((doc) => (
                <DocumentCard
                  key={doc._id}
                  documentTitle={doc.documentName}
                  creationTime={doc._creationTime}
                  documentUrl={doc.documentUrl}

                />
              ))
            ) : (
              <p>Loading...</p>
            )}
            <h1>Test</h1>
            {/* {testUrl} */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
