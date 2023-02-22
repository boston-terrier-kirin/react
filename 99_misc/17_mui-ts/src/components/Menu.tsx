import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Typography,
} from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    displayName: 'Box',
    path: '/box',
  },
  {
    displayName: 'Grid',
    path: '/grid',
  },
  {
    displayName: 'Stack',
    path: '/stack',
  },
  {
    displayName: 'Inputs',
    path: '/inputs',
  },
  {
    displayName: 'Data Display',
    path: '/data-display',
  },
  {
    displayName: 'Feedback',
    path: '/feedback',
  },
];

const Menu = () => {
  const menuToRender = menuItems.map((menu) => (
    <MenuItem key={menu.path}>
      <ListItemIcon>
        <ArticleIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText>
        <Link to={menu.path}>
          <Typography variant="body2" color="text.primary">
            {menu.displayName}
          </Typography>
        </Link>
      </ListItemText>
    </MenuItem>
  ));

  return <MenuList>{menuToRender}</MenuList>;
};

export default Menu;
