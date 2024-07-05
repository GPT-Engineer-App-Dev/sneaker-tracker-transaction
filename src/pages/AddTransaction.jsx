import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const AddTransaction = () => {
  const { register, handleSubmit, reset } = useForm();
  const [transactions, setTransactions] = useState([]);

  const onSubmit = (data) => {
    const newTransaction = {
      id: Date.now(),
      ...data,
    };
    setTransactions([...transactions, newTransaction]);
    toast.success("Transaction added successfully!");
    reset();
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Transaction</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="date">Date</Label>
          <Input type="date" id="date" {...register("date", { required: true })} />
        </div>
        <div>
          <Label htmlFor="amount">Amount</Label>
          <Input type="number" id="amount" {...register("amount", { required: true, min: 0 })} />
        </div>
        <div>
          <Label htmlFor="type">Type</Label>
          <Select onValueChange={(value) => register("type").onChange({ target: { value } })}>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="income">Income</SelectItem>
              <SelectItem value="expense">Expense</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="category">Category</Label>
          <Select onValueChange={(value) => register("category").onChange({ target: { value } })}>
            <SelectTrigger>
              <SelectValue placeholder="Select brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nike">Nike</SelectItem>
              <SelectItem value="adidas">Adidas</SelectItem>
              <SelectItem value="jordan">Jordan</SelectItem>
              <SelectItem value="yeezy">Yeezy</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit">Add Transaction</Button>
      </form>
    </div>
  );
};

export default AddTransaction;