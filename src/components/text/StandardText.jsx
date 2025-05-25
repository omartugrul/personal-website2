import React from 'react';

export default function StandardText({ children, className, tag: Tag = 'p' }) {
  return <Tag className={className}>{children}</Tag>;
}