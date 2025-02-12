
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ApplicationLayout from "@/components/layouts/ApplicationLayout";
import { useState } from "react";

const GalleryDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    galleryName: "",
    city: "",
    directorFirstName: "",
    directorLastName: "",
    email: "",
    phone: "",
    website: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/choose-booth");
  };

  return (
    <ApplicationLayout currentStep={1}>
      <header className="bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center space-x-3">
            <span className="text-[#8E9196] text-sm">Application</span>
            <span className="text-[#8E9196] text-sm">/</span>
            <span className="text-[#1A1F2C] font-medium text-sm">Gallery Details</span>
          </div>
        </div>
      </header>

      <div className="p-6 max-w-2xl">
        <h1 className="text-2xl font-bold mb-4 text-[#1A1F2C]">Gallery Details</h1>
        
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-[#1A1F2C]">Gallery Name</label>
              <Input
                name="galleryName"
                value={formData.galleryName}
                onChange={handleChange}
                className="mt-1"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#1A1F2C]">City</label>
              <Input
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-[#1A1F2C]">Director First Name</label>
                <Input
                  name="directorFirstName"
                  value={formData.directorFirstName}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-[#1A1F2C]">Director Last Name</label>
                <Input
                  name="directorLastName"
                  value={formData.directorLastName}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-[#1A1F2C]">Email</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#1A1F2C]">Phone</label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#1A1F2C]">Website</label>
              <Input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="mt-1"
                required
              />
            </div>

            <div className="flex justify-between pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/")}
                className="border-[#1A1F2C] text-[#1A1F2C] hover:bg-[#1A1F2C] hover:text-white"
              >
                Back
              </Button>
              <Button 
                type="submit"
                className="bg-[#1A1F2C] hover:bg-[#2A2F3C] text-white"
              >
                Next Step
              </Button>
            </div>
          </div>
        </form>
      </div>
    </ApplicationLayout>
  );
};

export default GalleryDetails;
