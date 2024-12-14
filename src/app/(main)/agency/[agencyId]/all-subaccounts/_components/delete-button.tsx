'use client'

import {
    deleteSubAccount,
    getSubAccountDetails,
    saveActivityLogsNotifications
} from '@/lib/queries';

import { useRouter } from 'next/navigation';

type Props = {
    subaccountId: string
};

const DeleteButton = ({
    subaccountId
}: Props) => {
    const router = useRouter();
    return (
        <div onClick={async () => {
            const response = await getSubAccountDetails(subaccountId);
            await saveActivityLogsNotifications({
                agencyId: undefined,
                description: `Deleted a subaccount | ${response.name}`, subaccountId
            });
            await deleteSubAccount(subaccountId);
            router.refresh();
        }} className="text-white">
            Delete Sub Account
        </div>
    )
}

export default DeleteButton;