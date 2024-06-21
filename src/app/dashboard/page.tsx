import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import UploadImage from '@/components/UploadImage';

const Dashboard = () => {


  return (
    <MaxWidthWrapper>
      <div className="py-20">Dashboard</div>
      <UploadImage />
    </MaxWidthWrapper>
  );
};

export default Dashboard;
