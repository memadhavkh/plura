'use client'

import SubAccountDetails from "@/components/forms/subaccount-details"
import CustomModal from "@/components/global/custom-modal"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useModal } from "@/providers/modal-provider"
import { Agency, AgencySidebarOption, SubAccount, User } from "@prisma/client"
import { PlusCircleIcon } from "lucide-react"

type Props = {
    user: User & {
        Agency: 
        | (
            | Agency
            | ( null & {
                SubAccount: SubAccount[]
                SidebarOption: AgencySidebarOption[]
            })
        ) | null
    },
    id: string,
    className: string
}

const CreateSubaccountButton = ({
    className, id, user
}: Props) => {
    const { setOpen } = useModal();
    const agencyDetails = user.Agency;
    if(!agencyDetails) return;

    return (
        <Button className={cn('w-full flex gap-4', className)} onClick={() => {
            setOpen(
                <CustomModal title="Create A SubAccount" subheading="You can switch between">
                    <SubAccountDetails agencyDetails={agencyDetails} userId={user.id} userName={user.name} />
                </CustomModal>
            )
        }}>
            <PlusCircleIcon size={15} />
            Create Sub Account
        </Button>
    )
};

export default CreateSubaccountButton;