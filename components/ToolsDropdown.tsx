"use client";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEyeDropper,
  faPalette,
  faImage,
} from "@fortawesome/free-solid-svg-icons";

export default function ToolsDropdown() {
  const [show, setShow] = useState(false);

  return (
    <Dropdown show={show} onToggle={(isOpen) => setShow(isOpen)}>
      <Dropdown.Toggle
        variant="outline-primary"
        id="tools-dropdown"
        className="lang-toggle-btn d-flex align-items-center gap-2"
      >
        <FontAwesomeIcon icon={faPalette} className="globe-icon" />
        <span className="fw-bold">Tools</span>
      </Dropdown.Toggle>
      <Dropdown.Menu align="end" className="lang-dropdown-menu">
        <Dropdown.Item
          as={Link}
          href="/"
          className="lang-dropdown-item d-flex align-items-center gap-2"
        >
          <FontAwesomeIcon icon={faEyeDropper} />
          Color Picker
        </Dropdown.Item>
        <Dropdown.Item
          as={Link}
          href="/color-mixer"
          className="lang-dropdown-item d-flex align-items-center gap-2"
        >
          <FontAwesomeIcon icon={faPalette} />
          Color Mixer
        </Dropdown.Item>
        <Dropdown.Item
          as={Link}
          href="/image-palette-extractor"
          className="lang-dropdown-item d-flex align-items-center gap-2"
        >
          <FontAwesomeIcon icon={faImage} />
          Image Palette Extractor
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
