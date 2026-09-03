import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HowToGuide() {
  const navigate = useNavigate();
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
          color: #000000;
          font-family: "Inter", Arial, Helvetica, sans-serif;
        }

        button,
        input {
          font-family: inherit;
        }

        button {
          cursor: pointer;
        }

        .guide-page {
          width: 100%;
          min-height: 100vh;
          overflow-x: hidden;
          background: #ffffff;
        }

        .guide-canvas {
          position: relative;
          width: 100%;
          min-height: 100vh;
          margin: 0 auto;
          overflow: hidden;
          background: #ffffff;
        }

        /* =========================
           NAVBAR / HERO
           ========================= */

        .guide-header {
          position: relative;
          z-index: 5;
          width: 100%;
          min-height: 560px;
          padding-top: 168px;
          background:
            linear-gradient(
              to bottom,
              #ffffff 8%,
              #ffffff 22%,
              #ffffff 54%,
              #ffffff 96%
            );
        }

        .guide-navbar-wrapper {
          position: absolute;
          z-index: 50;
          top: 12px;
          left: 50%;
          transform: translateX(-50%);
          transform-origin: top center;
        }

        .guide-resource-nav {
          position: absolute;
          z-index: 100;
          top: 92px;
          left: 50%;
          transform: translateX(-50%);
          width: min(1120px, calc(100% - 64px));
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 8px;
          overflow-x: auto;
          padding: 0;
          margin: 0;
          scrollbar-width: none;
        }

        .guide-resource-nav::-webkit-scrollbar {
          display: none;
        }

        .guide-resource-tab {
          flex: 0 0 auto;
          height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 18px;
          border: 1px solid #dce7f0;
          border-radius: 8px;
          background: #ffffff;
          color: #635557;
          font-family: "Inter", Arial, Helvetica, sans-serif;
          font-size: 12px;
          line-height: 17px;
          font-weight: 600;
          white-space: nowrap;
          cursor: pointer;
          opacity: 1;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }

        .guide-resource-tab:hover {
          background: #0085ff;
          border-color: #0085ff;
          color: #ffffff;
        }

        .guide-resource-tab.active {
          border-color: #0085ff;
          background: #0085ff;
          color: #ffffff;
        }

        .guide-resource-tab.active:hover {
          background: #000000;
          border-color: #000000;
          color: #ffffff;
        }

        .guide-header-inner {
          width: min(1180px, calc(100% - 64px));
          margin: 0 auto;
        }

        .guide-breadcrumb {
          color: #635557;
          font-size: 12px;
          line-height: 18px;
          font-weight: 500;
          margin-bottom: 18px;
        }

        .guide-category-pill {
          width: 132px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 19px;
          background: #0085ff;
          color: #ffffff;
          font-size: 12px;
          line-height: 17px;
          font-weight: 600;
        }

        .guide-title {
          width: 100%;
          max-width: 940px;
          margin: 28px 0 0;
          color: #000000;
          font-size: clamp(42px, 4.2vw, 62px);
          line-height: 1.05;
          font-weight: 600;
          letter-spacing: -2.5px;
        }

        .guide-subtitle {
          width: 100%;
          max-width: 820px;
          margin: 18px 0 0;
          color: #635557;
          font-size: clamp(17px, 1.35vw, 20px);
          line-height: 1.5;
          font-weight: 400;
        }

        .guide-author {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 30px;
        }

        .guide-author-avatar {
          width: 48px;
          height: 48px;
          flex: none;
          border-radius: 50%;
          background: #dce7f0;
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
          gap: 3px;
        }

        .guide-author-name {
          color: #000000;
          font-size: 13px;
          line-height: 18px;
          font-weight: 600;
        }

        .guide-author-meta {
          color: #635557;
          font-size: 11px;
          line-height: 16px;
          font-weight: 400;
        }

        .guide-header-rule {
          width: 100%;
          height: 1px;
          margin: 32px 0 0;
          background: #dce7f0;
        }

        /* =========================
           ARTICLE
           ========================= */

        .guide-body {
          position: relative;
          z-index: 5;
          width: min(960px, calc(100% - 64px));
          margin: 0 auto;
          padding-bottom: 80px;
        }

        .guide-hero-image {
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 14px;
          background: #ffffff;
        }

        .guide-hero-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .guide-image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #635557;
          font-size: 15px;
          font-weight: 500;
          background: #ffffff;
        }

        .guide-copy {
          width: 100%;
          margin-top: 54px;
        }

        .guide-wire-label {
          display: inline-flex;
          align-items: center;
          min-height: 30px;
          padding: 7px 12px;
          border-radius: 7px;
          background: #dce7f033;
          color: #0085ff;
          font-size: 11px;
          line-height: 16px;
          font-weight: 700;
          letter-spacing: .35px;
          text-transform: uppercase;
        }

        .guide-intro-text,
        .guide-close-text {
          margin: 18px 0 0;
          color: #635557;
          font-size: 18px;
          line-height: 1.65;
          font-weight: 400;
        }

        .guide-copy-lines {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 22px;
        }

        .guide-copy-line {
          height: 12px;
          border-radius: 6px;
          background: #dce7f0;
        }

        .guide-copy-line:nth-child(1) { width: 100%; }
        .guide-copy-line:nth-child(2) { width: 94%; }
        .guide-copy-line:nth-child(3) { width: 76%; }

        .guide-resource-box {
          width: 100%;
          margin: 34px 0 44px;
          padding: 30px 34px;
          border: 1px solid #dce7f0;
          border-radius: 14px;
          background: #ffffff;
        }

        .guide-resource-title {
          margin: 0 0 20px;
          color: #000000;
          font-size: 18px;
          line-height: 24px;
          font-weight: 600;
        }

        .guide-resource-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 60px;
          row-gap: 16px;
        }

        .guide-resource-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #635557;
          font-size: 14px;
          line-height: 20px;
        }

        .guide-resource-check {
          color: #0085ff;
          font-size: 16px;
          line-height: 1;
          font-weight: 700;
        }

        .guide-steps-label {
          margin-bottom: 26px;
        }

        .guide-step {
          display: grid;
          grid-template-columns: 44px 1fr;
          gap: 18px;
          margin-bottom: 34px;
        }

        .guide-step-number {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #0085ff;
          color: #ffffff;
          font-size: 16px;
          line-height: 1;
          font-weight: 700;
        }

        .guide-step-content {
          padding-top: 4px;
        }

        .guide-step-title {
          margin: 0;
          color: #000000;
          font-size: 21px;
          line-height: 28px;
          font-weight: 600;
        }

        .guide-step-text {
          margin: 10px 0 0;
          color: #635557;
          font-size: 16px;
          line-height: 1.65;
        }

        .guide-step-lines {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 16px;
        }

        .guide-step-lines span {
          height: 10px;
          border-radius: 5px;
          background: #dce7f0;
        }

        .guide-step-lines span:first-child { width: 72%; }
        .guide-step-lines span:last-child { width: 58%; }

        .guide-callout {
          width: 100%;
          margin: 44px 0;
          padding: 24px 28px;
          border: 1px solid #0085ff;
          border-radius: 14px;
          background: #ffffff;
        }

        .guide-callout-title {
          margin: 0 0 8px;
          color: #0085ff;
          font-size: 14px;
          line-height: 20px;
          font-weight: 700;
        }

        .guide-callout-text {
          margin: 0;
          color: #635557;
          font-size: 15px;
          line-height: 1.55;
        }

        .guide-article-cta {
          width: 100%;
          min-height: 260px;
          margin: 44px 0;
          padding: 42px 48px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          border-radius: 16px;
          background: linear-gradient(90deg, #0a55af 0%, #0085ff 100%);
        }

        .guide-article-cta-title {
          margin: 0;
          color: #ffffff;
          font-size: 30px;
          line-height: 38px;
          font-weight: 600;
          letter-spacing: -1px;
        }

        .guide-article-cta-text {
          width: 100%;
          max-width: 720px;
          margin: 12px 0 0;
          color: #ffffff;
          font-size: 15px;
          line-height: 1.6;
        }

        .guide-article-cta-button {
          width: 150px;
          height: 48px;
          margin-top: 22px;
          border: 0;
          border-radius: 24px;
          background: #ffffff;
          color: #0085ff;
          font-size: 13px;
          line-height: 18px;
          font-weight: 600;
        }

        .guide-close {
          margin-top: 18px;
        }

        .guide-actions {
          width: 100%;
          min-height: 110px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          border-top: 1px solid #dce7f0;
          border-bottom: 1px solid #dce7f0;
          margin-top: 42px;
        }

        .guide-action {
          min-width: 150px;
          height: 44px;
          padding: 0 18px;
          border: 0;
          border-radius: 22px;
          background: #000000;
          color: #ffffff;
          font-size: 12px;
          line-height: 17px;
          font-weight: 600;
        }

        /* =========================
           MORE READS
           ========================= */

        .guide-more {
          position: relative;
          z-index: 5;
          width: min(1260px, calc(100% - 64px));
          margin: 0 auto;
          padding: 28px 0 80px;
        }

        .guide-more-title {
          margin: 0 0 28px;
          color: #000000;
          font-size: 38px;
          line-height: 46px;
          font-weight: 600;
          letter-spacing: -1.6px;
        }

        .guide-more-track {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
          width: 100%;
        }

        .guide-more-card {
          width: 100%;
          min-height: 480px;
          padding: 16px;
          border-radius: 14px;
          background: #ffffff;
          overflow: hidden;
        }

        .guide-more-image {
          width: 100%;
          aspect-ratio: 1.32 / 1;
          overflow: hidden;
          border-radius: 10px;
          background: #ffffff;
        }

        .guide-more-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .guide-more-tags {
          margin-top: 16px;
          color: #0085ff;
          font-size: 11px;
          line-height: 16px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .guide-more-card-title {
          margin: 8px 0 0;
          color: #000000;
          font-size: 24px;
          line-height: 30px;
          font-weight: 600;
          letter-spacing: -.7px;
        }

        .guide-more-card-text {
          margin: 9px 0 0;
          color: #635557;
          font-size: 14px;
          line-height: 20px;
        }

        .guide-more-arrows {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
        }

        .guide-more-arrow {
          width: 48px;
          height: 48px;
          border: 0;
          border-radius: 50%;
          background: #000000;
          color: #ffffff;
          font-size: 24px;
          line-height: 48px;
          text-align: center;
        }

        /* =========================
           PRACTICE / CTA
           ========================= */

        .guide-practice {
          position: relative;
          z-index: 4;
          width: 100%;
          min-height: 900px;
          padding: 90px 32px 60px;
          background: #0085ff;
          text-align: center;
          color: #ffffff;
        }

        .guide-practice-label {
          margin: 0;
          color: #0085ff;
          font-size: 14px;
          line-height: 20px;
          font-weight: 700;
        }

        .guide-practice-title {
          margin: 18px 0 0;
          color: #ffffff;
          font-size: clamp(40px, 4vw, 56px);
          line-height: 1.05;
          font-weight: 600;
          letter-spacing: -2px;
        }

        .guide-practice-text {
          width: min(700px, 100%);
          margin: 20px auto 0;
          color: #ffffff;
          font-size: 16px;
          line-height: 24px;
        }

        .guide-practice-buttons {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 28px;
        }

        .guide-practice-button {
          height: 50px;
          padding: 0 26px;
          border-radius: 25px;
          font-size: 13px;
          line-height: 18px;
          font-weight: 600;
        }

        .guide-practice-button.primary {
          border: 0;
          background: #ffffff;
          color: #0085ff;
        }

        .guide-practice-button.secondary {
          border: 1px solid #ffffff;
          background: transparent;
          color: #ffffff;
        }

        .guide-practice-carousel {
          position: relative;
          width: min(1120px, 100%);
          height: 560px;
          margin: 64px auto 0;
          overflow: hidden;
          pointer-events: none;
        }

        .guide-practice-slide {
          position: absolute;
          overflow: hidden;
          border-radius: 12px;
          background: #ffffff;
          transition:
            left 650ms cubic-bezier(.22,1,.36,1),
            top 650ms cubic-bezier(.22,1,.36,1),
            width 650ms cubic-bezier(.22,1,.36,1),
            height 650ms cubic-bezier(.22,1,.36,1),
            opacity 500ms ease;
        }

        .guide-practice-slide img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
          background: #ffffff;
        }

        .guide-practice-slide.active {
          z-index: 10;
          left: 50%;
          top: 0;
          width: 72%;
          height: 500px;
          opacity: 1;
          transform: translateX(-50%);
        }

        .guide-practice-slide.previous {
          z-index: 5;
          left: 0;
          top: 250px;
          width: 20%;
          height: 185px;
          opacity: 1;
        }

        .guide-practice-slide.next {
          z-index: 5;
          right: 0;
          left: auto;
          top: 130px;
          width: 20%;
          height: 185px;
          opacity: 1;
        }

        .guide-practice-slide-empty {
          width: 100%;
          height: 100%;
          background: #ffffff;
        }

        .guide-practice-controls {
          position: absolute;
          left: 50%;
          bottom: 20px;
          transform: translateX(-50%);
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .guide-practice-control {
          width: 46px;
          height: 46px;
          border: 1px solid #ffffff;
          border-radius: 50%;
          background: #ffffff;
          color: #ffffff;
          font-size: 20px;
          line-height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .guide-practice-dots {
          position: absolute;
          left: 50%;
          bottom: 2px;
          transform: translateX(-50%);
          z-index: 50;
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .guide-practice-dot {
          width: 7px;
          height: 7px;
          padding: 0;
          border: 0;
          border-radius: 50%;
          background: #ffffff;
        }

        .guide-practice-dot.active {
          background: #ffffff;
        }

        /* =========================
           RESPONSIVE
           ========================= */

        @media (max-width: 1000px) {
          .guide-header-inner {
            width: calc(100% - 40px);
          }

          .guide-body,
          .guide-more {
            width: calc(100% - 40px);
          }

          .guide-resource-list {
            grid-template-columns: 1fr;
          }

          .guide-more-track {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .guide-practice-carousel {
            height: 470px;
          }

          .guide-practice-slide.active {
            width: 78%;
            height: 410px;
          }
        }

        @media (max-width: 700px) {
          .guide-header {
            min-height: 520px;
            padding-top: 140px;
          }

          .guide-header-inner,
          .guide-body,
          .guide-more {
            width: calc(100% - 32px);
          }

          .guide-navbar-wrapper {
            transform: translateX(-50%) scale(.7);
          }

          .guide-resource-nav {
            top: 86px;
            width: calc(100% - 32px);
            gap: 6px;
          }

          .guide-resource-tab {
            height: 36px;
            padding: 0 14px;
            font-size: 11px;
            line-height: 15px;
          }

          .guide-title {
            font-size: 38px;
            line-height: 1.08;
            letter-spacing: -1.6px;
          }

          .guide-subtitle {
            font-size: 15px;
            line-height: 22px;
          }

          .guide-author {
            margin-top: 24px;
          }

          .guide-copy {
            margin-top: 38px;
          }

          .guide-intro-text,
          .guide-close-text {
            font-size: 16px;
            line-height: 1.6;
          }

          .guide-resource-box {
            padding: 22px;
          }

          .guide-step {
            grid-template-columns: 38px 1fr;
            gap: 12px;
          }

          .guide-step-number {
            width: 38px;
            height: 38px;
            font-size: 14px;
          }

          .guide-step-title {
            font-size: 18px;
            line-height: 25px;
          }

          .guide-step-text {
            font-size: 14px;
            line-height: 21px;
          }

          .guide-article-cta {
            padding: 32px 24px;
          }

          .guide-article-cta-title {
            font-size: 25px;
            line-height: 32px;
          }

          .guide-article-cta-text {
            font-size: 14px;
          }

          .guide-actions {
            flex-direction: column;
            padding: 22px 0;
          }

          .guide-action {
            width: 190px;
          }

          .guide-more-title {
            font-size: 32px;
            line-height: 40px;
          }

          .guide-more-track {
            grid-template-columns: 1fr;
          }

          .guide-more-card {
            min-height: 0;
          }

          .guide-practice {
            min-height: 700px;
            padding: 64px 16px 40px;
          }

          .guide-practice-title {
            font-size: 38px;
          }

          .guide-practice-text {
            font-size: 14px;
            line-height: 21px;
          }

          .guide-practice-buttons {
            flex-direction: column;
            align-items: center;
          }

          .guide-practice-button {
            width: 190px;
          }

          .guide-practice-carousel {
            height: 320px;
            margin-top: 42px;
          }

          .guide-practice-slide.active {
            width: 88%;
            height: 275px;
          }

          .guide-practice-slide.previous,
          .guide-practice-slide.next {
            display: none;
          }
        }
      `}</style>

      <div className="guide-page">
        <div className="guide-canvas">

          {/* NAVBAR */}
          <div className="guide-navbar-wrapper">
            <Navbar />
          </div>

          {/* TOP RESOURCE NAVIGATION */}
          <nav className="guide-resource-nav" aria-label="Guide sections">
            <button type="button" className="guide-resource-tab active" onClick={() => navigate("/how-to-guide")}>
              1 · How-To Guide
            </button>
            <button type="button" className="guide-resource-tab" onClick={() => navigate("/checklist")}>
              2 · Checklist / Explainer
            </button>
            <button type="button" className="guide-resource-tab" onClick={() => navigate("/comparison")}>
              3 · Comparison
            </button>
            <button type="button" className="guide-resource-tab" onClick={() => navigate("/crm-for-audience")}>
              4 · CRM for [audience]
            </button>
          </nav>

          {/* HERO / ARTICLE HEADER */}
          <header className="guide-header">
            <div className="guide-header-inner">

              

<div className="guide-breadcrumb flex items-center whitespace-nowrap">
  Blog <ChevronRight size={16} strokeWidth={2} /> Getting paid
</div>

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

              <div className="guide-author">
                <div className="guide-author-avatar" />

                <div className="guide-author-info">
                  <div className="guide-author-name">
                    Author Name
                  </div>

                  <div className="guide-author-meta">
                    22 Jul 2026 · 6 min read
                  </div>
                </div>
              </div>

              <div className="guide-header-rule" />
            </div>
          </header>

          {/* ARTICLE BODY */}
          <main className="guide-body">

            {/* COVER IMAGE */}
            <div className="guide-hero-image">
              {HERO_IMAGE ? (
                <img src={HERO_IMAGE} alt="" />
              ) : (
                <div className="guide-image-placeholder">
                  Cover image (16:9)
                </div>
              )}
            </div>

            <div className="guide-copy">

              {/* INTRO */}
              <section>
                

                <p className="guide-intro-text">
                  Late payments choke small businesses. Here's a practical,
                  no-drama way to get paid when you're supposed to be.
                </p>

                <div className="guide-copy-lines" aria-hidden="true">
                  <span className="guide-copy-line" />
                  <span className="guide-copy-line" />
                  <span className="guide-copy-line" />
                </div>
              </section>

              {/* IN THIS ARTICLE */}
              <section className="guide-resource-box">
                <h2 className="guide-resource-title">
                  In this Article
                </h2>

                <div className="guide-resource-list">
                  {[
                    "First step heading",
                    "Second step heading",
                    "Third step heading",
                  ].map((item, index) => (
                    <div className="guide-resource-item" key={index}>
                      <span className="guide-resource-check">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* NUMBERED BODY */}
              <section>
                

                {[
                  {
                    title: "First step heading",
                    text: "Start with clear payment terms before the work begins. Put the amount, due date and payment method in writing so there is no ambiguity later."
                  },
                  {
                    title: "Second step heading",
                    text: "Make the next action easy. Send the invoice promptly, keep the payment instructions visible and follow up before a late payment becomes a problem."
                  },
                  {
                    title: "Third step heading",
                    text: "Follow a simple reminder rhythm. Keep every follow-up short, polite and consistent so getting paid becomes a process instead of a confrontation."
                  }
                ].map((step, index) => (
                  <article className="guide-step" key={index}>
                    <div className="guide-step-number">
                      {index + 1}
                    </div>

                    <div className="guide-step-content">
                      <h2 className="guide-step-title">
                        {step.title}
                      </h2>

                      <p className="guide-step-text">
                        {step.text}
                      </p>

                      <div className="guide-step-lines" aria-hidden="true">
                        <span />
                        <span />
                      </div>
                    </div>
                  </article>
                ))}
              </section>

              {/* CALLOUT */}
              <aside className="guide-callout">
                <h3 className="guide-callout-title">
                  Worth knowing
                </h3>

                <p className="guide-callout-text">
                  Optional callout for a tip, stat, or “the mistake most people
                  make”. Breaks up the page and gives the reader one useful
                  takeaway.
                </p>
              </aside>

              {/* PRODUCT TIE-IN */}
              <section>
              

                <div className="guide-article-cta">
                  <h2 className="guide-article-cta-title">
                    DataCircles chases payments for you.
                  </h2>

                  <p className="guide-article-cta-text">
                    Send an invoice, and automatic reminders do the follow-up
                    so you don't have to. Everything in one place, from lead
                    to paid.
                  </p>

                  <button type="button" className="guide-article-cta-button">
                    Start free
                  </button>
                </div>
              </section>

              {/* CLOSE */}
              <section className="guide-close">
               

                <p className="guide-close-text">
                  Clear terms, timely invoices and consistent reminders make
                  payment easier for everyone. The goal is a process your
                  business can repeat without chasing every rupee manually.
                </p>

                <div className="guide-copy-lines" aria-hidden="true">
                  <span className="guide-copy-line" />
                  <span className="guide-copy-line" />
                </div>
              </section>

              {/* ACTIONS */}
              <div className="guide-actions">
                <button type="button" className="guide-action">
                  ↓ Download PDF
                </button>

                <button type="button" className="guide-action">
                  Share
                </button>

                <button type="button" className="guide-action">
                  Set Alert
                </button>
              </div>

            </div>
          </main>

          {/* MORE READS */}
          <section className="guide-more">
            <h2 className="guide-more-title">
              More Reads
            </h2>

            <div className="guide-more-track">
              {moreReads.map((post, index) => (
                <article className="guide-more-card" key={index}>
                  <div className="guide-more-image">
                    {post.image ? (
                      <img src={post.image} alt="" />
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

            <div className="guide-more-arrows">
              <button type="button" className="guide-more-arrow">
                ←
              </button>

              <button type="button" className="guide-more-arrow">
                →
              </button>
            </div>
          </section>

          {/* PUT THIS INTO PRACTICE */}
          <section className="guide-practice">
            
 <p
          className="
            m-0
            text-[13px]
            font-bold
            uppercase
            tracking-[.4px]
            text-white
          "
        >
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
              <button type="button" className="guide-practice-button primary">
                Create Account
              </button>

              <button type="button" className="guide-practice-button secondary">
                Book a Demo
              </button>
            </div>

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
                  <img src={PRACTICE_IMAGE_1} alt="" />
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
                  <img src={PRACTICE_IMAGE_2} alt="" />
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
                  <img src={PRACTICE_IMAGE_3} alt="" />
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
