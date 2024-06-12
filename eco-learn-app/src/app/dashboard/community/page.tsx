import ListItem from "@/components/dashboard/ListItem";
import StoryIcon from "@/components/dashboard/StoryIcon";
import CreatePost from "@/components/dashboard/CreatePost";
import UserPost from "@/components/dashboard/UserPost";

export default function Community() {
  return (
    <div className="md:flex pt-3 md:space-x-8 pb-6">
      <div className="w-[100%] m-auto md:m-0 md:w-[70%] px-5 space-y-5">
        <div className="flex justify-between max-w-[100%]">
          <StoryIcon name={"my story"} story={true} />
          <StoryIcon name={"sissy jones"} story={true} />
          <StoryIcon name={"mike tyson"} story={true} />
          <StoryIcon name={"kambili"} story={true} />
          <StoryIcon name={"sissy jones"} story={true} />
        </div>
        <CreatePost />
        <UserPost
          username={"Bunmi Bello"}
          time={"56 mins"}
          likes={"2.8K"}
          comments={"7"}
          post={
            "I'm feeling super discouraged lately.  Here we are, another heatwave, another record-breaking wildfire season, and it feels like nothing is changing.  I know we all try to do our part – recycling, reducing waste, using less energy but sometimes it feels like a drop in the ocean."
          }
          image={"none"}
        />
        <UserPost
          username={"Timi Collins"}
          time={"2 hours"}
          likes={"2.8K"}
          comments={"7"}
          post={
            "Who wants to plant a tree with me this weekend at Maryland Lagos? #CommunityEcoLearning, Let me know if you're interested!"
          }
          image={"/planetb.svg"}
        />
      </div>
      <div className="w-[70%] m-auto lg:w-[30%] space-y-6 mt-10 md:mt-0">
        <div className="w-[100%] bg-white p-3 space-y-3 border border-gray-100 rounded-md">
          <div className="border-b border-gray-100 p-2">
            <h1>Your Eco-Friends</h1>
          </div>
          <div className="space-y-3">
            <ListItem name={"Ralph edwards"} story={true} />
            <ListItem name={"savannah nguyen"} story={false} />
            <ListItem name={"James charles"} story={false} />
            <ListItem name={"Kiki leakes"} story={true} />
            <ListItem name={"James charles"} story={false} />
          </div>
          <h1 className="text-defaultgreen ml-2">View all</h1>
        </div>
        <div className="w-[100%] bg-white p-3 space-y-3 border border-gray-100 rounded-md">
          <div className="border-b border-gray-100 p-2">
            <h1>Suggested paged</h1>
          </div>
          <div className="space-y-3">
            <ListItem name={"green innovators"} story={false} />
            <ListItem name={"eco educators"} story={false} />
            <ListItem name={"recycling champions"} story={false} />
            <ListItem name={"clean energy advocates"} story={false} />
            <ListItem name={"Community green warriors"} story={false} />
          </div>
          <h1 className="text-defaultgreen ml-2">View all</h1>
        </div>
      </div>
    </div>
  );
}
