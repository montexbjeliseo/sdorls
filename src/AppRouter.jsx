import { Route, createRoutesFromElements } from "react-router-dom";
import { Layout } from "@/Layout";
import { HomePage } from "@/pages/Home";
import { NotFoundPage } from "@/pages/NotFound";
import { TablePage } from "@/pages/Table";
import { FormsPage } from "@/pages/Forms";
import { ManualPaginationTablePage } from "@/pages/ManualPaginationTable";

export default function AppRouter() {
  return createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/forms" element={<FormsPage />} />
        <Route path="/manual-pagination-table" element={<ManualPaginationTablePage />} />
        <Route
          path="/search-auto-complete"
          lazy={() => import("@/pages/AutoComplete")}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </>
  );
}