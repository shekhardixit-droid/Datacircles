import { ChevronDown, ArrowRight } from "lucide-react";

const LOGO_URL =
  "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787721139/36b813d8bb9bc0141c6a096a0d4f0ae45d345450.png";

function Navbar() {
  return (
   <nav className="mx-auto flex h-[56px] w-[720px] items-center rounded-full bg-black px-[4px] font-inter">
      {/* DataCircles Logo */}
      <a
        href="/"
        className="ml-[8px] flex w-[190px] shrink-0 items-center"
      >
        <img
          src={LOGO_URL}
          alt="DataCircles"
          className="
            h-auto
            w-[180px]
            object-contain
            brightness-0
            invert
            opacity-[0.22]
          "
          fetchPriority="high"
          decoding="async"
        />
      </a>

      {/* Navigation */}
      <div className="flex h-full flex-1 items-center justify-center gap-[21px]">

        <a
          href="/"
          className="whitespace-nowrap text-[14px] font-normal leading-none text-white"
        >
          Home
        </a>

        <a
          href="/about"
          className="whitespace-nowrap text-[14px] font-normal leading-none text-white"
        >
          About
        </a>

        {/* Data Vault */}
        <button
          type="button"
          className="flex items-center gap-[5px] whitespace-nowrap text-[14px] font-normal leading-none text-white"
        >
          <span>Data Vault</span>

          <ChevronDown
            size={13}
            strokeWidth={1.8}
          />
        </button>

        <a
          href="/features"
          className="whitespace-nowrap text-[14px] font-normal leading-none text-white"
        >
          Features
        </a>

        <a
          href="/pricing"
          className="whitespace-nowrap text-[14px] font-normal leading-none text-white"
        >
          Pricing
        </a>

      </div>

      {/* Sign Up / In */}
      <a
        href="/signup"
        className="
          mr-[2px]
          flex
          h-[44px]
          w-[126px]
          shrink-0
          items-center
          justify-center
          gap-[7px]
          rounded-full
          bg-[#1683F7]
          text-[14px]
          font-semibold
          leading-none
          text-white
        "
      >
        <span>Sign Up/In</span>

        <ArrowRight
          size={17}
          strokeWidth={2}
        />
      </a>

    </nav>
  );
}

export default Navbar;
