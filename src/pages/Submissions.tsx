import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeftToLine, Eye, CheckCircle2, XCircle, HelpCircle } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { useToast } from "@/hooks/use-toast";

const Submissions = () => {
  const { toast } = useToast();
  const [statusFilter, setStatusFilter] = useState("all");
  const [paymentStatusFilter, setPaymentStatusFilter] = useState("all");
  const [curatorialFilter, setCuratorialFilter] = useState("all");
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null);
  const [moreInfoReason, setMoreInfoReason] = useState("");

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

  const handleImageReview = (submissionId: number, action: 'approve' | 'reject' | 'more-info', reason?: string) => {
    const submission = submissions.find(s => s.id === submissionId);
    let message = "";
    
    switch(action) {
      case 'approve':
        message = `Approved images for ${submission?.name}`;
        break;
      case 'reject':
        message = `Rejected images for ${submission?.name}`;
        break;
      case 'more-info':
        message = `Requested more information for ${submission?.name}`;
        break;
    }

    toast({
      title: "Review Updated",
      description: message,
    });

    setSelectedSubmission(null);
    setMoreInfoReason("");
  };

  const mockArtworkDetails = [
    {
      id: 1,
      images: [
        {
          url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
          artworkName: "Convergence",
          artistName: "Sarah Chen",
          aboutWork: "A dynamic exploration of digital landscapes, merging natural forms with technological elements. The piece reflects on our increasingly hybrid existence between digital and physical realms.",
          medium: "Digital Print on Canvas",
          dimensions: "48\" x 36\"",
          year: "2024"
        },
        {
          url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
          artworkName: "Urban Symphony",
          artistName: "Marcus Rivera",
          aboutWork: "An abstract interpretation of city life, capturing the rhythm and energy of urban spaces through bold geometric patterns and layered textures.",
          medium: "Mixed Media on Canvas",
          dimensions: "60\" x 48\"",
          year: "2023"
        }
      ],
      galleryName: "Contemporary Visions Gallery"
    }
  ];

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

  const CuratorialTable = ({ submissions }: { submissions: typeof filteredSubmissions }) => (
    <div className="space-y-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <Checkbox />
            </TableHead>
            <TableHead>Gallery Name</TableHead>
            <TableHead>Images</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {submissions.map((submission) => (
            <TableRow key={submission.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>{submission.name}</TableCell>
              <TableCell>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSelectedSubmission(submission)}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Images
                </Button>
              </TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded text-sm ${getStatusColor(submission.curatorial)}`}>
                  {submission.curatorial}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-green-600 hover:text-green-700"
                    onClick={() => handleImageReview(submission.id, 'approve')}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:text-red-700"
                    onClick={() => handleImageReview(submission.id, 'reject')}
                  >
                    <XCircle className="w-4 h-4" />
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <HelpCircle className="w-4 h-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Request More Information</DialogTitle>
                        <DialogDescription>
                          Specify what additional information is needed from the gallery.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <textarea
                          className="w-full p-2 border rounded-md"
                          placeholder="Enter your request..."
                          value={moreInfoReason}
                          onChange={(e) => setMoreInfoReason(e.target.value)}
                          rows={4}
                        />
                        <Button 
                          onClick={() => {
                            handleImageReview(submission.id, 'more-info', moreInfoReason);
                          }}
                        >
                          Send Request
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Image Preview Dialog */}
      {selectedSubmission && (
        <Dialog open={!!selectedSubmission} onOpenChange={() => setSelectedSubmission(null)}>
          <DialogContent className="max-w-6xl">
            <DialogHeader>
              <DialogTitle>{selectedSubmission.name} - Submitted Artworks</DialogTitle>
            </DialogHeader>
            <div className="space-y-8 max-h-[80vh] overflow-y-auto py-4">
              {mockArtworkDetails[0].images.map((artwork, index) => (
                <div key={index} className="border rounded-lg p-6 bg-gray-50">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Image Column */}
                    <div className="space-y-4">
                      <div className="aspect-[4/3] rounded-lg overflow-hidden">
                        <img 
                          src={artwork.url} 
                          alt={artwork.artworkName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Details Column */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {artwork.artworkName}
                        </h3>
                        <p className="text-base font-medium text-gray-700 mt-1">
                          by {artwork.artistName}
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">About the Work</h4>
                          <p className="text-sm text-gray-600 mt-1">{artwork.aboutWork}</p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">Medium</h4>
                            <p className="text-sm text-gray-600">{artwork.medium}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">Dimensions</h4>
                            <p className="text-sm text-gray-600">{artwork.dimensions}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">Year</h4>
                            <p className="text-sm text-gray-600">{artwork.year}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
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
                  <CuratorialTable submissions={curatorialSubmissions} />
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
