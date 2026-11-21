import React, { FunctionComponent } from "react";
import { Modal } from "antd";

type ModalWindowProps = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

const ModalWindow: FunctionComponent<ModalWindowProps> = ({
  children,
  open,
  onClose,
}) => {
  return (
    <Modal open={open} onCancel={onClose} footer={null}>
      {children}
    </Modal>
  );
};

export default ModalWindow;
