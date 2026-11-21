import { FunctionComponent, ReactNode } from "react";
import { Avatar as AntdAvatar, AvatarProps as AntdAvatarProps } from "antd";
import { UserOutlined } from "@ant-design/icons";

interface AvatarProp extends Omit<AntdAvatarProps, "size"> {
  alt?: string;
  src?: string;
  className?: string;
  color?: string;
  children?: ReactNode;
  outline?: boolean;
  size?: "badge" | "xs" | "sm" | "md" | "lg" | "xl";
}

const Avatar: FunctionComponent<AvatarProp> = ({
  className,
  color,
  outline,
  size,
  children,
  ...others
}) => {
  const getAvatarSize = (size?: string) => {
    switch (size) {
      case "badge":
        return 28;
      case "xs":
        return 34;
      case "sm":
        return 40;
      case "lg":
        return 72;
      case "xl":
        return 82;
      case "md":
        return 60;
      default:
        return "default";
    }
  };

  const avatarStyle: React.CSSProperties = {};

  if (outline) {
    avatarStyle.border = "2px solid";
    avatarStyle.borderColor = color || "#1890ff";
  }

  return (
    <AntdAvatar
      size={getAvatarSize(size)}
      className={className}
      style={avatarStyle}
      icon={!children && !others.src ? <UserOutlined /> : undefined}
      {...others}
    >
      {children}
    </AntdAvatar>
  );
};

export default Avatar;
