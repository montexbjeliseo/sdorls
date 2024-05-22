import { useEffect, useMemo, useState } from "react";
import { fetchUsers } from "@/api/user-api";
import { Table } from "@/features/ui/Table";
// import { useLocation } from "react-router-dom";

export const ManualPaginationTablePage = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const columns = useMemo(
    () => [
      {
        header: "ID",
        accessorKey: "id",
      },
      {
        header: "First name",
        accessorKey: "first_name",
      },
      {
        header: "Last Name",
        accessorKey: "last_name",
      },
      {
        header: "Email",
        accessorKey: "email",
      },
      {
        Header: "Gender",
        accessorKey: "gender",
      },
      {
        header: "University",
        accessorKey: "university",
      },
    ],
    []
  );

  const [data, setData] = useState({
    results: [],
    pageCount: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      setLoading(false);

      const data = await fetchUsers(pagination);

      setData(data);
    };

    fetchData();

  }, [pagination]);

  return (
    <div>
      <h1>Manual Pagination Table</h1>
      <Table
        data={data.results}
        columns={columns}
        loading={loading}
        pagination={pagination}
        onPaginationChange={setPagination}
        pageCount={data.pageCount ?? 1}
      />
    </div>
  );
};
