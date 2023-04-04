import { Button, Space, Modal, message, Upload } from "antd";
import { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";


export default function UploadFile() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleCancel = () => {
    setIsModalOpen(false);
    window.location.reload()
  };
  const handleOk = () => {
    setIsModalOpen(false);
    window.location.reload()
  };

  const props: UploadProps = {
    name: "file",
    action: "http://localhost:3002/upload",
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="m-4">
      <Space direction="vertical" style={{ width: "100%" }}>
        <Button block onClick={() => setIsModalOpen(true)}>
          Upload New File
        </Button>
      </Space>

      <Modal
        title="Upload New File"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Done"
      >
        <p>Dou want to delete this file?</p>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Modal>
    </div>
  );
}
