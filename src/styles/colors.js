// Professional Color Scheme for E-Commerce Platform
export const COLORS = {
  // Primary Colors - Professional Blue
  primary: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  },
  
  // Secondary Colors - Indigo for accents
  secondary: {
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca",
  },
  
  // Success
  success: {
    500: "#10b981",
    600: "#059669",
  },
  
  // Warning
  warning: {
    500: "#f59e0b",
    600: "#d97706",
  },
  
  // Error
  error: {
    500: "#ef4444",
    600: "#dc2626",
  },
  
  // Neutrals
  neutral: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
};

// CSS Class Shortcuts for Tailwind
export const STYLES = {
  button: {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-indigo-600 hover:bg-indigo-700 text-white",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
  },
  card: "bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow",
  badge: "inline-block px-3 py-1 rounded-full text-sm font-semibold",
  section: "py-16 bg-white",
  sectionAlt: "py-16 bg-gray-50",
};
