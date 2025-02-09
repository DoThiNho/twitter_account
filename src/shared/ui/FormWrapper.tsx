import { Button, Form, FormInstance, FormProps } from "antd";
import { Store } from "antd/es/form/interface";
import React, { forwardRef, useEffect } from "react";
import { ReactWithChild } from "../types/app";

export interface FormWrapperProps<T> extends ReactWithChild {
  initialValues: T;
  formProps?: Omit<FormProps, "initialValues" | "onFinish" | "preserve">;
  onFinish?: (values: T) => void;
  onValuesChange?: React.FormEventHandler<HTMLFormElement> | undefined;
  confirmButtonText?: string;
  isLoading?: boolean;
  className?: string;
}

export type FormDrawerRef = FormInstance<Store>;

function FormWrapper<T extends Store>(
  {
    children,
    formProps,
    initialValues,
    onFinish,
    onValuesChange,
    confirmButtonText = "Create",
    isLoading = false,
    className,
  }: FormWrapperProps<T> & React.RefAttributes<Store>,
  ref?: React.Ref<FormDrawerRef>
) {
  const [form] = Form.useForm<T>();

  useEffect(() => {
    form.resetFields();
  }, [form, initialValues]);

  return (
    <Form
      className={className}
      form={form}
      layout="vertical"
      ref={ref}
      {...formProps}
      initialValues={initialValues}
      onFinish={onFinish}
      onValuesChange={onValuesChange}
    >
      <div>{children}</div>
      <Form.Item noStyle>
        <Button
          className="text-base font-semibold px-7 w-full"
          htmlType="submit"
          loading={isLoading}
          size="large"
          type="primary"
        >
          {confirmButtonText}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default forwardRef(FormWrapper) as typeof FormWrapper;
