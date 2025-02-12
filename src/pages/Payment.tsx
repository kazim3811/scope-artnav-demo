
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ApplicationLayout from "@/components/layouts/ApplicationLayout";

const Payment = () => {
  const navigate = useNavigate();

  return (
    <ApplicationLayout currentStep={3}>
      <header className="bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center space-x-3">
            <span className="text-[#8E9196] text-sm">Application</span>
            <span className="text-[#8E9196] text-sm">/</span>
            <span className="text-[#1A1F2C] font-medium text-sm">Payment</span>
          </div>
        </div>
      </header>

      <div className="p-6 max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-[#1A1F2C]">Complete Payment</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg mb-6">
              <h3 className="text-sm font-medium text-[#1A1F2C] mb-2">Payment Summary</h3>
              <p className="text-sm text-[#8E9196]">Booth Application Fee</p>
              <p className="text-lg font-medium text-[#1A1F2C] mt-2">$10,000.00</p>
            </div>

            {/* Stripe payment form would go here */}
            <div className="p-4 border border-gray-200 rounded-lg">
              <p className="text-sm text-[#8E9196] mb-4">
                Secure payment processing powered by Stripe
              </p>
              {/* Placeholder for Stripe Elements */}
              <div className="h-40 flex items-center justify-center border border-dashed border-gray-300 rounded-lg">
                <p className="text-[#8E9196]">Stripe payment form will be integrated here</p>
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/choose-booth")}
                className="border-[#1A1F2C] text-[#1A1F2C] hover:bg-[#1A1F2C] hover:text-white"
              >
                Back
              </Button>
              <Button 
                type="submit"
                className="bg-[#1A1F2C] hover:bg-[#2A2F3C] text-white"
              >
                Complete Payment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ApplicationLayout>
  );
};

export default Payment;
