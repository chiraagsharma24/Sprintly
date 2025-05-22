"use server" ;

import { db } from "@/lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";

export async function createProject(data){
    const {userId, orgId } = await auth() ;

    if (!userId) {
        throw new Error("Unauthorized");
    }

    if (!orgId) {
        throw new Error("Organization not selected");
    }

    const clerk = await clerkClient();

    const { data: memberships } =
        await clerk.organizations.getOrganizationMembershipList({
        organizationId: orgId,
    });

    const isMember = memberships.find(
        (member) => member.publicUserData.userId === userId
    );

    if (!isMember || isMember.role !== "org:admin") {
        throw new Error("Only Organization Admins can create projects");
    }

    try {
        const project = await db.project.create({
            data : {
                name : data.name ,
                description : data.description ,
                key : data.key ,
                organizationId : orgId ,
            }
        }) ;

        return project ;
    } catch (error) {
        throw new Error("Error Creating Project:" + error.message );
        
    }
}