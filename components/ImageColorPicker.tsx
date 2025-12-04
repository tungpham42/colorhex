"use client";

import { useState, useEffect } from "react";
import { Form, Alert, Button, Image } from "react-bootstrap";
import { parseColor } from "@/utils/colorUtils";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileUpload,
  faRedo,
  faEyeDropper,
} from "@fortawesome/free-solid-svg-icons";

export default function ImageColorPicker() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [pickedColor, setPickedColor] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target?.result as string);
        setPickedColor(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePaste = (event: ClipboardEvent) => {
    const items = event.clipboardData?.items;
    if (!items) return;

    for (const item of items) {
      if (item.type.includes("image")) {
        const blob = item.getAsFile();
        if (blob) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setImageSrc(e.target?.result as string);
            setPickedColor(null);
          };
          reader.readAsDataURL(blob);
        }
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("paste", handlePaste);
    return () => {
      window.removeEventListener("paste", handlePaste);
    };
  }, []);

  const handlePickColor = async () => {
    if (!window.EyeDropper) {
      alert(
        "Your browser does not support the EyeDropper API. Try using Chrome or Edge."
      );
      return;
    }

    const eyeDropper = new window.EyeDropper();
    try {
      const result = await eyeDropper.open();
      setPickedColor(result.sRGBHex);
    } catch (err) {
      console.error("Color pick cancelled or failed", err);
    }
  };

  const handleReset = () => {
    setImageSrc(null);
    setPickedColor(null);
  };

  const parsedColor = pickedColor ? parseColor(pickedColor) : null;
  const hex = parsedColor?.toHexString() || "#000000";
  const hexClean = hex.replace("#", "");

  return (
    <div className="mb-4">
      <Form.Group controlId="formFile">
        <Form.Label>
          <FontAwesomeIcon icon={faFileUpload} className="me-2" />
          Upload an image or paste from clipboard
        </Form.Label>
        <Form.Control
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </Form.Group>

      {imageSrc && (
        <>
          <Button
            variant="outline-secondary"
            size="lg"
            className="mb-3 me-2"
            onClick={handleReset}
          >
            <FontAwesomeIcon icon={faRedo} className="me-2" />
            Reset
          </Button>
          <Button
            variant="outline-primary"
            size="lg"
            className="mb-3"
            onClick={handlePickColor}
          >
            <FontAwesomeIcon icon={faEyeDropper} className="me-2" />
            Pick Color from Screen
          </Button>
          <Image
            src={imageSrc}
            alt="Uploaded preview"
            fluid
            className="border mt-2"
            style={{ maxHeight: "80vh", objectFit: "contain" }}
          />
        </>
      )}

      {pickedColor && (
        <Alert variant="success" className="mt-3">
          <strong>Selected Color:</strong>{" "}
          <Link href={`/${hexClean}`}>
            <span className="color-code">{pickedColor}</span>
          </Link>
          <Link
            href={`/${hexClean}`}
            style={{ display: "block", width: "fit-content" }}
          >
            <div
              style={{
                backgroundColor: pickedColor,
                width: "200px",
                height: "100px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                marginTop: "8px",
                display: "block",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Link>
        </Alert>
      )}
    </div>
  );
}
