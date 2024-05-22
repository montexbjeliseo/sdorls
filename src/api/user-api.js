import data from "@/assets/USER_DATA.json";

export const fetchUsers = ({ pageIndex, pageSize}) => {

    console.log(data.length / pageSize??10)

    return new Promise((resolve) => {
        setTimeout(() => {
            const start = (pageIndex??1 - 1) * pageSize??10;
            const end = start + pageSize??10;
            resolve({
                results: data.slice(start, end),
                pageCount: Math.ceil(data.length / pageSize??10),
                pageIndex: pageIndex ?? 1,
                pageSize: pageSize ?? 10,
            });
        }, 500);
    })
}