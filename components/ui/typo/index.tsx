import { cn } from "@/lib/utils";

import type {
  BlockquoteProps,
  HeadingProps,
  InlineCodeProps,
  LargeProps,
  LeadProps,
  ListProps,
  MutedProps,
  ParagraphProps,
  SmallProps,
  TableBodyProps,
  TableCellProps,
  TableHeaderProps,
  TableHeadProps,
  TableProps,
  TableRowProps,
} from "./types";

/**
 * Heading 1
 * @param HeadingProps - Has all HTML heading attributes.
 * @param HeadingProps.className - The additional class name of the heading. (additional class will get merged by cn()).
 * @param HeadingProps.children - The text content of the heading. Default is "Heading 1 Placeholder".
 * @returns The heading element.
 * @example
 *  <TypographyH1>
 *      This is a heading 1
 *  </TypographyH1>
 */
export function TypographyH1({
  children = "Heading 1 Placeholder",
  className,
  ...rest
}: HeadingProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
      {...rest}
    >
      {children}
    </h1>
  );
}

/**
 * Heading 2
 * @param HeadingProps - Has all HTML heading attributes.
 * @param HeadingProps.className - The additional class name of the heading. (additional class will get merged by cn()).
 * @param HeadingProps.children - The text content of the heading. Default is "Heading 2 Placeholder".
 * @returns The heading element.
 * @example
 *  <TypographyH2>
 *      This is a heading 2
 *  </TypographyH2>
 */
export function TypographyH2({
  children = "Heading 2 Placeholder",
  className,
  ...rest
}: HeadingProps) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...rest}
    >
      {children}
    </h2>
  );
}

/**
 * Heading 3
 * @param HeadingProps - Has all HTML heading attributes.
 * @param HeadingProps.className - The additional class name of the heading. (additional class will get merged by cn()).
 * @param HeadingProps.children - The text content of the heading. Default is "Heading 3 Placeholder".
 * @returns The heading element.
 * @example
 *  <TypographyH3>
 *      This is a heading 3
 *  </TypographyH3>
 */
export function TypographyH3({
  children = "Heading 3 Placeholder",
  className,
  ...rest
}: HeadingProps) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...rest}
    >
      {children}
    </h3>
  );
}

/**
 * Heading 4
 * @param HeadingProps - Has all HTML heading attributes.
 * @param HeadingProps.className - The additional class name of the heading. (additional class will get merged by cn()).
 * @param HeadingProps.children - The text content of the heading. Default is "Heading 4 Placeholder".
 * @returns The heading element.
 * @example
 *  <TypographyH4>
 *      This is a heading 4
 *  </TypographyH4>
 */
export function TypographyH4({
  children = "Heading 4 Placeholder",
  className,
  ...rest
}: HeadingProps) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...rest}
    >
      {children}
    </h4>
  );
}

/**
 * Paragraph
 * @param ParagraphProps - Has all HTML Paragraph attributes.
 * @param ParagraphProps.className - The additional class name of the Paragraph. (additional class will get merged by cn()).
 * @param ParagraphProps.children - The text content of the Paragraph. Default is "Paragraph Placeholder".
 * @returns A JSX element.
 * @example
 *  <TypographyP>
 *      This is a paragraph
 *  </TypographyP>
 */
export function TypographyP({
  children = "Paragraph Placeholder",
  className,
  ...rest
}: ParagraphProps) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...rest}
    >
      {children}
    </p>
  );
}

/**
 * Blockquote
 * @param BlockquoteProps - Has all HTML Blockquote attributes.
 * @param BlockquoteProps.className - The additional class name of the Blockquote. (additional class will get merged by cn()).
 * @param BlockquoteProps.children - The text content of the Blockquote. Default is "Blockquote Placeholder".
 * @returns A JSX element.
 * @example
 *  <TypographyBlockquote>
 *      This is a blockquote
 *  </TypographyBlockquote>
 */
export function TypographyBlockquote({
  children = "Blockquote Placeholder",
  className,
  ...rest
}: BlockquoteProps) {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...rest}
    >
      {children}
    </blockquote>
  );
}

/**
 * Table
 * @param TableProps - Has all HTML Table attributes.
 * @param TableProps.className - The additional class name of the Table. (additional class will get merged by cn()).
 * @param TableProps.children - The children of the Table.
 * @param TableProps.container - To change the props of the container div.
 * @returns A JSX element.
 * @example
 *  <Table>
 *    ...
 *  </Table>
 */
export function Table({ children, className, container, ...rest }: TableProps) {
  const { className: containerClassName, ...containerRest } = container ?? {};
  return (
    <div
      className={cn("my-6 w-full overflow-y-auto", containerClassName)}
      {...containerRest}
    >
      <table className={cn("w-full", className)} {...rest}>
        {children}
      </table>
    </div>
  );
}

/**
 * Table Head
 * @param TableHeadProps - Has all HTML Table Head attributes.
 * @param TableHeadProps.children - The children of the Table Head.
 * @returns A JSX element.
 * @example
 *  <THead>
 *    ...
 *  </THead>
 */
export function THead({ children, ...rest }: TableHeadProps) {
  return <thead {...rest}>{children}</thead>;
}

/**
 * Table Row
 * @param TableRowProps - Has all HTML Table Row attributes.
 * @param TableRowProps.children - The children of the Table Row.
 * @param TableRowProps.className - The additional class name of the Table Row. (additional class will get merged by cn()).
 * @returns A JSX element.
 * @example
 *  <TR>
 *    ...
 *  </TR>
 */
export function TR({ children, className, ...rest }: TableRowProps) {
  return (
    <tr className={cn("m-0 border-t p-0 even:bg-muted", className)} {...rest}>
      {children}
    </tr>
  );
}

/**
 * Table Header
 * @param TableHeaderProps - Has all HTML Table Header attributes.
 * @param TableHeaderProps.children - The children of the Table Header.
 * @param TableHeaderProps.className - The additional class name of the Table Header. (additional class will get merged by cn()).
 * @returns A JSX element.
 * @example
 *  <TH>
 *    ...
 *  </TH>
 */
export function TH({ children, className, ...rest }: TableHeaderProps) {
  return (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...rest}
    >
      {children}
    </th>
  );
}

/**
 * Table Body
 * @param TableBodyProps - Has all HTML Table Body attributes.
 * @param TableBodyProps.children - The children of the Table Body.
 * @returns A JSX element.
 * @example
 *  <TBody>
 *    ...
 *  </TBody>
 */
export function TBody({ children, ...rest }: TableBodyProps) {
  return <tbody {...rest}>{children}</tbody>;
}

/**
 * Table Cell
 * @param TableCellProps - Has all HTML Table Cell attributes.
 * @param TableCellProps.children - The children of the Table Cell.
 * @param TableCellProps.className - The additional class name of the Table Cell. (additional class will get merged by cn()).
 * @returns A JSX element.
 * @example
 *  <TD>
 *    ...
 *  </TD>
 */
export function TD({ children, className, ...rest }: TableCellProps) {
  return (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...rest}
    >
      {children}
    </td>
  );
}

/**
 * List
 * @param ListProps - Has all HTML Unorderd List attributes.
 * @param ListProps.className - The additional class name of the List. (additional class will get merged by cn()).
 * @param ListProps.children - The children of the List.
 * @returns A JSX element.
 * @example
 *  <TypographyList>
 *      ...
 *  </TypographyList>
 */
export function TypographyList({ children, className, ...rest }: ListProps) {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)} {...rest}>
      {children}
    </ul>
  );
}

/**
 * Inline Code
 * @param InlineCodeProps - Has all HTML Inline Code attributes.
 * @param InlineCodeProps.className - The additional class name of the Inline Code. (additional class will get merged by cn()).
 * @param InlineCodeProps.children - The text content of the Inline Code. Default is "Inline Code Placeholder".
 * @returns A JSX element.
 * @example
 *  <TypographyInlineCode>
 *      This is a Inline Code
 *  </TypographyInlineCode>
 */
export function TypographyInlineCode({
  children = "Inline Code Placeholder",
  className,
  ...rest
}: InlineCodeProps) {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
      {...rest}
    >
      {children}
    </code>
  );
}

/**
 * Lead
 * @param LeadProps - Has all HTML Lead attributes.
 * @param LeadProps.className - The additional class name of the Lead. (additional class will get merged by cn()).
 * @param LeadProps.children - The text content of the Lead. Default is "Lead Placeholder".
 * @returns A JSX element.
 * @example
 *  <TypographyLead>
 *      This is a Lead
 *  </TypographyLead>
 */
export function TypographyLead({
  children = "Lead Placeholder",
  className,
  ...rest
}: LeadProps) {
  return (
    <p className={cn("text-xl text-muted-foreground", className)} {...rest}>
      {children}
    </p>
  );
}

/**
 * Large
 * @param LargeProps - Has all HTML Large attributes.
 * @param LargeProps.className - The additional class name of the Large. (additional class will get merged by cn()).
 * @param LargeProps.children - The text content of the Large. Default is "Large Placeholder".
 * @returns A JSX element.
 * @example
 *  <TypographyLarge>
 *      This is a Large
 *  </TypographyLarge>
 */
export function TypographyLarge({
  children = "Large Placeholder",
  className,
  ...rest
}: LargeProps) {
  return (
    <div className={cn("text-lg font-semibold", className)} {...rest}>
      {children}
    </div>
  );
}

/**
 * Small
 * @param SmallProps - Has all HTML Small attributes.
 * @param SmallProps.className - The additional class name of the Small. (additional class will get merged by cn()).
 * @param SmallProps.children - The text content of the Small. Default is "Small Placeholder".
 * @returns A JSX element.
 * @example
 *  <TypographySmall>
 *      This is a Small
 *  </TypographySmall>
 */
export function TypographySmall({
  children = "Small Placeholder",
  className,
  ...rest
}: SmallProps) {
  return (
    <small
      className={cn("text-sm font-medium leading-none", className)}
      {...rest}
    >
      {children}
    </small>
  );
}

/**
 * Muted
 * @param MutedProps - Has all HTML Muted attributes.
 * @param MutedProps.className - The additional class name of the Muted. (additional class will get merged by cn()).
 * @param MutedProps.children - The text content of the Muted. Default is "Muted Placeholder".
 * @returns A JSX element.
 * @example
 *  <TypographyMuted>
 *      This is a Muted
 *  </TypographyMuted>
 */
export function TypographyMuted({
  children = "Muted Placeholder",
  className,
  ...rest
}: MutedProps) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...rest}>
      {children}
    </p>
  );
}
