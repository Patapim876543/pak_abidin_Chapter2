export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    date: string;
    category: string;
    excerpt: string;
    content: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Getting Started with Next.js",
        slug: "getting-started-with-nextjs",
        date: "2024-03-15",
        category: "Framework",
        excerpt: "Learn the basics of Next.js and start building your first app.",
        content: `
Next.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications.

### Key Features of Next.js
- **Server-Side Rendering (SSR)**
- **Static Site Generation (SSG)**
- **File-based Routing**
- **API Routes**

With these features, developers can build fast, SEO-friendly apps with minimal configuration.

### Getting Started
1. Install Next.js with \`npx create-next-app@latest\`.
2. Navigate to your project folder and run \`npm run dev\`.
3. Create new pages inside the \`pages/\` directory.
4. Add components for reusable UI.

Next.js provides a developer-friendly environment that balances performance and scalability.
`
    },

    {
        id: 2,
        title: "CSS Tips and Tricks",
        slug: "css-tips-and-tricks",
        date: "2024-03-20",
        category: "CSS",
        excerpt: "Improve your CSS skills with these handy tips and tricks.",
        content: `
CSS is gaining powers with recent web evolution. And it is very clever with tricks that were long existing or that
have emerged. These are some useful techniques to enhance your projects:

### Handy CSS Tricks
1. **Draw a triangle** using only borders.
2. **Change background** on hover with \`:hover\`.
3. **Center an element** using \`display: flex\` or \`grid\`.
4. **Pill-shaped button** using \`border-radius: 9999px\`.
5. **Loading indicator** with simple \`@keyframes\`.
6. **Dark/Light mode** using CSS variables.
7. **Truncate text** with \`text-overflow: ellipsis\`.
8. **Clamp text** to a number of lines with \`-webkit-line-clamp\`.
9. **Shorthand margins/paddings** instead of writing all four sides.
10. **Responsive images** using \`object-fit: cover\`.

By mastering these tricks, you’ll write cleaner CSS and deliver polished UIs faster.
`
    },

    {
        id: 3,
        title: "Understanding React Hooks",
        slug: "understanding-react-hooks",
        date: "2024-03-25",
        category: "React",
        excerpt: "Dive deep into React Hooks and learn how to manage state and side effects in your components.",
        content: `
React Hooks are a powerful addition to React that allow you to use state and other React features without writing a class.

### Key Hooks in React
- **useState** → manage component state.
- **useEffect** → perform side effects (fetching data, DOM updates).
- **useContext** → access global context without prop drilling.
- **Custom Hooks** → encapsulate and reuse logic.

### Example: useState
\`\`\`jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
\`\`\`

Hooks make components simpler, reusable, and easier to test. They are the backbone of modern React development.
`
    },

    {
        id: 4,
        title: "Boosting Productivity as a Developer",
        slug: "boosting-productivity-as-a-developer",
        date: "2024-04-01",
        category: "Productivity",
        excerpt: "Practical strategies and tools to become a more productive developer.",
        content: `
Productivity is essential for developers to keep up with the fast-paced tech industry. It’s not just about writing more code, but writing smarter.

### Tips for Better Productivity
1. **Use a code editor effectively** — VS Code extensions like Prettier, ESLint, and GitLens save time.
2. **Keyboard shortcuts** — Master them to navigate and edit code faster.
3. **Automate repetitive tasks** — Scripts, snippets, and templates.
4. **Version control with Git** — Commit often, branch smartly.
5. **Stay organized** — Use project management tools (Trello, Jira, Notion).
6. **Focus time** — Use Pomodoro or time-blocking techniques.
7. **Learn continuously** — Stay updated with blogs, courses, and open-source contributions.

By combining the right tools and mindset, developers can achieve more in less time and reduce burnout.
`
    },


    {
        id: 5,
        title: "Introduction to TypeScript",
        slug: "introduction-to-typescript",
        date: "2024-04-05",
        category: "JavaScript",
        excerpt: "Discover how TypeScript adds static types to JavaScript to improve code quality and maintainability.",
        content: `
TypeScript is a superset of JavaScript that compiles to plain JavaScript. It offers optional static typing, which can help catch errors early in the development process.

### Why use TypeScript?
- **Type Safety**: Reduces runtime errors.
- **Better Tooling**: Autocomplete and code navigation are greatly improved.
- **Readability**: Types make code easier to understand.
        `
    },
    {
        id: 6,
        title: "Deploying Your Next.js App to Vercel",
        slug: "deploying-nextjs-to-vercel",
        date: "2024-04-10",
        category: "Framework",
        excerpt: "A step-by-step guide to deploying your Next.js application on the Vercel platform.",
        content: `
Vercel, the company behind Next.js, provides the easiest way to deploy your application.

### Deployment Steps
1. Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2. Sign up for a Vercel account and connect your Git provider.
3. Import your project repository.
4. Click 'Deploy'. Vercel will automatically configure the build settings.

Your site will be live in minutes with a custom URL.
        `
    }
]