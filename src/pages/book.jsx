import UserForm from "../components/user/user.form";
import BookTable from "../components/book/book.table";
import { fetchAllBookAPI } from "../services/api.service";
import { useEffect, useState } from "react";
const BookPage = () => {
  const [dataBooks, setDataBooks] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);

  //empty array => run once
  //not empty array => next value !== prev value
  useEffect(() => {
    loadBook();
  }, [current, pageSize]); //[] +condition

  const loadBook = async () => {
    const res = await fetchAllBookAPI(current, pageSize);
    if (res.data) {
      setDataBooks(res.data.result);
      setCurrent(res.data.meta.current);
      setPageSize(res.data.meta.pageSize);
      setTotal(res.data.meta.total);
    }

    setDataBooks(res.data.result);
  };
  return (
    <div>
      <div style={{ padding: "20px" }}>
        {/* <UserForm loadBook={loadBook} /> */}
        <BookTable
          dataBooks={dataBooks}
          loadBook={loadBook}
          current={current}
          pageSize={pageSize}
          total={total}
          setCurrent={setCurrent}
          setPageSize={setPageSize}
        />
      </div>
    </div>
  );
};
export default BookPage;
