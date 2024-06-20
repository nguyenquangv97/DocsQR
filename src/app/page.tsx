import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import LeftPanel from '@/components/LeftPanel';
import RightPanel from '@/components/RightPanel';
const Home = () => {
  return (
    <MaxWidthWrapper>
      <div className="w-full h-full flex justify-center items-center">
        <section className="grid grid-cols-1 lg:grid-cols-2 sm:gap-20 max-sm:gap-20 justify-center items-center w-full h-[720px]">
          <div className="col-span-1 flex items-center px-20 max-lg:mt-20">
            <LeftPanel />
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <RightPanel />
          </div>
        </section>
      </div>
    </MaxWidthWrapper>
  );
};

export default Home;
