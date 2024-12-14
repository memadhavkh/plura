import { db } from "@/lib/db";
import { redirect } from "next/navigation";

type Props = {
    params: {
        subaccountId: string
    }
};

const Pipeline = async ({
    params
}: Props) => {
    const pipelineExists = await db.pipeline.findFirst({
        where: {
            subAccountId: params.subaccountId
        }
    });

    if(pipelineExists) {
        return redirect(`/subaccount/${params.subaccountId}/pipelines/${pipelineExists.id}`)
    };

    try {
        const response = await db.pipeline.create({
            data: {
                name: "First Pipeline",
                subAccountId: params.subaccountId
            }
        });
        return redirect(`/subaccount/${params.subaccountId}/pipelines/${response.id}`)        
    } catch {
        throw new Error(`Failed to find pipeline`)
    }
};
export default Pipeline;