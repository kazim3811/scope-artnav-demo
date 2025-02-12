
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ApplicationLayout from "@/components/layouts/ApplicationLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { ImagePlus, X, ArrowRight } from "lucide-react";

const Curatorial = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState<File[]>([]);
  const [showForm, setShowForm] = useState(false);

  const handleImageDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setImages(prev => [...prev, ...droppedFiles]);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const uploadedFiles = Array.from(e.target.files);
      setImages(prev => [...prev, ...uploadedFiles]);
    }
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <ApplicationLayout currentStep={4}>
      <header className="bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center space-x-3">
            <span className="text-[#8E9196] text-sm">Application</span>
            <span className="text-[#8E9196] text-sm">/</span>
            <span className="text-[#1A1F2C] font-medium text-sm">Gallery Presentation</span>
          </div>
        </div>
      </header>

      <div className="p-6 max-w-3xl">
        {!showForm ? (
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h1 className="text-2xl font-bold mb-6 text-[#1A1F2C]">Curatorial Review Process</h1>
            
            <div className="space-y-6 text-gray-600">
              <div>
                <h2 className="text-lg font-semibold text-[#1A1F2C] mb-2">What to Expect</h2>
                <p>The curatorial review process is a crucial step in ensuring the highest quality presentations at our fair. This process helps us maintain our standards and create a cohesive experience for visitors.</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#1A1F2C] mb-2">Required Information</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>A detailed description of your gallery's presentation concept</li>
                  <li>List of artists you plan to represent</li>
                  <li>High-quality images of artworks you intend to show</li>
                  <li>Additional supporting materials that highlight your gallery's vision</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#1A1F2C] mb-2">Review Timeline</h2>
                <p>The curatorial review typically takes 5-7 business days. You will be notified of the decision via email, and may be contacted if additional information is needed.</p>
              </div>

              <div className="pt-4">
                <Button 
                  onClick={() => setShowForm(true)}
                  className="bg-[#1A1F2C] hover:bg-[#2A2F3C] text-white"
                >
                  Start Curatorial Application
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4 text-[#1A1F2C]">Gallery Presentation</h1>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <form className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-[#1A1F2C] block mb-2">
                    About the Presentation
                  </label>
                  <Textarea 
                    placeholder="Describe your gallery's presentation..."
                    className="min-h-[150px]"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#1A1F2C] block mb-2">
                    Represented Artists
                  </label>
                  <Textarea 
                    placeholder="List the artists you will be representing..."
                    className="min-h-[100px]"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-[#1A1F2C] block mb-2">
                    Gallery Images
                  </label>
                  <div 
                    className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleImageDrop}
                  >
                    <div className="space-y-4">
                      <div className="flex justify-center">
                        <ImagePlus className="h-12 w-12 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">
                          Drag and drop images here, or click to upload
                        </p>
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          className="hidden"
                          id="image-upload"
                          onChange={handleImageUpload}
                        />
                        <label
                          htmlFor="image-upload"
                          className="mt-2 inline-block text-sm text-[#1A1F2C] cursor-pointer hover:underline"
                        >
                          Browse files
                        </label>
                      </div>
                    </div>
                  </div>

                  {images.length > 0 && (
                    <div className="mt-4 grid grid-cols-3 gap-4">
                      {images.map((image, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={URL.createObjectURL(image)}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="h-4 w-4 text-gray-600" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex justify-between pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowForm(false)}
                    className="border-[#1A1F2C] text-[#1A1F2C] hover:bg-[#1A1F2C] hover:text-white"
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-[#1A1F2C] hover:bg-[#2A2F3C] text-white"
                  >
                    Submit Presentation
                  </Button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </ApplicationLayout>
  );
};

export default Curatorial;
