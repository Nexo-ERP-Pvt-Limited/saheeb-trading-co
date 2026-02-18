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
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingProduct, setEditingProduct] = useState<ProductData | null>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  useEffect(() => {
    fetchAll()
  }, [])

  async function fetchAll() {
    setLoading(true)
    try {
      const [catRes, prodRes] = await Promise.all([
        fetch('/api/categories'),
        fetch('/api/products'),
      ])
      const catJson = await catRes.json()
      const prodJson = await prodRes.json()
      setCategories(catJson.data || [])
      setProducts(Array.isArray(prodJson) ? prodJson : [])
    } catch {
      // silent
    }
    setLoading(false)
  }

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

  const [subCategories, setSubCategories] = useState<SubCategoryData[]>(() => {
    if (!selectedCategoryId) return []
    const cat = categories.find((c) => c.id === selectedCategoryId)
    return cat?.subcategories || []
  })
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(
    editingProduct?.subCategoryId || '',
  )
  const [newSubCategoryName, setNewSubCategoryName] = useState('')
  const [creatingSubCategory, setCreatingSubCategory] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  // Update sub-categories when category changes
  useEffect(() => {
    if (selectedCategoryId) {
      const cat = categories.find((c) => c.id === selectedCategoryId)
      setSubCategories(cat?.subcategories || [])
      // Only reset sub-category if not editing or category changed
      if (!isEdit) setSelectedSubCategoryId('')
    } else {
      setSubCategories([])
      setSelectedSubCategoryId('')
    }
  }, [selectedCategoryId, categories, isEdit])

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
        const subRes = await fetch(
          `/api/subcategories?categoryId=${selectedCategoryId}`,
        )
        const subJson = await subRes.json()
        setSubCategories(subJson.data || [])
        setSelectedSubCategoryId(json.data.id)
        setNewSubCategoryName('')
      }
    } catch {
      // silent
    }
    setCreatingSubCategory(false)
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
          <label className='block text-sm font-medium text-gray-700 mb-1.5'>
            Category
          </label>
          <select
            value={selectedCategoryId}
            onChange={(e) => setSelectedCategoryId(e.target.value)}
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
          <label className='block text-sm font-medium text-gray-700 mb-1.5'>
            Sub-Category
          </label>
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
