
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeftToLine, Eye, MoreVertical } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";

interface Note {
  id: number;
  content: string;
  timestamp: string;
}

interface Submission {
  id: number;
  name: string;
  status: "Not Started" | "In Progress" | "Submitted";
  paymentStatus: "Not Completed" | "Paid";
  curatorial: "Not Started" | "In Progress";
  notes: Note[];
}

const Submissions = () => {
  const { toast } = useToast();
  const [statusFilter, setStatusFilter] = useState("all");
  const [paymentStatusFilter, setPaymentStatusFilter] = useState("all");
  const [curatorialFilter, setCuratorialFilter] = useState("all");
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [newNote, setNewNote] = useState("");
  const [viewingNotes, setViewingNotes] = useState(false);

  const submissions: Submission[] = [
    { 
      id: 1, 
      name: "ARTNAV gallery 1 2025", 
      status: "Not Started",
      paymentStatus: "Not Completed",
      curatorial: "Not Started",
      notes: [
        { id: 1, content: "Initial contact made", timestamp: "2024-03-20 14:30" },
        { id: 2, content: "Requested additional information", timestamp: "2024-03-21 09:15" }
      ]
    },
    { 
      id: 2, 
      name: "ARTNAV gallery 2 2025", 
      status: "In Progress",
      paymentStatus: "Not Completed",
      curatorial: "Not Started",
      notes: []
    },
    { 
      id: 3, 
      name: "ARTNAV gallery 3 2025", 
      status: "Submitted",
      paymentStatus: "Paid",
      curatorial: "In Progress",
      notes: []
    },
    { 
      id: 4, 
      name: "ARTNAV gallery 4 2025", 
      status: "Not Started",
      paymentStatus: "Not Completed",
      curatorial: "Not Started",
      notes: []
    },
    { 
      id: 5, 
      name: "ARTNAV gallery 5 2025", 
      status: "In Progress",
      paymentStatus: "Paid",
      curatorial: "In Progress",
      notes: []
    },
    { 
      id: 6, 
      name: "ARTNAV gallery 6 2025", 
      status: "Not Started",
      paymentStatus: "Not Completed",
      curatorial: "Not Started",
      notes: []
    },
    { 
      id: 7, 
      name: "ARTNAV gallery 7 2025", 
      status: "In Progress",
      paymentStatus: "Paid",
      curatorial: "In Progress",
      notes: []
    },
    { 
      id: 8, 
      name: "ARTNAV gallery 8 2025", 
      status: "Submitted",
      paymentStatus: "Paid",
      curatorial: "In Progress",
      notes: []
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Not Completed":
        return "bg-yellow-100 text-yellow-800";
      case "Paid":
        return "bg-green-100 text-green-800";
      case "Not Started":
        return "bg-gray-100 text-gray-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      case "Submitted":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleAddNote = () => {
    if (!selectedSubmission || !newNote.trim()) return;

    const newNoteObj = {
      id: Date.now(),
      content: newNote,
      timestamp: new Date().toLocaleString()
    };

    selectedSubmission.notes.push(newNoteObj);

    toast({
      title: "Note Added",
      description: "Your note has been added successfully."
    });

    setNewNote("");
    setIsAddingNote(false);
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
          <Tabs defaultValue="gallery-applications" className="space-y-4">
            <TabsList>
              <TabsTrigger value="gallery-applications">Gallery Applications</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
              <TabsTrigger value="waitlist">Waitlist</TabsTrigger>
              <TabsTrigger value="accepted">Accepted</TabsTrigger>
              <TabsTrigger value="placed">Placed</TabsTrigger>
            </TabsList>

            <TabsContent value="gallery-applications" className="space-y-4">
              <div className="flex justify-end gap-4 mb-6">
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
                              <SelectItem value="Submitted">Submitted</SelectItem>
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
                              <SelectItem value="Not Completed">Not Completed</SelectItem>
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
                            <Eye className="w-4 h-4" />
                          </div>
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
                          <div className="flex items-center justify-between">
                            {submission.notes.length > 0 ? (
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-blue-600 hover:text-blue-700"
                                onClick={() => {
                                  setSelectedSubmission(submission);
                                  setViewingNotes(true);
                                }}
                              >
                                View
                              </Button>
                            ) : (
                              <span className="text-gray-500 italic">Empty</span>
                            )}
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <DropdownMenuItem
                                  onClick={() => {
                                    setSelectedSubmission(submission);
                                    setIsAddingNote(true);
                                  }}
                                >
                                  Add Note
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="rejected">
              <div className="flex items-center justify-center h-32 bg-white rounded-lg">
                <p className="text-gray-500">No rejected applications</p>
              </div>
            </TabsContent>

            <TabsContent value="waitlist">
              <div className="flex items-center justify-center h-32 bg-white rounded-lg">
                <p className="text-gray-500">No applications in waitlist</p>
              </div>
            </TabsContent>

            <TabsContent value="accepted">
              <div className="flex items-center justify-center h-32 bg-white rounded-lg">
                <p className="text-gray-500">No accepted applications</p>
              </div>
            </TabsContent>

            <TabsContent value="placed">
              <div className="flex items-center justify-center h-32 bg-white rounded-lg">
                <p className="text-gray-500">No placed applications</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Add Note Dialog */}
      <Dialog open={isAddingNote} onOpenChange={setIsAddingNote}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Note</DialogTitle>
            <DialogDescription>
              Add a note for {selectedSubmission?.name}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Textarea
              placeholder="Enter your note here..."
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              className="min-h-[100px]"
            />
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setIsAddingNote(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddNote}>
                Add Note
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* View Notes Dialog */}
      <Dialog open={viewingNotes} onOpenChange={setViewingNotes}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Notes History</DialogTitle>
            <DialogDescription>
              Notes for {selectedSubmission?.name}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4 max-h-[60vh] overflow-y-auto">
            {selectedSubmission?.notes.map((note) => (
              <div key={note.id} className="border-b border-gray-100 pb-4">
                <p className="text-sm text-gray-600 mb-1">{note.content}</p>
                <p className="text-xs text-gray-400">{note.timestamp}</p>
              </div>
            )).reverse()}
          </div>
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
};

export default Submissions;
