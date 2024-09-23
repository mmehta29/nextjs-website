"use client";

import { useSession } from "next-auth/react";
import HomePageApplication from "./profile/home";
import SignInPage from "./profile/page";

export default function Home() {
  const { data: session, status } = useSession();

  // Check if the session is loading
  if (status === "loading") {
    return <div>Loading...</div>; // You can display a loading state
  }

  if (!session) {
    return (
      <>
        <SignInPage />
      </>
    );
  }

  return (
    <>
      <HomePageApplication />
    </>
  );
}

