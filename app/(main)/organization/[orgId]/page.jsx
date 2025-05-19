export default function OrganizationPage({params}){
    const { orgId } = params;
    return <div className="flex justify-center items-center pt-4">
        <p>{orgId}</p>
    </div>
}