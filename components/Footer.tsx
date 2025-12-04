"use client";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { Container } from "react-bootstrap";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-3 pb-1 mt-5 shadow-lg">
      <Container>
        <p className="text-center">
          &copy; {currentYear}{" "}
          <a
            className="font-weight-bold text-decoration-none"
            href="https://tungpham42.github.io"
            target="_blank"
            rel="noreferrer"
          >
            Phạm Tùng
          </a>
          {", "}
          <a
            href="https://github.com/tungpham42/mausac"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <FontAwesomeIcon icon={faGithub} className="me-1" />
            MIT License
          </a>
        </p>
        <div className="text-center mt-3">
          <h5>Explore More Tools</h5>
          <ul className="list-unstyled d-flex flex-wrap justify-content-center">
            <li className="mx-2">
              <a
                href="https://cotuong.top/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                Chinese Chess
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://json.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                JSON Tools
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://css.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                CSS Tools
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://tool.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                General Tools
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://caro.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                Caro Game
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://srt.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                SRT Tools
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://phim.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                Movies
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://boi.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                Fortune Telling
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://disc.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                DISC Assessment
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://tratu.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                Dictionary Lookup
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://mbti.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                MBTI Test
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://ikigai.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                Ikigai
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://talent.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                Talent Assessment
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://qr.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                QR Code Tools
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://dongdat.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                Earthquake Info
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://luong.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                Salary
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://clifton.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                Clifton Strengths
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://holland.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                Holland Code
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://math.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                Math Tools
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://chill.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                Chill
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://speech.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                Speech Tools
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://bmi.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                BMI Calculator
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://timer.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                Timer
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://forex.soft.io.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                Forex Tools
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
