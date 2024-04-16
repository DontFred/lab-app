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
        {/* <Icon className="h-6 w-6" name="accessibility">
          <div>Accessibility</div>
        </Icon> */}
        <div className="flex justify-center">
          <Button aria-label="arrow-up" icon size="xs">
            <Icon name="arrow-up" />
          </Button>
        </div>
        <div className="flex justify-center">
          <Button aria-label="arrow-up" icon size="sm">
            <Icon name="arrow-up" />
          </Button>
        </div>
        <div className="flex justify-center">
          <Button aria-label="arrow-up" icon>
            <Icon name="arrow-up" />
          </Button>
        </div>
        <div className="flex justify-center">
          <Button aria-label="arrow-up" icon size="lg">
            <Icon name="arrow-up" />
          </Button>
        </div>
        <div className="flex justify-center">
          <Button aria-label="arrow-up" icon shape="rounded" size="xs">
            <Icon name="arrow-up" />
          </Button>
        </div>
        <div className="flex justify-center">
          <Button aria-label="arrow-up" icon shape="rounded" size="sm">
            <Icon name="arrow-up" />
          </Button>
        </div>
        <div className="flex justify-center">
          <Button aria-label="arrow-up" icon shape="rounded">
            <Icon name="arrow-up" />
          </Button>
        </div>
        <div className="flex justify-center">
          <Button aria-label="arrow-up" icon shape="rounded" size="lg">
            <Icon name="arrow-up" />
          </Button>
        </div>
        <div className="flex justify-center">
          <Button size="sm">Upload</Button>
        </div>
        <div className="flex justify-center">
          <Button>Upload</Button>
        </div>
        <div className="flex justify-center">
          <Button size="lg">Upload</Button>
        </div>
        <div className="flex justify-center">
          <Button prefix={<Icon name="arrow-left" />}>Upload</Button>
        </div>
        <div className="flex justify-center">
          <Button suffix={<Icon name="arrow-right" />}>Upload</Button>
        </div>
        <div className="flex justify-center">
          <Button
            prefix={<Icon name="arrow-left" />}
            suffix={<Icon name="arrow-right" />}
          >
            Upload
          </Button>
        </div>

        <div className="flex justify-center">
          <Button shape="rounded" size="sm">
            Upload
          </Button>
        </div>
        <div className="flex justify-center">
          <Button shape="rounded">Upload</Button>
        </div>
        <div className="flex justify-center ">
          <Button shape="rounded" size="lg">
            Upload
          </Button>
        </div>
        <div className="flex justify-center">
          <Button loading size="sm">
            Upload
          </Button>
        </div>
        <div className="flex justify-center">
          <Button loading>Upload</Button>
        </div>
        <div className="flex justify-center">
          <Button loading size="lg">
            Upload
          </Button>
        </div>
        <div className="flex justify-center">
          <Button disabled size="sm">
            Upload
          </Button>
        </div>
        <div className="flex justify-center">
          <Button disabled>Upload</Button>
        </div>
        <div className="flex justify-center">
          <Button disabled size="lg">
            Upload
          </Button>
        </div>
        <div className="flex justify-center">
          <Button aria-label="accessibility" icon loading size="xs">
            <Icon name="accessibility" />
          </Button>
        </div>
        <div className="flex justify-center">
          <Button aria-label="accessibility" icon loading size="sm">
            <Icon name="accessibility" />
          </Button>
        </div>
        <div className="flex justify-center">
          <Button aria-label="accessibility" icon loading>
            <Icon name="accessibility" />
          </Button>
        </div>
        <div className="flex justify-center">
          <Button aria-label="accessibility" icon loading size="lg">
            <Icon name="accessibility" />
          </Button>
        </div>
        <div className="flex justify-center">
          <Button size="sm" variant="destructive">
            Upload
          </Button>
        </div>
        <div className="flex justify-center">
          <Button variant="destructive">Upload</Button>
        </div>
        <div className="flex justify-center">
          <Button size="lg" variant="destructive">
            Upload
          </Button>
        </div>
        <div className="flex justify-center">
          <Button size="sm" variant="ghost">
            Upload
          </Button>
        </div>

        <div className="flex justify-center">
          <Button variant="ghost">Upload</Button>
        </div>
        <div className="flex justify-center">
          <Button size="lg" variant="ghost">
            Upload
          </Button>
        </div>
        <div className="flex justify-center">
          <Button size="sm" variant="outline">
            Upload
          </Button>
        </div>
        <div className="flex justify-center">
          <Button variant="outline">Upload</Button>
        </div>
        <div className="flex justify-center">
          <Button size="lg" variant="outline">
            Upload
          </Button>
        </div>
        <div className="flex justify-center">
          <Button size="sm" variant="secondary">
            Upload
          </Button>
        </div>
        <div className="flex justify-center">
          <Button variant="secondary">Upload</Button>
        </div>
        <div className="flex justify-center">
          <Button size="lg" variant="secondary">
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
}
