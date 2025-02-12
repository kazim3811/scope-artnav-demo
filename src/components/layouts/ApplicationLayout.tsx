
import { cn } from "@/lib/utils";

interface ApplicationLayoutProps {
  children: React.ReactNode;
  currentStep: number;
}

const steps = [
  "Welcome",
  "Gallery Information",
  "Contact Details",
  "Exhibition Details",
  "Previous Experience",
  "Program Proposal",
  "Review & Submit"
];

const ApplicationLayout = ({ children, currentStep }: ApplicationLayoutProps) => {
  return (
    <div className="min-h-screen bg-[#f3f3f3]">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white border-r border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h1 className="text-lg font-bold text-[#1A1F2C]">ARTNAV PORTAL</h1>
          </div>
          
          <div className="p-3">
            {steps.map((step, index) => (
              <div key={step} className="mb-3">
                <div className="flex items-center">
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center mr-2 text-sm",
                    currentStep > index ? "bg-[#1A1F2C] text-white" :
                    currentStep === index ? "bg-[#1A1F2C] text-white" :
                    "bg-gray-200 text-gray-600"
                  )}>
                    {index + 1}
                  </div>
                  <span className={cn(
                    "text-sm",
                    currentStep === index ? "font-semibold text-[#1A1F2C]" :
                    currentStep > index ? "font-medium text-[#1A1F2C]" :
                    "text-[#8E9196]"
                  )}>
                    {step}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={cn(
                    "ml-3 pl-2 mt-1 mb-1 border-l-2 h-3",
                    currentStep > index ? "border-[#1A1F2C]" : "border-gray-200"
                  )} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ApplicationLayout;
