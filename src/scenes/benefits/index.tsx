import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HeaderText from "@/shared/HeaderText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import Boxing from "@/assets/Boxing.jpg";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Thoughtfully Designed Spaces",
    description:
      "Our space is designed to be accessible to all members of our community. Restrooms and changing rooms are private and gender-neutral. Secure storage and hyrdation stations are available at no extra cost.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Certified and Knowledgeble Trainers",
    description:
      "All of our trainers are certified by accedited institutions. Each trainer has unique and specialized knowledge in their domain of expertise.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Variety of Classes and Activities",
    description:
      "Find new passions, learn new skills, and keep up with your favorite movement practices in any of our many guided activity sessions.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HeaderText>More than just a gym</HeaderText>
          <p className="my-5 text-sm">
            We provide various levels of health and wellness support for our
            community.
            <br />
            Train on your own, in a group, or 1-on-1 with a personal trainer.
            <br />
            Our certified and knowledgeble staff is always available to help.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: "some" }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => {
            return (
              <Benefit
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                setSelectedPage={setSelectedPage}
              />
            );
          })}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="scale_benefits_image mx-auto"
            alt="benefits-page-graphic"
            src={Boxing}
          />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <motion.div
              className="mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <HeaderText>
                Building Healthy{" "}
                <span className="text-primary-500">Community</span>
              </HeaderText>
            </motion.div>
            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Activate Gym is an inclusive space promoting health and wellness
                in it's many forms. From physical health through movement,
                mental health through guided workshops, and emotional support of
                community. Folx at all stages of their health and wellness
                practice are welcome here.
              </p>
              <p className="mb-5">
                We provide every member of our queer BIPOC community with the
                resources they to make their journey towards greater health
                safer and happier.
              </p>
            </motion.div>
            {/* BUTTON */}
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
