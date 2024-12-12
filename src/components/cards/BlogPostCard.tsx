import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '../../types/blog';

const BlogPostCard: React.FC<BlogPost> = ({
  title,
  excerpt,
  date,
  image,
  category
}) => {
  return (
    <div className="rounded-2xl bg-dark-700 border border-primary/20 overflow-hidden hover:border-primary/50 transition-colors">
      <div className="aspect-video relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-accent text-sm">
          {category}
        </span>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-accent/60 text-sm mb-3">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-accent mb-3">{title}</h3>
        <p className="text-accent/70 mb-4">{excerpt}</p>
        
        <button className="flex items-center gap-2 text-primary hover:text-secondary transition-colors">
          <span>Read More</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default BlogPostCard;