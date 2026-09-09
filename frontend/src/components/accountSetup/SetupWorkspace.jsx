import React, { useRef, useState } from "react";

const SetupWorkspace = ({ onContinue, onBack }) => {
  const fileInputRef = useRef(null);

  const [workspaceName, setWorkspaceName] = useState("");
  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState("");
  const [teamSize, setTeamSize] = useState("Just Me");
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const teamSizes = [
    "Just Me",
    "2-5",
    "6-20",
    "21-50",
    "51-200",
    "200+",
  ];

  const handleLogo = (file) => {
    setError("");

    if (!file) return;

    const allowedTypes = [
      "image/png",
      "image/jpeg",
      "image/svg+xml",
    ];

    if (!allowedTypes.includes(file.type)) {
      setError("Please upload a PNG, JPG, or SVG file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Maximum file size is 5 MB.");
      return;
    }

    setLogo(file);

    if (file.type === "image/svg+xml") {
      const reader = new FileReader();

      reader.onload = () => {
        setLogoPreview(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const handleFileChange = (e) => {
    handleLogo(e.target.files?.[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    handleLogo(file);
  };

  const handleContinue = () => {
    setError("");

    if (!workspaceName.trim()) {
      setError("Company / Workspace Name is required.");
      return;
    }

    if (!logo) {
      setError("Company Logo is required.");
      return;
    }

    if (!teamSize) {
      setError("Please select your team size.");
      return;
    }

    localStorage.setItem(
      "datacircles_workspace",
      JSON.stringify({
        workspaceName: workspaceName.trim(),
        teamSize,
      })
    );

    if (logoPreview) {
      localStorage.setItem(
        "datacircles_workspace_logo",
        logoPreview
      );
    }

    onContinue();
  };

  return (
    <div className="w-[596px] pt-[64px]">

      {/* HEADING */}
      <h1 className="text-[28px] font-semibold leading-[36px] tracking-[-0.14px] text-[#0F172A]">
        Set Up Your Workspace
      </h1>

      <p className="mt-[8px] w-[560px] text-[18px] font-medium leading-[28px] text-[#475569]">
        Create your DataCircles workspace and bring your
        <br />
        business operations into one place.
      </p>

      {/* FORM CARD */}
      <div className="mt-[40px] w-[596px] rounded-[20px] border border-[#E2E8F0] bg-[#F1F3F3] p-[24px]">

        {/* WORKSPACE NAME */}
        <div>

          <label className="block text-[14px] font-medium leading-[20px] text-[#0F172A]">
            Company / Workspace Name{" "}
            <span className="text-[#DC2626]">*</span>
          </label>

          <input
            type="text"
            value={workspaceName}
            onChange={(e) => {
              setWorkspaceName(e.target.value);
              setError("");
            }}
            placeholder="Usually your business or company name."
            className="
              mt-[8px]
              h-[48px]
              w-full
              rounded-full
              border
              border-[#E2E8F0]
              bg-white
              px-[16px]
              text-[14px]
              font-normal
              text-[#0F172A]
              outline-none
              placeholder:text-[#64748B]
              focus:border-[#0085FF]
            "
          />
        </div>

        {/* COMPANY LOGO */}
        <div className="mt-[24px]">

          <label className="block text-[14px] font-medium leading-[20px] text-[#0F172A]">
            Company Logo{" "}
            <span className="text-[#DC2626]">*</span>
          </label>

          <input
            ref={fileInputRef}
            type="file"
            accept=".png,.jpg,.jpeg,.svg,image/png,image/jpeg,image/svg+xml"
            onChange={handleFileChange}
            className="hidden"
          />

          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => {
              setIsDragging(false);
            }}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`
              mt-[8px]
              flex
              h-[171px]
              w-full
              cursor-pointer
              flex-col
              items-center
              justify-center
              rounded-[20px]
              border
              bg-white
              transition
              ${
                isDragging
                  ? "border-[#0085FF] bg-[#F8FBFF]"
                  : "border-[#E2E8F0]"
              }
            `}
          >
            {logoPreview ? (
              <>
                <div className="flex h-[64px] w-[64px] items-center justify-center overflow-hidden rounded-[10px] border border-[#E2E8F0] bg-white">
                  <img
                    src={logoPreview}
                    alt="Company logo preview"
                    className="max-h-[52px] max-w-[52px] object-contain"
                  />
                </div>

                <p className="mt-[10px] text-[14px] font-medium text-[#0F172A]">
                  {logo?.name}
                </p>

                <p className="mt-[2px] text-[12px] text-[#64748B]">
                  Click to replace logo
                </p>
              </>
            ) : (
              <>
                <div className="flex h-[62px] w-[62px] items-center justify-center rounded-[9px] border border-[#0085FF] bg-[#F8FBFF]">

                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M14 18V6"
                      stroke="#0085FF"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />

                    <path
                      d="M9.5 10.5L14 6L18.5 10.5"
                      stroke="#0085FF"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M6 18.5V20.5C6 22.1569 7.34315 23.5 9 23.5H19C20.6569 23.5 22 22.1569 22 20.5V18.5"
                      stroke="#0085FF"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <p className="mt-[12px] text-[14px] font-medium leading-[20px] text-[#0F172A]">
                  Drag & Drop Your File Here
                </p>

                <p className="mt-[2px] text-[12px] font-normal leading-[18px] text-[#64748B]">
                  Supported: .png, .jpg, .svg&nbsp; · &nbsp;Maximum file size: 5 MB
                </p>
              </>
            )}
          </div>
        </div>

        {/* TEAM SIZE */}
        <div className="mt-[24px]">

          <label className="block text-[14px] font-medium leading-[20px] text-[#0F172A]">
            Team Size{" "}
            <span className="text-[#DC2626]">*</span>
          </label>

          <div className="mt-[8px] flex items-center gap-[16px]">

            {teamSizes.map((size) => (
  <button
    key={size}
    type="button"
    onClick={() => {
      setTeamSize(size);
      setError("");
    }}
    className={`h-[48px] rounded-full border px-[14px] text-[14px] font-medium transition ${
      teamSize === size
        ? "border-[#0085FF] bg-[#0085FF] text-white"
        : "border-[#E2E8F0] bg-white text-[#0F172A] hover:border-[#0085FF]"
    }`}
  >
    {size}
  </button>
))}
          </div>
        </div>

        {/* ERROR */}
        {error && (
          <div className="mt-[16px] flex items-center gap-[8px]">

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="#DC2626"
                strokeWidth="1.8"
              />

              <path
                d="M12 8V12"
                stroke="#DC2626"
                strokeWidth="1.8"
                strokeLinecap="round"
              />

              <circle
                cx="12"
                cy="16"
                r="1"
                fill="#DC2626"
              />
            </svg>

            <span className="text-[13px] font-medium leading-[20px] text-[#DC2626]">
              {error}
            </span>
          </div>
        )}
      </div>

      {/* ACTIONS */}
      <div className="mt-[24px] flex w-[596px] items-center justify-between">

        <button
          type="button"
          onClick={onBack}
          className="
            h-[48px]
            rounded-full
            border
            border-[#E2E8F0]
            bg-white
            px-[20px]
            text-[14px]
            font-medium
            text-[#0F172A]
            transition
            hover:bg-[#F8FAFC]
          "
        >
          Back
        </button>

        <button
          type="button"
          onClick={handleContinue}
          className="
            h-[48px]
            rounded-full
            bg-[#0085FF]
            px-[21px]
            text-[14px]
            font-medium
            text-white
            transition
            hover:bg-[#0078E8]
          "
        >
          Continue
        </button>

      </div>
    </div>
  );
};

export default SetupWorkspace;