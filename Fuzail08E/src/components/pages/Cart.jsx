import React, { useState } from 'react'
import { ShoppingBag, X, Minus, Plus, Trash2, Tag } from 'lucide-react'

export default function Cart({ isOpen, onClose, items = [], onUpdateQty, onRemoveItem }) {
  const [promo, setPromo] = useState('')
  const [promoApplied, setPromoApplied] = useState(false)

  const applyPromo = (e) => {
    e.preventDefault()
    if (promo.trim().toLowerCase() === 'save10') setPromoApplied(true)
  }

  const totalQty = items.reduce((n, it) => n + it.qty, 0)
  const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0)
  const discount = promoApplied ? subtotal * 0.1 : 0
  const shipping = items.length > 0 ? 6.99 : 0
  const tax = (subtotal - discount) * 0.08
  const total = subtotal - discount + shipping + tax

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 transition-opacity"
          style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
          onClick={onClose}
        />
      )}

      {/* Slide-in cart drawer */}
      <div
        className="fixed top-0 right-0 h-full z-40 flex flex-col shadow-2xl transition-transform duration-300 ease-out"
        style={{
          width: 'min(420px, 100vw)',
          backgroundColor: '#FFFFFF',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-5 py-4 border-b"
          style={{ borderColor: '#D2C1B6' }}
        >
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} style={{ color: '#1B3C53' }} />
            <h2 className="font-bold text-base" style={{ color: '#1B3C53' }}>
              Your cart ({totalQty})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:opacity-70"
            style={{ color: '#1B3C53' }}
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items list */}
        <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4">
          {items.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center gap-2 opacity-60">
              <ShoppingBag size={32} style={{ color: '#1B3C53' }} />
              <p className="text-sm" style={{ color: '#1B3C53' }}>
                Your cart is empty.
              </p>
            </div>
          )}

          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 rounded-xl p-3"
              style={{ backgroundColor: '#D2C1B6' }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm truncate" style={{ color: '#1B3C53' }}>
                  {item.name}
                </h3>
                <p className="text-xs opacity-70" style={{ color: '#1B3C53' }}>
                  {item.variant}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <div
                    className="flex items-center gap-2 rounded-full px-1.5 py-0.5"
                    style={{ backgroundColor: '#1B3C53' }}
                  >
                    <button
                      onClick={() => onUpdateQty(item.id, -1)}
                      className="w-6 h-6 flex items-center justify-center rounded-full hover:opacity-80"
                      style={{ color: '#E1AD01' }}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="w-4 text-center text-xs font-semibold" style={{ color: '#FFFFFF' }}>
                      {item.qty}
                    </span>
                    <button
                      onClick={() => onUpdateQty(item.id, 1)}
                      className="w-6 h-6 flex items-center justify-center rounded-full hover:opacity-80"
                      style={{ color: '#E1AD01' }}
                      aria-label="Increase quantity"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                  <span className="font-bold text-sm" style={{ color: '#1B3C53' }}>
                    ${(item.price * item.qty).toFixed(2)}
                  </span>
                </div>
              </div>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="self-start text-cyan-600 hover:opacity-80"
                aria-label="Remove item"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Footer / summary */}
        {items.length > 0 && (
          <div className="px-5 py-4 border-t flex flex-col gap-3" style={{ borderColor: '#D2C1B6' }}>
            <form onSubmit={applyPromo}>
              <div className="flex gap-2">
                <div
                  className="flex items-center gap-2 flex-1 rounded-lg px-3 border"
                  style={{ borderColor: '#D2C1B6' }}
                >
                  <Tag size={13} style={{ color: '#1B3C53' }} className="opacity-60" />
                  <input
                    type="text"
                    value={promo}
                    onChange={(e) => setPromo(e.target.value)}
                    placeholder="Try SAVE10"
                    className="w-full py-2 text-sm outline-none bg-transparent"
                    style={{ color: '#1B3C53' }}
                  />
                </div>
                <button
                  type="submit"
                  className="px-3 rounded-lg text-xs font-semibold"
                  style={{ backgroundColor: '#D2C1B6', color: '#1B3C53' }}
                >
                  Apply
                </button>
              </div>
              {promoApplied && <p className="text-xs mt-1 text-cyan-600">Promo code applied!</p>}
            </form>

            <div className="flex flex-col gap-1.5 text-sm" style={{ color: '#1B3C53' }}>
              <div className="flex justify-between">
                <span className="opacity-70">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              {promoApplied && (
                <div className="flex justify-between">
                  <span className="opacity-70">Discount (10%)</span>
                  <span className="font-medium" style={{ color: '#0e7490' }}>
                    -${discount.toFixed(2)}
                  </span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="opacity-70">Shipping</span>
                <span className="font-medium">${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-70">Estimated tax</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div
                className="border-t pt-2 mt-1 flex justify-between items-center"
                style={{ borderColor: '#D2C1B6' }}
              >
                <span className="font-bold">Total</span>
                <span className="font-bold text-lg">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              className="w-full py-3 rounded-xl font-bold text-sm transition-transform active:scale-[0.98]"
              style={{ backgroundColor: '#E1AD01', color: '#000000' }}
            >
              Proceed to checkout
            </button>
          </div>
        )}
      </div>
    </>
  )
}
