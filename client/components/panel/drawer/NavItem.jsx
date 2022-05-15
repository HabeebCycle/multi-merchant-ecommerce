import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";
import { Button, ListItem } from "@mui/material";

const NavItem = (props) => {
  const router = useRouter();
  const { href, icon: Icon, title, setOpen, isSmallScreen, ...rest } = props;

  const active = router.asPath === href;

  const handleDrawer = () => {
    if (isSmallScreen) {
      setOpen(false);
    }
  };

  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        py: 0,
      }}
      {...rest}
    >
      <Link href={href} passHref>
        <Button
          onClick={handleDrawer}
          component="a"
          sx={{
            color: "text.secondary",
            fontWeight: "medium",
            justifyContent: "flex-start",
            letterSpacing: 0,
            py: 1.25,
            textTransform: "none",
            width: "100%",
            ...(active && {
              color: "primary.main",
            }),
            "& svg": {
              mr: 1,
            },
          }}
        >
          {Icon && <Icon size="20" />}
          <span>{title}</span>
        </Button>
      </Link>
    </ListItem>
  );
};

NavItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string,
};

export default NavItem;
