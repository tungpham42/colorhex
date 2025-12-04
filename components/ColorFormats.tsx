"use client";
import { Card, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import AdSenseBanner from "./AdSenseBanner";

type Props = {
  formats: {
    hex: string;
    rgb: string;
    hsl: string;
    cmyk: string;
  };
};

export default function ColorFormats({ formats }: Props) {
  return (
    <>
      <Card className="mb-5">
        <Card.Header>
          <FontAwesomeIcon icon={faList} className="me-2" />
          Color Formats
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            HEX: <span className="color-code">{formats.hex}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            RGB: <span className="color-code">{formats.rgb}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            HSL: <span className="color-code">{formats.hsl}</span>
          </ListGroup.Item>
          <ListGroup.Item>
            CMYK: <span className="color-code">{formats.cmyk}</span>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <AdSenseBanner />
    </>
  );
}
