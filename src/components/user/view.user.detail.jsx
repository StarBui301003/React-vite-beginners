import { Drawer, Button, notification } from "antd";
import { useState } from "react";
import {
  handleUploadFile,
  updateUserAvatarAPI,
} from "../../services/api.service";
const ViewUserDetail = (props) => {
  const { dataDetail, setDataDetail, isDetailOpen, setIsDetailOpen, loadUser } =
    props;
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleOnChangeFlie = (event) => {
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedFile(null);
      setPreview(null);
      return;
    }
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  const handleUpdateUserAvatar = async () => {
    //step 1: upload file
    const resUpload = await handleUploadFile(selectedFile, "avatar");
    if (resUpload.data) {
      //success
      const newAvatar = resUpload.data.fileUploaded;
      //step 2: update user
      const resUpdateAvatar = await updateUserAvatarAPI(
        newAvatar,
        dataDetail._id,
        dataDetail.fullName,
        dataDetail.phone
      );
      if (resUpdateAvatar.data) {
        setIsDetailOpen(false);
        setSelectedFile(null);
        setPreview(null);
        await loadUser();
        notification.success({
          message: "Update user avatar",
          description: "Cập nhật avatar thành công",
        });
      } else {
        notification.error({
          message: "Error update avatar",
          description: JSON.stringify(resUpdateAvatar.message),
        });
      }
    } else {
      //failed
      notification.error({
        message: "Error upload file",
        description: JSON.stringify(resUpload.message),
      });
    }
  };
  return (
    <Drawer
      width={"13vw"}
      title="User Detail"
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
          <p>Full name: {dataDetail.fullName}</p>
          <br />
          <p>Email: {dataDetail.email}</p>
          <br />
          <p>Phone number: {dataDetail.phone}</p>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center" }}>Avatar</div>
            <div>
              <label
                htmlFor="btnUpload"
                style={{
                  display: "block",
                  width: "fit-content",
                  padding: "5px 10px",
                  background: "orange",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Upload Avatar
              </label>
              <input
                type="file"
                hidden
                id="btnUpload"
                onChange={(event) => handleOnChangeFlie(event)}
              />
            </div>
          </div>
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
              src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${
                dataDetail.avatar
              }`}
            />
          </div>
          {preview && (
            <>
              <div
                style={{
                  marginTop: "10px",
                  marginBottom: "15px",
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
                  }}
                  src={preview}
                />
              </div>
              <Button type="primary" onClick={() => handleUpdateUserAvatar()}>
                Save
              </Button>
            </>
          )}
        </>
      ) : (
        <>
          <p>Không có dữ liệu</p>
        </>
      )}
    </Drawer>
  );
};
export default ViewUserDetail;
