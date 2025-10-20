// Data blog posts dengan konten lengkap
export const blogPostsData = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    excerpt: "Pelajari fitur-fitur terbaru Next.js 15 dan bagaimana menggunakannya dalam project Anda.",
    category: "Next.js",
    author: {
      name: "John Doe",
      avatar: "/avatar-john.png",
      bio: "Full Stack Developer & Tech Writer",
    },
    date: "2025-10-15",
    readTime: 5,
    image: "/nextjs-15-features.jpg",
    slug: "getting-started-nextjs-15",
    tags: ["Next.js", "React", "JavaScript", "Frontend", "Web Development"],
    content: `
      <h2>Pengenalan Next.js 15</h2>
      <p>Next.js 15 membawa banyak peningkatan dan fitur baru yang menarik untuk developer. Dalam artikel ini, kita akan menjelajahi fitur-fitur utama dan bagaimana menggunakannya.</p>
      
      <h3>Fitur Utama</h3>
      <p>Beberapa fitur utama yang perlu Anda ketahui:</p>
      <ul>
        <li>Improved Performance dengan optimasi bundle size</li>
        <li>Better Developer Experience dengan error messages yang lebih jelas</li>
        <li>Enhanced Security dengan built-in protections</li>
        <li>New Routing Features untuk navigasi yang lebih fleksibel</li>
      </ul>
      
      <h3>Cara Upgrade</h3>
      <p>Untuk upgrade ke Next.js 15, Anda dapat menggunakan perintah berikut:</p>
      <pre><code>npm install next@latest</code></pre>
      
      <h3>Kesimpulan</h3>
      <p>Next.js 15 adalah versi yang sangat menjanjikan dengan banyak peningkatan. Saya merekomendasikan untuk segera upgrade dan mencoba fitur-fitur barunya.</p>
    `,
  },
  {
    id: 2,
    title: "React Server Components Deep Dive",
    excerpt: "Memahami konsep React Server Components dan bagaimana mengoptimalkan performa aplikasi Anda.",
    category: "React",
    author: {
      name: "Jane Smith",
      avatar: "/avatar-john.png",
      bio: "React Expert & Performance Specialist",
    },
    date: "2025-10-14",
    readTime: 8,
    image: "/react-server-components.jpg",
    slug: "react-server-components-deep-dive",
    tags: ["React", "Server Components", "Performance", "Frontend"],
    content: `
      <h2>Apa itu React Server Components?</h2>
      <p>React Server Components adalah paradigma baru dalam React yang memungkinkan komponen untuk di-render di server, bukan di browser. Ini membawa banyak keuntungan performa dan efisiensi.</p>
      
      <h3>Keuntungan Server Components</h3>
      <ul>
        <li>Bundle size yang lebih kecil karena kode tidak dikirim ke client</li>
        <li>Akses langsung ke backend resources</li>
        <li>Rendering yang lebih cepat</li>
        <li>Security yang lebih baik</li>
      </ul>
      
      <h3>Implementasi Praktis</h3>
      <p>Berikut adalah contoh implementasi Server Component:</p>
      <pre><code>async function ServerComponent() {
  const data = await fetch('https://api.example.com/data');
  return &lt;div&gt;{data}&lt;/div&gt;;
}</code></pre>
      
      <h3>Best Practices</h3>
      <p>Gunakan Server Components untuk operasi yang membutuhkan akses server, dan Client Components untuk interaktivitas.</p>
    `,
  },
  {
    id: 3,
    title: "Tailwind CSS Tips & Tricks",
    excerpt: "Kumpulan tips dan trik menggunakan Tailwind CSS untuk membuat UI yang lebih efisien.",
    category: "CSS",
    author: {
      name: "Mike Johnson",
      avatar: "/avatar-john.png",
      bio: "CSS Expert & UI/UX Designer",
    },
    date: "2025-10-13",
    readTime: 6,
    image: "/tailwind-css-tips.jpg",
    slug: "tailwind-css-tips-tricks",
    tags: ["CSS", "Tailwind", "Styling", "Frontend"],
    content: `
      <h2>Tips & Trik Tailwind CSS</h2>
      <p>Tailwind CSS adalah utility-first CSS framework yang memungkinkan Anda membangun UI dengan cepat dan efisien. Berikut adalah tips dan trik untuk memaksimalkan penggunaannya.</p>
      
      <h3>1. Custom Components</h3>
      <p>Buat komponen yang dapat digunakan kembali dengan @apply directive:</p>
      <pre><code>.btn-primary {
  @apply bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded;
}</code></pre>
      
      <h3>2. Responsive Design</h3>
      <p>Gunakan breakpoints untuk desain yang responsif:</p>
      <pre><code>&lt;div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"&gt;</code></pre>
      
      <h3>3. Dark Mode</h3>
      <p>Implementasikan dark mode dengan mudah:</p>
      <pre><code>&lt;div class="bg-white dark:bg-gray-800 text-black dark:text-white"&gt;</code></pre>
      
      <h3>4. Animation & Transitions</h3>
      <p>Tambahkan animasi yang smooth:</p>
      <pre><code>&lt;div class="transition-all duration-300 hover:scale-105"&gt;</code></pre>
    `,
  },
  {
    id: 4,
    title: "TypeScript Best Practices",
    excerpt: "Praktik terbaik menggunakan TypeScript untuk membuat kode yang lebih aman dan maintainable.",
    category: "TypeScript",
    author: {
      name: "Sarah Williams",
      avatar: "/avatar-john.png",
      bio: "TypeScript Expert & Software Architect",
    },
    date: "2025-10-12",
    readTime: 7,
    image: "/typescript-best-practices.jpg",
    slug: "typescript-best-practices",
    tags: ["TypeScript", "JavaScript", "Programming", "Best Practices"],
    content: `
      <h2>TypeScript Best Practices</h2>
      <p>TypeScript adalah superset dari JavaScript yang menambahkan static typing. Berikut adalah praktik terbaik untuk menggunakan TypeScript secara efektif.</p>
      
      <h3>1. Strict Type Checking</h3>
      <p>Aktifkan strict mode untuk mendapatkan type safety maksimal:</p>
      <pre><code>{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}</code></pre>
      
      <h3>2. Interface vs Type</h3>
      <p>Gunakan interface untuk object shapes dan type untuk unions:</p>
      <pre><code>interface User {
  name: string;
  email: string;
}

type Status = 'loading' | 'success' | 'error';</code></pre>
      
      <h3>3. Generic Types</h3>
      <p>Buat komponen yang reusable dengan generic types:</p>
      <pre><code>function createArray&lt;T&gt;(items: T[]): T[] {
  return [...items];
}</code></pre>
      
      <h3>4. Utility Types</h3>
      <p>Manfaatkan utility types yang disediakan TypeScript:</p>
      <pre><code>type PartialUser = Partial&lt;User&gt;;
type RequiredUser = Required&lt;User&gt;;</code></pre>
    `,
  },
  {
    id: 5,
    title: "Web Performance Optimization",
    excerpt: "Strategi dan teknik untuk mengoptimalkan performa website Anda agar lebih cepat.",
    category: "Web Dev",
    author: {
      name: "Alex Brown",
      avatar: "/avatar-john.png",
      bio: "Performance Engineer & Web Optimization Expert",
    },
    date: "2025-10-11",
    readTime: 9,
    image: "/stage-performance.png",
    slug: "web-performance-optimization",
    tags: ["Performance", "Web Dev", "Optimization", "Frontend"],
    content: `
      <h2>Web Performance Optimization</h2>
      <p>Performansi website adalah faktor kritis yang mempengaruhi user experience dan SEO. Berikut adalah strategi untuk mengoptimalkan performa website Anda.</p>
      
      <h3>1. Image Optimization</h3>
      <p>Optimalkan gambar untuk web:</p>
      <ul>
        <li>Gunakan format modern seperti WebP atau AVIF</li>
        <li>Implementasikan lazy loading</li>
        <li>Resize gambar sesuai kebutuhan</li>
        <li>Gunakan responsive images</li>
      </ul>
      
      <h3>2. Code Splitting</h3>
      <p>Bagi kode JavaScript menjadi chunks yang lebih kecil:</p>
      <pre><code>const LazyComponent = React.lazy(() => import('./LazyComponent'));</code></pre>
      
      <h3>3. Caching Strategies</h3>
      <p>Implementasikan caching yang efektif:</p>
      <ul>
        <li>Browser caching untuk static assets</li>
        <li>CDN untuk global distribution</li>
        <li>Service workers untuk offline support</li>
      </ul>
      
      <h3>4. Bundle Optimization</h3>
      <p>Minimalkan bundle size:</p>
      <ul>
        <li>Tree shaking untuk menghapus kode yang tidak digunakan</li>
        <li>Minification dan compression</li>
        <li>Dead code elimination</li>
      </ul>
    `,
  },
  {
    id: 6,
    title: "CSS Grid vs Flexbox",
    excerpt: "Perbandingan mendalam antara CSS Grid dan Flexbox untuk layout yang sempurna.",
    category: "CSS",
    author: {
      name: "Emma Davis",
      avatar: "/avatar-john.png",
      bio: "CSS Layout Specialist & Frontend Developer",
    },
    date: "2025-10-10",
    readTime: 6,
    image: "/css-grid.jpg",
    slug: "css-grid-vs-flexbox",
    tags: ["CSS", "Grid", "Flexbox", "Layout"],
    content: `
      <h2>CSS Grid vs Flexbox: Kapan Menggunakan Yang Mana?</h2>
      <p>CSS Grid dan Flexbox adalah dua sistem layout yang powerful, tetapi mereka memiliki use case yang berbeda. Mari kita pelajari kapan menggunakan masing-masing.</p>
      
      <h3>CSS Grid</h3>
      <p>Gunakan CSS Grid untuk:</p>
      <ul>
        <li>Layout 2D (baris dan kolom)</li>
        <li>Complex layouts dengan multiple items</li>
        <li>Precise positioning</li>
        <li>Overlapping elements</li>
      </ul>
      
      <pre><code>.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
}</code></pre>
      
      <h3>Flexbox</h3>
      <p>Gunakan Flexbox untuk:</p>
      <ul>
        <li>1D layouts (baris atau kolom)</li>
        <li>Distributing space</li>
        <li>Aligning items</li>
        <li>Responsive navigation</li>
      </ul>
      
      <pre><code>.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}</code></pre>
      
      <h3>Kombinasi Grid dan Flexbox</h3>
      <p>Anda dapat menggunakan keduanya dalam satu layout untuk hasil yang optimal.</p>
    `,
  },
  {
    id: 7,
    title: "Advanced React Patterns",
    excerpt: "Pelajari pattern-pattern advanced di React untuk membuat aplikasi yang scalable.",
    category: "React",
    author: {
      name: "Chris Wilson",
      avatar: "/avatar-john.png",
      bio: "React Expert & Software Engineer",
    },
    date: "2025-10-09",
    readTime: 10,
    image: "/react-patterns.jpg",
    slug: "advanced-react-patterns",
    tags: ["React", "Patterns", "Advanced", "Frontend"],
    content: `
      <h2>Advanced React Patterns</h2>
      <p>Pattern-pattern advanced di React membantu Anda membangun aplikasi yang lebih maintainable, scalable, dan performant. Mari kita eksplorasi beberapa pattern yang paling berguna.</p>
      
      <h3>1. Render Props Pattern</h3>
      <p>Render props memungkinkan komponen untuk berbagi logic dengan komponen lain:</p>
      <pre><code>const DataFetcher = ({ render }) => {
  const [data, setData] = useState(null);
  // ... fetch logic
  return render(data);
};</code></pre>
      
      <h3>2. Higher-Order Components (HOC)</h3>
      <p>HOC adalah fungsi yang mengambil komponen dan mengembalikan komponen baru:</p>
      <pre><code>const withLoading = (WrappedComponent) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) return &lt;Spinner /&gt;;
    return &lt;WrappedComponent {...props} /&gt;;
  };
};</code></pre>
      
      <h3>3. Custom Hooks</h3>
      <p>Custom hooks memungkinkan Anda untuk berbagi stateful logic:</p>
      <pre><code>const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  return { count, increment, decrement };
};</code></pre>
      
      <h3>4. Compound Components</h3>
      <p>Compound components memungkinkan komponen untuk bekerja bersama:</p>
      <pre><code>const Tabs = ({ children }) => { /* ... */ };
Tabs.Tab = ({ children }) => { /* ... */ };
Tabs.Panel = ({ children }) => { /* ... */ };</code></pre>
    `,
  },
  {
    id: 8,
    title: "Next.js API Routes Mastery",
    excerpt: "Kuasai API Routes di Next.js untuk membuat backend yang powerful dan efisien.",
    category: "Next.js",
    author: {
      name: "Lisa Anderson",
      avatar: "/avatar-john.png",
      bio: "Full Stack Developer & API Specialist",
    },
    date: "2025-10-08",
    readTime: 8,
    image: "/nextjs-api.jpg",
    slug: "nextjs-api-routes-mastery",
    tags: ["Next.js", "API", "Backend", "Full Stack"],
    content: `
      <h2>Next.js API Routes Mastery</h2>
      <p>API Routes di Next.js memungkinkan Anda membuat backend API langsung dalam aplikasi Next.js Anda. Ini sangat powerful untuk full-stack development.</p>
      
      <h3>1. Basic API Route</h3>
      <p>Buat API route sederhana:</p>
      <pre><code>// pages/api/users.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ users: [] });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end('Method Not Allowed');
  }
}</code></pre>
      
      <h3>2. Dynamic Routes</h3>
      <p>Gunakan dynamic routes untuk parameter:</p>
      <pre><code>// pages/api/users/[id].js
export default function handler(req, res) {
  const { id } = req.query;
  // Handle user by ID
}</code></pre>
      
      <h3>3. Middleware Integration</h3>
      <p>Integrasikan dengan middleware untuk authentication:</p>
      <pre><code>import { withAuth } from '@/middleware/auth';

export default withAuth(async (req, res) => {
  // Protected route logic
});</code></pre>
      
      <h3>4. Error Handling</h3>
      <p>Implementasikan error handling yang robust:</p>
      <pre><code>export default async function handler(req, res) {
  try {
    const data = await fetchData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}</code></pre>
    `,
  },
  {
    id: 9,
    title: "Laravel 11 New Features",
    excerpt: "Jelajahi fitur-fitur baru di Laravel 11 yang akan meningkatkan produktivitas development Anda.",
    category: "Laravel",
    author: {
      name: "Ahmad Surya",
      avatar: "/avatar-john.png",
      bio: "Laravel Expert & PHP Developer",
    },
    date: "2025-10-07",
    readTime: 6,
    image: "/placeholder.jpg",
    slug: "laravel-11-new-features",
    tags: ["Laravel", "PHP", "Backend", "Framework"],
    content: `
      <h2>Laravel 11: Fitur-Fitur Baru yang Menarik</h2>
      <p>Laravel 11 hadir dengan banyak fitur baru yang akan meningkatkan produktivitas development Anda. Mari kita eksplorasi fitur-fitur terbaru ini.</p>
      
      <h3>1. Simplified Application Structure</h3>
      <p>Laravel 11 menyederhanakan struktur aplikasi dengan menghapus beberapa file yang tidak perlu:</p>
      <ul>
        <li>Kernel.php di HTTP dan Console</li>
        <li>Exception Handler yang disederhanakan</li>
        <li>Bootstrap files yang lebih minimal</li>
      </ul>
      
      <h3>2. New Artisan Commands</h3>
      <p>Beberapa command baru yang berguna:</p>
      <pre><code>php artisan make:controller --resource
php artisan make:model --migration --factory
php artisan make:livewire</code></pre>
      
      <h3>3. Improved Performance</h3>
      <p>Laravel 11 menawarkan performa yang lebih baik:</p>
      <ul>
        <li>Faster route caching</li>
        <li>Optimized query builder</li>
        <li>Better memory usage</li>
      </ul>
      
      <h3>4. Enhanced Security</h3>
      <p>Fitur keamanan yang ditingkatkan:</p>
      <ul>
        <li>Improved CSRF protection</li>
        <li>Better password hashing</li>
        <li>Enhanced session security</li>
      </ul>
    `,
  },
  {
    id: 10,
    title: "Vue.js 3 Composition API",
    excerpt: "Pelajari cara menggunakan Composition API di Vue.js 3 untuk development yang lebih efisien.",
    category: "Vue.js",
    author: {
      name: "Maria Rizki",
      avatar: "/avatar-john.png",
      bio: "Vue.js Expert & Frontend Developer",
    },
    date: "2025-10-06",
    readTime: 7,
    image: "/placeholder.jpg",
    slug: "vuejs-3-composition-api",
    tags: ["Vue.js", "JavaScript", "Frontend", "Composition API"],
    content: `
      <h2>Vue.js 3 Composition API: Panduan Lengkap</h2>
      <p>Composition API adalah cara baru untuk menulis komponen Vue.js yang lebih fleksibel dan reusable. Mari kita pelajari cara menggunakannya.</p>
      
      <h3>1. Setup Function</h3>
      <p>Gunakan setup function untuk mengatur logic komponen:</p>
      <pre><code>&lt;script setup&gt;
import { ref, reactive, computed } from 'vue'

const count = ref(0)
const state = reactive({ name: 'Vue 3' })
const doubleCount = computed(() => count.value * 2)
&lt;/script&gt;</code></pre>
      
      <h3>2. Lifecycle Hooks</h3>
      <p>Gunakan lifecycle hooks dalam setup function:</p>
      <pre><code>import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  console.log('Component mounted')
})

onUnmounted(() => {
  console.log('Component unmounted')
})</code></pre>
      
      <h3>3. Composables</h3>
      <p>Buat reusable logic dengan composables:</p>
      <pre><code>// useCounter.js
import { ref } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  
  const increment = () => count.value++
  const decrement = () => count.value--
  
  return { count, increment, decrement }
}</code></pre>
      
      <h3>4. Watchers</h3>
      <p>Gunakan watchers untuk reactive updates:</p>
      <pre><code>import { watch, watchEffect } from 'vue'

watch(count, (newValue, oldValue) => {
  console.log('Count changed:', newValue)
})

watchEffect(() => {
  console.log('Count is:', count.value)
})</code></pre>
    `,
  },
  {
    id: 11,
    title: "Node.js Performance Tips",
    excerpt: "Tips dan trik untuk mengoptimalkan performa aplikasi Node.js Anda.",
    category: "Node.js",
    author: {
      name: "Dani Pratama",
      avatar: "/avatar-john.png",
      bio: "Node.js Expert & Backend Developer",
    },
    date: "2025-10-05",
    readTime: 8,
    image: "/placeholder.jpg",
    slug: "nodejs-performance-tips",
    tags: ["Node.js", "JavaScript", "Backend", "Performance"],
    content: `
      <h2>Node.js Performance Optimization Tips</h2>
      <p>Node.js adalah runtime JavaScript yang powerful, tetapi untuk mendapatkan performa optimal, Anda perlu menerapkan beberapa teknik optimasi. Berikut adalah tips dan trik untuk mengoptimalkan aplikasi Node.js Anda.</p>
      
      <h3>1. Use Clustering</h3>
      <p>Manfaatkan semua CPU cores dengan clustering:</p>
      <pre><code>const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i &lt; numCPUs; i++) {
    cluster.fork();
  }
} else {
  // Worker process
  require('./app');
}</code></pre>
      
      <h3>2. Memory Management</h3>
      <p>Kelola memory dengan baik:</p>
      <ul>
        <li>Gunakan streaming untuk file besar</li>
        <li>Implementasikan garbage collection monitoring</li>
        <li>Hindari memory leaks</li>
        <li>Gunakan buffer pools</li>
      </ul>
      
      <h3>3. Database Optimization</h3>
      <p>Optimalkan database queries:</p>
      <ul>
        <li>Gunakan connection pooling</li>
        <li>Implementasikan query caching</li>
        <li>Gunakan database indexing</li>
        <li>Batch operations</li>
      </ul>
      
      <h3>4. Caching Strategies</h3>
      <p>Implementasikan caching yang efektif:</p>
      <pre><code>const redis = require('redis');
const client = redis.createClient();

// Cache expensive operations
const getCachedData = async (key) => {
  const cached = await client.get(key);
  if (cached) return JSON.parse(cached);
  
  const data = await expensiveOperation();
  await client.setex(key, 3600, JSON.stringify(data));
  return data;
};</code></pre>
    `,
  },
  {
    id: 12,
    title: "Python for Web Development",
    excerpt: "Panduan lengkap menggunakan Python untuk web development dengan Django dan Flask.",
    category: "Python",
    author: {
      name: "Siti Aminah",
      avatar: "/avatar-john.png",
      bio: "Python Expert & Full Stack Developer",
    },
    date: "2025-10-04",
    readTime: 9,
    image: "/placeholder.jpg",
    slug: "python-web-development",
    tags: ["Python", "Django", "Flask", "Backend"],
    content: `
      <h2>Python Web Development: Django vs Flask</h2>
      <p>Python menawarkan dua framework web yang populer: Django dan Flask. Mari kita bandingkan keduanya dan pelajari kapan menggunakan masing-masing.</p>
      
      <h3>Django: The Full-Featured Framework</h3>
      <p>Django adalah framework yang "batteries included":</p>
      <ul>
        <li>ORM yang powerful</li>
        <li>Admin interface otomatis</li>
        <li>Built-in authentication</li>
        <li>URL routing yang fleksibel</li>
        <li>Template system</li>
      </ul>
      
      <pre><code># Django example
from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    return render(request, 'home.html', {'title': 'Home'})</code></pre>
      
      <h3>Flask: The Micro Framework</h3>
      <p>Flask adalah framework yang minimal dan fleksibel:</p>
      <ul>
        <li>Lightweight dan cepat</li>
        <li>Flexible routing</li>
        <li>Easy to learn</li>
        <li>Great for APIs</li>
        <li>Extensible dengan extensions</li>
      </ul>
      
      <pre><code># Flask example
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/users')
def get_users():
    return jsonify({'users': []})</code></pre>
      
      <h3>Kapan Menggunakan Django vs Flask?</h3>
      <p><strong>Gunakan Django jika:</strong></p>
      <ul>
        <li>Membuat aplikasi web yang kompleks</li>
        <li>Membutuhkan admin interface</li>
        <li>Tim yang besar dengan berbagai skill level</li>
        <li>Membutuhkan fitur lengkap out-of-the-box</li>
      </ul>
      
      <p><strong>Gunakan Flask jika:</strong></p>
      <ul>
        <li>Membuat API sederhana</li>
        <li>Prototyping cepat</li>
        <li>Kontrol penuh atas struktur aplikasi</li>
        <li>Microservices</li>
      </ul>
    `,
  },
];

// Fungsi untuk mendapatkan blog post berdasarkan slug
export function getBlogPostBySlug(slug: string) {
  return blogPostsData.find(post => post.slug === slug);
}

// Fungsi untuk mendapatkan semua blog posts
export function getAllBlogPosts() {
  return blogPostsData;
}

// Fungsi untuk mendapatkan related posts
export function getRelatedPosts(currentSlug: string, limit: number = 3) {
  const currentPost = getBlogPostBySlug(currentSlug);
  if (!currentPost) return [];
  
  return blogPostsData
    .filter(post => post.slug !== currentSlug && post.category === currentPost.category)
    .slice(0, limit);
}
