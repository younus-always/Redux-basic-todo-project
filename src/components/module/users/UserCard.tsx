import { Button } from "@/components/ui/button";
import { removeUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import type { IUser } from "@/types";
import { Trash2 } from "lucide-react";

interface IProps {
  user: IUser;
}

const UserCard = ({ user }: IProps) => {
  const dispatch = useAppDispatch();
  const { id, name } = user;

  return (
    <div className="border px-1 sm:px-3 py-4 rounded-md shadow shadow-green-500">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="size-3 rounded-full"></div>
          <h2>{name}</h2>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            onClick={() => dispatch(removeUser(id))}
            variant={"link"}
            className="p-0 text-red-500 cursor-pointer"
          >
            <Trash2 />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
