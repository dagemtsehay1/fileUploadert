import { Typography } from "antd";

const { Title } = Typography;

export default function Header() {
  return (
    <div className="w-full text-center mt-5">
      <img
        src="https://condigital.io/wp-content/uploads/2021/10/logo-f.png"
        alt="logo"
        className="m-auto"
      />
      <Title level={3}>File Uploader App</Title>
    </div>
  );
}
