export interface PageItem {
  isNew?: boolean
  title: string
  id?: string | number
  href: string
  target?: string
  order: number
  isDisabled: boolean | null
  isActive: boolean
  key: string
}

export interface MegaItem {
  key: string
  categoryName: string
  items: Array<{
    title: string
    subtitle?: string
    href: string
    isActive: boolean
    isDisabled: boolean
    order: number
  }>
}
export interface MegaThumbnail {
  href: string
  icon?: {
    url: string
  }
  title?: string
  subtitle?: string
}

export interface MegaCertificate {
  icon: {
    url: string
  }
  title: string
}

export interface MegaMenuItem {
  thumbnail: MegaThumbnail
  certificates: MegaCertificate[]
  items: MegaItem[]
}

export interface Page {
  isMegaItem?: boolean
  megaItem?: MegaMenuItem
  title: string
  href?: string
  order?: number
  isActive?: boolean
  isDisabled: boolean | null
  key?: string
  items?: PageItem[]
}
