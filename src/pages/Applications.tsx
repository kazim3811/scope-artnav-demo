
import ApplicationLayout from "@/components/layouts/ApplicationLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Applications = () => {
  const navigate = useNavigate();

  return (
    <ApplicationLayout currentStep={0}>
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Your Gateway to our ArtFair</h1>
        
        <div className="bg-white p-8 rounded-lg shadow-sm space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">Get Started with Ease</h2>
            <p className="text-gray-600">Welcome to the SCOPE application portal. We're excited to have you here!</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Complete Your Application</h2>
            <p className="text-gray-600">Submit and track your gallery application with a few simple clicks.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Manage Your Exhibit</h2>
            <p className="text-gray-600">Access all the tools you need to design, organize, and showcase your exhibit.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Stay Updated</h2>
            <p className="text-gray-600">Receive real-time updates on deadlines, event logistics, and more to keep you informed and prepared.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Explore, Connect, Inspire</h2>
            <p className="text-gray-600">
              At SCOPE, we're here to make your journey as an exhibitor effortless and engaging. 
              Dive into the portal, connect with our team, and discover how you can make an impact 
              in one of the world's most dynamic art shows.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">We're Here to Support You</h2>
            <p className="text-gray-600">
              If you have questions or need assistance, reach out to our support team anytime through 
              the portal. We're excited to see what you bring to SCOPE this year, and we're here to 
              support you every step of the way.
            </p>
          </section>

          <div className="flex space-x-4 pt-6">
            <Button 
              className="bg-[#9b87f5] hover:bg-[#7E69AB]"
              onClick={() => navigate("/gallery-information")}
            >
              Start Your Application
            </Button>
            <Button variant="outline">
              Explore Portal Features
            </Button>
          </div>
        </div>
      </div>
    </ApplicationLayout>
  );
};

export default Applications;
