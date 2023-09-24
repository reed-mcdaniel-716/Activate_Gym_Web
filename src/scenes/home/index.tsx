import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import ActivateTextDark from '@/assets/ActivateTextDark.png';
import Crunches from '@/assets/Crunches.jpg';
import ArrowUp from '@/assets/ArrowUp.png';
import ArrowRight from '@/assets/ArrowRight.png';
import ArrowDown from '@/assets/ArrowDown.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'>
      {/* IMAGE AND MAIN HEADER */}
      <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
        {/* MAIN HEADER */}
        <div className='z-10 mt-32 md:basis-3/5'>
          {/* HEADINGS */}
          <div className='md:-mt-20'>
            <div>
              <div>
                <img alt="home-page-text" src={ActivateTextDark} className='scale_activate_text_image'/>
              </div>
            </div>
            <p>An inclusive and supportive space to activate your potential.</p>
          </div>
          {/* ACTIONS */}
          <div>
            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
            <AnchorLink
              className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>
        {/* IMAGE */}
        <div>
          <img alt='home-page-graphic' src={Crunches} className='scale_homepage_image'/>
        </div>
      </div>
      {/* BANNER */}
      {isAboveMediumScreens && (
        <div>
          <div>
            <img alt='arrow-up' src={ArrowUp} className='scale_arrow_image'/>
            <img alt='arrow-right' src={ArrowRight} className='scale_arrow_image'/>
            <img alt='arrow-down' src={ArrowDown} className='scale_arrow_image'/>
          </div>
        </div>
      )}
    </section>
  )
};

export default Home;