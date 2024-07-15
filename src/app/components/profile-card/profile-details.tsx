import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProfileCardButtons from "./profile-card-buttons";

export default function ProfileDetails() {
    return (
        <>
            <div className="relative">
                <Avatar className="absolute -inset-y-16 w-24 h-24 border-2">
                    <AvatarImage src="/avatar.jpg" />
                    <AvatarFallback>HW</AvatarFallback>
                </Avatar>

                <div className="flex justify-end items-end gap-1">
                    <ProfileCardButtons />
                </div>
            </div>

            <div className="mt-1 mb-4 flex flex-col">
                <h1 className="font-bold text-xl tracking-tighter">Hussain Watkins</h1>
                <small className="text-gray-500 font-semibold tracking-tighter">SALES MANAGER</small>
                <small className="text-gray-500 font-semibold tracking-tighter">H.Watkins@gmail.com</small>
                <small className="text-gray-500 font-semibold tracking-tighter">+639123456789</small>
            </div>
        </>
    )
}