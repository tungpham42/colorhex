"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Form, InputGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function ColorSearchForm() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      const cleanedQuery = query.replace("#", "");
      router.push(`/${encodeURIComponent(cleanedQuery)}`);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="mb-4 d-flex justify-content-center"
    >
      <InputGroup className="search-bar overflow-hidden">
        <Form.Control
          type="text"
          placeholder="Enter color name, HEX, RGB, HSL, or CMYK"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
          autoFocus
          className="border-0 ps-4 py-3 search-input"
        />
        <Button
          type="submit"
          variant="primary"
          className="d-flex align-items-center justify-content-center px-4 search-btn"
        >
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </InputGroup>
    </Form>
  );
}
