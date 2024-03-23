import { useEffect, useState } from 'react';

const FetchGetRequest = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataForPosts = async () => {
      try {
        const response = await fetch(
          `http://0.0.0.0:8081`
        );
        if (!response.ok) {
          throw new Error(`HTTP error: Status ${response.status}`);
        }
        let postData = await response.json();
        setData(postData.Hello);
        setError(null);
      } catch (err: any) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
        console.log(loading)
        console.log(error)
      }
    };

    fetchDataForPosts();
  }, []);

  return (
    <div>
      {data}
    </div>
  );
};

export default FetchGetRequest;
