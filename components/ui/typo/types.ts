import type { HTMLAttributes } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {}

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {}

export interface BlockquoteProps extends HTMLAttributes<HTMLQuoteElement> {}

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  container?: HTMLAttributes<HTMLDivElement>;
}

export interface TableHeadProps
  extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {}

export interface TableHeaderProps
  extends HTMLAttributes<HTMLTableCellElement> {}

export interface TableBodyProps
  extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {}

export interface ListProps extends HTMLAttributes<HTMLUListElement> {}

export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {}

export interface InlineCodeProps extends HTMLAttributes<HTMLElement> {}

export interface LeadProps extends HTMLAttributes<HTMLParagraphElement> {}

export interface LargeProps extends HTMLAttributes<HTMLDivElement> {}

export interface SmallProps extends HTMLAttributes<HTMLElement> {}

export interface MutedProps extends HTMLAttributes<HTMLDivElement> {}
