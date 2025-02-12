
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ApplicationLayout from "@/components/layouts/ApplicationLayout";
import { useState } from "react";

const boothOptions = [
  { id: 1, name: "Booth A 30sq m", price: 10000 },
  { id: 2, name: "Booth A 45sq m", price: 20000 },
  { id: 3, name: "Booth A 60sq m", price: 30000 },
  { id: 4, name: "Booth A 80sq m", price: 40000 },
  { id: 5, name: "Booth A 100sq m", price: 50000 },
];

const ChooseBooth = () => {
  const navigate = useNavigate();
  const [selectedBooth, setSelectedBooth] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle final submission
    console.log("Selected booth:", selectedBooth);
  };

  return (
    <ApplicationLayout currentStep={2}>
      <header className="bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center space-x-3">
            <span className="text-[#8E9196] text-sm">Application</span>
            <span className="text-[#8E9196] text-sm">/</span>
            <span className="text-[#1A1F2C] font-medium text-sm">Choose Booth</span>
          </div>
        </div>
      </header>

      <div className="p-6 max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-[#1A1F2C]">Select Your Booth</h1>
        
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-[#1A1F2C] block mb-2">
                Booth Options
              </label>
              <Select onValueChange={setSelectedBooth} value={selectedBooth}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a booth option" />
                </SelectTrigger>
                <SelectContent>
                  {boothOptions.map((booth) => (
                    <SelectItem key={booth.id} value={booth.id.toString()}>
                      {booth.name} - ${booth.price.toLocaleString()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedBooth && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-sm font-medium text-[#1A1F2C] mb-2">Selected Option</h3>
                <p className="text-sm text-[#8E9196]">
                  {boothOptions[parseInt(selectedBooth) - 1].name}
                </p>
                <p className="text-sm font-medium text-[#1A1F2C] mt-2">
                  Price: ${boothOptions[parseInt(selectedBooth) - 1].price.toLocaleString()}
                </p>
              </div>
            )}

            <div className="flex justify-between pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/gallery-details")}
                className="border-[#1A1F2C] text-[#1A1F2C] hover:bg-[#1A1F2C] hover:text-white"
              >
                Back
              </Button>
              <Button 
                type="submit"
                className="bg-[#1A1F2C] hover:bg-[#2A2F3C] text-white"
                disabled={!selectedBooth}
              >
                Submit Application
              </Button>
            </div>
          </div>
        </form>
      </div>
    </ApplicationLayout>
  );
};

export default ChooseBooth;
