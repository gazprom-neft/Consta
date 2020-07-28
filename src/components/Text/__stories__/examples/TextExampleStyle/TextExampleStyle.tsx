import React from 'react';

import { cnDocsDecorator } from '../../../../../uiKit/components/DocsDecorator/DocsDecorator';
import * as wp from '../../../../../utils/whitepaper/whitepaper';
import { Text } from '../../../Text';

export const TextExampleStyle = () => {
  return (
    <div className={cnDocsDecorator('Section')}>
      <Text size="s" view="ghost" className={wp.decorator({ 'indent-b': 'm' })}>
        text_style_italic
      </Text>
      <Text fontStyle="italic">Газпром Нефть</Text>
    </div>
  );
};
