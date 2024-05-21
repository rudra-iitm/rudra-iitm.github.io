

import Footer from '@/components/footer';
import { TechArchive } from '@/components/tech-archive';
import Spotlight, { SpotlightCard } from '@/components/ui/spotlight';
import { ArrowLeftIcon } from 'lucide-react';

const TechStack = () => {

  return (
    <Spotlight>
      <SpotlightCard className='bg-slate-950 min-h-screen px-4 xl:px-40 py-4 xl:py-20' >
        <div className="mb-4 hover:decoration-solid hover:underline">
            <a href={'/'} className="text-cyan-500 flex items-center">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Rudra Pratap Singh
            </a>    
        </div>
        <div className='text-gray-300 text-5xl font-bold mb-8' style={{ fontFamily: 'Arial, sans-serif'}}>
            My Tech Stacks
        </div>
        <TechArchive />
        <div className='pl-8 pr-8 md:pr-16 mt-32'>
          <Footer />
        </div>
      </SpotlightCard>
    </Spotlight>
  );
};

export default TechStack