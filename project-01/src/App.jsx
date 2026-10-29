import { useEffect, useState } from "react";
import "./App.css";
import UserCards from "./components/UserCards.jsx";

async function getUsersData() {
  const url =
    "https://prod-main-api-704464-00tre1p1erm.compute.instacloud-edge.com/api/v1/public/randomusers?page=1&limit=10";
  const options = { method: "GET", headers: { accept: "application/json" } };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

function App() {
  const [res, setRes] = useState(null);

  useEffect(() => {
    getUsersData().then((data) => setRes(data));
  }, []);

  if (!res) return <div>Loading...</div>;

  return (
    <>
      <div>
        <h1>My Users</h1>
        <div>
          {res?.data?.data.map((user) => (
            <UserCards key={user.id} user={user} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
