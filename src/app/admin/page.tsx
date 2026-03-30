'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  Plus,
  Upload,
  X,
  Check,
  Loader2,
  Pencil,
  Trash2,
  LogOut,
  Lock,
} from 'lucide-react'

/* ─── Types ───────────────────────────────────────────── */

interface CategoryData {
  id: string
  name: string
  slug: string
  subcategories: SubCategoryData[]
}

interface SubCategoryData {
  id: string
  name: string
  slug: string
  categoryId?: string
}

interface ProductData {
  id: string
  title: string
  description: string | null
  sku: string
  image: string | null
  active: boolean
  subCategoryId: string | null
  createdAt: string
}

interface EventData {
  id: string
  title: string
  location: string
  description: string | null
  image: string | null
  images?: string[]
  eventDate: string
  active: boolean
  createdAt: string
}

function richTextToPlainText(value: string) {
  return value
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function isRichTextEmpty(value: string) {
  return richTextToPlainText(value).length === 0
}

/* ─── Main Page ───────────────────────────────────────── */

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    fetch('/api/auth')
      .then((r) => r.json())
      .then((j) => setAuthenticated(j.authenticated))
      .catch(() => setAuthenticated(false))
  }, [])

  if (authenticated === null) {
    return (
      <main className='min-h-screen flex items-center justify-center bg-gray-50'>
        <Loader2 className='animate-spin text-gray-400' size={32} />
      </main>
    )
  }

  if (!authenticated) {
    return <LoginPage onSuccess={() => setAuthenticated(true)} />
  }

  return <AdminDashboard onLogout={() => setAuthenticated(false)} />
}

/* ─── Login Page ──────────────────────────────────────── */

function LoginPage({ onSuccess }: { onSuccess: () => void }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      const json = await res.json()
      if (res.ok) {
        onSuccess()
      } else {
        setError(json.error || 'Login failed')
      }
    } catch {
      setError('Something went wrong')
    }
    setLoading(false)
  }

  return (
    <main className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
      <form
        onSubmit={handleLogin}
        className='w-full max-w-sm bg-white rounded-2xl border border-gray-200 p-8 space-y-6'
      >
        <div className='text-center'>
          <div className='inline-flex items-center justify-center w-14 h-14 bg-gray-900 rounded-xl mb-4'>
            <Lock size={24} className='text-white' />
          </div>
          <h1 className='text-2xl font-bold text-gray-900'>Admin Login</h1>
          <p className='text-gray-500 text-sm mt-1'>
            Enter your credentials to continue
          </p>
        </div>

        {error && (
          <div className='bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm'>
            {error}
          </div>
        )}

        <div className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1.5'>
              Username
            </label>
            <input
              type='text'
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none'
              autoFocus
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1.5'>
              Password
            </label>
            <input
              type='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none'
            />
          </div>
        </div>

        <button
          type='submit'
          disabled={loading}
          className='w-full py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50 transition-colors flex items-center justify-center gap-2'
        >
          {loading ? <Loader2 size={16} className='animate-spin' /> : 'Sign In'}
        </button>
      </form>
    </main>
  )
}

/* ─── Admin Dashboard ─────────────────────────────────── */

function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const [categories, setCategories] = useState<CategoryData[]>([])
  const [products, setProducts] = useState<ProductData[]>([])
  const [events, setEvents] = useState<EventData[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState<ProductData | null>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  async function fetchAll() {
    setLoading(true)
    try {
      const [catRes, prodRes, eventRes] = await Promise.all([
        fetch('/api/categories'),
        fetch('/api/products'),
        fetch('/api/events'),
      ])
      const catJson = await catRes.json()
      const prodJson = await prodRes.json()
      const eventJson = await eventRes.json()
      setCategories(catJson.data || [])
      setProducts(Array.isArray(prodJson) ? prodJson : [])
      setEvents(eventJson.data || [])
    } catch {
      // silent
    }
    setLoading(false)
  }

  useEffect(() => {
    let active = true

    async function loadInitialData() {
      try {
        const [catRes, prodRes, eventRes] = await Promise.all([
          fetch('/api/categories'),
          fetch('/api/products'),
          fetch('/api/events'),
        ])
        const catJson = await catRes.json()
        const prodJson = await prodRes.json()
        const eventJson = await eventRes.json()

        if (!active) return
        setCategories(catJson.data || [])
        setProducts(Array.isArray(prodJson) ? prodJson : [])
        setEvents(eventJson.data || [])
      } catch {
        // silent
      } finally {
        if (active) setLoading(false)
      }
    }

    void loadInitialData()

    return () => {
      active = false
    }
  }, [])

  async function handleLogout() {
    await fetch('/api/auth', { method: 'DELETE' })
    onLogout()
  }

  async function handleDelete(id: string) {
    if (!confirm('Are you sure you want to delete this product?')) return
    setDeletingId(id)
    try {
      const res = await fetch(`/api/products/${id}`, { method: 'DELETE' })
      if (res.ok) {
        setProducts((prev) => prev.filter((p) => p.id !== id))
      }
    } catch {
      // silent
    }
    setDeletingId(null)
  }

  function refreshCategories() {
    fetch('/api/categories')
      .then((r) => r.json())
      .then((j) => setCategories(j.data || []))
  }

  // Find category/subcategory name for a product
  function getSubCatName(subCategoryId: string | null): string {
    if (!subCategoryId) return '—'
    for (const cat of categories) {
      const sub = cat.subcategories.find((s) => s.id === subCategoryId)
      if (sub) return sub.name
    }
    return '—'
  }

  return (
    <main className='min-h-screen pt-24 pb-20 bg-gray-50'>
      <div className='container mx-auto px-4 md:px-6 max-w-6xl'>
        {/* Header */}
        <div className='flex items-center justify-between mb-8'>
          <div>
            <h1 className='text-3xl font-bold text-gray-900'>Admin Panel</h1>
            <p className='text-gray-500 mt-1'>
              Manage products, categories and sub-categories
            </p>
          </div>
          <div className='flex items-center gap-3'>
            <button
              onClick={() => {
                setShowForm(!showForm)
                setEditingProduct(null)
              }}
              className='inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors'
            >
              {showForm && !editingProduct ? (
                <X size={18} />
              ) : (
                <Plus size={18} />
              )}
              {showForm && !editingProduct ? 'Cancel' : 'Add Product'}
            </button>
            <button
              onClick={handleLogout}
              className='p-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition-colors'
              title='Logout'
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>

        {/* Add Product Form */}
        {showForm && !editingProduct && (
          <ProductForm
            categories={categories}
            onSuccess={() => {
              fetchAll()
              setShowForm(false)
            }}
            onCategoriesChange={refreshCategories}
          />
        )}

        {/* Edit Product Form */}
        {editingProduct && (
          <ProductForm
            categories={categories}
            editingProduct={editingProduct}
            onSuccess={() => {
              fetchAll()
              setEditingProduct(null)
            }}
            onCancel={() => setEditingProduct(null)}
            onCategoriesChange={refreshCategories}
          />
        )}

        {/* Products Table */}
        <div className='bg-white rounded-xl border border-gray-200 overflow-hidden'>
          <div className='px-6 py-4 border-b border-gray-100'>
            <h2 className='text-lg font-semibold text-gray-900'>
              Products ({products.length})
            </h2>
          </div>

          {loading ? (
            <div className='flex items-center justify-center py-20'>
              <Loader2 className='animate-spin text-gray-400' size={32} />
            </div>
          ) : products.length === 0 ? (
            <div className='text-center py-20 text-gray-400'>
              No products yet. Click &quot;Add Product&quot; to create one.
            </div>
          ) : (
            <div className='overflow-x-auto'>
              <table className='w-full text-sm'>
                <thead>
                  <tr className='bg-gray-50 text-left text-gray-500 font-medium'>
                    <th className='px-6 py-3'>Image</th>
                    <th className='px-6 py-3'>Title</th>
                    <th className='px-6 py-3'>SKU</th>
                    <th className='px-6 py-3'>Sub-Category</th>
                    <th className='px-6 py-3'>Status</th>
                    <th className='px-6 py-3 text-right'>Actions</th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-100'>
                  {products.map((product) => (
                    <tr key={product.id} className='hover:bg-gray-50/50'>
                      <td className='px-6 py-3'>
                        <div className='relative w-12 h-12 rounded-lg bg-gray-100 overflow-hidden'>
                          {product.image ? (
                            <Image
                              src={product.image}
                              alt={product.title}
                              fill
                              className='object-contain p-1'
                              sizes='48px'
                            />
                          ) : (
                            <div className='flex items-center justify-center h-full text-gray-300 text-[10px]'>
                              —
                            </div>
                          )}
                        </div>
                      </td>
                      <td className='px-6 py-3'>
                        <p className='font-medium text-gray-900'>
                          {product.title}
                        </p>
                        {product.description && (
                          <p className='text-gray-400 text-xs mt-0.5 line-clamp-1'>
                            {product.description}
                          </p>
                        )}
                      </td>
                      <td className='px-6 py-3 text-gray-500 font-mono text-xs'>
                        {product.sku}
                      </td>
                      <td className='px-6 py-3 text-gray-500 text-xs'>
                        {getSubCatName(product.subCategoryId)}
                      </td>
                      <td className='px-6 py-3'>
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                            product.active
                              ? 'bg-green-50 text-green-700'
                              : 'bg-gray-100 text-gray-500'
                          }`}
                        >
                          {product.active ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className='px-6 py-3'>
                        <div className='flex items-center justify-end gap-1'>
                          <button
                            onClick={() => {
                              setEditingProduct(product)
                              setShowForm(false)
                            }}
                            className='p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors'
                            title='Edit'
                          >
                            <Pencil size={15} />
                          </button>
                          <button
                            onClick={() => handleDelete(product.id)}
                            disabled={deletingId === product.id}
                            className='p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-40'
                            title='Delete'
                          >
                            {deletingId === product.id ? (
                              <Loader2 size={15} className='animate-spin' />
                            ) : (
                              <Trash2 size={15} />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <EventManager events={events} onRefresh={fetchAll} />
      </div>
    </main>
  )
}

/* ─── Product Form (Create & Edit) ────────────────────── */

function ProductForm({
  categories,
  editingProduct,
  onSuccess,
  onCancel,
  onCategoriesChange,
}: {
  categories: CategoryData[]
  editingProduct?: ProductData | null
  onSuccess: () => void
  onCancel?: () => void
  onCategoriesChange: () => void
}) {
  const isEdit = !!editingProduct

  const [title, setTitle] = useState(editingProduct?.title || '')
  const [description, setDescription] = useState(
    editingProduct?.description || '',
  )
  const [sku, setSku] = useState(editingProduct?.sku || '')
  const [active, setActive] = useState(editingProduct?.active ?? true)
  const [imageUrl, setImageUrl] = useState<string | null>(
    editingProduct?.image || null,
  )
  const [uploading, setUploading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  // Category / sub-category
  const [selectedCategoryId, setSelectedCategoryId] = useState(() => {
    if (!editingProduct?.subCategoryId) return ''
    for (const cat of categories) {
      if (cat.subcategories.some((s) => s.id === editingProduct.subCategoryId))
        return cat.id
    }
    return ''
  })
  const [newCategoryName, setNewCategoryName] = useState('')
  const [creatingCategory, setCreatingCategory] = useState(false)
  const [deletingCategory, setDeletingCategory] = useState(false)

  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(
    editingProduct?.subCategoryId || '',
  )
  const [newSubCategoryName, setNewSubCategoryName] = useState('')
  const [creatingSubCategory, setCreatingSubCategory] = useState(false)
  const [deletingSubCategory, setDeletingSubCategory] = useState(false)

  const subCategories = selectedCategoryId
    ? categories.find((c) => c.id === selectedCategoryId)?.subcategories || []
    : []

  const fileInputRef = useRef<HTMLInputElement>(null)

  async function handleCreateCategory() {
    if (!newCategoryName.trim()) return
    setCreatingCategory(true)
    try {
      const res = await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newCategoryName.trim() }),
      })
      const json = await res.json()
      if (res.ok) {
        onCategoriesChange()
        setSelectedCategoryId(json.data.id)
        setNewCategoryName('')
      }
    } catch {
      // silent
    }
    setCreatingCategory(false)
  }

  async function handleDeleteCategory() {
    if (!selectedCategoryId) return
    if (
      !confirm(
        'Are you sure you want to delete this category? This works only if it has no sub-categories.',
      )
    )
      return

    setDeletingCategory(true)
    setError(null)
    try {
      const res = await fetch(`/api/categories?id=${selectedCategoryId}`, {
        method: 'DELETE',
      })
      const json = await res.json()

      if (res.ok) {
        onCategoriesChange()
        setSelectedCategoryId('')
        setSelectedSubCategoryId('')
      } else {
        setError(json.error || 'Failed to delete category')
      }
    } catch {
      setError('Failed to delete category')
    }

    setDeletingCategory(false)
  }

  async function handleCreateSubCategory() {
    if (!newSubCategoryName.trim() || !selectedCategoryId) return
    setCreatingSubCategory(true)
    try {
      const res = await fetch('/api/subcategories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newSubCategoryName.trim(),
          categoryId: selectedCategoryId,
        }),
      })
      const json = await res.json()
      if (res.ok) {
        onCategoriesChange()
        setSelectedSubCategoryId(json.data.id)
        setNewSubCategoryName('')
      }
    } catch {
      // silent
    }
    setCreatingSubCategory(false)
  }

  async function handleDeleteSubCategory() {
    if (!selectedSubCategoryId) return
    if (
      !confirm(
        'Are you sure you want to delete this sub-category? This works only if no products are assigned to it.',
      )
    )
      return

    setDeletingSubCategory(true)
    setError(null)
    try {
      const res = await fetch(
        `/api/subcategories?id=${selectedSubCategoryId}`,
        {
          method: 'DELETE',
        },
      )
      const json = await res.json()

      if (res.ok) {
        onCategoriesChange()
        setSelectedSubCategoryId('')
      } else {
        setError(json.error || 'Failed to delete sub-category')
      }
    } catch {
      setError('Failed to delete sub-category')
    }

    setDeletingSubCategory(false)
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError(null)
    try {
      const formData = new FormData()
      formData.append('file', file)
      const res = await fetch('/api/upload', { method: 'POST', body: formData })
      const json = await res.json()
      if (res.ok) {
        setImageUrl(json.url)
      } else {
        setError(json.error || 'Upload failed')
      }
    } catch {
      setError('Image upload failed')
    }
    setUploading(false)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    const payload = {
      title,
      description: description || null,
      sku,
      image: imageUrl,
      active,
      subCategoryId: selectedSubCategoryId || null,
    }

    try {
      const url = isEdit
        ? `/api/products/${editingProduct!.id}`
        : '/api/products'
      const method = isEdit ? 'PUT' : 'POST'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (res.ok) {
        setSuccess(true)
        setTimeout(() => onSuccess(), 800)
      } else {
        setError(
          json.error || `Failed to ${isEdit ? 'update' : 'create'} product`,
        )
      }
    } catch {
      setError('Something went wrong')
    }
    setSubmitting(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white rounded-xl border border-gray-200 p-6 mb-8 space-y-6'
    >
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-semibold text-gray-900'>
          {isEdit ? 'Edit Product' : 'New Product'}
        </h2>
        {onCancel && (
          <button
            type='button'
            onClick={onCancel}
            className='p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors'
          >
            <X size={18} />
          </button>
        )}
      </div>

      {error && (
        <div className='bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm'>
          {error}
        </div>
      )}
      {success && (
        <div className='bg-green-50 text-green-700 px-4 py-3 rounded-lg text-sm flex items-center gap-2'>
          <Check size={16} /> Product {isEdit ? 'updated' : 'created'}{' '}
          successfully!
        </div>
      )}

      {/* Category Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div>
          <div className='flex items-center justify-between mb-1.5'>
            <label className='block text-sm font-medium text-gray-700'>
              Category
            </label>
            <button
              type='button'
              onClick={handleDeleteCategory}
              disabled={!selectedCategoryId || deletingCategory}
              className='inline-flex items-center gap-1 text-xs font-medium text-red-600 hover:text-red-700 disabled:opacity-40 disabled:cursor-not-allowed'
            >
              {deletingCategory ? (
                <Loader2 size={12} className='animate-spin' />
              ) : (
                <Trash2 size={12} />
              )}
              Remove
            </button>
          </div>
          <select
            value={selectedCategoryId}
            onChange={(e) => {
              const nextCategoryId = e.target.value
              setSelectedCategoryId(nextCategoryId)
              setSelectedSubCategoryId('')
            }}
            className='w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none'
          >
            <option value=''>Select category...</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          <div className='flex gap-2 mt-2'>
            <input
              placeholder='Or create new...'
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              className='flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none'
            />
            <button
              type='button'
              onClick={handleCreateCategory}
              disabled={!newCategoryName.trim() || creatingCategory}
              className='px-3 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors'
            >
              {creatingCategory ? (
                <Loader2 size={14} className='animate-spin' />
              ) : (
                <Plus size={14} />
              )}
            </button>
          </div>
        </div>

        <div>
          <div className='flex items-center justify-between mb-1.5'>
            <label className='block text-sm font-medium text-gray-700'>
              Sub-Category
            </label>
            <button
              type='button'
              onClick={handleDeleteSubCategory}
              disabled={!selectedSubCategoryId || deletingSubCategory}
              className='inline-flex items-center gap-1 text-xs font-medium text-red-600 hover:text-red-700 disabled:opacity-40 disabled:cursor-not-allowed'
            >
              {deletingSubCategory ? (
                <Loader2 size={12} className='animate-spin' />
              ) : (
                <Trash2 size={12} />
              )}
              Remove
            </button>
          </div>
          <select
            value={selectedSubCategoryId}
            onChange={(e) => setSelectedSubCategoryId(e.target.value)}
            disabled={!selectedCategoryId}
            className='w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none disabled:bg-gray-50 disabled:text-gray-400'
          >
            <option value=''>
              {selectedCategoryId
                ? 'Select sub-category...'
                : 'Select a category first'}
            </option>
            {subCategories.map((sc) => (
              <option key={sc.id} value={sc.id}>
                {sc.name}
              </option>
            ))}
          </select>
          <div className='flex gap-2 mt-2'>
            <input
              placeholder='Or create new...'
              value={newSubCategoryName}
              onChange={(e) => setNewSubCategoryName(e.target.value)}
              disabled={!selectedCategoryId}
              className='flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none disabled:bg-gray-50'
            />
            <button
              type='button'
              onClick={handleCreateSubCategory}
              disabled={
                !newSubCategoryName.trim() ||
                !selectedCategoryId ||
                creatingSubCategory
              }
              className='px-3 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors'
            >
              {creatingSubCategory ? (
                <Loader2 size={14} className='animate-spin' />
              ) : (
                <Plus size={14} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Product Fields */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1.5'>
            Title *
          </label>
          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Product title'
            className='w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none'
          />
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1.5'>
            SKU *
          </label>
          <input
            required
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            placeholder='e.g. A-001'
            className='w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-mono focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none'
          />
        </div>
      </div>

      <div>
        <label className='block text-sm font-medium text-gray-700 mb-1.5'>
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Product description (optional)'
          rows={3}
          className='w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none resize-none'
        />
      </div>

      {/* Image Upload */}
      <div>
        <label className='block text-sm font-medium text-gray-700 mb-1.5'>
          Product Image
        </label>
        <div className='flex items-start gap-4'>
          {imageUrl ? (
            <div className='relative w-24 h-24 rounded-lg border border-gray-200 overflow-hidden bg-gray-50'>
              <Image
                src={imageUrl}
                alt='Preview'
                fill
                className='object-contain p-2'
                sizes='96px'
              />
              <button
                type='button'
                onClick={() => {
                  setImageUrl(null)
                  if (fileInputRef.current) fileInputRef.current.value = ''
                }}
                className='absolute top-1 right-1 p-0.5 bg-white rounded-full border border-gray-200 hover:bg-gray-50'
              >
                <X size={12} />
              </button>
            </div>
          ) : (
            <button
              type='button'
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className='w-24 h-24 flex flex-col items-center justify-center gap-1 border-2 border-dashed border-gray-200 rounded-lg text-gray-400 hover:border-gray-400 hover:text-gray-500 transition-colors disabled:opacity-50'
            >
              {uploading ? (
                <Loader2 size={20} className='animate-spin' />
              ) : (
                <>
                  <Upload size={20} />
                  <span className='text-[10px]'>Upload</span>
                </>
              )}
            </button>
          )}
          <input
            ref={fileInputRef}
            type='file'
            accept='image/*'
            onChange={handleImageUpload}
            className='hidden'
          />
        </div>
      </div>

      {/* Active Toggle */}
      <div className='flex items-center gap-3'>
        <button
          type='button'
          onClick={() => setActive(!active)}
          className={`relative w-11 h-6 rounded-full transition-colors ${
            active ? 'bg-green-500' : 'bg-gray-300'
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
              active ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
        <span className='text-sm text-gray-700'>
          {active ? 'Active' : 'Inactive'}
        </span>
      </div>

      {/* Submit */}
      <div className='flex justify-end gap-3 pt-2'>
        {onCancel && (
          <button
            type='button'
            onClick={onCancel}
            className='px-5 py-2.5 border border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors'
          >
            Cancel
          </button>
        )}
        <button
          type='submit'
          disabled={submitting || !title || !sku}
          className='inline-flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors'
        >
          {submitting ? (
            <>
              <Loader2 size={16} className='animate-spin' />{' '}
              {isEdit ? 'Updating...' : 'Creating...'}
            </>
          ) : isEdit ? (
            'Update Product'
          ) : (
            'Create Product'
          )}
        </button>
      </div>
    </form>
  )
}

/* ─── Events Manager ─────────────────────────────────── */

function EventManager({
  events,
  onRefresh,
}: {
  events: EventData[]
  onRefresh: () => Promise<void>
}) {
  const [showForm, setShowForm] = useState(false)
  const [editingEvent, setEditingEvent] = useState<EventData | null>(null)
  const [deletingEventId, setDeletingEventId] = useState<string | null>(null)

  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [eventDate, setEventDate] = useState('')
  const [description, setDescription] = useState('')
  const [images, setImages] = useState<string[]>([])
  const [newImageUrl, setNewImageUrl] = useState('')
  const [active, setActive] = useState(true)

  const [uploadingImage, setUploadingImage] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const eventImageInputRef = useRef<HTMLInputElement>(null)

  function resetForm() {
    setTitle('')
    setLocation('')
    setEventDate('')
    setDescription('')
    setImages([])
    setNewImageUrl('')
    setActive(true)
    setEditingEvent(null)
    setError(null)
    setSuccess(null)
  }

  function openCreateForm() {
    resetForm()
    setShowForm(true)
  }

  function openEditForm(event: EventData) {
    setEditingEvent(event)
    setTitle(event.title)
    setLocation(event.location)
    setDescription(event.description || '')
    setImages(
      event.images && event.images.length > 0
        ? event.images
        : event.image
          ? [event.image]
          : [],
    )
    setNewImageUrl('')
    setActive(event.active)
    setEventDate(new Date(event.eventDate).toISOString().slice(0, 10))
    setError(null)
    setSuccess(null)
    setShowForm(true)
  }

  function closeForm() {
    setShowForm(false)
    resetForm()
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    setSuccess(null)

    const payload = {
      title,
      location,
      eventDate,
      description: description || null,
      images,
      image: images[0] || null,
      active,
    }

    try {
      const url = editingEvent
        ? `/api/events/${editingEvent.id}`
        : '/api/events'
      const method = editingEvent ? 'PUT' : 'POST'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const json = await res.json()
      if (!res.ok) {
        setError(json.error || 'Failed to save event')
      } else {
        setSuccess(
          editingEvent
            ? 'Event updated successfully'
            : 'Event created successfully',
        )
        await onRefresh()
        setTimeout(() => {
          closeForm()
        }, 700)
      }
    } catch {
      setError('Something went wrong')
    }

    setSubmitting(false)
  }

  async function handleEventImageUpload(
    e: React.ChangeEvent<HTMLInputElement>,
  ) {
    setUploadingImage(true)
    setError(null)
    try {
      const files = Array.from(e.target.files || [])
      if (files.length === 0) {
        setUploadingImage(false)
        return
      }

      const uploadedUrls: string[] = []

      for (const file of files) {
        const formData = new FormData()
        formData.append('file', file)

        const res = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })
        const json = await res.json()

        if (!res.ok) {
          setError(json.error || 'Image upload failed')
          break
        }

        uploadedUrls.push(json.url)
      }

      if (uploadedUrls.length > 0) {
        setImages((prev) => [...prev, ...uploadedUrls])
      }
    } catch {
      setError('Image upload failed')
    }

    setUploadingImage(false)
  }

  function handleAddImageUrl() {
    const value = newImageUrl.trim()
    if (!value) return
    setImages((prev) => [...prev, value])
    setNewImageUrl('')
  }

  function removeImageAt(index: number) {
    setImages((prev) =>
      prev.filter((_, currentIndex) => currentIndex !== index),
    )
  }

  async function handleDeleteEvent(id: string) {
    if (!confirm('Are you sure you want to delete this event?')) return

    setDeletingEventId(id)
    setError(null)
    setSuccess(null)
    try {
      const res = await fetch(`/api/events/${id}`, { method: 'DELETE' })
      const json = await res.json()

      if (!res.ok) {
        setError(json.error || 'Failed to delete event')
      } else {
        await onRefresh()
      }
    } catch {
      setError('Failed to delete event')
    }

    setDeletingEventId(null)
  }

  return (
    <div className='bg-white rounded-xl border border-gray-200 overflow-hidden mt-8'>
      <div className='px-6 py-4 border-b border-gray-100 flex items-center justify-between'>
        <h2 className='text-lg font-semibold text-gray-900'>
          Events ({events.length})
        </h2>
        <button
          type='button'
          onClick={showForm ? closeForm : openCreateForm}
          className='inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors'
        >
          {showForm ? <X size={14} /> : <Plus size={14} />}
          {showForm ? 'Cancel' : 'Add Event'}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className='p-6 border-b border-gray-100 space-y-5'
        >
          {error && (
            <div className='bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm'>
              {error}
            </div>
          )}
          {success && (
            <div className='bg-green-50 text-green-700 px-4 py-3 rounded-lg text-sm'>
              {success}
            </div>
          )}

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='md:col-span-2'>
              <label className='block text-sm font-medium text-gray-700 mb-1.5'>
                Title *
              </label>
              <input
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Event title'
                className='w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none'
              />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1.5'>
                Date *
              </label>
              <input
                type='date'
                required
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className='w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none'
              />
            </div>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1.5'>
              Location *
            </label>
            <input
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder='City, Country'
              className='w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1.5'>
              Description
            </label>
            <RichTextEditor
              value={description}
              onChange={setDescription}
              placeholder='Add event details with formatting...'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1.5'>
              Event Images
            </label>
            <div className='space-y-3'>
              <div className='flex items-start gap-4'>
                <button
                  type='button'
                  onClick={() => eventImageInputRef.current?.click()}
                  disabled={uploadingImage}
                  className='w-24 h-24 shrink-0 flex flex-col items-center justify-center gap-1 border-2 border-dashed border-gray-200 rounded-lg text-gray-400 hover:border-gray-400 hover:text-gray-500 transition-colors disabled:opacity-50'
                >
                  {uploadingImage ? (
                    <Loader2 size={20} className='animate-spin' />
                  ) : (
                    <>
                      <Upload size={20} />
                      <span className='text-[10px]'>Upload</span>
                    </>
                  )}
                </button>
                <input
                  ref={eventImageInputRef}
                  type='file'
                  accept='image/*'
                  multiple
                  onChange={handleEventImageUpload}
                  className='hidden'
                />
                <div className='flex-1 space-y-2'>
                  <div className='flex gap-2'>
                    <input
                      value={newImageUrl}
                      onChange={(e) => setNewImageUrl(e.target.value)}
                      placeholder='Or paste image URL...'
                      className='w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none'
                    />
                    <button
                      type='button'
                      onClick={handleAddImageUrl}
                      disabled={!newImageUrl.trim()}
                      className='px-3 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors'
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <input
                    value={images.join('\n')}
                    onChange={(e) =>
                      setImages(
                        e.target.value
                          .split('\n')
                          .map((value) => value.trim())
                          .filter(Boolean),
                      )
                    }
                    placeholder='One image URL per line...'
                    className='w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none'
                  />
                </div>
              </div>
              {images.length > 0 && (
                <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                  {images.map((image, index) => (
                    <div
                      key={`${image}-${index}`}
                      className='relative w-full aspect-square rounded-lg border border-gray-200 overflow-hidden bg-gray-50'
                    >
                      <Image
                        src={image}
                        alt={`Event image ${index + 1}`}
                        fill
                        className='object-cover'
                        sizes='160px'
                      />
                      <button
                        type='button'
                        onClick={() => removeImageAt(index)}
                        className='absolute top-1 right-1 p-0.5 bg-white rounded-full border border-gray-200 hover:bg-gray-50'
                      >
                        <X size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className='flex items-center gap-3'>
            <button
              type='button'
              onClick={() => setActive((prev) => !prev)}
              className={`relative w-11 h-6 rounded-full transition-colors ${
                active ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                  active ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className='text-sm text-gray-700'>
              {active ? 'Active' : 'Inactive'}
            </span>
          </div>

          <div className='flex justify-end gap-3'>
            <button
              type='button'
              onClick={closeForm}
              className='px-5 py-2.5 border border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors'
            >
              Cancel
            </button>
            <button
              type='submit'
              disabled={submitting || !title || !location || !eventDate}
              className='inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors'
            >
              {submitting ? (
                <>
                  <Loader2 size={16} className='animate-spin' /> Saving...
                </>
              ) : editingEvent ? (
                'Update Event'
              ) : (
                'Create Event'
              )}
            </button>
          </div>
        </form>
      )}

      {events.length === 0 ? (
        <div className='text-center py-12 text-gray-400 text-sm'>
          No events found. Add your first event.
        </div>
      ) : (
        <div className='overflow-x-auto'>
          <table className='w-full text-sm'>
            <thead>
              <tr className='bg-gray-50 text-left text-gray-500 font-medium'>
                <th className='px-6 py-3'>Date</th>
                <th className='px-6 py-3'>Title</th>
                <th className='px-6 py-3'>Location</th>
                <th className='px-6 py-3'>Status</th>
                <th className='px-6 py-3 text-right'>Actions</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-100'>
              {events.map((event) => (
                <tr key={event.id} className='hover:bg-gray-50/50'>
                  <td className='px-6 py-3 text-gray-500'>
                    {new Date(event.eventDate).toLocaleDateString()}
                  </td>
                  <td className='px-6 py-3'>
                    <p className='font-medium text-gray-900'>{event.title}</p>
                    {event.description && (
                      <p className='text-gray-400 text-xs mt-0.5 line-clamp-1'>
                        {richTextToPlainText(event.description)}
                      </p>
                    )}
                  </td>
                  <td className='px-6 py-3 text-gray-500'>{event.location}</td>
                  <td className='px-6 py-3'>
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                        event.active
                          ? 'bg-green-50 text-green-700'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {event.active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className='px-6 py-3'>
                    <div className='flex items-center justify-end gap-1'>
                      <button
                        type='button'
                        onClick={() => openEditForm(event)}
                        className='p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors'
                        title='Edit'
                      >
                        <Pencil size={15} />
                      </button>
                      <button
                        type='button'
                        onClick={() => handleDeleteEvent(event.id)}
                        disabled={deletingEventId === event.id}
                        className='p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-40'
                        title='Delete'
                      >
                        {deletingEventId === event.id ? (
                          <Loader2 size={15} className='animate-spin' />
                        ) : (
                          <Trash2 size={15} />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

function RichTextEditor({
  value,
  onChange,
  placeholder,
}: {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}) {
  const editorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const editor = editorRef.current
    if (!editor) return
    if (editor.innerHTML !== value) {
      editor.innerHTML = value
    }
  }, [value])

  function execCommand(command: string, commandValue?: string) {
    editorRef.current?.focus()
    document.execCommand(command, false, commandValue)
    onChange(editorRef.current?.innerHTML || '')
  }

  function handleAddLink() {
    const link = window.prompt('Enter URL')
    if (!link) return
    execCommand('createLink', link)
  }

  return (
    <div className='border border-gray-200 rounded-lg overflow-hidden'>
      <div className='flex flex-wrap items-center gap-1 p-2 border-b border-gray-200 bg-gray-50'>
        <button
          type='button'
          onClick={() => execCommand('bold')}
          className='px-2 py-1 text-xs font-semibold border border-gray-200 rounded bg-white hover:bg-gray-100'
          title='Bold'
        >
          B
        </button>
        <button
          type='button'
          onClick={() => execCommand('italic')}
          className='px-2 py-1 text-xs italic border border-gray-200 rounded bg-white hover:bg-gray-100'
          title='Italic'
        >
          I
        </button>
        <button
          type='button'
          onClick={() => execCommand('underline')}
          className='px-2 py-1 text-xs underline border border-gray-200 rounded bg-white hover:bg-gray-100'
          title='Underline'
        >
          U
        </button>
        <button
          type='button'
          onClick={() => execCommand('insertUnorderedList')}
          className='px-2 py-1 text-xs border border-gray-200 rounded bg-white hover:bg-gray-100'
          title='Bulleted list'
        >
          • List
        </button>
        <button
          type='button'
          onClick={() => execCommand('insertOrderedList')}
          className='px-2 py-1 text-xs border border-gray-200 rounded bg-white hover:bg-gray-100'
          title='Numbered list'
        >
          1. List
        </button>
        <button
          type='button'
          onClick={() => execCommand('formatBlock', 'h3')}
          className='px-2 py-1 text-xs border border-gray-200 rounded bg-white hover:bg-gray-100'
          title='Heading'
        >
          H3
        </button>
        <button
          type='button'
          onClick={() => execCommand('formatBlock', 'p')}
          className='px-2 py-1 text-xs border border-gray-200 rounded bg-white hover:bg-gray-100'
          title='Paragraph'
        >
          P
        </button>
        <button
          type='button'
          onClick={handleAddLink}
          className='px-2 py-1 text-xs border border-gray-200 rounded bg-white hover:bg-gray-100'
          title='Link'
        >
          Link
        </button>
      </div>

      <div className='relative'>
        {isRichTextEmpty(value) && (
          <span className='absolute top-2 left-3 text-sm text-gray-400 pointer-events-none'>
            {placeholder || 'Write description...'}
          </span>
        )}
        <div
          ref={editorRef}
          contentEditable
          onInput={(e) =>
            onChange((e.currentTarget as HTMLDivElement).innerHTML)
          }
          className='min-h-32.5 px-3 py-2.5 text-sm focus:outline-none [&_h3]:text-lg [&_h3]:font-bold [&_h3]:mt-2 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mb-2'
          suppressContentEditableWarning
        />
      </div>
    </div>
  )
}
