"use client";
import { Container, Row, Col, Card, Button, Ratio } from "react-bootstrap";
import ColorSearchForm from "@/components/ColorSearchForm";
import ScreenColorPicker from "@/components/ScreenColorPicker";
import ImageColorPicker from "@/components/ImageColorPicker";
import Link from "next/link";
import { hexToRgba } from "@/utils/colorUtils";
import AdSenseBanner from "./AdSenseBanner";
import TopMenu from "./TopMenu";

export default function Home() {
  const popularColors = [
    { name: "Red", hex: "#FF0000", clean: "FF0000" },
    { name: "Green", hex: "#00FF00", clean: "00FF00" },
    { name: "Blue", hex: "#0000FF", clean: "0000FF" },
    { name: "Yellow", hex: "#FFFF00", clean: "FFFF00" },
    { name: "Cyan", hex: "#00FFFF", clean: "00FFFF" },
    { name: "Magenta", hex: "#FF00FF", clean: "FF00FF" },
    { name: "Orange", hex: "#FFA500", clean: "FFA500" },
    { name: "Purple", hex: "#800080", clean: "800080" },
    { name: "Pink", hex: "#FFC0CB", clean: "FFC0CB" },
    { name: "Brown", hex: "#A52A2A", clean: "A52A2A" },
    { name: "Black", hex: "#000000", clean: "000000" },
    { name: "White", hex: "#FFFFFF", clean: "FFFFFF" },
  ];

  return (
    <Container className="mt-0">
      <TopMenu />
      <h1 className="mb-4 text-center">
        Color Tools - Free Online Color Utilities
      </h1>
      <p className="text-center">
        Discover, mix, and analyze colors with our free online color tools. No
        registration required.
      </p>
      <ColorSearchForm />
      <hr className="my-5" />
      <h2 className="mb-4">How to Use Our Color Tools</h2>
      <ul>
        <li>
          Enter a color name (like <strong>red</strong>), a HEX code (
          <strong>#FF0000</strong>), or other formats (RGB, HSL, CMYK)
        </li>
        <li>
          Click <strong>Search</strong> to get detailed information about the
          color
        </li>
        <li>Explore color palettes, shades, tints, and complementary colors</li>
      </ul>
      <Ratio aspectRatio="16x9" style={{ maxWidth: 640 }} className="mx-auto">
        <iframe
          src={`https://www.youtube.com/embed/ULDRwd5dLLg?rel=0&modestbranding=1`}
          title="YouTube video"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </Ratio>
      <hr className="my-5" />
      <AdSenseBanner />
      <h2 className="mb-4">Color Pickers</h2>
      <ScreenColorPicker />
      <ImageColorPicker />
      <hr className="my-5" />
      <h2 className="mb-4">Popular Colors</h2>
      <Row>
        {popularColors.map((color) => (
          <Col
            key={color.hex}
            lg={3}
            md={4}
            sm={6}
            xs={12}
            className="mb-4 d-flex"
          >
            <Card
              className="h-100 w-100"
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 6px 12px ${hexToRgba(
                  color.hex,
                  0.5
                )}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow)";
              }}
            >
              <div
                style={{
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  backgroundColor: color.hex,
                  height: "100px",
                }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{color.name}</Card.Title>
                <Card.Text>
                  HEX: <span className="color-code">{color.hex}</span>
                </Card.Text>
                <div className="mt-auto">
                  <Link href={`/${color.clean}`} passHref>
                    <Button variant="primary">View Details</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
