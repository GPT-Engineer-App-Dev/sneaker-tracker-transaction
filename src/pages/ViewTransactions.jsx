import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ViewTransactions = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, date: "2023-03-15", amount: 250, type: "expense", category: "nike" },
    { id: 2, date: "2023-03-20", amount: 300, type: "income", category: "jordan" },
    { id: 3, date: "2023-03-25", amount: 180, type: "expense", category: "adidas" },
  ]);

  const handleDelete = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
    toast.success("Transaction deleted successfully!");
  };

  const handleEdit = (id) => {
    // Implement edit functionality
    toast.info("Edit functionality to be implemented");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">View Transactions</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>${transaction.amount}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>{transaction.category}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2" onClick={() => handleEdit(transaction.id)}>
                  Edit
                </Button>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(transaction.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ViewTransactions;