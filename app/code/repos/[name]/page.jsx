import React from "react";
import Repo from "@/app/components/Repo";
import Link from "next/link";
import RepoDirs from "@/app/components/RepoDirs";
import { Suspense } from "react";

const RepoPage = ({ params }) => {
  console.log(params);
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back To Repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={params.name} />
      </Suspense>
      {/* <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={params.name} />
      </Suspense> */}
      <RepoDirs name={params.name} />
    </div>
  );
};

export default RepoPage;
