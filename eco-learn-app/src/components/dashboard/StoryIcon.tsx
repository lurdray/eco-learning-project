import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function StoryIcon({
  name,
  story,
}: {
  name: String;
  story: Boolean;
}) {
  return (
    <div className="flex flex-col items-center p-1 space-y-2 text-center">
      <div
        className={`size-10 md:size-12 lg:size-16 rounded-full ${
          story == true ? "ring-1 ring-defaultgreen" : "ring-0"
        } `}
      >
        <Avatar className="size-10 md:size-12 lg:size-16 border-2 border-white">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JB</AvatarFallback>
        </Avatar>
      </div>
      <h1 className="capitalize text-xs font-semibold">{name}</h1>
    </div>
  );
}
