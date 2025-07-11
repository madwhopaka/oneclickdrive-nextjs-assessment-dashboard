"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ListingPagination } from "@/app/(components)/dashboard/Pagination";
import {
  Listing,
  getLocalListings,
  updateLocalListing,
} from "@/lib/listingData";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export default function ListingsPage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [editing, setEditing] = useState<Listing | null>(null);
  const [editForm, setEditForm] = useState<Partial<Listing>>({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const [statusFilter, setStatusFilter] = useState<string>("All");

  const limit = 10;

const fetchListings = useCallback(async () => {
    const allListings = await getLocalListings();

    const filtered =
      statusFilter === "All"
        ? allListings
        : allListings.filter((listing) => listing.status === statusFilter);

    const start = (page - 1) * limit;
    const end = start + limit;
    setListings(filtered.slice(start, end));
    setTotalPages(Math.ceil(filtered.length / limit));
  }, [page, statusFilter]);

  useEffect(() => {
    fetchListings();
  }, [page, statusFilter, fetchListings]);

  useEffect(() => {
    async function fetchDataAfterUpdate() {
      if (editing === null) {
        const allListings = await getLocalListings();
        const start = (page - 1) * limit;
        const end = start + limit;
        setListings(allListings.slice(start, end));
        setTotalPages(Math.ceil(allListings.length / limit));
      }
    }

    fetchDataAfterUpdate();
  }, [editing,page]);



  const updateStatus = async (id: string, status: Listing["status"]) => {
    const reviewedFields =
      status !== "Pending"
        ? {
            reviewedBy: "admin@company.com",
            reviewedAt: new Date().toISOString(),
          }
        : {};
    await updateLocalListing(id, { status, ...reviewedFields });
    await fetchListings();
  };

  const saveEdit = () => {
    if (!editForm.id) return;
    updateLocalListing(editForm.id, editForm as Listing);
    setEditing(null);
    setIsEditDialogOpen(false);
  };

  const openEdit = (listing: Listing) => {
    setEditing(listing);
    setEditForm({ ...listing });
    setIsEditDialogOpen(true);
  };

  const handleEditChange = (field: keyof Listing, value: string | number) => {
    setEditForm((prev) => ({
      ...prev,
      [field]: field === "year" ? Number(value) : value,
    }));
  };

  const tableHeaders = ["Title", "Brand", "Model", "Year", "Status"];

  const tableCells = ["title", "make", "model", "year", "status"];

  return (
    <div className="w-full p-6">
      <h1 className="text-2xl font-semibold mb-4">Car Listings</h1>
      <Table>
        <TableHeader>
          <TableRow>
            {tableHeaders.map((header) => (
              <TableHead key={header} className="text-left">
                {header}
              </TableHead>
            ))}
            <TableHead className="flex items-center gap-4 s">
              Filter
              <Select
                value={statusFilter}
                onValueChange={(value) => {
                  setStatusFilter(value);
                  setPage(1);
                }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="Approved">Approved</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listings.map((listing) => (
            <TableRow key={listing.id}>
              {tableCells.map((cell) => (
                <TableCell key={cell} className="text-left">
                  {listing[cell as keyof Listing]}
                </TableCell>
            
              ))}
                  <TableCell key="filter" className="text-left">
                                </TableCell>
              <TableCell className="text-right space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateStatus(listing.id, "Approved")}
                >
                  Approve
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => updateStatus(listing.id, "Rejected")}
                >
                  Reject
                </Button>
                <Button
                  size="sm"
                  onClick={() => {
                    openEdit(listing);
                  }}
                >
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Listing</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
              <Input
                value={editForm.title || ""}
                onChange={(e) => handleEditChange("title", e.target.value)}
                placeholder="Title"
              />
              <Input
                value={editForm.make || ""}
                onChange={(e) => handleEditChange("make", e.target.value)}
                placeholder="Brand"
              />
              <Input
                value={editForm.model || ""}
                onChange={(e) => handleEditChange("model", e.target.value)}
                placeholder="Model"
              />
              <Input
                type="number"
                value={editForm.year || ""}
                onChange={(e) => handleEditChange("year", e.target.value)}
                placeholder="Year"
              />
              <Button onClick={saveEdit} className="w-full">
                Save Changes
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </Table>

      <div className="flex justify-center mt-6">
        <ListingPagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}
