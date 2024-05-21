import About from '@/components/about';
import Bio from '@/components/bio';
import Experience from '@/components/experience';
import Footer from '@/components/footer';
import Projects from '@/components/projects';
import Spotlight, { SpotlightCard } from '@/components/ui/spotlight';
import { useEffect, useRef } from 'react';

const Homepage = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const bioElement = document.querySelector('.bio-component');
    if (bioElement) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const handleScroll = (event: any) => {
        if (scrollContainerRef.current) {
          const scrollContainer = scrollContainerRef.current as HTMLElement; // Add type assertion
          scrollContainer.scrollTop += event.deltaY;
        }
      };
      bioElement.addEventListener('wheel', handleScroll);

      // Cleanup event listener on component unmount
      return () => {
        bioElement.removeEventListener('wheel', handleScroll);
      };
    }
  }, []);

  return (
    <Spotlight>
      <SpotlightCard className='bg-slate-950'>
        <div className='md:grid md:grid-cols-2 md:min-h-screen'>
          <div>
            <Bio className='bio-component md:fixed md:top-0 md:left-0 md:h-full md:w-1/2' />
          </div>
          <div ref={scrollContainerRef} className='col-span-1 bg-slate-950 md:h-screen md:overflow-y-scroll'>
            <div id='about' />
              <About className='md:mt-20 mb-32 pl-8 pr-8 md:pr-16' />
            <div className='px-8 md:pr-16 mb-32'>
            <div id='experience' />
              <Experience />
            </div>
            <div className='pl-8 pr-8 md:pr-16 mb-20'>
              <div id='projects' />
                <Projects />
            </div>
            <div className='pl-8 pr-8 md:pr-16 mb-8'>
              <Footer />
            </div>
          </div>
        </div>
      </SpotlightCard>
    </Spotlight>
  );
};

export default Homepage;