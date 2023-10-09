import { SelectedPage, ClassType } from "@/shared/types";
import OutsideSquat from "@/assets/OutsideSquat.jpg";
import PersonalTraining from "@/assets/PersonalTraining.jpg";
import StrengthTraining from "@/assets/StrengthTraining.jpg";
import { motion } from "framer-motion";
import HeaderText from "@/shared/HeaderText";
import Class from "./Class";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const classes: Array<ClassType> = [
  {
    name: "Strength Training",
    description: "strength training",
    image: StrengthTraining,
  },
  {
    name: "Conditioning Training",
    description: "conditioning training",
    image: OutsideSquat,
  },
  {
    name: "1-on-1 Personal Training",
    description: "1-on-1 personal training",
    image: PersonalTraining,
  },
];

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HeaderText>What We Offer</HeaderText>
            <p className="py-5">
              We offer a variety of strength and conditioning focused classes
              for folx of all level. <br />
              Along with our classes, members have access to 1-on-1 personal
              training options.
            </p>
          </div>
        </motion.div>
        <div>
          <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
            <ul className="w-[940px] whitespace-nowrap">
              {classes.map((item, index) => {
                return (
                  <Class
                    key={`${item.name}-${index}`}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
