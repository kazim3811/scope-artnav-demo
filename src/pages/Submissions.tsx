import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeftToLine, Eye } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import MainLayout from "@/components/layouts/MainLayout";
import { useState } from "react";

const Submissions = () => {
  const [search, setSearch] = useState("");
  const [applicationForm, setApplicationForm] = useState("any");

  const submissions = [
    { 
      id: 1, 
      name: "ARTNAV gallery 1 2025", 
      status: "Not Submitted",
      paymentStatus: "Ready to Invoice",
      curatorial: "Under Review"
    },
    { 
      id: 2, 
      name: "ARTNAV gallery 2 2025", 
      status: "Not Submitted",
      paymentStatus: "Ready to Invoice",
      curatorial: "Approved"
    },
    { 
      id: 3, 
      name: "ARTNAV gallery 3 2025", 
      status: "Not Submitted",
      paymentStatus: "Ready to Invoice",
      curatorial: "Under Review"
    },
    { 
      id: 4, 
      name: "ARTNAV gallery 4 2025", 
      status: "Not Submitted",
      paymentStatus: "Ready to Invoice",
      curatorial: "Rejected"
    },
    { 
      id: 5, 
      name: "ARTNAV gallery 5 2025", 
      status: "Not Submitted",
      paymentStatus: "Ready to Invoice",
      curatorial: "Under Review"
    },
    { 
      id: 6, 
      name: "ARTNAV gallery 6 2025", 
      status: "Completed",
      paymentStatus: "Ready to Invoice",
      curatorial: "Approved"
    },
    { 
      id: 7, 
      name: "ARTNAV gallery 7 2025", 
      status: "Not Submitted",
      paymentStatus: "Ready to Invoice",
      curatorial: "Under Review"
    },
    { 
      id: 8, 
      name: "ARTNAV gallery 8 2025", 
      status: "Not Submitted",
      paymentStatus: "Ready to Invoice",
      curatorial: "Under Review"
    },
  ];

  const filteredSubmissions = submissions.filter((submission) =>
    submission.name.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ready to Invoice":
      case "Payment Due":
        return "bg-yellow-100 text-yellow-800";
      case "Paid":
        return "bg-green-100 text-green-800";
      case "Under Review":
        return "bg-blue-100 text-blue-800";
      case "Approved":
        return "bg-green-100 text-green-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Not Submitted":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleStatusUpdate = (submissionId: number, type: 'payment' | 'application' | 'curatorial', newStatus: string) => {
    console.log(`Updating ${type} status for submission ${submissionId} to ${newStatus}`);
    // Here you would typically update the state or make an API call
  };

  return (
    <MainLayout>
      <header className="bg-white border-b border-gray-200">
        <div className="flex items-center px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <span className="text-[#8E9196]">Fair Submissions</span>
            <span className="text-[#8E9196]">/</span>
            <span className="text-[#1A1F2C]">SCOPE DEMO</span>
            <span className="text-[#8E9196]">/</span>
            <span className="text-[#8E9196]">application</span>
          </nav>
        </div>
      </header>

      <main className="p-8">
        <div className="mb-8">
          <Tabs defaultValue="gallery-applications" className="mb-6">
            <TabsList className="bg-transparent border-b w-full rounded-none h-auto p-0 space-x-8">
              <TabsTrigger 
                value="gallery-applications" 
                className="border-b-2 border-transparent data-[state=active]:border-black rounded-none bg-transparent px-0 h-10"
              >
                Gallery Applications
              </TabsTrigger>
              <TabsTrigger 
                value="gallery-submissions" 
                className="border-b-2 border-transparent data-[state=active]:border-black rounded-none bg-transparent px-0 h-10"
              >
                Gallery Submissions
              </TabsTrigger>
              <TabsTrigger 
                value="represented-artists" 
                className="border-b-2 border-transparent data-[state=active]:border-black rounded-none bg-transparent px-0 h-10"
              >
                Represented Artists
              </TabsTrigger>
              <TabsTrigger 
                value="results-manager" 
                className="border-b-2 border-transparent data-[state=active]:border-black rounded-none bg-transparent px-0 h-10"
              >
                Results Manager
              </TabsTrigger>
              <TabsTrigger 
                value="public-user-applications" 
                className="border-b-2 border-transparent data-[state=active]:border-black rounded-none bg-transparent px-0 h-10"
              >
                Public User Applications
              </TabsTrigger>
              <TabsTrigger 
                value="committee-sheets" 
                className="border-b-2 border-transparent data-[state=active]:border-black rounded-none bg-transparent px-0 h-10"
              >
                Committee Sheets
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="gallery-search" className="block text-sm font-medium text-gray-700 mb-1">
                Gallery Name
              </label>
              <Input
                id="gallery-search"
                type="text"
                placeholder="Search gallery..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="max-w-md"
              />
            </div>
            <div>
              <label htmlFor="application-form" className="block text-sm font-medium text-gray-700 mb-1">
                Application Form
              </label>
              <Select value={applicationForm} onValueChange={setApplicationForm}>
                <SelectTrigger id="application-form" className="max-w-md">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="scope">SCOPE</SelectItem>
                  <SelectItem value="volta">VOLTA</SelectItem>
                  <SelectItem value="focus">FOCUS</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-end gap-4 mb-6">
            <Button variant="outline" className="flex items-center gap-2">
              <span>All Result</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <span>All Status</span>
            </Button>
            <Button variant="outline">Manual Update</Button>
          </div>

          <div className="bg-white rounded-lg shadow-sm">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox />
                  </TableHead>
                  <TableHead className="w-24"></TableHead>
                  <TableHead>Gallery Name</TableHead>
                  <TableHead>Application Form</TableHead>
                  <TableHead>Payment Status</TableHead>
                  <TableHead>Curatorial</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSubmissions.map((submission) => (
                  <TableRow key={submission.id}>
                    <TableCell>
                      <Checkbox />
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <ArrowLeftToLine className="w-4 h-4" />
                        <Eye className="w-4 h-4" />
                      </div>
                    </TableCell>
                    <TableCell>{submission.name}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="p-0 h-auto font-normal">
                            <span className={`px-2 py-1 rounded text-sm ${getStatusColor(submission.status)}`}>
                              {submission.status}
                            </span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem onSelect={() => handleStatusUpdate(submission.id, 'application', 'Not Submitted')}>
                            Not Submitted
                          </DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => handleStatusUpdate(submission.id, 'application', 'Completed')}>
                            Completed
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="p-0 h-auto font-normal">
                            <span className={`px-2 py-1 rounded text-sm ${getStatusColor(submission.paymentStatus)}`}>
                              {submission.paymentStatus}
                            </span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem onSelect={() => handleStatusUpdate(submission.id, 'payment', 'Ready to Invoice')}>
                            Ready to Invoice
                          </DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => handleStatusUpdate(submission.id, 'payment', 'Payment Due')}>
                            Payment Due
                          </DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => handleStatusUpdate(submission.id, 'payment', 'Paid')}>
                            Paid
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="p-0 h-auto font-normal">
                            <span className={`px-2 py-1 rounded text-sm ${getStatusColor(submission.curatorial)}`}>
                              {submission.curatorial}
                            </span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem onSelect={() => handleStatusUpdate(submission.id, 'curatorial', 'Under Review')}>
                            Under Review
                          </DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => handleStatusUpdate(submission.id, 'curatorial', 'Approved')}>
                            Approved
                          </DropdownMenuItem>
                          <DropdownMenuItem onSelect={() => handleStatusUpdate(submission.id, 'curatorial', 'Rejected')}>
                            Rejected
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 italic">Empty</span>
                        <Button variant="ghost" className="h-4 w-4 p-0">⋮</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default Submissions;
