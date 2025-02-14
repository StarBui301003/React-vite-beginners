import { Drawer, Button, notification } from "antd";
import { useState } from "react";

const ViewBookDetail = (props) => {
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen, loadBook } =
    props;

  return (
    <Drawer
      width={"30vw"}
      title="Book Detail"
      onClose={() => {
        setDataDetail(null);
        setIsDetailOpen(false);
      }}
      open={isDetailOpen}
    >
      {dataDetail ? (
        <>
          <br />
          <p>Id: {dataDetail._id}</p>
          <br />
          <p>Book Name: {dataDetail.mainText}</p>
          <br />
          <p>Author: {dataDetail.author}</p>
          <br />
          <p>Category: {dataDetail.category}</p>
          <br />
          <p>
            Price:{" "}
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(dataDetail.price)}
          </p>
          <br />
          <p>Quantity: {dataDetail.quantity}</p>
          <br />
          <p>Thumbnail</p>
          <div
            style={{
              marginTop: "10px",
              height: "200px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                height: "100%",
                width: "150px",
                objectFit: "contain",
                border: "1px solid #ccc",
              }}
              src={`${import.meta.env.VITE_BACKEND_URL}/images/book/${
                dataDetail.thumbnail
              }`}
            />
          </div>
        </>
      ) : (
        <>
          <p>Không có dữ liệu</p>
        </>
      )}
    </Drawer>
  );
};
export default ViewBookDetail;
