
import { cn } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";

interface ApplicationLayoutProps {
  children: React.ReactNode;
  currentStep: number;
}

const applicationSteps = [
  { name: "Welcome", path: "/" },
  { name: "Your Details", path: "/gallery-details" },
  { name: "Choose Booth", path: "/choose-booth" },
  { name: "Payment", path: "/payment" }
];

const ApplicationLayout = ({ children, currentStep }: ApplicationLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f3f3f3]">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white border-r border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h1 className="text-lg font-bold text-[#1A1F2C]">ARTNAV PORTAL</h1>
          </div>
          
          <div className="p-3">
            {/* Application Section */}
            <h2 className="text-xs font-semibold text-[#8E9196] uppercase tracking-wider mb-3 mt-2 px-2">
              Application
            </h2>
            {applicationSteps.map((step, index) => (
              <div key={step.name} className="mb-3">
                <Link 
                  to={step.path}
                  className={cn(
                    "flex items-center group",
                    currentStep < index && "pointer-events-none opacity-50"
                  )}
                >
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm transition-colors duration-300",
                    currentStep > index ? "bg-[#1A1F2C] text-white" :
                    currentStep === index ? "bg-[#1A1F2C] text-white" :
                    "bg-gray-200 text-gray-600"
                  )}>
                    {index + 1}
                  </div>
                  <span className={cn(
                    "text-sm transition-colors duration-300",
                    currentStep === index ? "font-semibold text-[#1A1F2C]" :
                    currentStep > index ? "font-medium text-[#1A1F2C]" :
                    "text-[#8E9196]"
                  )}>
                    {step.name}
                  </span>
                </Link>
                {index < applicationSteps.length - 1 && (
                  <div className={cn(
                    "ml-3 pl-2 mt-1 mb-1 border-l-2 h-3 transition-colors duration-300",
                    currentStep > index ? "border-[#1A1F2C]" : "border-gray-200"
                  )} />
                )}
              </div>
            ))}

            {/* Curatorial Section */}
            <h2 className="text-xs font-semibold text-[#8E9196] uppercase tracking-wider mb-3 mt-6 px-2">
              Curatorial
            </h2>
            <div className="mb-3">
              <Link 
                to="/curatorial"
                className={cn(
                  "flex items-center",
                  currentStep < 4 && "pointer-events-none opacity-50"
                )}
              >
                <div className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm transition-colors duration-300",
                  currentStep === 5 ? "bg-[#1A1F2C] text-white" :
                  currentStep > 5 ? "bg-[#1A1F2C] text-white" :
                  "bg-gray-200 text-gray-600"
                )}>
                  5
                </div>
                <span className={cn(
                  "text-sm transition-colors duration-300",
                  currentStep === 5 ? "font-semibold text-[#1A1F2C]" :
                  currentStep > 5 ? "font-medium text-[#1A1F2C]" :
                  "text-[#8E9196]"
                )}>
                  Curatorial Review
                </span>
              </Link>
              <div className={cn(
                "ml-3 pl-2 mt-1 mb-1 border-l-2 h-3 transition-colors duration-300",
                currentStep > 5 ? "border-[#1A1F2C]" : "border-gray-200"
              )} />
              <div className="flex items-center">
                <div className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm transition-colors duration-300",
                  currentStep === 6 ? "bg-[#1A1F2C] text-white" :
                  currentStep > 6 ? "bg-[#1A1F2C] text-white" :
                  "bg-gray-200 text-gray-600"
                )}>
                  6
                </div>
                <span className={cn(
                  "text-sm transition-colors duration-300",
                  currentStep === 6 ? "font-semibold text-[#1A1F2C]" :
                  currentStep > 6 ? "font-medium text-[#1A1F2C]" :
                  "text-[#8E9196]"
                )}>
                  Gallery Presentation
                </span>
              </div>
              <div className={cn(
                "ml-3 pl-2 mt-1 mb-1 border-l-2 h-3 transition-colors duration-300",
                currentStep > 6 ? "border-[#1A1F2C]" : "border-gray-200"
              )} />
              <div className="flex items-center">
                <div className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm transition-colors duration-300",
                  currentStep === 7 ? "bg-[#1A1F2C] text-white" :
                  currentStep > 7 ? "bg-[#1A1F2C] text-white" :
                  "bg-gray-200 text-gray-600"
                )}>
                  7
                </div>
                <span className={cn(
                  "text-sm transition-colors duration-300",
                  currentStep === 7 ? "font-semibold text-[#1A1F2C]" :
                  currentStep > 7 ? "font-medium text-[#1A1F2C]" :
                  "text-[#8E9196]"
                )}>
                  Next Steps
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="animate-fade-in">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationLayout;
