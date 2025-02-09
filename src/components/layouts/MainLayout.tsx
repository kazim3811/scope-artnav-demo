
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
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
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
              <a href="/dashboard" className="flex items-center px-4 py-2 text-[#1A1F2C] hover:bg-[#f3f3f3] rounded-lg">
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

                        <Collapsible open={openSubmenu === "submissions"} onOpenChange={() => setOpenSubmenu(openSubmenu === "submissions" ? null : "submissions")}>
                          <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 text-[#1A1F2C] hover:bg-[#f3f3f3] rounded-lg">
                            <div className="flex items-center">
                              <Inbox className="w-5 h-5 mr-3" />
                              <span>Submissions</span>
                            </div>
                            <ChevronRight className="w-4 h-4" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-7">
                            <a href="/submissions" className="flex items-center px-4 py-2 text-[#1A1F2C] hover:bg-[#f3f3f3] rounded-lg">
                              Applications
                            </a>
                          </CollapsibleContent>
                        </Collapsible>

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
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
