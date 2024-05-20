import About from '@/components/about';
import Bio from '@/components/bio';
import Spotlight, { SpotlightCard } from '@/components/ui/spotlight';

const Homepage = () => {

  return (
    <Spotlight>
      <SpotlightCard className='bg-slate-950'>
        <div className='grid grid-cols-2 gap-5'>
            <Bio />
            <div className='bg-slate-950 min-h-lvh min-w-full overflow-y-scroll'>
                <About className='mt-20 pl-8 pr-16'/>
            </div>
        </div>
    </SpotlightCard>
    </Spotlight>
  )
}

export default Homepage