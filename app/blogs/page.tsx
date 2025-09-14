// app/blogs/page.tsx

"use client";

import Link from 'next/link';
import { blogPosts } from '../../data/blog';
import { useState } from 'react';

export default function BlogPage() {
    const categories = ['All', ...Array.from(new Set(blogPosts.map((post) => post.category)))];

    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredPosts = selectedCategory === 'All'
        ? blogPosts
        : blogPosts.filter((post) => post.category === selectedCategory);

    return (
        <main className="container mx-auto">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 min-h-screen">
                <h1 className="text-3xl font-bold mb-4 text-soft-brown text-center">Blog Posts</h1>

                <div className="flex justify-center flex-wrap gap-x-8 gap-y-2 mb-8">
                    {categories.map((category) => {
                        const isActive = selectedCategory === category;
                        const buttonClasses = `
                            text-lg 
                            transition-colors 
                            duration-300
                            ${isActive ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'}
                        `;

                        return (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={buttonClasses}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

                <div className="grid gap-6">
                    {filteredPosts.map((post) => (
                        <div key={post.id} className="border border-gray-200 p-4 rounded-lg">
                            <Link href={`/blogs/${post.slug}`}>
                                <h2 className="text-xl font-semibold mb-2 text-soft-brown hover:underline">
                                    {post.title}
                                </h2>
                            </Link>
                            <p className="text-sm font-semibold mb-2 text-blue-400">{post.category}</p>
                            <p className="text-white text-sm font-semibold mb-2">{post.date}</p>
                            <p>{post.excerpt}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );