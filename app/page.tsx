import { Icon } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid min-h-screen  text-base">
      <div className="relative mx-auto grid w-full max-w-8xl grid-cols-6 items-center  gap-6 px-5 py-40">
        {/* <TypographyH1>Hello, {user.name}!</TypographyH1>
        <TypographyH3 className="text-secondary-foreground">
          {format(new Date(), "eee, dd. LLL")}
        </TypographyH3> */}
        {/* <Icon className="h-6 w-6" name="alignment-center">
          <div>Accessibility</div>
        </Icon> */}
        <div className="flex justify-center">
          <Button size="sm">Click me</Button>
        </div>
        <div className="flex justify-center">
          <Button>Click me</Button>
        </div>
        <div className="flex justify-center">
          <Button size="lg">Click me</Button>
        </div>
        <div className="flex justify-center">
          <Button size="sm" variant="destructive">
            Click me
          </Button>
        </div>
        <div className="flex justify-center">
          <Button variant="destructive">Click me</Button>
        </div>
        <div className="flex justify-center">
          <Button size="lg" variant="destructive">
            Click me
          </Button>
        </div>
        <div className="flex justify-center">
          <Button size="sm" variant="ghost">
            Click me
          </Button>
        </div>

        <div className="flex justify-center">
          <Button variant="ghost">Click me</Button>
        </div>
        <div className="flex justify-center">
          <Button size="lg" variant="ghost">
            Click me
          </Button>
        </div>
        <div className="flex justify-center">
          <Button size="sm" variant="outline">
            Click me
          </Button>
        </div>
        <div className="flex justify-center">
          <Button variant="outline">Click me</Button>
        </div>
        <div className="flex justify-center">
          <Button size="lg" variant="outline">
            Click me
          </Button>
        </div>
        <div className="flex justify-center">
          <Button size="sm" variant="secondary">
            Click me
          </Button>
        </div>
        <div className="flex justify-center">
          <Button variant="secondary">Click me</Button>
        </div>
        <div className="flex justify-center">
          <Button size="lg" variant="secondary">
            Click me
          </Button>
        </div>
      </div>
    </div>
  );
}
