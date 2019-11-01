/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useCallback } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@sinoui/theme';
import Textarea from '../src';

function SimpleDemo() {
  const [value, setValue] = useState();

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = event.target.value;
      setValue(newValue);
    },
    [],
  );

  return <Textarea value={value} onChange={handleOnChange} />;
}

storiesOf('多行文本框', module).add('simpleDemo', () => (
  <ThemeProvider theme={defaultTheme}>
    <SimpleDemo />
  </ThemeProvider>
));
