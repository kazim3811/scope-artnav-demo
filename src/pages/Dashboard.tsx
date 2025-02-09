
import { 
  Home, 
  Settings, 
  Users, 
  FileText, 
  BarChart2,
  Edit,
  Inbox,
  FolderOpen,
  Calendar,
  Plus,
  Grid,
  Mail,
  FileSpreadsheet,
  History,
  UserCircle,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>("cms");

  return (
    <div className="min-h-screen bg-[#f3f3f3]">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white border-r border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-xl font-bold text-[#1A1F2C]">ARTNAV PORTAL</h1>
          </div>
          
          <nav className="p-4">
            <div className="space-y-1">
              <a href="#" className="flex items-center px-4 py-2 text-[#1A1F2C] hover:bg-[#f3f3f3] rounded-lg">
                <Home className="w-5 h-5 mr-3" />
                Dashboard
              </a>
              
              <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-[#1A1F2C] hover:bg-[#f3f3f3] rounded-lg">
                  <span>Fairs</span>
                  {isOpen ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="pl-4 mt-2">
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-[#1A1F2C] hover:bg-[#f3f3f3] rounded-lg">
                        <span>SCOPE DEMO</span>
                        <ChevronDown className="w-4 h-4" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="pl-4">
                        {/* CMS Section */}
                        <Collapsible open={openSubmenu === "cms"} onOpenChange={() => setOpenSubmenu(openSubmenu === "cms" ? null : "cms")}>
                          <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-[#1A1F2C] hover:bg-[#f3f3f3] rounded-lg">
                            <div className="flex items-center">
                              <Edit className="w-5 h-5 mr-3" />
                              <span>CMS</span>
                            </div>
                            <ChevronDown className="w-4 h-4" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-7">
                            <a href="#" className="flex items-center px-4 py-2 text-[#1A1F2C] hover:bg-[#f3f3f3] rounded-lg">
                              Applications
                            </a>
                          </CollapsibleContent>
                        </Collapsible>

                        {/* Files Section */}
                        <Collapsible open={openSubmenu === "files"} onOpenChange={() => setOpenSubmenu(openSubmenu === "files" ? null : "files")}>
                          <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-[#1A1F2C] hover:bg-[#f3f3f3] rounded-lg">
                            <div className="flex items-center">
                              <FolderOpen className="w-5 h-5 mr-3" />
                              <span>Files</span>
                            </div>
                            <ChevronRight className="w-4 h-4" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-7">
                            <a href="#" className="flex items-center px-4 py-2 text-[#1A1F2C] hover:bg-[#f3f3f3] rounded-lg">
                              Applications
                            </a>
                          </CollapsibleContent>
                        </Collapsible>

                        {/* Submissions Section */}
                        <Collapsible open={openSubmenu === "submissions"} onOpenChange={() => setOpenSubmenu(openSubmenu === "submissions" ? null : "submissions")}>
                          <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-[#1A1F2C] hover:bg-[#f3f3f3] rounded-lg">
                            <div className="flex items-center">
                              <Inbox className="w-5 h-5 mr-3" />
                              <span>Submissions</span>
                            </div>
                            <ChevronRight className="w-4 h-4" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-7">
                            <a href="#" className="flex items-center px-4 py-2 text-[#1A1F2C] hover:bg-[#f3f3f3] rounded-lg">
                              Applications
                            </a>
                          </CollapsibleContent>
                        </Collapsible>

                        {/* Reports Section */}
                        <Collapsible open={openSubmenu === "reports"} onOpenChange={() => setOpenSubmenu(openSubmenu === "reports" ? null : "reports")}>
                          <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-[#1A1F2C] hover:bg-[#f3f3f3] rounded-lg">
                            <div className="flex items-center">
                              <BarChart2 className="w-5 h-5 mr-3" />
                              <span>Reports</span>
                            </div>
                            <ChevronRight className="w-4 h-4" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-7">
                            <a href="#" className="flex items-center px-4 py-2 text-[#1A1F2C] hover:bg-[#f3f3f3] rounded-lg">
                              Applications
                            </a>
                          </CollapsibleContent>
                        </Collapsible>
                      </CollapsibleContent>
                    </Collapsible>

                    <div className="pt-4 space-y-1">
                      <a href="#" className="flex items-center px-4 py-2 text-[#1A1F2C] hover:bg-[#f3f3f3] rounded-lg">
                        <Plus className="w-5 h-5 mr-3" />
                        Add a new fair
                      </a>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            <div className="pt-8">
              <h2 className="px-4 text-sm font-semibold text-[#8E9196] uppercase">Admin Menu</h2>
              <div className="mt-2 space-y-1">
                <a href="#" className="flex items-center px-4 py-2 text-[#1A1F2C] hover:bg-[#f3f3f3] rounded-lg">
                  <Settings className="w-5 h-5 mr-3" />
                  Settings
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-[#1A1F2C] hover:bg-[#f3f3f3] rounded-lg">
                  <Users className="w-5 h-5 mr-3" />
                  Users
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-[#1A1F2C] hover:bg-[#f3f3f3] rounded-lg">
                  <Grid className="w-5 h-5 mr-3" />
                  Accounts
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-[#1A1F2C] hover:bg-[#f3f3f3] rounded-lg">
                  <Mail className="w-5 h-5 mr-3" />
                  Email Templates
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-[#1A1F2C] hover:bg-[#f3f3f3] rounded-lg">
                  <FileSpreadsheet className="w-5 h-5 mr-3" />
                  Form Templates
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-[#1A1F2C] hover:bg-[#f3f3f3] rounded-lg">
                  <History className="w-5 h-5 mr-3" />
                  Order History
                </a>
                <a href="#" className="flex items-center px-4 py-2 text-[#1A1F2C] hover:bg-[#f3f3f3] rounded-lg">
                  <UserCircle className="w-5 h-5 mr-3" />
                  Profile
                </a>
              </div>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
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
            <div className="mb-8">
              <img
                src="/lovable-uploads/02bf7219-49f2-463c-a0e6-1a118e1c6f7d.png"
                alt="SCOPE Demo"
                className="w-full h-64 object-cover rounded-xl"
              />
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
