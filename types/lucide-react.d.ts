declare module 'lucide-react' {
  import { ComponentType, SVGProps } from 'react'
  
  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: string | number
    color?: string
    strokeWidth?: string | number
  }
  
  export const ArrowRight: ComponentType<LucideProps>
  export const BookOpen: ComponentType<LucideProps>
  export const Zap: ComponentType<LucideProps>
  export const Users: ComponentType<LucideProps>
  export const Menu: ComponentType<LucideProps>
  export const X: ComponentType<LucideProps>
  export const LogIn: ComponentType<LucideProps>
  export const Home: ComponentType<LucideProps>
  export const Settings: ComponentType<LucideProps>
  export const ArrowLeft: ComponentType<LucideProps>
  export const Bell: ComponentType<LucideProps>
  export const Moon: ComponentType<LucideProps>
  export const Globe: ComponentType<LucideProps>
  export const ChevronLeft: ComponentType<LucideProps>
  export const Search: ComponentType<LucideProps>
  export const Calendar: ComponentType<LucideProps>
  export const Clock: ComponentType<LucideProps>
  export const User: ComponentType<LucideProps>
  export const Tag: ComponentType<LucideProps>
  export const ChevronRight: ComponentType<LucideProps>
  export const ChevronLeft: ComponentType<LucideProps>
  export const Star: ComponentType<LucideProps>
  export const CheckCircle: ComponentType<LucideProps>
  export const Code: ComponentType<LucideProps>
  export const Palette: ComponentType<LucideProps>
  export const Database: ComponentType<LucideProps>
  export const SlidersHorizontal: ComponentType<LucideProps>
  export const Share2: ComponentType<LucideProps>
  export const Facebook: ComponentType<LucideProps>
  export const Twitter: ComponentType<LucideProps>
  export const MessageCircle: ComponentType<LucideProps>
  export const MoreHorizontal: ComponentType<LucideProps>
}
