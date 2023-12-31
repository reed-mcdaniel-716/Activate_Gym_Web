import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import ActivateTextDark from "@/assets/ActivateTextDark.png";
import Crunches from "@/assets/Crunches.jpg";
import ArrowUp from "@/assets/ArrowUp.png";
import ArrowRight from "@/assets/ArrowRight.png";
import ArrowDown from "@/assets/ArrowDown.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-left-20  before:-top-20 before:z-[-1] md:before:content-activatetextprimary">
                <img alt="home-page-text" src={ActivateTextDark} />
              </div>
            </div>
            <p className="text:sm mt-8 font-semibold">
              An inclusive and supportive space to activate your potential.
              <br />
              We are here to support your mental and physical health. <br />A
              wellness community for you.
            </p>
          </motion.div>
          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img
            alt="home-page-graphic"
            src={Crunches}
            className="scale_homepage_image"
          />
        </div>
      </motion.div>
      {/* BANNER */}
      {isAboveMediumScreens && (
        <div className="h-[170px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="w-7/8 flex items-center justify-center gap-60">
              <img alt="arrow-up" src={ArrowUp} className="scale_arrow_image" />
              <img
                alt="arrow-right"
                src={ArrowRight}
                className="scale_arrow_image"
              />
              <img
                alt="arrow-down"
                src={ArrowDown}
                className="scale_arrow_image"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
