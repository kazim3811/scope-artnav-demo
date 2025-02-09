
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import MainLayout from "@/components/layouts/MainLayout";

const Dashboard = () => {
  return (
    <MainLayout>
      <header className="bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center space-x-4">
            <span className="text-[#8E9196]">Fair</span>
            <span className="text-[#1A1F2C] font-medium">SCOPE DEMO</span>
            <span className="text-[#8E9196]">/</span>
            <span className="text-[#8E9196]">Modules</span>
          </div>
          <Button variant="outline" className="border-[#1A1F2C] text-[#1A1F2C] hover:bg-[#1A1F2C] hover:text-white">
            Edit Fair
          </Button>
        </div>
      </header>

      <main className="p-8">
        <div className="mb-8 bg-[#1A1F2C] rounded-xl p-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ARTNAV SCOPE FAIR 2025</h1>
          <p className="text-gray-300 text-lg">Experience the future of art fairs</p>
        </div>

        <p className="text-[#8E9196] mb-8">
          This is a demonstration account set up to enabling Portal configuration to SCOPE needs
        </p>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-[#1A1F2C]">Application</h3>
              <p className="text-[#8E9196] mt-1">default description.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-end space-x-3">
                <span className="text-sm text-[#8E9196]">Enabled</span>
                <Switch className="data-[state=checked]:bg-[#1A1F2C]" />
              </div>
              <div className="flex items-center justify-end space-x-3">
                <span className="text-sm text-[#8E9196]">Opened</span>
                <Switch className="data-[state=checked]:bg-[#1A1F2C]" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default Dashboard;
