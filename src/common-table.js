
import { makeStyles } from '@material-ui/core/styles';

const useTableStyles = makeStyles(theme => ({
  topHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    userSelect: 'none'
  },
  topHeaderRight: {
    display: 'flex',
    alignItems: 'center'
  },
  tbodyClass: {
    '&::before': {
      lineHeight: 0,
      content: '"_"',
      color: 'transparent',
      display: 'block'
    }
  },
  tableName: {
    letterSpacing: 1
  },
  searchBox: {
    marginRight: theme.spacing(2)
  },
  avatarColumn: {
    width: theme.spacing(8),
  },
  headerDot: {
    textAlign: 'center',
    fontSize: theme.spacing(18 / 8)
  },
  actionColumn: {
    width: theme.spacing(20),
  },
  paginator: {
    marginTop: 'auto',
    paddingTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
  dotClass: {
    textAlign: 'center',
    fontSize: theme.spacing(3),
    color: theme.palette.text.secondary
  },
  firstCell: {
    paddingLeft: theme.spacing(3)
  },
  noData: {
    marginTop: 160,
    userSelect: 'none',
    color: theme.palette.text.secondary,
    fontSize: '20px'
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    margin: `0 ${theme.spacing(1)}px`
  },
  linkStyle: {
    color: theme.palette.primary.contrastText
  },
  tabs: {
    margin: `${theme.spacing(2)}px 0`
  },
  filterPanelStyle: {
    width: 280,
    marginRight: theme.spacing(2)
  }
}));

export { useTableStyles };
