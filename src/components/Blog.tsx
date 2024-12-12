import React from 'react';
import SectionTitle from './SectionTitle';
import BlogPostCard from './cards/BlogPostCard';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Latest Updates"
          subtitle="Stay informed with our latest news and training tips"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;