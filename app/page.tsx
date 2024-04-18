import { AvatarGroup } from "@/components/ui/avatar/group";

export default function Home() {
  return (
    <div className="grid min-h-screen text-base">
      <div className="relative mx-auto grid w-full max-w-8xl gap-6 px-5 py-40">
        <div className="place-self-center p-6">
          <AvatarGroup
            avatars={[
              {
                fallback: "JD",
                src: "https://github.com/1.png",
              },
              {
                fallback: "JD",
                src: "https://github.com/2.png",
              },
              {
                fallback: "JD",
                src: "https://github.com/3.png",
              },
              {
                fallback: "JD",
                src: "https://github.com/4.png",
              },
              {
                fallback: "JD",
                src: "https://github.com/5.png",
              },
              {
                fallback: "JD",
                src: "https://github.com/6.png",
              },
            ]}
            limit={4}
          />
        </div>
      </div>
    </div>
  );
}
