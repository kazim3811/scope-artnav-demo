
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeftToLine, Eye } from "lucide-react";

const Submissions = () => {
  const submissions = [
    { id: 1, name: "*Frieze Test* Anouka", status: "Not Submitted" },
    { id: 2, name: "*Frieze Test* by Rebeka", status: "Not Submitted" },
    { id: 3, name: "*Frieze Test* FLA25 AH", status: "Not Submitted" },
    { id: 4, name: "*Frieze Test* FLFM24", status: "Not Submitted" },
    { id: 5, name: "*Frieze Test* RE Test", status: "Not Submitted" },
    { id: 6, name: "1 Mira Madrid", status: "Completed" },
    { id: 7, name: "3812 Gallery", status: "Not Submitted" },
    { id: 8, name: "47 Canal", status: "Not Submitted" },
  ];

  return (
    <div className="min-h-screen bg-[#f3f3f3]">
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
          <div className="flex gap-4 mb-6">
            <Button variant="outline" className="flex items-center gap-2">
              <span>All Result</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <span>All Status</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <span>All Terms & Conditions</span>
            </Button>
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
                  <TableHead>Application From</TableHead>
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
                      <span
                        className={`px-2 py-1 rounded text-sm ${
                          submission.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {submission.status}
                      </span>
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
    </div>
  );
};

export default Submissions;
