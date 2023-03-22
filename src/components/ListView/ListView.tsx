import Grid from "@/src/components/Grid/Grid";
import { Color } from "@prisma/client";
import PageSelector from "@/src/components/PageSelector/PageSelector";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

const ListView: React.FC = () => {
  const [curPage, setCurPage] = useState<number>(1);
  const [colors, setColors] = useState<Color[]>([]);
  const [totalPages, setTotalPages] = useState<number>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = `/api/colors?page=${curPage}`;
      const res = await fetch(url);
      setTotalPages(Number(res.headers.get("total-pages")));
      const data = await res.json();
      setColors(data);
      setLoading(false);
    };
    fetchData();
  }, [curPage]);

  return (
    <div>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: "25%",
            left: "50%",
          }}
        >
          <Loader />
        </div>
      )}
      {!loading && (
        <>
          <Grid items={colors} page={curPage} />
          <PageSelector
            curPage={curPage}
            totalPages={totalPages}
            setCurPage={setCurPage}
          />
        </>
      )}
    </div>
  );
};

export default ListView;
