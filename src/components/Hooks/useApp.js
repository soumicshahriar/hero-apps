import axios from "axios";
import { useEffect, useState } from "react";

export const useApp = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [appsData, setAppsData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios("../appdata.json")
      .then((data) => setAppsData(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { appsData, loading, error };
};
