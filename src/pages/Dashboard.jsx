import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../components/Table";
import ExportButton from "../components/ExportButton";

const Dashboard = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    axios.get("https://dev.patriotmed.id/BannerAds/Package/List")
      .then((res) => setPackages(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <ExportButton data={packages} />
      <Table data={packages} />
    </div>
  );
};

export default Dashboard;
