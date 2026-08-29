import React, { useState } from "react";
import Navbar from "../components/navbar";

export default function HowToGuide() {
  /* ============================================================
     IMAGE SLOTS
     ============================================================

     TOTAL: 7 IMAGE SLOTS

     1. HERO_IMAGE
     2. MORE_READ_IMAGE_1
     3. MORE_READ_IMAGE_2
     4. MORE_READ_IMAGE_3
     5. PRACTICE_IMAGE_1
     6. PRACTICE_IMAGE_2
     7. PRACTICE_IMAGE_3

     Paste your Cloudinary URLs inside the quotes.
     ============================================================ */

  const HERO_IMAGE = "";

  const MORE_READ_IMAGE_1 =
    "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787925586/b53ad774db53413711aeb21c7fda31ba77fde6ed_1.jpg";

  const MORE_READ_IMAGE_2 =
    "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787925586/b53ad774db53413711aeb21c7fda31ba77fde6ed_1.jpg";

  const MORE_READ_IMAGE_3 =
    "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787925586/b53ad774db53413711aeb21c7fda31ba77fde6ed_1.jpg";

  const PRACTICE_IMAGE_1 =
    "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787832876/b785b93f10ee527292fd9e6b3cba9c838587764b.png";

  const PRACTICE_IMAGE_2 =
    "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787832856/7318c219e2b5c2c73ed078df153915c50d9cc106.png";

  const PRACTICE_IMAGE_3 =
    "https://res.cloudinary.com/tpxo8m6a/image/upload/v1787832856/7318c219e2b5c2c73ed078df153915c50d9cc106.png";

  /* ============================================================
     MORE READS DATA
     ============================================================ */

  const moreReads = [
    {
      image: MORE_READ_IMAGE_1,
      title: "Lorem ipsum dolor self amet",
    },
    {
      image: MORE_READ_IMAGE_2,
      title: "Lorem ipsum dolor self amet",
    },
    {
      image: MORE_READ_IMAGE_3,
      title: "Lorem ipsum dolor self amet",
    },
  ];

  /* ============================================================
     PRACTICE SLIDER DATA
     ============================================================ */

  const practiceImages = [
    PRACTICE_IMAGE_1,
    PRACTICE_IMAGE_2,
    PRACTICE_IMAGE_3,
  ];

  /* ============================================================
     PRACTICE SLIDER STATE
     ============================================================ */

  const [practiceIndex, setPracticeIndex] = useState(0);

  const goPracticePrevious = () => {
    setPracticeIndex((current) =>
      current === 0 ? practiceImages.length - 1 : current - 1
    );
  };

  const goPracticeNext = () => {
    setPracticeIndex((current) =>
      current === practiceImages.length - 1 ? 0 : current + 1
    );
  };

  const goPracticeTo = (index) => {
    setPracticeIndex(index);
  };

  return (
    <>
      <style>{`

        /* ============================================================
           GLOBAL
           ============================================================ */

        * {
          box-sizing: border-box;
        }

        html {
          margin: 0;
          padding: 0;
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
          background: #ffffff;
          color: #242424;
          font-family: "Inter", Arial, Helvetica, sans-serif;
        }

        button,
        input {
          font-family: inherit;
        }

        button {
          cursor: pointer;
        }

        /* ============================================================
           PAGE
           ============================================================ */

        .guide-page {
          width: 100%;
          min-height: 4412px;
          overflow-x: hidden;
          background: #ffffff;
        }

        .guide-canvas {
          position: relative;
          width: 1440px;
          min-height: 4412px;
          margin: 0 auto;
          overflow: hidden;
          background: #ffffff;
        }

        /* ============================================================
           BACKGROUND
           ============================================================ */

        .guide-background {
          position: absolute;
          z-index: 0;
          top: 269.939px;
          left: 50%;
          width: 1920px;
          height: 945px;
          transform: translateX(-50%);
          pointer-events: none;
          opacity: 0.5;

          background:
            linear-gradient(
              to bottom,
              #ffffff 9.46%,
              #9cd0ff 45.045%,
              #ffffff 89.631%,
              #ffffff 100%
            );
        }

        .guide-grid {
          position: absolute;
          z-index: 0;
          top: 203px;
          left: 50%;
          width: 1340px;
          height: 1078px;
          transform: translateX(-50%);
          pointer-events: none;
          opacity: 0.25;

          background-image:
            linear-gradient(
              rgba(255,255,255,0.9) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.9) 1px,
              transparent 1px
            );

          background-size: 135px 135px;

          mask-image: linear-gradient(
            to bottom,
            #000 0%,
            #000 80%,
            transparent 100%
          );

          -webkit-mask-image: linear-gradient(
            to bottom,
            #000 0%,
            #000 80%,
            transparent 100%
          );
        }

        /* ============================================================
           HEADER
           ============================================================ */

        .guide-header {
          position: relative;
          z-index: 5;
          width: 100%;
          height: 570px;

          padding-top: 168px;
        }

        /* ============================================================
           NAVBAR
           ============================================================ */

        .guide-navbar-wrapper {
          position: absolute;
          z-index: 50;
          top: 0.7%;
          left: 50%;
          transform: translateX(-50%);
          transform-origin: top center;
        }

        /* ============================================================
           ARTICLE CATEGORY
           ============================================================ */

        .guide-category {
          width: 760px;
          margin: 0 auto;
          padding-top: 0;
        }

        .guide-category-pill {
          width: 112px;
          height: 36px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 18px;

          background: #0085ff;
          color: #ffffff;

          font-size: 13px;
          line-height: 19px;
          font-weight: 500;
        }

        /* ============================================================
           ARTICLE TITLE
           ============================================================ */

        .guide-title {
          width: 760px;

          margin: 32px 0 0;
          padding: 0;

          color: #242424;

          font-size: 36px;
          line-height: 43px;

          font-weight: 500;

          letter-spacing: -1.5px;
        }

        /* ============================================================
           ARTICLE SUBTITLE
           ============================================================ */

        .guide-subtitle {
          width: 760px;

          margin: 10px 0 0;

          color: #78788d;

          font-size: 16px;
          line-height: 23px;

          font-weight: 400;
        }

        /* ============================================================
           AUTHOR
           ============================================================ */

        .guide-author {
          display: flex;
          align-items: center;

          gap: 12px;

          margin-top: 28px;
        }

        .guide-author-avatar {
          width: 40px;
          height: 40px;

          flex: none;

          border-radius: 50%;

          background: #d9d9d9;

          overflow: hidden;
        }

        .guide-author-avatar img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        .guide-author-info {
          display: flex;
          flex-direction: column;

          gap: 2px;
        }

        .guide-author-name {
          color: #242424;

          font-size: 12px;
          line-height: 16px;

          font-weight: 600;
        }

        .guide-author-meta {
          color: #a2a2a8;

          font-size: 10px;
          line-height: 14px;

          font-weight: 400;
        }

        /* ============================================================
           HEADER RULE
           ============================================================ */

        .guide-header-rule {
          width: 760px;
          height: 1px;

          margin: 28px auto 0;

          background: #d9d9d9;
        }

        /* ============================================================
           PREVIOUS / NEXT RESOURCE
           ============================================================ */

        .guide-prev,
        .guide-next {
          position: absolute;

          top: 177px;

          color: #999aa2;

          font-size: 11px;
          line-height: 17px;

          font-weight: 400;

          white-space: nowrap;

          border: 0;
          background: transparent;

          padding: 0;
        }

        .guide-prev {
          left: 20px;
        }

        .guide-next {
          right: 20px;
        }

        /* ============================================================
           ARTICLE BODY
           ============================================================ */

        .guide-body {
          position: relative;
          z-index: 5;

          width: 760px;

          margin: 0 auto;
        }

        /* ============================================================
           HERO IMAGE
           ============================================================ */

        .guide-hero-image {
          width: 760px;
          height: 424px;

          overflow: hidden;

          border-radius: 8px;

          background: #d9d9d9;
        }

        .guide-hero-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        /* ============================================================
           ARTICLE COPY
           ============================================================ */

        .guide-copy {
          width: 760px;

          margin-top: 48px;
        }

        .guide-section {
          margin: 0 0 28px;
        }

        .guide-section-title {
          margin: 0 0 5px;

          color: #242424;

          font-size: 16px;
          line-height: 21px;

          font-weight: 600;
        }

        .guide-section-text {
          margin: 0;

          color: #78788d;

          font-size: 16px;
          line-height: 22px;

          font-weight: 400;
        }

        /* ============================================================
           IN THIS RESOURCE
           ============================================================ */

        .guide-resource-box {
          width: 760px;
          min-height: 170px;

          margin: 32px 0;

          padding: 28px 30px;

          border-radius: 12px;

          background: #f1f8fc;
        }

        .guide-resource-title {
          margin: 0 0 16px;

          color: #242424;

          font-size: 17px;
          line-height: 22px;

          font-weight: 600;
        }

        .guide-resource-list {
          display: grid;

          grid-template-columns: 1fr 1fr;

          column-gap: 80px;
          row-gap: 12px;
        }

        .guide-resource-item {
          display: flex;

          align-items: center;

          gap: 8px;

          color: #78788d;

          font-size: 12px;
          line-height: 17px;
        }

        .guide-resource-check {
          color: #8b8d96;

          font-size: 14px;
          line-height: 1;
        }

        /* ============================================================
           ARTICLE CTA
           ============================================================ */

        .guide-article-cta {
          width: 760px;
          height: 260px;

          margin-top: 32px;

          display: flex;

          flex-direction: column;

          align-items: center;
          justify-content: center;

          border-radius: 10px;

          background:
            linear-gradient(
              90deg,
              #0a55af 0%,
              #0085ff 100%
            );

          text-align: center;
        }

        .guide-article-cta-title {
          margin: 0;

          color: #ffffff;

          font-size: 28px;
          line-height: 35px;

          font-weight: 500;

          letter-spacing: -1px;
        }

        .guide-article-cta-text {
          width: 620px;

          margin: 16px 0 0;

          color: rgba(255,255,255,0.75);

          font-size: 14px;
          line-height: 20px;

          font-weight: 400;
        }

        .guide-article-cta-button {
          width: 180px;
          height: 48px;

          margin-top: 22px;

          border: 0;

          border-radius: 24px;

          background: #ffffff;

          color: #0085ff;

          font-size: 12px;
          line-height: 17px;

          font-weight: 500;
        }

        .guide-article-cta-button:hover {
          transform: translateY(-2px);
        }

        /* ============================================================
           ARTICLE ACTIONS
           ============================================================ */

        .guide-actions {
          width: 760px;
          min-height: 116px;

          display: flex;

          align-items: center;
          justify-content: center;

          gap: 12px;

          border-top: 1px solid #d9d9d9;
          border-bottom: 1px solid #d9d9d9;
        }

        .guide-action {
          height: 32px;

          padding: 0 15px;

          border: 0;

          border-radius: 16px;

          background: #11151a;

          color: #ffffff;

          font-size: 11px;
          line-height: 16px;

          font-weight: 500;
        }

        /* ============================================================
           MORE READS
           ============================================================ */

        .guide-more {
          position: relative;

          z-index: 5;

          width: 1304px;

          margin: 48px auto 0;
        }

        .guide-more-title {
          margin: 0 0 30px;

          color: #242424;

          font-size: 32px;
          line-height: 40px;

          font-weight: 500;

          letter-spacing: -1.5px;
        }

        /* ============================================================
           MORE READS TRACK
           ============================================================ */

        .guide-more-track {
          display: flex;

          gap: 20px;

          width: max-content;
        }

        /* ============================================================
           MORE READ CARD
           ============================================================ */

        .guide-more-card {
          width: 438px;
          height: 456px;

          padding: 14px;

          border-radius: 5px;

          background: #f1f8fc;

          overflow: hidden;
        }

        .guide-more-image {
          width: 410px;
          height: 315px;

          overflow: hidden;

          border-radius: 4px;

          background: #d9d9d9;
        }

        .guide-more-image img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        .guide-more-tags {
          margin-top: 14px;

          color: #707173;

          font-size: 12px;
          line-height: 17px;
        }

        .guide-more-card-title {
          margin: 7px 0 0;

          color: #242424;

          font-size: 22px;
          line-height: 27px;

          font-weight: 500;

          letter-spacing: -0.7px;
        }

        .guide-more-card-text {
          margin: 7px 0 0;

          color: #635557;

          font-size: 12px;
          line-height: 17px;
        }

        /* ============================================================
           MORE READ ARROWS
           ============================================================ */

        .guide-more-arrows {
          display: flex;

          justify-content: flex-end;

          gap: 14px;

          margin-top: 30px;

          padding-right: 4px;
        }

        .guide-more-arrow {
          width: 38px;
          height: 38px;

          border: 0;

          border-radius: 50%;

          background: #11151a;

          color: #ffffff;

          font-size: 21px;
          line-height: 38px;

          text-align: center;
        }

        /* ============================================================
           BLACK PRACTICE SECTION
           ============================================================ */

        .guide-practice {
          position: absolute;

          z-index: 4;

          left: 0;
          top: 3090px;

          width: 1440px;
          height: 1322px;

          background: #000000;

          text-align: center;

          color: #ffffff;

          padding-top: 78px;
        }

        /* ============================================================
           PRACTICE LABEL
           ============================================================ */

        .guide-practice-label {
          margin: 0;

          color: #0085ff;

          font-size: 13px;
          line-height: 19px;

          font-weight: 500;
        }

        /* ============================================================
           PRACTICE TITLE
           ============================================================ */

        .guide-practice-title {
          margin: 18px 0 0;

          color: #ffffff;

          font-size: 42px;
          line-height: 50px;

          font-weight: 500;

          letter-spacing: -1.8px;
        }

        /* ============================================================
           PRACTICE DESCRIPTION
           ============================================================ */

        .guide-practice-text {
          width: 620px;

          margin: 20px auto 0;

          color: #b7b7b7;

          font-size: 14px;
          line-height: 20px;
        }

        /* ============================================================
           PRACTICE BUTTONS
           ============================================================ */

        .guide-practice-buttons {
          display: flex;

          justify-content: center;

          gap: 10px;

          margin-top: 24px;
        }

        .guide-practice-button {
          height: 40px;

          padding: 0 22px;

          border-radius: 20px;

          font-size: 11px;
          line-height: 16px;

          font-weight: 500;
        }

        .guide-practice-button.primary {
          border: 0;

          background: #ffffff;

          color: #00538a;
        }

        .guide-practice-button.secondary {
          border: 1px solid #ffffff;

          background: transparent;

          color: #ffffff;
        }

        /* ============================================================
           PRACTICE IMAGE CAROUSEL
           ============================================================ */

        .guide-practice-carousel {
          position: absolute;

          left: 0;
          top: 0;

          width: 1440px;
          height: 1012px;

          overflow: visible;
          background: transparent;

          pointer-events: none;
        }

        /* ============================================================
           MAIN IMAGE
           ============================================================ */

        .guide-practice-slide {
          position: absolute;

          box-sizing: border-box;

          overflow: hidden;

          border-radius: 7px;

          background: #ffffff;

          transform-origin: center center;

          transition:
            left 650ms cubic-bezier(0.22, 1, 0.36, 1),
            top 650ms cubic-bezier(0.22, 1, 0.36, 1),
            width 650ms cubic-bezier(0.22, 1, 0.36, 1),
            height 650ms cubic-bezier(0.22, 1, 0.36, 1),
            opacity 500ms ease,
            filter 500ms ease,
            box-shadow 500ms ease;

          will-change:
            left,
            top,
            width,
            height,
            opacity,
            filter;

          pointer-events: none;
        }

        .guide-practice-slide img {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: contain;

          background: #ffffff;
        }

        /* ============================================================
           ACTIVE / CENTER IMAGE
           ============================================================ */

        .guide-practice-slide.active {
          z-index: 10;

          left: 50%;
          top: 360px;

          width: 942px;
          height: 652px;

          opacity: 1;

          filter: none;

          box-shadow:
            0 26px 65px rgba(255, 255, 255, 0.05),
            0 18px 40px rgba(0, 0, 0, 0.20);

          transform: translateX(-50%);
        }

        /* ============================================================
           PREVIOUS / LOWER-LEFT IMAGE
           ============================================================ */

        .guide-practice-slide.previous {
          z-index: 20;

          left: 139px;
          top: 757px;

          width: 206px;
          height: 191px;

          opacity: 0.72;

          filter: none;

          box-shadow:
            0 16px 30px rgba(0, 0, 0, 0.35);

          transform: none;
        }

        /* ============================================================
           NEXT / UPPER-RIGHT IMAGE
           ============================================================ */

        .guide-practice-slide.next {
          z-index: 20;

          left: 1040px;
          top: 546px;

          width: 206px;
          height: 191px;

          opacity: 0.72;

          filter: none;

          box-shadow:
            0 16px 30px rgba(0, 0, 0, 0.35);

          transform: none;
        }

        .guide-practice-slide-empty {
          width: 100%;
          height: 100%;

          background: #ffffff;
        }

        /* ============================================================
           PRACTICE CONTROLS
           ============================================================ */

        .guide-practice-controls {
          position: absolute;

          left: 50%;
          bottom: 42px;

          transform: translateX(-50%);

          z-index: 50;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 12px;
        }

        .guide-practice-control {
          width: 38px;
          height: 38px;

          border: 1px solid rgba(255,255,255,0.35);

          border-radius: 50%;

          background: rgba(255,255,255,0.08);

          color: #ffffff;

          font-size: 18px;
          line-height: 38px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .guide-practice-control:hover {
          background: rgba(255,255,255,0.16);
        }

        /* ============================================================
           PRACTICE DOTS
           ============================================================ */

        .guide-practice-dots {
          position: absolute;

          left: 50%;
          bottom: 28px;

          transform: translateX(-50%);

          z-index: 50;

          display: flex;
          align-items: center;

          gap: 6px;
        }

        .guide-practice-dot {
          width: 6px;
          height: 6px;

          padding: 0;

          border: 0;

          border-radius: 50%;

          background: rgba(255,255,255,0.35);
        }

        .guide-practice-dot.active {
          background: #ffffff;
        }

        /* ============================================================
           RESPONSIVE
           ============================================================ */

        @media (max-width: 1439px) {

          .guide-canvas {
            width: 100%;
            min-width: 0;
          }

          .guide-header {
            width: 100%;
          }

          .guide-category,
          .guide-title,
          .guide-subtitle,
          .guide-header-rule,
          .guide-body {
            width: calc(100% - 48px);
          }

          .guide-title {
            max-width: 760px;
          }

          .guide-subtitle {
            max-width: 760px;
          }

          .guide-header-rule {
            max-width: 760px;
          }

          .guide-hero-image,
          .guide-copy,
          .guide-resource-box,
          .guide-article-cta,
          .guide-actions {
            width: 100%;
          }

          .guide-more {
            width: calc(100% - 48px);
          }

          .guide-practice {
            width: 100%;
          }

          .guide-practice-carousel {
            left: 50%;
            width: 1440px;
            height: 1012px;

            transform:
              translateX(-50%)
              scale(
                min(
                  1,
                  calc((100vw - 48px) / 1440)
                )
              );

            transform-origin: top center;
          }
        }

        /* ============================================================
           TABLET
           ============================================================ */

        @media (max-width: 1000px) {

          .guide-navbar-wrapper {
            transform:
              translateX(-50%)
              scale(0.75);

            transform-origin: top center;
          }

          .guide-header {
            padding-top: 155px;
          }

          .guide-title {
            font-size: 32px;
            line-height: 39px;
          }

          .guide-subtitle {
            font-size: 15px;
            line-height: 22px;
          }

          .guide-resource-list {
            grid-template-columns: 1fr;
          }

          .guide-practice-title {
            font-size: 36px;
            line-height: 44px;
          }

          .guide-practice-text {
            width: 80%;
          }
        }

        /* ============================================================
           MOBILE
           ============================================================ */

        @media (max-width: 700px) {

          .guide-page {
            min-height: 100vh;
          }

          .guide-canvas {
            min-height: 3500px;
          }

          .guide-navbar-wrapper {
            transform:
              translateX(-50%)
              scale(0.5);

            transform-origin: top center;
          }

          .guide-header {
            height: 520px;

            padding-top: 145px;
          }

          .guide-prev,
          .guide-next {
            display: none;
          }

          .guide-category,
          .guide-title,
          .guide-subtitle,
          .guide-header-rule,
          .guide-body {
            width: calc(100% - 32px);
          }

          .guide-title {
            margin-top: 28px;

            font-size: 30px;
            line-height: 36px;
          }

          .guide-subtitle {
            font-size: 14px;
            line-height: 20px;
          }

          .guide-hero-image {
            height: 260px;
          }

          .guide-copy {
            margin-top: 32px;
          }

          .guide-section-text {
            font-size: 14px;
            line-height: 20px;
          }

          .guide-resource-list {
            grid-template-columns: 1fr;
          }

          .guide-article-cta {
            height: 230px;

            padding: 20px;
          }

          .guide-article-cta-title {
            font-size: 24px;
            line-height: 30px;
          }

          .guide-article-cta-text {
            width: 100%;

            font-size: 12px;
          }

          .guide-more {
            width: calc(100% - 32px);
          }

          .guide-more-track {
            width: 100%;

            flex-direction: column;
          }

          .guide-more-card {
            width: 100%;

            height: auto;
          }

          .guide-more-image {
            width: 100%;

            height: 250px;
          }

          .guide-practice {
            position: relative;

            top: auto;

            height: 700px;

            margin-top: 70px;

            padding: 60px 20px;
          }

          .guide-practice-title {
            font-size: 32px;
            line-height: 38px;
          }

          .guide-practice-text {
            width: 100%;
          }

          .guide-practice-carousel {
            top: 330px;

            width: calc(100% - 32px);

            height: 300px;
          }

          .guide-practice-controls {
            bottom: 18px;
          }

          .guide-practice-dots {
            bottom: 33px;
          }
        }

      `}</style>

      <div className="guide-page">

        <div className="guide-canvas">

          {/* ==========================================================
              BACKGROUND
              ========================================================== */}

          <div className="guide-background" />

          <div className="guide-grid" />

          {/* ==========================================================
              NAVBAR
              Same positioned placement approach as the previous page.
              ========================================================== */}

          <div className="guide-navbar-wrapper">
            <Navbar />
          </div>

          {/* ==========================================================
              ARTICLE HEADER
              ========================================================== */}

          <header className="guide-header">

            {/* ========================================================
                PREVIOUS RESOURCE
                ======================================================== */}

            <button
              type="button"
              className="guide-prev"
            >
              ‹ Previous Resource
            </button>

            {/* ========================================================
                NEXT RESOURCE
                ======================================================== */}

            <button
              type="button"
              className="guide-next"
            >
              Next Resource ›
            </button>

            {/* ========================================================
                CATEGORY + TITLE
                ======================================================== */}

            <div className="guide-category">

              <div className="guide-category-pill">
                Getting Paid
              </div>

              <h1 className="guide-title">
                How to get clients to pay on time
              </h1>

              <p className="guide-subtitle">
                Late payments choke small businesses. Here's a practical,
                no-drama way to get paid when you're supposed to be.
              </p>

              {/* ======================================================
                  AUTHOR
                  ====================================================== */}

              <div className="guide-author">

                <div className="guide-author-avatar">
                  {/* Keep blank for now */}
                </div>

                <div className="guide-author-info">

                  <div className="guide-author-name">
                    Author Name
                  </div>

                  <div className="guide-author-meta">
                    22 Jul 2026 · 6 min read
                  </div>

                </div>

              </div>

              {/* ======================================================
                  RULE
                  ====================================================== */}

              <div className="guide-header-rule" />

            </div>

          </header>

          {/* ==========================================================
              ARTICLE BODY
              ========================================================== */}

          <main className="guide-body">

            {/* ========================================================
                IMAGE SLOT 1
                HERO IMAGE
                ======================================================== */}

            <div className="guide-hero-image">

              {HERO_IMAGE ? (
                <img
                  src={HERO_IMAGE}
                  alt=""
                />
              ) : null}

            </div>

            {/* ========================================================
                ARTICLE COPY
                ======================================================== */}

            <div className="guide-copy">

              {/* ======================================================
                  SECTION 1
                  ====================================================== */}

              <section className="guide-section">

                <h2 className="guide-section-title">
                  Lorem ipsum
                </h2>

                <p className="guide-section-text">
                  dolor sit amet consectetur adipiscing elit. Quisque
                  faucibus ex sapien vitae pellentesque sem placerat. In id
                  cursus mi pretium tellus duis convallis. Tempus leo eu
                  aenean sed diam urna tempor. Pulvinar vivamus fringilla
                  lacus nec metus bibendum egestas. Iaculis massa nisl
                  malesuada lacinia integer nunc posuere. Ut hendrerit
                  semper vel class aptent taciti sociosqu. Ad litora
                  torquent per conubia nostra inceptos himenaeos.
                </p>

              </section>

              {/* ======================================================
                  SECTION 2
                  ====================================================== */}

              <section className="guide-section">

                <h2 className="guide-section-title">
                  Lorem ipsum
                </h2>

                <p className="guide-section-text">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Quisque faucibus ex sapien vitae pellentesque sem
                  placerat. In id cursus mi pretium tellus duis convallis.
                  Tempus leo eu aenean sed diam urna tempor. Pulvinar
                  vivamus fringilla lacus nec metus bibendum egestas.
                  Iaculis massa nisl malesuada lacinia integer nunc
                  posuere. Ut hendrerit semper vel class aptent taciti
                  sociosqu. Ad litora torquent per conubia nostra
                  inceptos himenaeos.
                </p>

              </section>

              {/* ======================================================
                  IN THIS RESOURCE
                  ====================================================== */}

              <section className="guide-resource-box">

                <h2 className="guide-resource-title">
                  In this Resource
                </h2>

                <div className="guide-resource-list">

                  <div className="guide-resource-item">
                    <span className="guide-resource-check">
                      ✓
                    </span>

                    <span>
                      Lorem ipsum dolor
                    </span>
                  </div>

                  <div className="guide-resource-item">
                    <span className="guide-resource-check">
                      ✓
                    </span>

                    <span>
                      Lorem ipsum dolor
                    </span>
                  </div>

                  <div className="guide-resource-item">
                    <span className="guide-resource-check">
                      ✓
                    </span>

                    <span>
                      Lorem ipsum dolor
                    </span>
                  </div>

                  <div className="guide-resource-item">
                    <span className="guide-resource-check">
                      ✓
                    </span>

                    <span>
                      Lorem ipsum dolor
                    </span>
                  </div>

                  <div className="guide-resource-item">
                    <span className="guide-resource-check">
                      ✓
                    </span>

                    <span>
                      Lorem ipsum dolor
                    </span>
                  </div>

                  <div className="guide-resource-item">
                    <span className="guide-resource-check">
                      ✓
                    </span>

                    <span>
                      Lorem ipsum dolor
                    </span>
                  </div>

                </div>

              </section>

              {/* ======================================================
                  SECTION 3
                  ====================================================== */}

              <section className="guide-section">

                <h2 className="guide-section-title">
                  Lorem ipsum
                </h2>

                <p className="guide-section-text">
                  dolor sit amet consectetur adipiscing elit. Quisque
                  faucibus ex sapien vitae pellentesque sem placerat. In id
                  cursus mi pretium tellus duis convallis. Tempus leo eu
                  aenean sed diam urna tempor. Pulvinar vivamus fringilla
                  lacus nec metus bibendum egestas. Iaculis massa nisl
                  malesuada lacinia integer nunc posuere. Ut hendrerit
                  semper vel class aptent taciti sociosqu. Ad litora
                  torquent per conubia nostra inceptos himenaeos.
                </p>

              </section>

              {/* ======================================================
                  SECTION 4
                  ====================================================== */}

              <section className="guide-section">

                <h2 className="guide-section-title">
                  Lorem ipsum
                </h2>

                <p className="guide-section-text">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  Quisque faucibus ex sapien vitae pellentesque sem
                  placerat. In id cursus mi pretium tellus duis convallis.
                  Tempus leo eu aenean sed diam urna tempor. Pulvinar
                  vivamus fringilla lacus nec metus bibendum egestas.
                  Iaculis massa nisl malesuada lacinia integer nunc
                  posuere. Ut hendrerit semper vel class aptent taciti
                  sociosqu. Ad litora torquent per conubia nostra
                  inceptos himenaeos.
                </p>

              </section>

              {/* ======================================================
                  ARTICLE CTA
                  ====================================================== */}

              <section className="guide-article-cta">

                <h2 className="guide-article-cta-title">
                  DataCircles chases payments for you.
                </h2>

                <p className="guide-article-cta-text">
                  Send an invoice, and automatic reminders do the follow-up
                  so you don't have to. Everything in one place, from lead
                  to paid.
                </p>

                <button
                  type="button"
                  className="guide-article-cta-button"
                >
                  Start Free
                </button>

              </section>

              {/* ======================================================
                  ARTICLE ACTIONS
                  ====================================================== */}

              <div className="guide-actions">

                <button
                  type="button"
                  className="guide-action"
                >
                  ↓ Download PDF
                </button>

                <button
                  type="button"
                  className="guide-action"
                >
                  ♧ Share
                </button>

                <button
                  type="button"
                  className="guide-action"
                >
                  ♧ Set Alert
                </button>

              </div>

            </div>

          </main>

          {/* ==========================================================
              MORE READS
              ========================================================== */}

          <section className="guide-more">

            <h2 className="guide-more-title">
              More Reads
            </h2>

            <div className="guide-more-track">

              {moreReads.map((post, index) => (

                <article
                  className="guide-more-card"
                  key={index}
                >

                  {/* ==================================================
                      IMAGE SLOT 2 / 3 / 4
                      ================================================== */}

                  <div className="guide-more-image">

                    {post.image ? (
                      <img
                        src={post.image}
                        alt=""
                      />
                    ) : null}

                  </div>

                  <div className="guide-more-tags">
                    Tag 1 · Tag 2 · Tag 3
                  </div>

                  <h3 className="guide-more-card-title">
                    {post.title}
                  </h3>

                  <p className="guide-more-card-text">
                    Straightforward guides on sales, follow-ups, GST and
                    getting paid on time, written for the people actually
                    running Indian businesses.
                  </p>

                </article>

              ))}

            </div>

            {/* ========================================================
                MORE READ ARROWS
                ======================================================== */}

            <div className="guide-more-arrows">

              <button
                type="button"
                className="guide-more-arrow"
              >
                ←
              </button>

              <button
                type="button"
                className="guide-more-arrow"
              >
                →
              </button>

            </div>

          </section>

          {/* ==========================================================
              PUT THIS INTO PRACTICE
              ========================================================== */}

          <section className="guide-practice">

            <p className="guide-practice-label">
              One Dashboard
            </p>

            <h2 className="guide-practice-title">
              Put this into Practice
            </h2>

            <p className="guide-practice-text">
              DataCircles keeps your leads, follow-ups, invoices and
              payments in one place. Start free, no credit card needed.
            </p>

            <div className="guide-practice-buttons">

              <button
                type="button"
                className="guide-practice-button primary"
              >
                Create Account
              </button>

              <button
                type="button"
                className="guide-practice-button secondary"
              >
                Book a Demo
              </button>

            </div>

            {/* ========================================================
                THREE IMAGE LAYERED SLIDER
                ======================================================== */}

            <div className="guide-practice-carousel">

              <div
                className={`guide-practice-slide ${
                  practiceIndex === 0
                    ? "active"
                    : practiceIndex === 1
                    ? "previous"
                    : "next"
                }`}
              >
                {PRACTICE_IMAGE_1 ? (
                  <img
                    src={PRACTICE_IMAGE_1}
                    alt=""
                  />
                ) : (
                  <div className="guide-practice-slide-empty" />
                )}
              </div>

              <div
                className={`guide-practice-slide ${
                  practiceIndex === 1
                    ? "active"
                    : practiceIndex === 2
                    ? "previous"
                    : "next"
                }`}
              >
                {PRACTICE_IMAGE_2 ? (
                  <img
                    src={PRACTICE_IMAGE_2}
                    alt=""
                  />
                ) : (
                  <div className="guide-practice-slide-empty" />
                )}
              </div>

              <div
                className={`guide-practice-slide ${
                  practiceIndex === 2
                    ? "active"
                    : practiceIndex === 0
                    ? "previous"
                    : "next"
                }`}
              >
                {PRACTICE_IMAGE_3 ? (
                  <img
                    src={PRACTICE_IMAGE_3}
                    alt=""
                  />
                ) : (
                  <div className="guide-practice-slide-empty" />
                )}
              </div>

            </div>

            

           

          </section>

        </div>

      </div>
    </>
  );
}