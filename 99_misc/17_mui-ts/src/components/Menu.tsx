import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Typography,
} from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <MenuList>
      <MenuItem>
        <ListItemIcon>
          <ArticleIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>
          <Link to="/box">
            <Typography variant="body2" color="text.primary">
              Box
            </Typography>
          </Link>
        </ListItemText>
      </MenuItem>

      <MenuItem>
        <ListItemIcon>
          <ArticleIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>
          <Link to="/grid">
            <Typography variant="body2" color="text.primary">
              Grid
            </Typography>
          </Link>
        </ListItemText>
      </MenuItem>

      <MenuItem>
        <ListItemIcon>
          <ArticleIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>
          <Link to="/inputs">
            <Typography variant="body2" color="text.primary">
              Inputs
            </Typography>
          </Link>
        </ListItemText>
      </MenuItem>
    </MenuList>
  );
};

export default Menu;
