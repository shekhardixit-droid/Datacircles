
import { useState } from "react";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";

const LOGO_URL =
  "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787721139/36b813d8bb9bc0141c6a096a0d4f0ae45d345450.png";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="relative z-50 w-full">
      <nav
        className="
          mx-auto
          flex
          h-[56px]
          w-[720px]
          max-w-[calc(100%-16px)]
          items-center
          rounded-full
          bg-black
          px-[4px]
          font-inter
          max-[600px]:h-[52px]
          max-[400px]:h-[50px]
          max-[360px]:max-w-[calc(100%-10px)]
        "
      >
        {/* DataCircles Logo */}
        <a
          href="/"
          className="
            ml-[8px]
            flex
            w-[190px]
            shrink-0
            items-center
            max-[600px]:ml-[7px]
            max-[600px]:w-auto
          "
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
              max-[600px]:w-[145px]
              max-[480px]:w-[130px]
              max-[400px]:w-[120px]
            "
            fetchPriority="high"
            decoding="async"
          />
        </a>

        {/* Desktop Navigation */}
        <div
          className="
            flex
            h-full
            flex-1
            items-center
            justify-center
            gap-[21px]
            max-[600px]:hidden
          "
        >
          <a
            href="/"
            className="
              whitespace-nowrap
              text-[14px]
              font-normal
              leading-none
              text-white
            "
          >
            Home
          </a>

          <a
            href="/about"
            className="
              whitespace-nowrap
              text-[14px]
              font-normal
              leading-none
              text-white
            "
          >
            About
          </a>

          <button
            type="button"
            className="
              flex
              items-center
              gap-[5px]
              whitespace-nowrap
              text-[14px]
              font-normal
              leading-none
              text-white
            "
          >
            <span>Data Vault</span>

            <ChevronDown
              size={13}
              strokeWidth={1.8}
            />
          </button>

          <a
            href="/features"
            className="
              whitespace-nowrap
              text-[14px]
              font-normal
              leading-none
              text-white
            "
          >
            Features
          </a>

          <a
            href="/pricing"
            className="
              whitespace-nowrap
              text-[14px]
              font-normal
              leading-none
              text-white
            "
          >
            Pricing
          </a>
        </div>

        {/* Desktop Sign Up */}
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
            max-[600px]:hidden
          "
        >
          <span>Sign Up/In</span>

          <ArrowRight
            size={17}
            strokeWidth={2}
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={
            mobileOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={mobileOpen}
          onClick={() =>
            setMobileOpen((open) => !open)
          }
          className="
            ml-auto
            mr-[6px]
            hidden
            h-[44px]
            w-[44px]
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#1683F7]
            text-white
            transition
            hover:bg-[#087de4]
            max-[600px]:flex
            max-[480px]:mr-[5px]
            max-[480px]:h-[40px]
            max-[480px]:w-[40px]
            max-[400px]:h-[38px]
            max-[400px]:w-[38px]
          "
        >
          {mobileOpen ? (
            <X
              size={20}
              strokeWidth={2}
              className="
                max-[480px]:h-[18px]
                max-[480px]:w-[18px]
              "
            />
          ) : (
            <Menu
              size={21}
              strokeWidth={2}
              className="
                max-[480px]:h-[19px]
                max-[480px]:w-[19px]
              "
            />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div
          className="
            absolute
            left-1/2
            top-[64px]
            w-[calc(100%-24px)]
            max-w-[360px]
            -translate-x-1/2
            overflow-hidden
            rounded-[20px]
            bg-black
            p-3
            shadow-2xl
            min-[601px]:hidden
            max-[400px]:top-[58px]
            max-[400px]:w-[calc(100%-16px)]
          "
        >
          <div className="flex flex-col gap-1">
            <a
              href="/"
              onClick={() => setMobileOpen(false)}
              className="
                rounded-xl
                px-4
                py-3
                text-[14px]
                text-white
                transition
                hover:bg-white/10
              "
            >
              Home
            </a>

            <a
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="
                rounded-xl
                px-4
                py-3
                text-[14px]
                text-white
                transition
                hover:bg-white/10
              "
            >
              About
            </a>

            <button
              type="button"
              className="
                flex
                w-full
                items-center
                justify-between
                rounded-xl
                px-4
                py-3
                text-left
                text-[14px]
                text-white
                transition
                hover:bg-white/10
              "
            >
              <span>Data Vault</span>

              <ChevronDown
                size={15}
                strokeWidth={1.8}
              />
            </button>

            <a
              href="/features"
              onClick={() => setMobileOpen(false)}
              className="
                rounded-xl
                px-4
                py-3
                text-[14px]
                text-white
                transition
                hover:bg-white/10
              "
            >
              Features
            </a>

            <a
              href="/pricing"
              onClick={() => setMobileOpen(false)}
              className="
                rounded-xl
                px-4
                py-3
                text-[14px]
                text-white
                transition
                hover:bg-white/10
              "
            >
              Pricing
            </a>

            <a
              href="/signup"
              onClick={() => setMobileOpen(false)}
              className="
                mt-2
                flex
                h-[44px]
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#1683F7]
                text-[14px]
                font-semibold
                text-white
                transition
                hover:bg-[#087de4]
              "
            >
              <span>Sign Up/In</span>

              <ArrowRight
                size={17}
                strokeWidth={2}
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

