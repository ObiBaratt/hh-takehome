import Grid from "@/src/components/Grid/Grid";
import { Color } from "@prisma/client";
import PageSelector from "@/src/components/PageSelector/PageSelector";
import { useEffect, useState } from "react";

const ListView: React.FC = () => {
  const [curPage, setCurPage] = useState<number>(1);
  const [colors, setColors] = useState<Color[]>([]);
  const [totalPages, setTotalPages] = useState<number>();

  useEffect(() => {
    console.log(curPage);
    const fetchData = async () => {
      const url = `/api/colors?page=${curPage}`;
      console.log(url);
      const res = await fetch(url);
      setTotalPages(Number(res.headers.get("total-pages")));
      const data = await res.json();
      setColors(data);
    };
    fetchData();
    console.log(colors);
  }, [curPage]);

  return (
    <div>
      <Grid items={colors} page={curPage} />
      <PageSelector
        curPage={curPage}
        totalPages={totalPages}
        setCurPage={setCurPage}
      />
    </div>
  );
};

export default ListView;
