
import { Home, Settings, Users, FileText, BarChart2, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white border-r">
          <div className="p-4 border-b">
            <h1 className="text-xl font-semibold">ARTNAV PORTAL</h1>
          </div>
          
          <nav className="p-4">
            <div className="space-y-1">
              <a href="#" className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg">
                <Home className="w-5 h-5 mr-3" />
                Dashboard
              </a>
              
              <div className="pt-4">
                <h2 className="px-4 text-sm font-semibold text-gray-500 uppercase">Fairs</h2>
                <div className="mt-2 space-y-1">
                  <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                    SCOPE DEMO
                  </a>
                </div>
              </div>

              <div className="pt-4">
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <FileText className="w-5 h-5 mr-3" />
                  Files
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <BarChart2 className="w-5 h-5 mr-3" />
                  Reports
                </a>
              </div>
            </div>

            <div className="pt-8">
              <h2 className="px-4 text-sm font-semibold text-gray-500 uppercase">Admin Menu</h2>
              <div className="mt-2 space-y-1">
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <Settings className="w-5 h-5 mr-3" />
                  Settings
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                  <Users className="w-5 h-5 mr-3" />
                  Users
                </a>
              </div>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <header className="bg-white border-b">
            <div className="flex items-center justify-between px-8 py-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-500">Fair</span>
                <span className="text-gray-700">SCOPE DEMO</span>
                <span className="text-gray-500">/</span>
                <span className="text-gray-500">Modules</span>
              </div>
              <Button variant="outline">Edit Fair</Button>
            </div>
          </header>

          <main className="p-8">
            <div className="mb-8">
              <img
                src="/lovable-uploads/02bf7219-49f2-463c-a0e6-1a118e1c6f7d.png"
                alt="SCOPE Demo"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>

            <p className="text-gray-600 mb-8">
              This is a demonstration account set up to enabling Portal configuration to SCOPE needs
            </p>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Application</h3>
                  <p className="text-gray-500">default description.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-end space-x-2">
                    <span className="text-sm text-gray-600">Enabled</span>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-end space-x-2">
                    <span className="text-sm text-gray-600">Opened</span>
                    <Switch />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
