import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import UploadDocument from '@/components/UploadDocument';
import { Card, CardContent } from '@/components/ui/card';
import CreateNewDocument from '../../components/CreateDocument';

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center w-full h-full border border-red-1">

      <CreateNewDocument />
    </div>
  )
  
  
};

export default Dashboard;
