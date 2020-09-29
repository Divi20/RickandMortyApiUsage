import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setCurrentQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      await axios
        .get("https://rickandmortyapi.com/api/episode/", {
          params: {
            page: currentPage
          }
        })
        .then(res => {
          setTotalPages(res.data.info.pages);
          setPosts(res.data.results);
          setLoading(false);
        })
        .catch(error => {});
    };

    fetchPosts();
  }, [currentPage]);

  useEffect(() => {
    const queryPosts = async () => {
      await axios
        .get("https://rickandmortyapi.com/api/episode/", {
          params: {
            name: query
          }
        })
        .then(res => {
          setPosts(res.data.results);
          setLoading(false);
        })
        .catch(error => {});
    };
    queryPosts();
  }, [query]);

  const currentPosts = posts;
  const paginate = pageNumber => setCurrentPage(pageNumber); //implement api call here

  return (
    <div className="container mt-5" id="main">
      <h1 className="text-danger mb-3" id="textname">
        Ricky and Monty
      </h1>
      <input
        type="search"
        id="search"
        placeholder="Search"
        onChange={e => setCurrentQuery(e.target.value)}
      />

      <br />
      <br />
      <div id="maincon">
        <div id="merror">
          <Posts posts={currentPosts} loading={loading} />
        </div>
        <div id="showerror" style={{ display: "none" }}>
          <h1>oops!!episode not found</h1>
        </div>
      </div>
      <Pagination paginate={paginate} totalPages={totalPages} />
    </div>
  );
}
