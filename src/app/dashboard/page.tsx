'use client';
import { Authenticated, useQuery } from 'convex/react';
import CreateNewDocument from '../../components/CreateDocument';
import LeftSideBar from './LeftSideBar';
import { api } from '../../../convex/_generated/api';
import Dashboard from '@/components/dashboard/Dashboard';
const DashboardPage = () => {
  // TODO: fetch all documents
  return (
    <Authenticated>
      <div className="relative flex flex-col border border-red-400">
        <main className="relative flex">
          <LeftSideBar />
          <Dashboard />
        </main>
      </div>
    </Authenticated>
  );
};

export default DashboardPage;
