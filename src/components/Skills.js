import React from "react";
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CCardHeader,
  CListGroup,
  CListGroupItem
} from "@coreui/react";

export default function Skills({ title, ...props }) {
  return (
    <CCard className="about-card h-100">
      <CCardHeader component="h4">{title}</CCardHeader>
      <CListGroup>
        <CListGroupItem className="about-card">Java</CListGroupItem>
        <CListGroupItem className="about-card">Python</CListGroupItem>
      </CListGroup>
    </CCard>
  );
}
