

const footerSections = [
  {
    title: "Product",
    links: [
      { label: "CRM", route: "/product-crm" },
      { label: "Lead capture", route: "" },
      { label: "Follow-ups & tasks", route: "" },
      { label: "Invoicing & billing", route: "/invoicing-billing" },
      { label: "Payments", route: "/payment1" },
      { label: "Integrations", route: "" },
      { label: "Platform overview", route: "/platform-overview" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Retailers & shops", route: "/solutions" },
      { label: "Agencies & services", route: "" },
      { label: "Consultants & freelancers", route: "" },
      { label: "Distributors & wholesale", route: "" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", route: "/blogs" },
      { label: "Guides & learn", route: "/how-to-guide" },
      { label: "Help centre", route: "/freetools" },
      { label: "Free tools", route: "/freetools" },
      { label: "Customer stories", route: "/customer-stories" },
      { label: "Comparisons", route: "/comparison" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", route: "/about" },
      { label: "Security & Compliance", route: "/security&compliance" },
      { label: "Careers", route: "/careers" },
      { label: "Contact us", route: "/contact" },
      { label: "Referral", route: "/referral" },
    ],
  },
  {
    title: "Legal",
    links: ["Terms & Conditions", "Privacy Policy", "Refund & Cancellation"],
  },
];

const FacebookIcon = () => (
  <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-current font-[Arial,sans-serif] text-[13px] font-bold leading-none">
    f
  </span>
);

const InstagramIcon = () => (
  <span className="relative flex h-5 w-5 items-center justify-center">
    <span className="relative box-border h-[18px] w-[18px] rounded-[5px] border-2 border-current">
      <span className="absolute left-1/2 top-1/2 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-current" />
      <span className="absolute right-[2px] top-[2px] h-[3px] w-[3px] rounded-full bg-current" />
    </span>
  </span>
);

const LinkedInIcon = () => (
  <span className="flex h-5 w-5 items-center justify-center rounded-[1px] border-[1.5px] border-current font-[Arial,sans-serif] text-[11px] font-bold leading-none">
    in
  </span>
);

const Footer = () => {
  return (
    <footer className="relative w-[100%] overflow-hidden bg-black text-white">
      <div className="mx-auto w-full max-w-[1440px] pb-10 pt-[100px] font-inter sm:px-8 lg:px-6">
        {/* TOP FOOTER */}
        <div className="grid grid-cols-2 gap-x-5 gap-y-[45px] min-[421px]:gap-x-7 min-[421px]:gap-y-[45px] lg:grid-cols-3 lg:gap-y-[55px] xl:grid-cols-[minmax(330px,2fr)_repeat(5,minmax(120px,1fr))] xl:gap-x-[42px]">
          {/* BRAND / CONTACT */}
          <div className="col-span-2 min-w-0 pr-0 lg:col-span-full xl:col-span-1 xl:pr-10">
            {/* Logo image */}
            <div className="mb-6 flex w-fit items-center sm:mb-8">
              <img
                src="https://res.cloudinary.com/tpxo8m6a/image/upload/v1787721139/36b813d8bb9bc0141c6a096a0d4f0ae45d345450.png"
                alt="DataCircles"
                className="h-auto w-[160px] object-contain sm:w-[180px]"
              />
            </div>

            {/* Description */}
            <p className="m-0 max-w-[395px] whitespace-pre-line text-[14px] font-normal leading-[1.45] text-[#F1F1F1] sm:text-base">
              {"OFFICE\n\nRegd. Office No. 721, 7th Floor,\nCentura Square IT Park, Road No. 27,\nWagle Estate, Thane 400604,\nMaharashtra."}
            </p>

            {/* Phone */}
            <p className="mt-6 text-[14px] leading-[1.4] text-[#F1F1F1] sm:mt-[27px] sm:text-base">
              +91 98922 97764
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-[22px] sm:mt-7">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white no-underline transition-colors duration-200 hover:text-[#0085FF]"
              >
                <FacebookIcon />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-5 w-5 items-center justify-center text-white no-underline transition-colors duration-200 hover:text-[#0085FF]"
              >
                <InstagramIcon />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="text-white no-underline transition-colors duration-200 hover:text-[#0085FF]"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* FOOTER COLUMNS */}
          {footerSections.map((section) => (
            <div className="min-w-0" key={section.title}>
              <h3 className="mb-5 text-[15px] font-medium leading-[1.2] text-white sm:text-lg">
                {section.title}
              </h3>

              <div className="flex flex-col gap-3 sm:gap-[14px]">
                {section.links.map((link, index) => {
                  const isRouteLink =
                    typeof link === "object" &&
                    ["Product", "Solutions", "Resources", "Company"].includes(
                      section.title
                    );

                  return (
                    <a
                      href={isRouteLink ? link.route : "#"}
                      key={`${section.title}-${index}`}
                      className="text-[12px] font-normal leading-[1.25] text-[#727687] no-underline transition-colors duration-200 hover:text-[#0085FF] sm:text-[13px] lg:text-[16px]"
                    >
                      {isRouteLink ? (
                        <>
                          <span>{link.label}</span>
                          {link.sub && (
                            <span className="ml-1 text-inherit font-normal">
                              {link.sub}
                            </span>
                          )}
                        </>
                      ) : (
                        link
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="mt-[60px] border-t border-[rgba(255,255,255,0.13)] lg:mt-[87px] xl:ml-[276px] xl:w-[calc(100%-540px)]" />

        {/* COPYRIGHT */}
        <div className="mt-[26px] w-full text-center text-[13px] font-normal leading-[1.4] text-[#5D6271] lg:mt-9 lg:text-base xl:ml-[276px] xl:w-[calc(100%-540px)]">
          © 2026 DATACIRCLES. All rights reserved. Made in India
        </div>

        {/* LARGE BRAND IMAGE */}
        <div className="mt-8  -mb-10 w-[100%] overflow-hidden select-none pointer-events-none sm:mt-8 lg:mt-11 xl:mt-14">
          <img
            src="/src/assets/DataCircles®.svg"
            alt="DataCircles"
            className="block h-auto w-full object-contain"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
