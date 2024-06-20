import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const LeftPanel = () => {
  return (
    <div>
      <h1 className="font-bold text-gray-900 text-5xl leading-[4rem]">
        Instantly Transform{' '}
        <span className="inline-block bg-gradient-to-r from-pink-1 to-purple-1 text-transparent bg-clip-text">
          PDFs
        </span>{' '}
        into <span className="inline-block bg-gradient-to-r from-purple-2 to-purple-3 text-transparent bg-clip-text">QR</span> Codes
      </h1>
      <p className="mt-10 text-gray-600 text-lg leading-9">
        Effortlessly convert any PDF into a secure QR code with just a click.
        Simplify sharing and streamline access across devices instantly!
      </p>
      <Button className="mt-10 border border-blue-1 bg-blue-1 text-xl shadow-lg h-13 rounded-lg">
        Get Started <ArrowRight className="ml-1 h-5 w-5" />{' '}
      </Button>
    </div>
  );
};

export default LeftPanel;
