import React, { useEffect, useState } from 'react';
import Card from '../Card';

function ShowPosts() {
  const [posts, setPosts] = useState(null);

  const loadPosts = useEffect(() => {
    async function fetchPosts() {
      const data = await fetch('https://dummyjson.com/posts').then((res) =>
        res.json()
      );
      setPosts(data.posts);
    }

    fetchPosts();
  }, []);

  const renderPosts = () => {
    if (posts) {
      return posts.map((item, index) => {
        return <Card data={item} />;
      });
    }

    return 'Loading Posts....';
  };

  return (
    <div>
      {renderPosts()}

      <button onClick={async (e) => await loadPosts()}>Load posts</button>
    </div>
  );
}

export default ShowPosts;
