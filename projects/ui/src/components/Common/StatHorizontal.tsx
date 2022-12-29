import { Tooltip, Typography } from '@mui/material';
import React from 'react';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { FontSize } from '../App/muiTheme';
import Row from '~/components/Common/Row';

import { FC } from '~/types';

const StatHorizontal : FC<{
  label: string | React.ReactElement,
  labelTooltip?: string | React.ReactElement;
}> = ({
  label,
  labelTooltip = '',
  children
}) => (
  <Row justifyContent="space-between" gap={2}>
    <Tooltip title={labelTooltip} placement="right">
      <Typography>
        {label}&nbsp;
        {labelTooltip && (
          <HelpOutlineIcon
            sx={{ color: 'text.tertiary', fontSize: FontSize.xs }}
          />
        )}
      </Typography>
    </Tooltip>
    <Row gap={0.3}>
      {children}
    </Row>
  </Row>
);

export default StatHorizontal;