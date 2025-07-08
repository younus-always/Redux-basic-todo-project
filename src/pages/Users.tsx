import AddUserModal from "@/components/module/users/AddUserModal";
import UserCard from "@/components/module/users/UserCard";
import { selectUsers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hooks";

const Users = () => {
  const users = useAppSelector(selectUsers);
  console.log(users);

  return (
    <div className="lg:w-11/12 mx-auto pt-10">
      <div className="flex items-center justify-end gap-5 mb-4">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mr-auto">All User</h3>
        <AddUserModal />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
