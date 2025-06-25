import React, { useState } from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import PropertyCard from '../components/propertyCard';
import { featuredProperties } from '../data/sampleData';

const FeaturedProperties = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);

  const statusOptions = ['All', 'For Sale', 'For Rent', 'Sold'];
  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'area', label: 'Area: Largest First' }
  ];

  const filteredProperties = featuredProperties
    .filter(property => {
      const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           property.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = filterStatus === 'All' || property.status === filterStatus;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'area':
          return b.area - a.area;
        default:
          return b.id - a.id; // newest first
      }
    });

  return (
    <div className="featured-properties-page">
      <div className="page-header">
        <h1>Featured Properties</h1>
        <p>Discover my handpicked selection of premium properties</p>
      </div>

      {/* Search and Filter Bar */}
      <div className="properties-controls">
        <div className="search-container">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search properties..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-controls">
          <button
            className={`filter-toggle ${showFilters ? 'active' : ''}`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal size={20} />
            Filters
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <div className="advanced-filters">
          <div className="filter-group">
            <label>Status</label>
            <div className="filter-options">
              {statusOptions.map(status => (
                <button
                  key={status}
                  className={`filter-option ${filterStatus === status ? 'active' : ''}`}
                  onClick={() => setFilterStatus(status)}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Results Count */}
      <div className="results-info">
        <span>{filteredProperties.length} properties found</span>
      </div>

      {/* Properties Grid */}
      <div className="properties-grid">
        {filteredProperties.length > 0 ? (
          filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} featured />
          ))
        ) : (
          <div className="no-results">
            <Filter className="no-results-icon" />
            <h3>No properties found</h3>
            <p>Try adjusting your search criteria or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProperties;
