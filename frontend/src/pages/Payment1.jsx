import Navbar from "../components/Navbar";
import React from "react";
import FourCards from "../components/payments/FourCards";
import Explore from "../components/payments/Explore";
import CTA from "../components/invoicing-billing/CTA";
import TrustedAndUsedBy from "../components/TrustedAndUsedBy";

const Payment1 = () => {
  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      
      {/* Top Strip */}
      <div className="mb-5 h-[18px] w-full bg-[#ABABAB]" />

      {/* Navbar */}
      <Navbar />

      {/* Main Page */}
      <main className="w-full">
        
        {/* Hero / Payment Section */}
        <section className="flex h-auto w-full flex-col items-center mt-12 md:mt-16 lg:mt-20 px-4 sm:px-6">
          
          {/* Top Pill */}
          <div className="flex h-[25px] w-[160px] items-center justify-start gap-2 rounded-full px-3 bg-[#EBE6E033]">
            <span className="h-[7px] w-[7px] rounded-full bg-[#0085FF]" />

            <span className="font-inter text-[11px] font-normal text-black">
              Payment Infrastructure
            </span>
          </div>

          {/* Main Text */}
          <div className="mt-6 flex h-auto w-full max-w-[635px] items-center justify-center text-center">
            <h1 className="font-inter text-[32px] sm:text-[40px] md:text-[48px] font-semibold leading-[1.1] text-black">
              Know exactly who
              <br />
             owes you what.
            </h1>
          </div>

          {/* Description */}
          <div className="mt-3 flex h-auto w-full max-w-[635px] items-center justify-center text-center">
            <p className="font-inter text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[20px] text-black/60">
           Track every invoice from sent to settled, let reminders do the chasing,
           <br className="hidden sm:block"/>
             and see your money at a glance instead of guessing.
            </p>
          </div>

          {/* Two Pills */}
          <div className="mt-5 flex h-auto w-full max-w-[307px] flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
           <button
  className="flex h-[49px] w-full sm:w-[149px] items-center justify-center rounded-full bg-[#E5EDF5] font-inter text-[14px] font-medium text-black transition-colors duration-200 hover:bg-[#0085FF] hover:text-white"
>
  Get Started
</button>

<button
  className="flex h-[49px] w-full sm:w-[149px] items-center justify-center rounded-full bg-[#E5EDF5] font-inter text-[14px] font-medium text-black transition-colors duration-200 hover:bg-[#0085FF] hover:text-white"
>
  Learn More
</button>

          </div>

          {/* Bottom Text */}
          <div className="mt-5 flex h-auto w-full max-w-[291px] items-center justify-center text-center">
            <p className="font-inter text-[11px] sm:text-[12px] whitespace-normal sm:whitespace-nowrap font-normal text-black/50">
              7-day free trial · No card required · GST-ready · Works on any device
            </p>
          </div>

        </section>

 {/* Image */}
<div className="mt-8 w-full">
  <img
    src="https://ik.imagekit.io/qiap0iq38/DATACIRCLES_PROJECT/PAYMENTS/Hero%20Sction%20(1).png"
    alt="Payment"
    className="h-auto w-full object-cover"
  />
</div>

        <TrustedAndUsedBy />

{/* Invoicing Section */}
<section className="mx-auto mt-16 md:mt-20 flex h-auto w-full max-w-[1200px] flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-0 gap-8 lg:gap-0">

  {/* Left Image */}
  <div className="h-[300px] sm:h-[420px] lg:h-[720px] w-full lg:w-[600px] overflow-hidden rounded-[24px]">
    <img
      src="https://ik.imagekit.io/qiap0iq38/DATACIRCLES_PROJECT/PAYMENTS/Rectangle%20147943%20(1).png"
      alt="Invoicing"
      className="h-full w-full object-cover"
    />
  </div>

  {/* Right Content */}
  <div className="flex h-auto w-full lg:w-[536px] flex-col">

    {/* Heading */}
    <div className="flex h-auto w-full lg:w-[438px] items-start">
      <h2 className="font-inter text-[24px] sm:text-[28px] md:text-[32px] font-medium leading-[1.2] md:leading-[35px] text-black">
       Sending the invoice was the easy part.
        <br />
     
      </h2>
    </div>

    {/* Paragraph */}
    <div className="mt-6 flex h-auto w-full">
      <p className="font-inter text-[15px] sm:text-[16px] font-normal leading-[24px] text-[#707173]">
        Then comes the awkward bit. Was that one paid? Did anyone follow up? You don't want to annoy a good client by asking twice, and you don't want to write off money because nobody asked at all. So the chasing gets delayed, and the cash comes in later than it should.
      </p>
    </div>

    {/* Bullet Points */}
    <div className="mt-8 flex h-auto w-full flex-col">

      {/* Bullet 1 */}
      <div className="flex h-auto min-h-[60px] sm:h-[77px] w-full items-center border-b border-[#E0E0E1] py-3 sm:py-0">
        <span className="mr-4 h-[8px] w-[8px] shrink-0 rounded-full bg-[#0085FF]" />
        <p className="font-inter text-[16px] sm:text-[18px] md:text-[20px] font-normal text-black">
    No single view of what's still outstanding
        </p>
      </div>

      {/* Bullet 2 */}
      <div className="flex h-auto min-h-[60px] sm:h-[77px] w-full items-center border-b border-[#E0E0E1] py-3 sm:py-0">
        <span className="mr-4 h-[8px] w-[8px] shrink-0 rounded-full bg-[#0085FF]" />
        <p className="font-inter text-[16px] sm:text-[18px] md:text-[20px] font-normal text-black">
         Payments chased from memory, or not chased at all
        </p>
      </div>

      {/* Bullet 3 */}
      <div className="flex h-auto min-h-[60px] sm:h-[77px] w-full items-center border-b border-[#E0E0E1] py-3 sm:py-0">
        <span className="mr-4 h-[8px] w-[8px] shrink-0 rounded-full bg-[#0085FF]" />
        <p className="font-inter text-[16px] sm:text-[18px] md:text-[20px] font-normal text-black">
         Awkward reminder messages nobody wants to write
        </p>
      </div>

      {/* Bullet 4 */}
      <div className="flex h-auto min-h-[60px] sm:h-[77px] w-full items-center py-3 sm:py-0">
        <span className="mr-4 h-[8px] w-[8px] shrink-0 rounded-full bg-[#0085FF]" />
        <p className="font-inter text-[16px] sm:text-[18px] md:text-[20px] font-normal text-black">
         Cash flow you can only guess at until the month ends
        </p>
      </div>

    </div>

    {/* CTA */}
    <div className="mt-8 lg:mt-auto flex h-[52px] w-full sm:w-[200px]">
      <button className="flex h-[52px] w-full sm:w-[200px] items-center justify-center gap-3 rounded-full bg-[#0085FF] font-inter text-[16px] font-medium text-white transition-colors duration-200 hover:bg-black">
        <span>Explore Payments</span>
        <span className="text-[20px] leading-none">→</span>
      </button>
    </div>

  </div>

</section>

<FourCards/>

<Explore
  image="https://ik.imagekit.io/qiap0iq38/DATACIRCLES_PROJECT/PAYMENTS/Explore1"
  imageAlt="Payment tracking"
  label="Catch it"
  heading="The late ones surface themselves."
  paragraph="Overdue invoices are flagged the moment they cross the line, so late payments get noticed in days rather than discovered at the end of the quarter."
  pills={[
    "Overdue dates",
    "Due-date tracking",
    "Activity timeline entries",
  ]}
  linkText="Explore Payments"
/>
<Explore
  image="https://ik.imagekit.io/qiap0iq38/DATACIRCLES_PROJECT/PAYMENTS/Explore1"
  imageAlt="Automation reminders"
  label="Chase it"
  heading="Polite, on time, and not from you."
  paragraph="Reminders go out on schedule so you don't have to write the uncomfortable message. Most clients aren't refusing to pay, they've just forgotten, and a nudge from a system feels like process rather than pressure."
  pills={[
    "Scheduled reminders",
    "Email",
    "WhatsApp",
    "Notifications",
  ]}
  linkText="Explore Automations"
/>

<Explore
  image="https://ik.imagekit.io/qiap0iq38/DATACIRCLES_PROJECT/PAYMENTS/Explore1"
  imageAlt="CRM records"
  label="Close the Loop"
  heading="Paid, and filed where it belongs."
  paragraph="When a payment comes in, it sits against the invoice, the client and the deal it came from. The full story of that client, from first enquiry to money in the bank, stays in one place."
  pills={[
    "Against the invoice",
    "Against the client",
    "On the timeline",
    "Back to the CRM record",
  ]}
  linkText="Explore CMS"
/>
{/* Bottom Section */}
<section className="mx-auto mt-16 md:mt-24 mb-10 flex h-auto w-full max-w-[1300px] flex-col lg:flex-row overflow-hidden rounded-[20px] bg-[#F3F9FC] px-4 sm:px-6 lg:px-0">

  {/* Left Content */}
  <div className="lg:ml-10 flex h-auto w-full lg:w-[580px] shrink-0 flex-col pt-10 pb-8 lg:pb-0">

    {/* Heading */}
    <div className="mt-2 h-auto w-full lg:w-[480px]">
      <h2 className="font-inter text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[1.25] md:leading-[38px] tracking-[-1px] text-black">
        Cashflow you can see<br />
        it coming
      </h2>
    </div>

    {/* Paragraph */}
    <div className="mt-3 w-full lg:w-[580px]">
      <p className="font-inter text-[15px] sm:text-[16px] md:text-[18px] font-normal leading-[25px] text-black/40">
        Collected against pending over time, so you can tell the difference between a good month and a month that only looked good on paper. Reports are included on every plan.
      </p>
    </div>

    {/* Pills + Link */}
    <div className="mt-8 lg:mt-auto h-auto w-full lg:w-[400px]">

      {/* Pills */}
      <div className="flex w-full flex-wrap gap-x-1 gap-y-1">
        {[
          "against the invoice",
          "Against the clients",
          "On the Timeline",
          "Back to the CRM record",
        ].map((pill, index) => (
          <div
            key={index}
            className="flex w-max items-center rounded-full border border-[#0085FF4D] bg-[#0085FF1A] px-4 py-2"
          >
            <span className="whitespace-nowrap font-inter text-[13px] font-semibold text-[#0085FF]">
              {pill}
            </span>
          </div>
        ))}
      </div>

      {/* Text + Arrow */}
      <button
        type="button"
        className="mt-4 ml-2 flex items-center gap-2 font-inter text-[14px] font-semibold text-[#0085FF]"
      >
        <span>Explore Payments</span>
        <span className="text-[18px] leading-none">→</span>
      </button>

    </div>

  </div>

  {/* Right Images */}
  <div className="relative h-[280px] sm:h-[350px] lg:h-[416px] w-full lg:flex-1 lg:mr-5">

    {/* First Image - 375 × 352 */}
    <img
      src="https://ik.imagekit.io/qiap0iq38/DATACIRCLES_PROJECT/PAYMENTS/image%2016.png"
      alt=""
      className="absolute right-[10%] sm:right-[15%] lg:right-[135px] top-[16px] sm:top-[24px] lg:top-[32px] h-[240px] sm:h-[300px] lg:h-[352px] w-[260px] sm:w-[320px] lg:w-[375px] object-cover"
    />

    {/* Second Image - 298 × 206 */}
    <img
      src="https://ik.imagekit.io/qiap0iq38/DATACIRCLES_PROJECT/PAYMENTS/image%2017.png"
      alt=""
      className="absolute right-0 top-[80px] sm:top-[95px] lg:top-[105px] z-10 h-[150px] sm:h-[180px] lg:h-[206px] w-[210px] sm:w-[260px] lg:w-[298px] object-cover"
    />

  </div>

</section>

<CTA/>
      </main>
    </div>
  );
};

export default Payment1;
