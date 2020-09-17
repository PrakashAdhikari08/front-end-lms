import React, { useEffect } from "react";
const PageHeader = (props) => {
  useEffect(() => {
    document.title = `${props.title} | HacerCode`;
    window.scrollTo(0, 0);
  }, []);
  return <>{props.children}</>;
};

export default PageHeader;
