"use client";

import addTransaction from "@/app/actions/addTransaction";
import { toast } from "react-toastify";

const AddTransaction = () => {
  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);

    if (error) {
      toast.error(error);
      return;
    } else {
      toast.success("Transaction added");
      console.log(data);
    }
  };
  return (
    <>
      <h3>Add transaction</h3>
      <form action={clientAction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            name="text"
            type="text"
            id="text"
            placeholder="Enter text..."
          />
          <div className="form-control">
            <label htmlFor="amount">
              Amount <br />
              (negative - expense, positive - income)
            </label>
            <input
              name="amount"
              type="number"
              id="amount"
              placeholder="Enter amount..."
              step="0.01"
            />
          </div>
          <button className="btn" type="submit">
            Add transaction
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTransaction;
