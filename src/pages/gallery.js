import React, { useState } from 'react';
import { Camera, Filter, X } from 'lucide-react';
import { galleryImages } from '../data/sampleData';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Interior', 'Exterior', 'Amenities'];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-page">
      <div className="page-header">
        <h1>Property Gallery</h1>
        <p>Explore our stunning collection of properties and interiors</p>
      </div>

      {/* Filter Section */}
      <div className="gallery-filters">
        <div className="filter-header">
          <Filter size={20} />
          <span>Filter by Category</span>
        </div>
        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-grid">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => openLightbox(image)}
          >
            <img src={image.url} alt={image.title} />
            <div className="gallery-overlay">
              <Camera className="camera-icon" />
              <div className="gallery-info">
                <h3>{image.title}</h3>
                <span>{image.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <X size={24} />
            </button>
            <img src={selectedImage.url} alt={selectedImage.title} />
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;