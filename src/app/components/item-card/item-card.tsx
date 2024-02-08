import { HouseSVG } from "../../assets/icons";

export const ItemCard = ({
  title = "",
  subContent,
  rightContent,
}: {
  title: string;
  subContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}) => (
  <div className="flex flex-col justify-center mt-3">
    <div className="flex justify-between items-center flex-wrap">
      <div className="flex gap-2">
        <div className="bg-avatarBackground w-[50px] h-[50px] rounded-full flex justify-center items-center">
          <HouseSVG className="scale-[3]" />
        </div>
        <div className="flex flex-col gap-1 justify-center">
          <p className="font-semibold text-md text-opacity-[72%]">{title}</p>
          {subContent}
        </div>
      </div>
      <div className="ml-auto">{rightContent}</div>
    </div>
  </div>
);
