# UI Components Structure

This directory contains all reusable UI components organized by their purpose and functionality.

## 📁 Directory Structure

```
ui/
├── animations/          # Animation and visual effect components
│   ├── encrypted-text.tsx
│   ├── Intergenerational.tsx
│   ├── interactive-grid-background.tsx
│   └── index.ts
│
├── buttons/            # Button components with various styles
│   ├── GradientButton.tsx
│   ├── heroButton.tsx
│   └── index.ts
│
├── feedback/           # User feedback and status components
│   ├── TechBadge.tsx
│   ├── Toast.tsx
│   └── index.ts
│
├── layout/             # Layout and structural components
│   ├── BentoBox.tsx
│   ├── DecorativeDivider.tsx
│   └── index.ts
│
├── navigation/         # Navigation-related components
│   ├── NavigationLink.tsx
│   ├── SocialIconLink.tsx
│   ├── TimelineNav.tsx
│   └── index.ts
│
├── typography/         # Text and typography components
│   ├── SectionHeader.tsx
│   └── index.ts
│
└── index.ts           # Main barrel export file

```

## 🎨 Component Categories

### 🎬 Animations
Visual effects and animated components:
- **EncryptedText** - Text with encryption reveal animation
- **Intergenerational** - Animated word reveal with blur effects
- **InteractiveGridBackground** - Interactive grid with mouse tracking

### 🔘 Buttons
Interactive button components:
- **GradientButton** - Versatile gradient button (solid/outline variants)
- **HeroButton** - Hero section styled button with icon support

### 💬 Feedback
User feedback and status indicators:
- **Toast** - Notification toast component (success/error/info)
- **TechBadge** - Technology/skill badge display

### 📐 Layout
Structural and container components:
- **BentoBox** - Card container with hover effects
- **DecorativeDivider** - Decorative section divider with centered dot

### 🧭 Navigation
Navigation and link components:
- **NavigationLink** - Animated navigation link with line expansion
- **SocialIconLink** - Social media icon links with gradient hover
- **TimelineNav** - Vertical timeline navigation with scroll tracking

### 📝 Typography
Text-related components:
- **SectionHeader** - Section titles with decorative gradient bars

## 📦 Usage

### Import from main index (recommended)
```tsx
import { 
  GradientButton, 
  HeroButton,
  BentoBox,
  Toast 
} from "@/components/ui";
```

### Import from category index
```tsx
import { GradientButton, HeroButton } from "@/components/ui/buttons";
import { BentoBox, DecorativeDivider } from "@/components/ui/layout";
```

### Import individual components
```tsx
import { GradientButton } from "@/components/ui/buttons/GradientButton";
```

## ✨ Component Examples

### GradientButton
```tsx
// Solid variant
<GradientButton 
  href="/resume.pdf"
  download
  icon={<FaDownload />}
>
  Download Resume
</GradientButton>

// Outline variant
<GradientButton 
  onClick={handleClick}
  variant="outline"
  icon={<FaArrowUp />}
>
  Back to Top
</GradientButton>
```

### BentoBox
```tsx
<BentoBox 
  title="My Card"
  className="col-span-2"
>
  <p>Card content here</p>
</BentoBox>
```

### Toast
```tsx
{toast && (
  <Toast
    message={toast.message}
    type={toast.type}
    onClose={() => setToast(null)}
    duration={5000}
  />
)}
```

### SocialIconLink
```tsx
<SocialIconLink
  href="https://github.com/username"
  icon={<FaGithub />}
  label="GitHub"
/>
```

## 🎯 Benefits of This Structure

✅ **Organization** - Components grouped by logical function
✅ **Scalability** - Easy to add new components to appropriate categories
✅ **Maintainability** - Clear separation of concerns
✅ **Discoverability** - Intuitive structure for finding components
✅ **Clean Imports** - Barrel exports for cleaner code
✅ **Type Safety** - Full TypeScript support throughout

## 🔧 Adding New Components

1. Create component in appropriate category folder
2. Add export to category's `index.ts`
3. Export from main `ui/index.ts` if needed
4. Document usage in this README

Example:
```tsx
// 1. Create: ui/buttons/NewButton.tsx
export function NewButton() { ... }

// 2. Add to: ui/buttons/index.ts
export { NewButton } from "./NewButton";

// 3. Add to: ui/index.ts
export { NewButton } from "./buttons";
```

