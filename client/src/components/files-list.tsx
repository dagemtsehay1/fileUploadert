import { Space, Table, Button, Spin, Modal } from "antd";
import { useEffect, useState } from "react";
import { deleteFile, getFiles } from "../utils/network";

interface DataType {
  id: string;
  name: string;
  size: string;
  date: string;
}

export default function FilesList() {
  const { Column } = Table;
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<DataType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [fileToBeDeleted, setFileToBeDeleted] = useState<DataType>();

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleOk = async () => {
    setIsModalOpen(false);
    setIsLoading(true);
    const res = await deleteFile(fileToBeDeleted?.id);
    if(res.status == "ok"){
      loadAllFiles();
    }else{
      setIsLoading(false);
    }
  };

  const loadAllFiles = async () => {
    const rawData = await getFiles();
    const castedData: DataType[] = [];
    rawData.data.map((e: any) => {
      castedData.push({
        id: e.id,
        name: e.originalName,
        size: e.size,
        date: e.createdAt,
      });
    });

    setData(castedData);
    setIsLoading(false);
  };

  useEffect(() => {
    loadAllFiles();
  }, []);
  return (
    <>
      <div>
        <Spin spinning={isLoading}>
          <Table dataSource={data}>
            <Column title="File Name" dataIndex="name" key="name" />
            <Column title="File Size" dataIndex="size" key="size" />
            <Column title="Uploaded At" dataIndex="date" key="date" />
            <Column
              title="Action"
              key="action"
              render={(_: any, record: DataType) => (
                <Space size="middle">
                  <Button
                    danger
                    onClick={() => {
                      setFileToBeDeleted(record);
                      setIsModalOpen(true);
                    }}
                  >
                    Delete
                  </Button>
                </Space>
              )}
            />
          </Table>
        </Spin>
      </div>

      <Modal
        title="Confirm"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Delete"
        okButtonProps={{ danger: true }}
      >
        <p>Dou want to delete this file?</p>
        <p>
          <b>File Name:</b> {fileToBeDeleted?.name}
        </p>
        <p>
          <b>File Size:</b> {fileToBeDeleted?.size}
        </p>
        <p>
          <b>Uploaded At:</b> {fileToBeDeleted?.date}
        </p>
      </Modal>
    </>
  );
}
