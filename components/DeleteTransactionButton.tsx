"use client";
import { toast } from "react-toastify";
import deleteTransaction from "@/app/actions/deleteTransaction";

const DeleteTransactionButton = ({ id }: { id: string }) => {
  const handleDeleteTransaction = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this transaction?"
    );

    if (!confirmed) return;

    const { message, error } = await deleteTransaction(id);

    if (error) {
      toast.error(error);
    }

    toast.success(message);
  };

  return (
    <button onClick={() => handleDeleteTransaction(id)} className="delete-btn">
      x
    </button>
  );
};

export default DeleteTransactionButton;
