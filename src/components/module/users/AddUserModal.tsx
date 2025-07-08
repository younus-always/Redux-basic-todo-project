import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "@/redux/hooks";
import type { IUser } from "@/types";
import { addUser } from "@/redux/features/user/userSlice";
import { useState } from "react";

const AddUserModal = () => {
  const form = useForm();
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // console.log(data);
    dispatch(addUser(data as IUser));
    setOpen(false);
    form.reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" className="cursor-pointer">
            Add User
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogDescription className="sr-only">
            Fill up this form to add user
          </DialogDescription>
          <DialogHeader className="mb-2">
            <DialogTitle>Add User</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ""} required />
                    </FormControl>
                  </FormItem>
                )}
              />
              <DialogFooter className="mt-5">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default AddUserModal;
