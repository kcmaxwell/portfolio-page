import React from "react";
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton
} from "@coreui/react";

export default function Project({ img, title, description, code, demo }) {
  return (
    <CCard className="project-card h-100">
      <CCardBody>
        <CCardTitle>{title}</CCardTitle>
        <CCardText>{description}</CCardText>
        <CButton className="card-button" href={code}>
          Github
        </CButton>
        <CButton className="card-button" href={demo}>
          Demo
        </CButton>
      </CCardBody>
    </CCard>
  );
}
