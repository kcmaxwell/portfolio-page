import React from "react";
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CListGroup,
  CListGroupItem
} from "@coreui/react";

export default function Contact({ title, ...props }) {
  return (
    <CCard className="about-card h-100">
      <CCardBody>
        <CCardTitle>{title}</CCardTitle>
        <CListGroup flush>
          <CListGroupItem>Github</CListGroupItem>
          <CListGroupItem>Linkedin</CListGroupItem>
        </CListGroup>
      </CCardBody>
    </CCard>
  );
}
