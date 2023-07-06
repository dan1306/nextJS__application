"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

function ReposPage() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      const response = await fetch(
        "https://api.github.com/users/dan1306/repos",
        {
          next: {
            revalidate: 60,
          },
        }
      );
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const repos = await response.json();
      setRepos(repos);
    }

    fetchRepos();
  }, []);

  return (
    <div className="repos-conatainer">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {/* <li>asdasd</li> */}
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-details">
                <span>
                  <FaStar /> {repo.stargazer_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {/* <h1>{repos[3].name}</h1> */}
    </div>
  );
}

export default ReposPage;
