'use client'
import React from 'react';
import './qrcode.css';
import Header from '/components/Header';
import Image from 'next/image';
import Link from 'next/link';

export default function QRCodePage() {
  return (
    <div className="qrcode-container">
      <Header/>
      <main className="qrcode-content">
        <h1 className="qrcode-title">SCAN TO GET ACCESS AT OUR APP!</h1>
        <div className="qrcode-image-container">
          <Image
            src="/images/image12.jpg"
            alt="QR Code LOGWEAR" 
            width={400} 
            height={400}
            className="qrcode-image"
          />
        </div>

        <div className="qrcode-benefits">
          <div className="benefit-item">
            <span className="benefit-icon">🚨</span>
            <span className="benefit-text">Emergency SOS</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">📖</span>
            <span className="benefit-text">Technical Specs</span>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">👥</span>
            <span className="benefit-text">Community Forum</span>
          </div>
        </div>
      </main>
    </div>
  );
}