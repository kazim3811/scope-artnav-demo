import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ArrowLeftToLine, Eye, CheckCircle2, XCircle, HelpCircle, MoreVertical, Pencil, Settings } from "lucide-react";
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
  const [previewApplication, setPreviewApplication] = useState<number | null>(null);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [editedValues, setEditedValues] = useState<any>(null);

  const mockApplicationData = {
    galleryName: "ARTNAV Gallery",
    website: "www.artnavgallery.com",
    yearEstablished: "2010",
    primaryContact: {
      name: "John Smith",
      position: "Gallery Director",
      email: "john@artnavgallery.com",
      phone: "+1 (555) 123-4567"
    },
    exhibitType: "Solo Exhibition",
    boothPreference: "Standard Booth 20x20",
    representedArtists: [
      "Sarah Chen",
      "Marcus Rivera",
      "Elena Rodriguez",
      "David Kim"
    ],
    previousFairs: "Art Basel Miami 2023, Frieze London 2023",
    proposedProgram: "We plan to showcase a curated selection of contemporary works focusing on emerging artists from the Asia-Pacific region. The exhibition will feature multimedia installations and traditional mediums."
  };

  const submissions = [
    { 
      id: 1, 
      name: "ARTNAV gallery 1 2025", 
      status: "Not Started",
      paymentStatus: "Incomplete",
      curatorial: "Not Started",
      invoicingStatus: "Not Started"
    },
    { 
      id: 2, 
      name: "ARTNAV gallery 2 2025", 
      status: "In Progress",
      paymentStatus: "Incomplete",
      curatorial: "In Progress",
      invoicingStatus: "Invoice Sent"
    },
    { 
      id: 3, 
      name: "ARTNAV gallery 3 2025", 
      status: "Completed",
      paymentStatus: "Paid",
      curatorial: "In Progress",
      invoicingStatus: "Not Started"
    },
    { 
      id: 4, 
      name: "ARTNAV gallery 4 2025", 
      status: "Not Started",
      paymentStatus: "Incomplete",
      curatorial: "Not Started",
      invoicingStatus: "Not Started"
    },
    { 
      id: 5, 
      name: "ARTNAV gallery 5 2025", 
      status: "Not Started",
      paymentStatus: "Incomplete",
      curatorial: "Not Started",
      invoicingStatus: "Not Started"
    },
    { 
      id: 6, 
      name: "ARTNAV gallery 6 2025", 
      status: "Completed",
      paymentStatus: "Paid",
      curatorial: "Approved",
      invoicingStatus: "Paid"
    },
    { 
      id: 7, 
      name: "ARTNAV gallery 7 2025", 
      status: "Not Started",
      paymentStatus: "Incomplete",
      curatorial: "Not Started",
      invoicingStatus: "Not Started"
    },
    { 
      id: 8, 
      name: "ARTNAV gallery 8 2025", 
      status: "Not Started",
      paymentStatus: "Incomplete",
      curatorial: "Not Started",
      invoicingStatus: "Not Started"
    },
  ];

  const filteredSubmissions = submissions.filter((submission) => {
    const statusMatches = statusFilter === "all" || submission.status === statusFilter;
    const paymentMatches = paymentStatusFilter === "all" || submission.paymentStatus === paymentStatusFilter;
    const curatorialMatches = curatorialFilter === "all" || submission.curatorial === curatorialFilter;

    return statusMatches && paymentMatches && curatorialMatches;
  });

  const curatorialSubmissions = submissions.filter(submission => 
    submission.curatorial === "Not Started"
  );

  const approvedSubmissions = [
    { 
      id: 6, 
      name: "ARTNAV gallery 6 2025", 
      status: "Completed",
      paymentStatus: "Paid",
      curatorial: "Approved",
      invoicingStatus: "Paid"
    },
    { 
      id: 12, 
      name: "ARTNAV gallery 12 2025", 
      status: "Completed",
      paymentStatus: "Paid",
      curatorial: "Approved",
      invoicingStatus: "Part Paid"
    },
    { 
      id: 13, 
      name: "ARTNAV gallery 13 2025", 
      status: "Completed",
      paymentStatus: "Paid",
      curatorial: "Approved",
      invoicingStatus: "Unpaid"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Paid":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Not Started":
        return "bg-red-100 text-red-800";
      case "Incomplete":
        return "bg-yellow-100 text-yellow-800";
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
          url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
          artworkName: "Sunset Blooms",
          artistName: "Sarah Chen",
          aboutWork: "A dynamic exploration of natural landscapes, merging organic forms with vibrant colors. The piece reflects on our connection with nature through the beauty of flowers.",
          medium: "Digital Print on Canvas",
          dimensions: "48\" x 36\"",
          year: "2024"
        },
        {
          url: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
          artworkName: "Floral Patterns",
          artistName: "Marcus Rivera",
          aboutWork: "An abstract interpretation of traditional floral textiles, capturing the delicate patterns and textures found in nature through a contemporary lens.",
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
                  <SelectItem value="Not Started">Not Started</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
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
                  <SelectItem value="Incomplete">Incomplete</SelectItem>
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
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Not Started">Not Started</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
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
                <Eye 
                  className="w-4 h-4 cursor-pointer hover:text-blue-600" 
                  onClick={() => setPreviewApplication(submission.id)}
                />
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
                  <DropdownMenuItem onSelect={() => handleStatusUpdate(submission.id, 'application', 'Not Started')}>
                    Not Started
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => handleStatusUpdate(submission.id, 'application', 'In Progress')}>
                    In Progress
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
                  <DropdownMenuItem onSelect={() => handleStatusUpdate(submission.id, 'payment', 'Incomplete')}>
                    Incomplete
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
                  <DropdownMenuItem onSelect={() => handleStatusUpdate(submission.id, 'curatorial', 'Not Started')}>
                    Not Started
                  </DropdownMenuItem>
                  <DropdownMenuItem onSelect={() => handleStatusUpdate(submission.id, 'curatorial', 'In Progress')}>
                    In Progress
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
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {artwork.artworkName}
                        </h3>
                        <p className="text-base font-medium text-gray-700 mt-1">
                          Artist Name: {artwork.artistName}
                        </p>
                      </div>

                      <div className="space-y-2">
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

                      <div>
                        <h4 className="text-sm font-medium text-gray-900">About the Work</h4>
                        <p className="text-sm text-gray-600 mt-1">{artwork.aboutWork}</p>
                      </div>
                    </div>

                    <div className="w-full max-w-2xl mx-auto">
                      <div className="aspect-[4/3] rounded-lg overflow-hidden">
                        <img 
                          src={artwork.url} 
                          alt={artwork.artworkName}
                          className="w-full h-full object-cover"
                        />
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

  const ApplicationPreviewDialog = () => (
    <Dialog open={previewApplication !== null} onOpenChange={() => setPreviewApplication(null)}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Gallery Application Preview</DialogTitle>
          <DialogDescription>
            Application details submitted by the gallery
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4 overflow-y-auto pr-6">
          {/* Gallery Information Section */}
          <div>
            <div className="bg-gray-100 px-4 py-2 font-medium text-gray-700 mb-4 flex justify-between items-center">
              <span>Gallery Details</span>
              {editingField === 'galleryDetails' ? (
                <Button size="sm" onClick={() => handleSave('galleryDetails')}>Save</Button>
              ) : (
                <Pencil 
                  className="h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-600" 
                  onClick={() => handleEdit('galleryDetails')}
                />
              )}
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-4 gap-4 items-center px-4">
                <div className="text-sm text-gray-600">Gallery Name</div>
                <div className="col-span-3">
                  {editingField === 'galleryDetails' ? (
                    <Input 
                      value={editedValues?.galleryName || mockApplicationData.galleryName}
                      onChange={(e) => setEditedValues({ ...editedValues, galleryName: e.target.value })}
                      className="flex-1"
                    />
                  ) : (
                    mockApplicationData.galleryName
                  )}
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 items-center px-4">
                <div className="text-sm text-gray-600">Website</div>
                <div className="col-span-3">
                  {editingField === 'galleryDetails' ? (
                    <Input 
                      value={editedValues?.website || mockApplicationData.website}
                      onChange={(e) => setEditedValues({ ...editedValues, website: e.target.value })}
                      className="flex-1"
                    />
                  ) : (
                    mockApplicationData.website
                  )}
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 items-center px-4">
                <div className="text-sm text-gray-600">Year Established</div>
                <div className="col-span-3">
                  {editingField === 'galleryDetails' ? (
                    <Input 
                      value={editedValues?.yearEstablished || mockApplicationData.yearEstablished}
                      onChange={(e) => setEditedValues({ ...editedValues, yearEstablished: e.target.value })}
                      className="flex-1"
                    />
                  ) : (
                    mockApplicationData.yearEstablished
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Primary Contact Section */}
          <div>
            <div className="bg-gray-100 px-4 py-2 font-medium text-gray-700 mb-4 flex justify-between items-center">
              <span>Primary Contact Information</span>
              {editingField === 'contactInfo' ? (
                <Button size="sm" onClick={() => handleSave('contactInfo')}>Save</Button>
              ) : (
                <Pencil 
                  className="h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-600" 
                  onClick={() => handleEdit('contactInfo')}
                />
              )}
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-4 gap-4 items-center px-4">
                <div className="text-sm text-gray-600">Name</div>
                <div className="col-span-3">
                  {editingField === 'contactInfo' ? (
                    <Input 
                      value={editedValues?.primaryContact?.name || mockApplicationData.primaryContact.name}
                      onChange={(e) => setEditedValues({
                        ...editedValues,
                        primaryContact: { ...editedValues?.primaryContact, name: e.target.value }
                      })}
                      className="flex-1"
                    />
                  ) : (
                    mockApplicationData.primaryContact.name
                  )}
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 items-center px-4">
                <div className="text-sm text-gray-600">Position</div>
                <div className="col-span-3">
                  {editingField === 'contactInfo' ? (
                    <Input 
                      value={editedValues?.primaryContact?.position || mockApplicationData.primaryContact.position}
                      onChange={(e) => setEditedValues({
                        ...editedValues,
                        primaryContact: { ...editedValues?.primaryContact, position: e.target.value }
                      })}
                      className="flex-1"
                    />
                  ) : (
                    mockApplicationData.primaryContact.position
                  )}
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 items-center px-4">
                <div className="text-sm text-gray-600">Email</div>
                <div className="col-span-3">
                  {editingField === 'contactInfo' ? (
                    <Input 
                      value={editedValues?.primaryContact?.email || mockApplicationData.primaryContact.email}
                      onChange={(e) => setEditedValues({
                        ...editedValues,
                        primaryContact: { ...editedValues?.primaryContact, email: e.target.value }
                      })}
                      className="flex-1"
                    />
                  ) : (
                    mockApplicationData.primaryContact.email
                  )}
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 items-center px-4">
                <div className="text-sm text-gray-600">Phone</div>
                <div className="col-span-3">
                  {editingField === 'contactInfo' ? (
                    <Input 
                      value={editedValues?.primaryContact?.phone || mockApplicationData.primaryContact.phone}
                      onChange={(e) => setEditedValues({
                        ...editedValues,
                        primaryContact: { ...editedValues?.primaryContact, phone: e.target.value }
                      })}
                      className="flex-1"
                    />
                  ) : (
                    mockApplicationData.primaryContact.phone
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Exhibition Details Section */}
          <div>
            <div className="bg-gray-100 px-4 py-2 font-medium text-gray-700 mb-4 flex justify-between items-center">
              <span>Exhibition Details</span>
              {editingField === 'exhibitionDetails' ? (
                <Button size="sm" onClick={() => handleSave('exhibitionDetails')}>Save</Button>
              ) : (
                <Pencil 
                  className="h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-600" 
                  onClick={() => handleEdit('exhibitionDetails')}
                />
              )}
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-4 gap-4 items-center px-4">
                <div className="text-sm text-gray-600">Exhibition Type</div>
                <div className="col-span-3">
                  {editingField === 'exhibitionDetails' ? (
                    <Input 
                      value={editedValues?.exhibitType || mockApplicationData.exhibitType}
                      onChange={(e) => setEditedValues({ ...editedValues, exhibitType: e.target.value })}
                      className="flex-1"
                    />
                  ) : (
                    mockApplicationData.exhibitType
                  )}
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 items-center px-4">
                <div className="text-sm text-gray-600">Booth Preference</div>
                <div className="col-span-3">
                  {editingField === 'exhibitionDetails' ? (
                    <Input 
                      value={editedValues?.boothPreference || mockApplicationData.boothPreference}
                      onChange={(e) => setEditedValues({ ...editedValues, boothPreference: e.target.value })}
                      className="flex-1"
                    />
                  ) : (
                    mockApplicationData.boothPreference
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Represented Artists Section */}
          <div>
            <div className="bg-gray-100 px-4 py-2 font-medium text-gray-700 mb-4 flex justify-between items-center">
              <span>Represented Artists</span>
              {editingField === 'artists' ? (
                <Button size="sm" onClick={() => handleSave('artists')}>Save</Button>
              ) : (
                <Pencil 
                  className="h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-600" 
                  onClick={() => handleEdit('artists')}
                />
              )}
            </div>
            <div className="px-4">
              <div className="space-y-2">
                {mockApplicationData.representedArtists.map((artist, index) => (
                  <div key={index}>
                    {editingField === 'artists' ? (
                      <Input 
                        value={editedValues?.representedArtists?.[index] || artist}
                        onChange={(e) => {
                          const newArtists = [...(editedValues?.representedArtists || mockApplicationData.representedArtists)];
                          newArtists[index] = e.target.value;
                          setEditedValues({ ...editedValues, representedArtists: newArtists });
                        }}
                        className="mb-2"
                      />
                    ) : (
                      artist
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience & Program Section */}
          <div>
            <div className="bg-gray-100 px-4 py-2 font-medium text-gray-700 mb-4 flex justify-between items-center">
              <span>Experience & Program</span>
              {editingField === 'experience' ? (
                <Button size="sm" onClick={() => handleSave('experience')}>Save</Button>
              ) : (
                <Pencil 
                  className="h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-600" 
                  onClick={() => handleEdit('experience')}
                />
              )}
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-4 gap-4 items-start px-4">
                <div className="text-sm text-gray-600">Previous Fairs</div>
                <div className="col-span-3">
                  {editingField === 'experience' ? (
                    <Input 
                      value={editedValues?.previousFairs || mockApplicationData.previousFairs}
                      onChange={(e) => setEditedValues({ ...editedValues, previousFairs: e.target.value })}
                      className="flex-1"
                    />
                  ) : (
                    mockApplicationData.previousFairs
                  )}
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 items-start px-4">
                <div className="text-sm text-gray-600">Proposed Program</div>
                <div className="col-span-3">
                  {editingField === 'experience' ? (
                    <Input 
                      value={editedValues?.proposedProgram || mockApplicationData.proposedProgram}
                      onChange={(e) => setEditedValues({ ...editedValues, proposedProgram: e.target.value })}
                      className="flex-1"
                    />
                  ) : (
                    mockApplicationData.proposedProgram
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  const handleEdit = (section: string) => {
    setEditingField(section);
    if (!editedValues) {
      setEditedValues({ ...mockApplicationData });
    }
  };

  const handleSave = (section: string) => {
    setEditingField(null);
    toast({
      title: "Changes saved",
      description: `Updated ${section} successfully`,
    });
  };

  const waitlistedGalleries = [
    { 
      id: 9, 
      name: "ARTNAV gallery 9 2025", 
      status: "Waitlisted",
      submissionDate: "2024-03-15",
      paymentStatus: "N/A",
      priority: "N/A"
    },
    { 
      id: 10, 
      name: "ARTNAV gallery 10 2025", 
      status: "Waitlisted",
      submissionDate: "2024-03-14",
      paymentStatus: "N/A",
      priority: "N/A"
    },
    { 
      id: 11, 
      name: "ARTNAV gallery 11 2025", 
      status: "Waitlisted",
      submissionDate: "2024-03-13",
      paymentStatus: "N/A",
      priority: "N/A"
    },
  ];

  const handleReminder = (submissionId: number) => {
    toast({
      title: "Reminder Sent",
      description: `Payment reminder sent for submission ${submissionId}`,
    });
  };

  const handleAutomatedReminders = (submissionId: number) => {
    toast({
      title: "Automated Reminders Updated",
      description: `Automated reminders configured for submission ${submissionId}`,
    });
  };

  const handleMarkAsPaid = (submissionId: number) => {
    toast({
      title: "Payment Status Updated",
      description: `Submission ${submissionId} marked as paid`,
    });
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
                  value="curatorial-approved" 
                  className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-black rounded-none bg-transparent"
                >
                  Curatorial Approved
                </TabsTrigger>
                <TabsTrigger 
                  value="waitlist" 
                  className="px-4 py-2 border-b-2 border-transparent data-[state=active]:border-black rounded-none bg-transparent"
                >
                  Waitlist
                </TabsTrigger>
              </TabsList>
              <div className="mt-4">
                <TabsContent value="submissions">
                  <SubmissionsTable submissions={filteredSubmissions} />
                  <ApplicationPreviewDialog />
                </TabsContent>
                <TabsContent value="curatorial">
                  <CuratorialTable submissions={curatorialSubmissions} />
                </TabsContent>
                <TabsContent value="curatorial-approved">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12">
                          <Checkbox />
                        </TableHead>
                        <TableHead>Gallery Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Deposit</TableHead>
                        <TableHead>Curatorial Status</TableHead>
                        <TableHead>Invoicing Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {approvedSubmissions.map((submission) => (
                        <TableRow key={submission.id}>
                          <TableCell>
                            <Checkbox />
                          </TableCell>
                          <TableCell>{submission.name}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded text-sm ${getStatusColor(submission.status)}`}>
                              {submission.status}
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded text-sm ${getStatusColor(submission.paymentStatus)}`}>
                              {submission.paymentStatus}
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded text-sm ${getStatusColor(submission.curatorial)}`}>
                              {submission.curatorial}
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded text-sm ${getStatusColor(submission.invoicingStatus)}`}>
                              {submission.invoicingStatus}
                            </span>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                                  <Settings className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => handleReminder(submission.id)}>
                                  Send Payment Reminder
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleAutomatedReminders(submission.id)}>
                                  Configure Automated Reminders
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => handleMarkAsPaid(submission.id)}>
                                  Mark as Paid
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
                <TabsContent value="waitlist">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12">
                          <Checkbox />
                        </TableHead>
                        <TableHead>Gallery Name</TableHead>
                        <TableHead>Submission Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Payment Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {waitlistedGalleries.map((gallery) => (
                        <TableRow key={gallery.id}>
                          <TableCell>
                            <Checkbox />
                          </TableCell>
                          <TableCell>{gallery.name}</TableCell>
                          <TableCell>{gallery.submissionDate}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded text-sm ${getStatusColor(gallery.status)}`}>
                              {gallery.status}
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded text-sm ${
                              gallery.priority === 'High' ? 'bg-red-100 text-red-800' :
                              gallery.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {gallery.priority}
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded text-sm ${getStatusColor(gallery.paymentStatus)}`}>
                              {gallery.paymentStatus}
                            </span>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Eye 
                                className="w-4 h-4 cursor-pointer hover:text-blue-600" 
                                onClick={() => setPreviewApplication(gallery.id)}
                              />
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
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
