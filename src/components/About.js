import React from "react";
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton
} from "@coreui/react";

export default function About({ title, ...props }) {
  return (
    <CCard className="about-card h-100">
      <CCardBody>
        <CCardTitle>{title}</CCardTitle>
        <CCardText>{props.children}</CCardText>
      </CCardBody>
    </CCard>
  );
}
