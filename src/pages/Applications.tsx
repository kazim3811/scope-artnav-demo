
import ApplicationLayout from "@/components/layouts/ApplicationLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Applications = () => {
  const navigate = useNavigate();

  return (
    <ApplicationLayout currentStep={0}>
      <header className="bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center space-x-3">
            <span className="text-[#8E9196] text-sm">Fair</span>
            <span className="text-[#1A1F2C] font-medium text-sm">SCOPE DEMO</span>
            <span className="text-[#8E9196] text-sm">/</span>
            <span className="text-[#8E9196] text-sm">Applications</span>
          </div>
        </div>
      </header>

      <div className="p-6 max-w-3xl">
        <h1 className="text-2xl font-bold mb-4 text-[#1A1F2C]">Welcome to SCOPE</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 space-y-4">
          <section>
            <h2 className="text-base font-semibold mb-2 text-[#1A1F2C]">Join the World's Premier Art Show</h2>
            <p className="text-[#8E9196] text-sm">Welcome to the SCOPE application portal. We're excited to have you here!</p>
          </section>

          <section>
            <h2 className="text-base font-semibold mb-2 text-[#1A1F2C]">What to Expect</h2>
            <p className="text-[#8E9196] text-sm">
              The application process is simple and straightforward. You'll need to:
            </p>
            <ul className="mt-2 space-y-2 text-sm text-[#8E9196]">
              <li className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-[#1A1F2C] text-white flex items-center justify-center text-xs mr-2">1</span>
                Provide your gallery details
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-[#1A1F2C] text-white flex items-center justify-center text-xs mr-2">2</span>
                Select your preferred booth option
              </li>
            </ul>
          </section>

          <div className="flex space-x-3 pt-4">
            <Button 
              className="bg-[#1A1F2C] hover:bg-[#2A2F3C] text-white"
              onClick={() => navigate("/gallery-details")}
            >
              Start Application
            </Button>
          </div>
        </div>
      </div>
    </ApplicationLayout>
  );
};

export default Applications;
