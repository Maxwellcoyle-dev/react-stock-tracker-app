import styles from "../App.module.css";

export const MenuNavItem = (props) => {
  const handleClick = () => {
    props.setPageView(props.page);
  };

  return (
    <button
      key={props.page}
      className={
        props.pageView === props.page
          ? styles.menuNavItemSelected
          : props.className
      }
      onClick={handleClick}
    >
      {props.icon}
    </button>
  );
};
