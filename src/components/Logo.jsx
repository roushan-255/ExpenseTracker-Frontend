import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/material';
import configData from '../config.json'


Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};


export default function Logo({ disabledLink = false, sx }) {
  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <img src = "/static/logo.png"/>
    </Box>
  );
  if (disabledLink) {
    return <>{logo}</>;
  }
  return <RouterLink to={configData.DASHBOARD_URL}>{logo}</RouterLink>;
}
