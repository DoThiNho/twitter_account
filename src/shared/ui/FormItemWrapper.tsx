import type { FormItemProps } from "antd";
import { Form } from "antd";

interface ComponentHasFormItemProps {
  formItemProps?: FormItemProps;
  content: React.ReactNode;
}

export default function FormItemWrapper({
  formItemProps,
  content,
}: ComponentHasFormItemProps) {
  return formItemProps ? (
    <Form.Item {...formItemProps}>{content}</Form.Item>
  ) : (
    <>{content}</>
  );
}
