import React from "react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface BreadcrumbItemProps {
  href?: string;
  label: string;
  isCurrent?: boolean;
  isDropdown?: boolean;
  dropdownItems?: { label: string; href?: string }[];
}

interface BreadcrumbProps {
  items: BreadcrumbItemProps[];
}

const DynamicBreadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <BreadcrumbSeparator />}
            {item.isDropdown ? (
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1">
                    <BreadcrumbEllipsis className="h-4 w-4" />
                    <span className="sr-only">Toggle menu</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {item.dropdownItems?.map((dropdownItem, idx) => (
                      <DropdownMenuItem key={idx} ref={dropdownItem.href}>
                        {dropdownItem.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
            ) : (
              <BreadcrumbItem>
                {item.isCurrent ? (
                  <BreadcrumbPage className="text-indigo-500">{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default DynamicBreadcrumb;