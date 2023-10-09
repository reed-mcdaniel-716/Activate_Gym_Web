import LogoColor from "@/assets/LogoColor.png";

const Footer = () => {
  return (
    <footer className="bg-gray-20 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img
            src={LogoColor}
            alt="color-activate-gym-logo"
            className="scale_footer_logo_image"
          />
          <p className="py-5">
            Health and wellness space for all BIPOC queer folx
          </p>
          <p>&copy; Activate Gym</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Follow Us</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">(555)-555-5555</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
