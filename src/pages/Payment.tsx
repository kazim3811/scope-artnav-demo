
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ApplicationLayout from "@/components/layouts/ApplicationLayout";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const Payment = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Payment Successful",
      description: "Thank you for your deposit payment.",
    });
    setIsSubmitted(true);
  };

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
              <p className="text-sm text-[#8E9196]">Booth Deposit</p>
              <p className="text-lg font-medium text-[#1A1F2C] mt-2">$3,000.00</p>
              <p className="text-sm text-[#8E9196] mt-3 italic">
                This deposit is non-refundable and will be applied towards the final cost of your selected booth.
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handlePayment} className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-[#1A1F2C] block mb-2">
                      Card Information
                    </label>
                    <Input 
                      type="text"
                      placeholder="1234 1234 1234 1234"
                      className="mb-2"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <Input 
                        type="text"
                        placeholder="MM / YY"
                      />
                      <Input 
                        type="text"
                        placeholder="CVC"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#1A1F2C] block mb-2">
                      Name on Card
                    </label>
                    <Input 
                      type="text"
                      placeholder="Full name"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#1A1F2C] block mb-2">
                      Billing Address
                    </label>
                    <Input 
                      type="text"
                      placeholder="Address"
                      className="mb-2"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <Input 
                        type="text"
                        placeholder="City"
                      />
                      <Input 
                        type="text"
                        placeholder="ZIP Code"
                      />
                    </div>
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
                    Submit Payment
                  </Button>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-2">
                    Thank you for your deposit payment!
                  </h3>
                  <p className="text-sm text-green-600">
                    Your payment has been processed successfully.
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    onClick={() => navigate("/curatorial")}
                    className="bg-[#1A1F2C] hover:bg-[#2A2F3C] text-white"
                  >
                    Proceed to Curatorial
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ApplicationLayout>
  );
};

export default Payment;
