import { cn } from "@/lib/utils";
import type {
  BlockquoteProps,
  HeadingProps,
  ParagraphProps,
  TableBodyProps,
  TableCellProps,
  TableHeadProps,
  TableHeaderProps,
  TableProps,
  TableRowProps,
} from "./types";

export function TypographyH1({
  className,
  children = "Heading 1 Placeholder",
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

export function TypographyH2({
  className,
  children = "Heading 2 Placeholder",
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

export function TypographyH3({
  className,
  children = "Heading 3 Placeholder",
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

export function TypographyH4({
  className,
  children = "Heading 4 Placeholder",
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

export function TypographyP({
  className,
  children = "Paragraph Placeholder",
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

export function TypographyBlockquote({
  className,
  children = "Blockquote Placeholder",
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

export function Table({ className, children, container, ...rest }: TableProps) {
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

export function THead({ children, ...rest }: TableHeadProps) {
  return <thead {...rest}>{children}</thead>;
}

export function TR({ children, className, ...rest }: TableRowProps) {
  return (
    <tr className={cn("m-0 border-t p-0 even:bg-muted", className)} {...rest}>
      {children}
    </tr>
  );
}

export function TH({ className, children, ...rest }: TableHeaderProps) {
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

export function TBody({ children, ...rest }: TableBodyProps) {
  return <tbody {...rest}>{children}</tbody>;
}

export function TD({ children, className, ...rest }: TableCellProps) {
  return (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
    ></td>
  );
}

export function TypographyList() {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners : 20 gold coins</li>
    </ul>
  );
}

export function TypographyInlineCode() {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      @radix-ui/react-alert-dialog
    </code>
  );
}

export function TypographyLead() {
  return (
    <p className="text-xl text-muted-foreground">
      A modal dialog that interrupts the user with important content and expects
      a response.
    </p>
  );
}

export function TypographyLarge() {
  return <div className="text-lg font-semibold">Are you absolutely sure?</div>;
}

export function TypographySmall() {
  return (
    <small className="text-sm font-medium leading-none">Email address</small>
  );
}

export function TypographyMuted() {
  return (
    <p className="text-sm text-muted-foreground">Enter your email address.</p>
  );
}
