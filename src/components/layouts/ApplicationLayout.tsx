
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
    <div className="min-h-screen bg-[#f3f3f3] flex">
      {/* Progress Sidebar */}
      <div className="w-64 min-h-screen bg-white border-r border-gray-200 fixed">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-[#1A1F2C]">Application Steps</h1>
        </div>
        
        <div className="p-4">
          {steps.map((step, index) => (
            <div key={step} className="mb-4">
              <div className="flex items-center">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center mr-3",
                  currentStep > index ? "bg-green-500 text-white" :
                  currentStep === index ? "bg-blue-500 text-white" :
                  "bg-gray-200 text-gray-600"
                )}>
                  {index + 1}
                </div>
                <span className={cn(
                  "text-sm",
                  currentStep === index ? "font-semibold text-blue-500" :
                  currentStep > index ? "font-medium text-green-500" :
                  "text-gray-600"
                )}>
                  {step}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="ml-4 pl-3 mt-2 mb-2 border-l-2 border-gray-200 h-4" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {children}
      </div>
    </div>
  );
};

export default ApplicationLayout;
