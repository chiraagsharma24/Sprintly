"use client" ;

import { OrganizationList, useOrganization } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function OnboardingPage(){

    const {organization} = useOrganization() ;
    const router = useRouter() ;

    useEffect(() => {
    if (organization) {
        router.push(`/organization/${organization.slug}`);
    }
}, [organization]);
    return <div className="flex justify-center items-center pt-4">
        <OrganizationList hidePersonal/>
    </div>
}
