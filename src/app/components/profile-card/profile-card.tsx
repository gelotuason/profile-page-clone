import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProfileCardButtons from "./profile-card-buttons";

export default function ProfileCard() {
    return (
        <div className="p-4">
            <div className="relative flex gap-2">
                <Avatar className="absolute -inset-y-16 w-24 h-24 md:w-48 md:h-48 border-2">
                    <AvatarImage src="/avatar.jpg" className="object-cover" />
                    <AvatarFallback>HW</AvatarFallback>
                </Avatar>
                <div className="profile-details mt-8 md:mt-0 md:ms-52 md:h-28 mb-4 flex flex-col">
                    <h1 className="font-bold tracking-tighter">Hussain Watkins</h1>
                    <small className="text-gray-500 font-semibold tracking-tighter">SALES MANAGER</small>
                    <small className="text-gray-500 font-semibold tracking-tighter">H.Watkins@gmail.com</small>
                    <small className="text-gray-500 font-semibold tracking-tighter">+639123456789</small>
                </div>
                <div className="flex gap-1 flex-1 justify-end">
                    <ProfileCardButtons />
                </div>
            </div>
        </div>
    )
}