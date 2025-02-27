import { FaArrowRightLong } from "react-icons/fa6";
import { HelpCircle } from "lucide-react";

export const Plans = () => {
  const plans = [
    { title: "Free", subtitle: "For individuals seat/free", button: "Sign up" },
    { title: "Plus", subtitle: "10$ per seat/month", button: "Get Started" },
    { title: "Business", subtitle: "15$ per seat/month", button: "Get Started" },
    { title: "Enterprise", subtitle: null, button: null },
  ];

  const features = [
    {
      title: "Content",
      rows: [
        {
          name: "Pages & blocks",
          tooltip: "Number of pages and blocks you can create",
          values: ["Unlimited for individuals, limited block trial for 2+ members", "Unlimited", "Unlimited", "Unlimited"]
        },
        {
          name: "File uploads",
          tooltip: "Maximum file size for uploads",
          values: ["Up to 5 MB", "Unlimited", "Unlimited", "Unlimited"]
        },
        {
          name: "Page history",
          tooltip: "How long we keep your page history",
          values: ["7 days", "30 days", "90 days", "Unlimited"]
        },
        {
          name: "Page analytics",
          tooltip: "Analytics and insights for your pages",
          values: ["Basic", "Basic", "Advanced", "Advanced"]
        }
      ]
    },
    {
      title: "Sharing & Collaboration",
      rows: [
        {
          name: "Pages & blocks",
          tooltip: "Number of pages and blocks you can create",
          values: ["Unlimited for individuals, limited block trial for 2+ members", "Unlimited", "Unlimited", "Unlimited"]
        },
        {
          name: "File uploads",
          tooltip: "Maximum file size for uploads",
          values: ["Up to 5 MB", "Unlimited", "Unlimited", "Unlimited"]
        },
        {
          name: "Page history",
          tooltip: "How long we keep your page history",
          values: ["7 days", "30 days", "90 days", "Unlimited"]
        },
        {
          name: "Page analytics",
          tooltip: "Analytics and insights for your pages",
          values: ["Basic", "Basic", "Advanced", "Advanced"]
        }
      ]
    },
    {
      title: "Manage work & time",
      rows: [
        {
          name: "Pages & blocks",
          tooltip: "Number of pages and blocks you can create",
          values: ["Unlimited for individuals, limited block trial for 2+ members", "Unlimited", "Unlimited", "Unlimited"]
        },
        {
          name: "File uploads",
          tooltip: "Maximum file size for uploads",
          values: ["Up to 5 MB", "Unlimited", "Unlimited", "Unlimited"]
        },
        {
          name: "Page history",
          tooltip: "How long we keep your page history",
          values: ["7 days", "30 days", "90 days", "Unlimited"]
        },
        {
          name: "Page analytics",
          tooltip: "Analytics and insights for your pages",
          values: ["Basic", "Basic", "Advanced", "Advanced"]
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 hidden lg:block">
      <h1 className="text-[60px] font-bold text-center py-6">Plans and features</h1>

      {/* Plans Header */}
      <div className="flex bg-[#0F0D19] border-y-2 border-zinc-800 z-10 sticky top-20">
        <div className="w-[200px]"></div>
        <div className="flex-1 grid grid-cols-4 justify-items-end">
          {plans.map((plan, i) => (
            <div key={i} className="w-[165px] p-4 flex flex-col gap-2">
              <h2 className="text-[18px] font-semibold">{plan.title}</h2>
              {plan.subtitle ? (
                <>
                  <p className="text-[#4b4e51] font-semibold text-[14px]">{plan.subtitle}</p>
                  <button className="bg-black text-white hover:bg-zinc-800 w-full rounded-md py-1.5 cursor-pointer">
                    {plan.button}
                  </button>
                </>
              ) : (
                <a
                  className="hover:text-blue-500 font-semibold flex items-center gap-2 text-[14px] mt-auto"
                  href="https://google.com"
                >
                  Contact us <FaArrowRightLong />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Features Sections */}
      {features.map((section, sectionIndex) => (
        <div key={sectionIndex} className={sectionIndex > 0 ? "mt-11" : ""}>
          <h2 className="py-4 z-10 text-white font-semibold sticky top-20 text-[18px]">
            {section.title}
          </h2>
          <div className="border-t border-zinc-800">
            {section.rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex border-b border-zinc-800 items-center"
              >
                <div className="w-[200px] p-4 font-semibold flex items-center gap-2">
                  {row.name}
                  <div className="relative group">
                    <div className="cursor-help">
                      <HelpCircle className="h-4 w-4 text-gray-500" />
                    </div>
                    <div className="hidden group-hover:block absolute left-0 bottom-full mb-2 w-48 p-2 bg-black text-white text-xs rounded shadow-lg z-10">
                      {row.tooltip}
                    </div>
                  </div>
                </div>
                <div className="flex-1 grid grid-cols-4 justify-items-end">
                  {row.values.map((value, i) => (
                    <div key={i} className="w-[165px] p-4 text-sm text-[#6E6E6D]">
                      {value}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};