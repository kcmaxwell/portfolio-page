import React from "react";
import { CRow, CCol } from "@coreui/react";

export default function CardGrid({ xs, md, ...props }) {
  return (
    <CRow xs={xs} md={md}>
      {React.Children.map(props.children, (child) => {
        return <CCol xs>{child}</CCol>;
      })}
    </CRow>
  );
}
