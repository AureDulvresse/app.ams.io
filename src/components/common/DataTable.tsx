/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDownIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
  ColumnDef,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Card } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { FileUp, Pencil, Trash2 } from "lucide-react";

interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  filters: string[];
  showSelection?: boolean;
  module_name: string;
}

const DataTable = <T,>({
  data,
  columns,
  filters,
  showSelection = false,
  module_name,
}: DataTableProps<T>) => {
  const navigate = useNavigate();

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState<
    Record<string, boolean>
  >({});
  const [globalFilter, setGlobalFilter] = React.useState("");

  const filteredData = React.useMemo(() => {
    if (!globalFilter) return data;

    return data.filter((row) =>
      filters.some((filter) => {
        const cellValue = (row as any)[filter];
        return String(cellValue)
          .toLowerCase()
          .includes(globalFilter.toLowerCase());
      })
    );
  }, [data, filters, globalFilter]);

  const handleEdit = React.useCallback((row: T) => {
    console.log("Editer la ligne :", row);
  }, []);

  const handleDelete = React.useCallback((row: T) => {
    console.log("Supprimer la ligne :", row);
  }, []);

  // Fonction pour gérer la suppression des lignes sélectionnées
  const handleDeleteSelected = React.useCallback(() => {
    const selectedRows = Object.keys(rowSelection).filter(
      (key) => rowSelection[key]
    );
    console.log("Supprimer les lignes sélectionnées :", selectedRows);
  }, [rowSelection]);

  // Fonction pour exporter les données
  const handleExport = React.useCallback(() => {
    console.log("Exporter les données : ", filteredData);
    // Logique d'exportation à implémenter (e.g., CSV, PDF)
  }, [filteredData]);

  const handleRowClick = (row: T) => {
    // Logique pour définir l'ID ou tout autre paramètre dynamique
    const id = (row as any).id;
    navigate(`/${module_name}/${id}`);
  };

  const columnsWithExtras = React.useMemo(() => {
    const extraColumns: ColumnDef<T>[] = [
      ...(showSelection
        ? [
            {
              id: "select",
              header: ({ table }: { table: any }) => (
                <Checkbox
                  className="mx-4"
                  checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                  }
                  onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                  }
                  aria-label="Select all"
                />
              ),
              cell: ({ row }: { row: any }) => (
                <Checkbox
                  className="mx-4"
                  checked={row.getIsSelected()}
                  onCheckedChange={(value) => row.toggleSelected(!!value)}
                  aria-label="Select row"
                />
              ),
              enableSorting: false,
              enableHiding: false,
            },
          ]
        : []),
      ...columns,
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }: { row: any }) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-center">
                <DotsHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                className="flex items-center gap-2"
                onClick={() => handleEdit(row.original)}
              >
                <Pencil size={16} />
                <span>Modifier</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center gap-2 text-red-500 focus:bg-red-500 focus:text-white"
                onClick={() => handleDelete(row.original)}
              >
                <Trash2 size={16} />
                <span>Supprimer</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
        enableSorting: false,
        enableHiding: false,
      },
    ];

    return extraColumns;
  }, [columns, showSelection, handleEdit, handleDelete]);

  const table = useReactTable({
    data: filteredData,
    columns: columnsWithExtras,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <Card className="p-4 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
      <div className="flex items-center justify-between py-4">
        <Input
          placeholder="Recherche..."
          value={globalFilter}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="w-80 placeholder:text-gray-400 dark:placeholder:text-gray-500 bg-gray-100 dark:bg-gray-800"
        />
        <div className="flex items-center space-x-2">
          {showSelection ? (
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-white dark:bg-gray-900 border-red-500 text-red-500 hover:text-white hover:bg-red-400 hover:border-red-400"
              onClick={handleDeleteSelected}
            >
              <Trash2 size={14} />
              <span>Supprimer</span>
            </Button>
          ) : (
            ""
          )}
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={handleExport}
          >
            <FileUp size={14} />
            <span>Exporter</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center">
                Colonnes <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => (
                  <DropdownMenuItem
                    key={column.id}
                    className="capitalize"
                    onClick={() =>
                      column.toggleVisibility(!column.getIsVisible())
                    }
                  >
                    {column.id}
                  </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="rounded-md overflow-x-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="text-left">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={() => handleRowClick(row.original)}
                  className="cursor-pointer"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-2">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Aucun résultat.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between py-4">
        <div className="text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} sur{" "}
          {table.getFilteredRowModel().rows.length} ligne(s) sélectionnée(s).
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Précédent
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Suivant
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DataTable;
