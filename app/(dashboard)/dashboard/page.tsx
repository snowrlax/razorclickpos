import { auth } from "@/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import React from "react";

export default async function Dashboard() {
  const session = await auth();

  if (!session?.user?.id) {
    // This should not happen if the user is authenticated.
    // It's a good practice to handle this case.
    redirect("/signin");
  }

  // Fetch the full user profile from the database
  // make server action to fetch the data from database or call the endpoint from the server actions.  
  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
  });

  if (!user) {
    // Handle case where user is not found in the DB, though this is unlikely
    // if they have a valid session.
    redirect("/signin");
  }


  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {user.name || "User"}!</p>
      <p>Email: {user.email}</p>
      
      <h2>Full User Data:</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
