
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeftToLine, Eye } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
  const [statusFilter, setStatusFilter] = useState("all");
  const [paymentStatusFilter, setPaymentStatusFilter] = useState("all");
  const [curatorialFilter, setCuratorialFilter] = useState("all");

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

  const filteredSubmissions = submissions.filter((submission) => {
    const statusMatches = statusFilter === "all" || submission.status === statusFilter;
    const paymentMatches = paymentStatusFilter === "all" || submission.paymentStatus === paymentStatusFilter;
    const curatorialMatches = curatorialFilter === "all" || submission.curatorial === curatorialFilter;

    return statusMatches && paymentMatches && curatorialMatches;
  });

  const curatorialSubmissions = submissions.filter(submission => 
    submission.curatorial === "Under Review"
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

  const SubmissionsTable = ({ submissions }: { submissions: typeof filteredSubmissions }) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-12">
            <Checkbox />
          </TableHead>
          <TableHead className="w-24"></TableHead>
          <TableHead>Gallery Name</TableHead>
          <TableHead>
            <div className="flex flex-col gap-2">
              <span>Application Form</span>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="h-8">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Not Submitted">Not Submitted</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TableHead>
          <TableHead>
            <div className="flex flex-col gap-2">
              <span>Payment Status</span>
              <Select value={paymentStatusFilter} onValueChange={setPaymentStatusFilter}>
                <SelectTrigger className="h-8">
                  <SelectValue placeholder="All Payments" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Payments</SelectItem>
                  <SelectItem value="Ready to Invoice">Ready to Invoice</SelectItem>
                  <SelectItem value="Payment Due">Payment Due</SelectItem>
                  <SelectItem value="Paid">Paid</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TableHead>
          <TableHead>
            <div className="flex flex-col gap-2">
              <span>Curatorial</span>
              <Select value={curatorialFilter} onValueChange={setCuratorialFilter}>
                <SelectTrigger className="h-8">
                  <SelectValue placeholder="All Results" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Results</SelectItem>
                  <SelectItem value="Under Review">Under Review</SelectItem>
                  <SelectItem value="Approved">Approved</SelectItem>
                  <SelectItem value="Rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TableHead>
          <TableHead>Notes</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {submissions.map((submission) => (
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
  );

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
          <div className="flex justify-end gap-4 mb-6">
            <Button variant="outline">Manual Update</Button>
          </div>

          <div className="bg-white rounded-lg shadow-sm">
            <Tabs defaultValue="submissions" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0">
                <TabsTrigger 
                  value="submissions" 
                  className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-black rounded-none bg-transparent"
                >
                  Gallery Submissions
                </TabsTrigger>
                <TabsTrigger 
                  value="curatorial" 
                  className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-black rounded-none bg-transparent"
                >
                  Curatorial
                </TabsTrigger>
                <TabsTrigger 
                  value="public-user-applications" 
                  className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-black rounded-none bg-transparent"
                >
                  Public User Applications
                </TabsTrigger>
                <TabsTrigger 
                  value="committee-sheets" 
                  className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-black rounded-none bg-transparent"
                >
                  Committee Sheets
                </TabsTrigger>
              </TabsList>
              <div className="mt-4">
                <TabsContent value="submissions">
                  <SubmissionsTable submissions={filteredSubmissions} />
                </TabsContent>
                <TabsContent value="curatorial">
                  <SubmissionsTable submissions={curatorialSubmissions} />
                </TabsContent>
                <TabsContent value="public-user-applications">
                  <div className="p-4 text-center text-gray-500">No public user applications available</div>
                </TabsContent>
                <TabsContent value="committee-sheets">
                  <div className="p-4 text-center text-gray-500">No committee sheets available</div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export default Submissions;
