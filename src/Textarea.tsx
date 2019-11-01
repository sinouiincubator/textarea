import React, { useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import classNames from 'classnames';

export interface TextareaProps {
  /**
   * 文本框的值
   */
  value?: string;
  /**
   * 文本框的默认值
   */
  defaultValue?: string;
  /**
   * 值变更时的回调函数
   */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /**
   * 失去焦点时的回调函数
   */
  onBlur?: () => void;
  /**
   * 是都自动获取焦点
   */
  autoFocus?: boolean;
  /**
   * 最大长度
   */
  maxLength?: number;
  /**
   * 提示文本
   */
  placeholder?: string;
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * 自定义样式类名称
   */
  className?: string;
}

const borderStyle = css`
  border: 1px solid ${(props) => props.theme.palette.input.bottomLine};
  transition: border-color 300ms;

  :hover {
    padding: 3px;
    border: 2px solid ${(props) => props.theme.palette.action.active};
  }
`;

const focusedBorderStyle = css`
  padding: 3px;
  border: 2px solid ${(props) => props.theme.palette.primary[500]};
`;

const StyledTextarea = styled.textarea<TextareaProps & { focused?: boolean }>`
  min-height: 80px;
  box-sizing: border-box;
  padding: 4px;
  resize: none;
  outline: none;
  font-size: ${(props) => props.theme.typography.subheading.fontSize}rem;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
  overflow: auto;
  color: ${(props) => props.theme.palette.text.primary};
  background-color: transparent;
  ${(props) => (props.focused ? focusedBorderStyle : borderStyle)};
`;

/**
 * 多行文本输入框
 * @param props TextareaProps
 */
export default function Textarea(props: TextareaProps) {
  const { defaultValue, value, onChange, onBlur, className } = props;
  const [focused, setFocused] = useState(false);

  /**
   * 获取焦点时的回调函数
   */
  const handleOnFocus = useCallback(() => setFocused(true), []);

  /**
   * 失去焦点时的回调函数
   */
  const handleBlur = useCallback(() => {
    setFocused(false);
    if (onBlur) {
      onBlur();
    }
  }, [onBlur]);

  return (
    <StyledTextarea
      {...props}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      onFocus={handleOnFocus}
      focused={focused}
      onBlur={handleBlur}
      className={classNames('sinouiincubator-textarea', className)}
    />
  );
}
