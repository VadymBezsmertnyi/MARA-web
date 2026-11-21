import React, {
  FunctionComponent,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { Button } from "antd";
import { PaperClipOutlined } from "@ant-design/icons";

const VisuallyHiddenInput = {
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute" as const,
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap" as const,
  width: 1,
};

type ButtonFileProps = {
  values?: File[];
  onChange?: (file: File) => void;
  onChangeMultiple?: (files: File[]) => void;
  multiple?: boolean;
  Icon?: React.ComponentType<any>;
  accept?: string;
  disabled?: boolean;
  renderButton?: ReactNode;
};

/**
 * ButtonFile component
 * @param {Function} onChange - callback function
 * @param {Function} onChangeMultiple - callback function
 * @param {boolean} multiple - multiple files
 * @param {ReactNode} Icon - icon component
 * @param {string} accept - file accept type
 * @param {boolean} disabled - disabled
 * @param {File[]} values - file values
 * @param {ReactNode} renderButton - render button
 * @returns {ReactNode} ButtonFile
 */
const ButtonFile: FunctionComponent<ButtonFileProps> = ({
  values,
  onChange,
  onChangeMultiple,
  Icon,
  accept = ".png, .jpg, .jpeg, .pdf, .doc, .docx, .xls, xlsx, .ppt, .pptx, .txt",
  disabled = false,
  renderButton,
}): ReactNode => {
  const [file, setFile] = useState<readonly string[]>([]);
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event.target.files) return;
    const files = Array.from(event.target.files);

    if (!files.length) return;
    if (onChangeMultiple) onChangeMultiple(files);
    else if (onChange) onChange(files[0]);
  };

  useEffect(() => {
    if (values?.length) setFile([]);
  }, [values]);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Button
        aria-label="attachment"
        disabled={disabled}
        icon={
          renderButton ? undefined : Icon ? <Icon /> : <PaperClipOutlined />
        }
        onClick={() => document.getElementById("file-input")?.click()}
      >
        {renderButton && renderButton}
      </Button>
      <input
        id="file-input"
        style={VisuallyHiddenInput}
        disabled={disabled}
        type="file"
        accept={accept}
        multiple={Boolean(onChangeMultiple)}
        value={file}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default ButtonFile;
