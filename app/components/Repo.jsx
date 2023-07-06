'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

async function fetchRepo(name) {
  const response = await fetch(`https://api.github.com/repos/dan1306/${name}`);
  const repo = await response.json();
  return repo;
}

function Repo({ name }) {
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    async function fetchRepoData() {
      const fetchedRepo = await fetchRepo(name);
      setRepo(fetchedRepo);
    }

    fetchRepoData();
  }, [name]);

  if (!repo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span> {repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span> {repo.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span> {repo.watchers_count}</span>
        </div>
      </div>
    </div>
  );
}

export default Repo;
