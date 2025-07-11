import { auth } from "@/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/db";
import React from "react";

export default async function Dashboard() {
  const session = await auth();

  console.log(session, "sessionaaa");
  

  if (!session?.user) {
    // This should not happen if the user is authenticated.
    // It's a good practice to handle this case.
    redirect("/signin");
  }

  // Fetch the full user profile from the database
  // make server action to fetch the data from database or call the endpoint from the server actions.

  // call the /user/profile endpoint
  // const user = await prisma.user.findUnique({
  //   where: {
  //     email: session.user.email!,
  //   },
  // });

  // if (!user) {
  //   // Handle case where user is not found in the DB, though this is unlikely
  //   // if they have a valid session.
  //   redirect("/signin");
  // }


  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {JSON.stringify(session) || "User"}!</p>
      {/* <p>Email: {user.email}</p> */}
      
      <h2>Full User Data:</h2>
      <pre>{JSON.stringify(session.user, null, 2)}</pre>
    </div>
  );
}
