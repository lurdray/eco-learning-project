import { ColumnDef } from "@tanstack/react-table";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  // DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { toast } from "react-toastify";

type Transaction = {
  sn: number;
  title: string;
  rewards: number;
  date: string;
  hash: string;
  hash_link: string;
};

// export const transactions: Transaction[] = [
//   {
//     id: "728ed52f",
//     amount: 100,
//     status: "pending",
//     email: "m@example.com",
//   },
//   {
//     id: "489e1d42",
//     amount: 125,
//     status: "processing",
//     email: "example@gmail.com",
//   },
//   // ...
// ];

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "sn",
    header: "S/N",
  },
  {
    accessorKey: "title",
    header: "Course Title",
  },
  {
    accessorKey: "rewards",
    header: "Rewards",
  },

  {
    accessorKey: "date",
    header: "Date",
  },

  {
    accessorKey: "hash",
    header: "Transaction ID",
    cell: ({ row }) => {
        const trx = row.original;
        return (
            <div>
                <p className="truncate max-w-32">{trx.hash}</p>
            </div>
        )
    }
  },

  {
    id: "actions",
    header: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      const trx = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(trx.hash)}
            >
              Copy Transaction ID
            </DropdownMenuItem>
            <DropdownMenuItem
              
            >
            <Link href={trx.hash_link} target="_blank">
              Open in Explorer
            </Link>
            </DropdownMenuItem>
            {/* <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

// const TransactionsTable = () => {
//   return (
//     <div></div>
//   )
// }
// export default TransactionsTable
