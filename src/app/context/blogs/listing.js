// context/BlogContext.js
// 'use client'
// import { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// export const BlogContext = createContext();

// export const BlogProvider = ({ children }) => {
//     const [blogData, setBlogData] = useState([]);

//     useEffect(() => {
//         const fetchBlogs = async () => {
//             try {
//                 const res = await axios.get('http://192.168.1.43:8000/blogs');
//                 if (res.status === 200) {
//                     setBlogData(res.data.data.rows);
//                 }
//             } catch (error) {
//                 console.error('Error fetching blog data:', error);
//             }
//         };
//         fetchBlogs();
//     }, []);

//     return (
//         <BlogContext.Provider value={blogData}>
//             {children}
//         </BlogContext.Provider>
//     );
// };
