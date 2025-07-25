import React from "react";
import { useTRPC } from "@/trpc/client";
import { appRouter } from "@/trpc/routers/_app";
import { trpc } from "@/trpc/server";

type Props = {};

const Page = (props: Props) => {
  return <div>tRPC is working</div>;
};

export default Page;
