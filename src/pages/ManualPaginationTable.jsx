import { useEffect, useMemo, useState } from "react";
import { fetchUsers } from "@/api/user-api";
import { Table } from "@/features/ui/Table";

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
      const data = await fetchUsers(pagination);
      setLoading(false);
      setData(data);
    };

    fetchData();
  }, [pagination]);

  return (
    <div>
      <h1>Manual Pagination Table</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table
          data={data.results}
          columns={columns}
          loading={loading}
          pagination={pagination}
          onPaginationChange={setPagination}
          pageCount={data.pageCount ?? 1}
        />
      )}
    </div>
  );
};
