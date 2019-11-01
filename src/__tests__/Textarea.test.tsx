import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@sinoui/theme';
import Textarea from 'src/Textarea';

describe('Textarea 镜像测试', () => {
  it('渲染Textarea', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={defaultTheme}>
          <Textarea />
        </ThemeProvider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('onchange', () => {
    const onChage = jest.fn();
    const tree = renderer
      .create(
        <ThemeProvider theme={defaultTheme}>
          <Textarea value="001" onChange={onChage} />
        </ThemeProvider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('验收测试', () => {
  it('渲染', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={defaultTheme}>
        <Textarea placeholder="请输入内容" />
      </ThemeProvider>,
    );

    expect(getByPlaceholderText('请输入内容')).toBeDefined();
  });

  it('值变更', () => {
    const onChange = jest.fn();
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={defaultTheme}>
        <Textarea placeholder="请输入内容" onChange={onChange} />
      </ThemeProvider>,
    );

    fireEvent.change(getByPlaceholderText('请输入内容'), {
      target: { value: '001' },
    });

    expect(onChange).toBeCalledTimes(1);
  });

  it('失去焦点', () => {
    const onBlur = jest.fn();
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={defaultTheme}>
        <Textarea placeholder="请输入内容" onBlur={onBlur} />
      </ThemeProvider>,
    );

    fireEvent.blur(getByPlaceholderText('请输入内容'));

    expect(onBlur).toBeCalledTimes(1);
  });
});
