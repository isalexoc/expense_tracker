import { Transaction } from "@/types/Transaction";
import { addCommas } from "@/lib/utils";
import DeleteTransactionButton from "@/components/DeleteTransactionButton";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign} ${addCommas(Math.abs(transaction.amount))}
      </span>
      <DeleteTransactionButton id={transaction.id} />
    </li>
  );
};

export default TransactionItem;
