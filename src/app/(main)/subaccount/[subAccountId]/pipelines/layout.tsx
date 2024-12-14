import BlurPage from "@/components/global/blur-page"

const PipelineLayout = ({
    children
}: { children: React.ReactNode }) => {
    return (
        <BlurPage>
            {children}
        </BlurPage>
    )
};

export default PipelineLayout;