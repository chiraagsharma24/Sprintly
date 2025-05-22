"use server";

import { db } from "@/lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";

export async function getOrganization(slug) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const clerk = await clerkClient();

  const { data: orgs } = await clerk.organizations.getOrganizationList({
    slug,
  });
 
  let organization = orgs[0] ?? null;

  for (let i=0 ; i<orgs.length ; i++){
    if (orgs[i].slug === slug){
      organization = orgs[i] ;
    }
  }
  if (!organization) {
    return null;
  }

  const { data: memberships } =
    await clerk.organizations.getOrganizationMembershipList({
      organizationId: organization.id,
    });

  const isMember = memberships.some(
    (member) => member.publicUserData.userId === userId
  );

  if (!isMember) {
    return null;
  }

  return organization;
}

export async function getProjects(orgId) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const projects = await db.project.findMany({
    where: { organizationId: orgId },
    orderBy: { createdAt: "desc" },
  });

  return projects;
}
