import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import LogoBlack from "@/assets/LogoBlack.png";
import HeaderText from "@/shared/HeaderText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mt-5 w-full rounded-lg bg-gray-20 px-5 py-3 placeholder-secondary-500 border-2 border-secondary-500`;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
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
            <span className="text-primary-500">Join Now</span> To Get Started
          </HeaderText>
          <p className="my-5">
            Contact us using the form below and we'll be sure to reach out
            within 24 hours.
            <br />
            We're excited to learn more about you and your goals.
            <br />
            Don't worry if you're not quite ready to get started, we'd stil love
            to hear from you!
            <br />
            We're happy to answer and and all questions about our classes,
            training programs, facilities, and anything else.
          </p>
        </motion.div>

        {/* FORM AND LOGO */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/289ae73650e896b5140cbf230fc780d1"
            >
              <input
                id="name"
                className={inputStyles}
                type="text"
                placeholder="NAME"
                aria-invalid={errors.name ? "true" : "false"}
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && (
                    <span role="alert" className="font-extrabold">
                      "This field is required."
                    </span>
                  )}
                  {errors.name.type === "maxLength" && (
                    <span role="alert" className="font-extrabold">
                      "The maximum character length for this field is 100."
                    </span>
                  )}
                </p>
              )}
              <input
                id="email"
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                aria-invalid={errors.email ? "true" : "false"}
                {...register("email", {
                  required: true,
                  maxLength: 100,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && (
                    <span role="alert" className="font-extrabold">
                      "This field is required."
                    </span>
                  )}
                  {errors.email.type === "pattern" && (
                    <span role="alert" className="font-extrabold">
                      "Invalid email address."
                    </span>
                  )}
                </p>
              )}
              <textarea
                id="message"
                className={inputStyles}
                rows={4}
                cols={40}
                placeholder="MESSAGE"
                aria-invalid={errors.message ? "true" : "false"}
                {...register("message", { required: true, maxLength: 2000 })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" && (
                    <span role="alert" className="font-extrabold">
                      "This field is required."
                    </span>
                  )}
                  {errors.message.type === "maxLength" && (
                    <span role="alert" className="font-extrabold">
                      "The maximum character length for this field is 2000."
                    </span>
                  )}
                </p>
              )}
              <button
                type="submit"
                className=" mt-5 rounded-lg bg-secondary-500 px-20 py-3 text-gray-20 transition duration-500"
              >
                Submit
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 0 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-activatetextprimary">
              <img
                className="w-full opacity-70"
                alt="dark-activate-gym-logo"
                src={LogoBlack}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
