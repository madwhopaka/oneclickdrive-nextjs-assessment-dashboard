
export interface Listing  {
  id: string
  title: string
  description: string
  make: string
  model: string
  year: number
  pricePerDay: number
  location: string
  imageUrl: string
  status: 'Pending' | 'Approved' | 'Rejected'
  submittedBy: string
  submittedAt: string
  reviewedBy?: string
  reviewedAt?: string
  features: string[]
}

export const listingData: Listing[] = [
  {
    id: "1",
    title: "2020 Tesla A4 - Sport Edition",
    description: "Detailed description for Tesla A4. Includes Bluetooth, Heated Seats, All-Wheel Drive.",
    make: "Tesla",
    model: "A4",
    year: 2020,
    pricePerDay: 122,
    location: "Miami, FL",
    imageUrl: "/placeholder.svg?height=200&width=300",
    status: "Pending",
    submittedBy: "user1@email.com",
    submittedAt: "2025-07-11T05:36:59.125Z",
    reviewedBy: undefined,
    reviewedAt: undefined,
    features: ["Bluetooth", "Heated Seats", "All-Wheel Drive"]
  },
  {
    id: "2",
    title: "2021 BMW F-150 - Luxury",
    description: "Detailed description for BMW F-150. Includes Navigation, Heated Seats, Bluetooth.",
    make: "BMW",
    model: "F-150",
    year: 2021,
    pricePerDay: 88,
    location: "Austin, TX",
    imageUrl: "/placeholder.svg?height=200&width=300",
    status: "Approved",
    submittedBy: "user2@email.com",
    submittedAt: "2025-07-10T05:36:59.125Z",
    reviewedBy: "admin@company.com",
    reviewedAt: "2025-07-10T06:56:59.125Z",
    features: ["Navigation", "Heated Seats", "Bluetooth"]
  },
  {
    id: "3",
    title: "2022 Tesla X5 - Reliable",
    description: "Detailed description for Tesla X5. Includes Backup Camera, Navigation, All-Wheel Drive.",
    make: "Tesla",
    model: "X5",
    year: 2022,
    pricePerDay: 77,
    location: "New York, NY",
    imageUrl: "/placeholder.svg?height=200&width=300",
    status: "Rejected",
    submittedBy: "user3@email.com",
    submittedAt: "2025-07-09T05:36:59.125Z",
    reviewedBy: "admin@company.com",
    reviewedAt: "2025-07-09T08:16:59.125Z",
    features: ["Backup Camera", "Navigation", "All-Wheel Drive"]
  },
  {
    id: "4",
    title: "2023 Audi Civic - Sport Edition",
    description: "Detailed description for Audi Civic. Includes Leather Seats, Sunroof, Bluetooth.",
    make: "Audi",
    model: "Civic",
    year: 2023,
    pricePerDay: 108,
    location: "Chicago, IL",
    imageUrl: "/placeholder.svg?height=200&width=300",
    status: "Pending",
    submittedBy: "user4@email.com",
    submittedAt: "2025-07-08T05:36:59.125Z",
    reviewedBy: undefined,
    reviewedAt: undefined,
    features: ["Leather Seats", "Sunroof", "Bluetooth"]
  },
  {
    id: "5",
    title: "2024 Toyota Model 3 - Luxury",
    description: "Detailed description for Toyota Model 3. Includes Bluetooth, Backup Camera, Leather Seats.",
    make: "Toyota",
    model: "Model 3",
    year: 2024,
    pricePerDay: 90,
    location: "Los Angeles, CA",
    imageUrl: "/placeholder.svg?height=200&width=300",
    status: "Approved",
    submittedBy: "user5@email.com",
    submittedAt: "2025-07-07T05:36:59.125Z",
    reviewedBy: "admin@company.com",
    reviewedAt: "2025-07-07T09:36:59.125Z",
    features: ["Bluetooth", "Backup Camera", "Leather Seats"]
  },
  {
    id: "6",
    title: "2020 Ford Corolla - Reliable",
    description: "Detailed description for Ford Corolla. Includes Heated Seats, Sunroof, Navigation.",
    make: "Ford",
    model: "Corolla",
    year: 2020,
    pricePerDay: 105,
    location: "Austin, TX",
    imageUrl: "/placeholder.svg?height=200&width=300",
    status: "Rejected",
    submittedBy: "user6@email.com",
    submittedAt: "2025-07-06T05:36:59.125Z",
    reviewedBy: "admin@company.com",
    reviewedAt: "2025-07-06T10:56:59.125Z",
    features: ["Heated Seats", "Sunroof", "Navigation"]
  },
  {
    id: "7",
    title: "2021 Honda X5 - Sport Edition",
    description: "Detailed description for Honda X5. Includes Bluetooth, Leather Seats, Heated Seats.",
    make: "Honda",
    model: "X5",
    year: 2021,
    pricePerDay: 95,
    location: "Miami, FL",
    imageUrl: "/placeholder.svg?height=200&width=300",
    status: "Pending",
    submittedBy: "user7@email.com",
    submittedAt: "2025-07-05T05:36:59.125Z",
    reviewedBy: undefined,
    reviewedAt: undefined,
    features: ["Bluetooth", "Leather Seats", "Heated Seats"]
  },
  {
    id: "8",
    title: "2022 Tesla A4 - Luxury",
    description: "Detailed description for Tesla A4. Includes Backup Camera, Sunroof, All-Wheel Drive.",
    make: "Tesla",
    model: "A4",
    year: 2022,
    pricePerDay: 115,
    location: "Los Angeles, CA",
    imageUrl: "/placeholder.svg?height=200&width=300",
    status: "Approved",
    submittedBy: "user8@email.com",
    submittedAt: "2025-07-04T05:36:59.125Z",
    reviewedBy: "admin@company.com",
    reviewedAt: "2025-07-04T12:16:59.125Z",
    features: ["Backup Camera", "Sunroof", "All-Wheel Drive"]
  },
  {
    id: "9",
    title: "2023 BMW Civic - Reliable",
    description: "Detailed description for BMW Civic. Includes Navigation, Bluetooth, Leather Seats.",
    make: "BMW",
    model: "Civic",
    year: 2023,
    pricePerDay: 84,
    location: "Chicago, IL",
    imageUrl: "/placeholder.svg?height=200&width=300",
    status: "Rejected",
    submittedBy: "user9@email.com",
    submittedAt: "2025-07-03T05:36:59.125Z",
    reviewedBy: "admin@company.com",
    reviewedAt: "2025-07-03T13:36:59.125Z",
    features: ["Navigation", "Bluetooth", "Leather Seats"]
  },
  {
    id: "10",
    title: "2024 Audi F-150 - Sport Edition",
    description: "Detailed description for Audi F-150. Includes Heated Seats, Backup Camera, Navigation.",
    make: "Audi",
    model: "F-150",
    year: 2024,
    pricePerDay: 100,
    location: "Austin, TX",
    imageUrl: "/placeholder.svg?height=200&width=300",
    status: "Pending",
    submittedBy: "user10@email.com",
    submittedAt: "2025-07-02T05:36:59.125Z",
    reviewedBy: undefined,
    reviewedAt: undefined,
    features: ["Heated Seats", "Backup Camera", "Navigation"]
  },
  {
    id: "11",
    title: "2020 Ford Corolla - Luxury",
    description: "Detailed description for Ford Corolla. Includes Sunroof, Bluetooth, All-Wheel Drive.",
    make: "Ford",
    model: "Corolla",
    year: 2020,
    pricePerDay: 91,
    location: "Miami, FL",
    imageUrl: "/placeholder.svg?height=200&width=300",
    status: "Approved",
    submittedBy: "user11@email.com",
    submittedAt: "2025-07-01T05:36:59.125Z",
    reviewedBy: "admin@company.com",
    reviewedAt: "2025-07-01T14:56:59.125Z",
    features: ["Sunroof", "Bluetooth", "All-Wheel Drive"]
  },
  {
    id: "12",
    title: "2021 Toyota Civic - Reliable",
    description: "Detailed description for Toyota Civic. Includes Heated Seats, Leather Seats, Navigation.",
    make: "Toyota",
    model: "Civic",
    year: 2021,
    pricePerDay: 87,
    location: "New York, NY",
    imageUrl: "/placeholder.svg?height=200&width=300",
    status: "Rejected",
    submittedBy: "user12@email.com",
    submittedAt: "2025-06-30T05:36:59.125Z",
    reviewedBy: "admin@company.com",
    reviewedAt: "2025-06-30T16:16:59.125Z",
    features: ["Heated Seats", "Leather Seats", "Navigation"]
  },
  {
    id: "13",
    title: "2022 Honda X5 - Sport Edition",
    description: "Detailed description for Honda X5. Includes Bluetooth, Sunroof, Heated Seats.",
    make: "Honda",
    model: "X5",
    year: 2022,
    pricePerDay: 78,
    location: "Chicago, IL",
    imageUrl: "/placeholder.svg?height=200&width=300",
    status: "Pending",
    submittedBy: "user13@email.com",
    submittedAt: "2025-06-29T05:36:59.125Z",
    reviewedBy: undefined,
    reviewedAt: undefined,
    features: ["Bluetooth", "Sunroof", "Heated Seats"]
  },
  {
    id: "14",
    title: "2023 BMW A4 - Luxury",
    description: "Detailed description for BMW A4. Includes Navigation, Leather Seats, All-Wheel Drive.",
    make: "BMW",
    model: "A4",
    year: 2023,
    pricePerDay: 113,
    location: "Los Angeles, CA",
    imageUrl: "/placeholder.svg?height=200&width=300",
    status: "Approved",
    submittedBy: "user14@email.com",
    submittedAt: "2025-06-28T05:36:59.125Z",
    reviewedBy: "admin@company.com",
    reviewedAt: "2025-06-28T17:36:59.125Z",
    features: ["Navigation", "Leather Seats", "All-Wheel Drive"]
  },
  {
    id: "15",
    title: "2024 Audi Model 3 - Reliable",
    description: "Detailed description for Audi Model 3. Includes Backup Camera, Bluetooth, Heated Seats.",
    make: "Audi",
    model: "Model 3",
    year: 2024,
    pricePerDay: 93,
    location: "Austin, TX",
    imageUrl: "/placeholder.svg?height=200&width=300",
    status: "Rejected",
    submittedBy: "user15@email.com",
    submittedAt: "2025-06-27T05:36:59.125Z",
    reviewedBy: "admin@company.com",
    reviewedAt: "2025-06-27T18:56:59.125Z",
    features: ["Backup Camera", "Bluetooth", "Heated Seats"]
  },
  {
    id: "16",
    title: "2020 Tesla Corolla - Sport Edition",
    description: "Detailed description for Tesla Corolla. Includes Navigation, All-Wheel Drive, Leather Seats.",
    make: "Tesla",
    model: "Corolla",
    year: 2020,
    pricePerDay: 104,
    location: "Chicago, IL",
    imageUrl: "/placeholder.svg?height=200&width=300",
    status: "Pending",
    submittedBy: "user16@email.com",
    submittedAt: "2025-06-26T05:36:59.125Z",
    reviewedBy: undefined,
    reviewedAt: undefined,
    features: ["Navigation", "All-Wheel Drive", "Leather Seats"]
  },
  {
    id: "17",
    title: "2021 Honda Civic - Luxury",
    description: "Detailed description for Honda Civic. Includes Heated Seats, Bluetooth, Sunroof.",
    make: "Honda",
    model: "Civic",
    year: 2021,
    pricePerDay: 97,
    location: "New York, NY",
    imageUrl: "/placeholder.svg?height=200&width=300",
    status: "Approved",
    submittedBy: "user17@email.com",
    submittedAt: "2025-06-25T05:36:59.125Z",
    reviewedBy: "admin@company.com",
    reviewedAt: "2025-06-25T20:16:59.125Z",
    features: ["Heated Seats", "Bluetooth", "Sunroof"]
  },
  {
    id: "18",
    title: "2022 Ford F-150 - Reliable",
    description: "Detailed description for Ford F-150. Includes Leather Seats, Backup Camera, Navigation.",
    make: "Ford",
    model: "F-150",
    year: 2022,
    pricePerDay: 101,
    location: "Miami, FL",
    imageUrl: "/placeholder.svg?height=200&width=300",
    status: "Rejected",
    submittedBy: "user18@email.com",
    submittedAt: "2025-06-24T05:36:59.125Z",
    reviewedBy: "admin@company.com",
    reviewedAt: "2025-06-24T21:36:59.125Z",
    features: ["Leather Seats", "Backup Camera", "Navigation"]
  },
  {
    id: "19",
    title: "2023 Toyota Model 3 - Sport Edition",
    description: "Detailed description for Toyota Model 3. Includes All-Wheel Drive, Bluetooth, Heated Seats.",
    make: "Toyota",
    model: "Model 3",
    year: 2023,
    pricePerDay: 82,
    location: "Austin, TX",
    imageUrl: "/placeholder.svg?height=200&width=300",
    status: "Pending",
    submittedBy: "user19@email.com",
    submittedAt: "2025-06-23T05:36:59.125Z",
    reviewedBy: undefined,
    reviewedAt: undefined,
    features: ["All-Wheel Drive", "Bluetooth", "Heated Seats"]
  },
  {
    id: "20",
    title: "2024 Audi X5 - Luxury",
    description: "Detailed description for Audi X5. Includes Navigation, Sunroof, Bluetooth.",
    make: "Audi",
    model: "X5",
    year: 2024,
    pricePerDay: 120,
    location: "Los Angeles, CA",
    imageUrl: "/placeholder.svg?height=200&width=300",
    status: "Approved",
    submittedBy: "user20@email.com",
    submittedAt: "2025-06-22T05:36:59.125Z",
    reviewedBy: "admin@company.com",
    reviewedAt: "2025-06-22T22:56:59.125Z",
    features: ["Navigation", "Sunroof", "Bluetooth"]
  }
]



export async function getLocalListings(): Promise<Listing[]> {
  if (typeof window === 'undefined') return []

  const cached = localStorage.getItem('car-listings')
  if (cached) return JSON.parse(cached)

  // Fallback to API
  const res = await fetch('/api/listings?page=1&limit=1000')
  const { listings } = await res.json()
  localStorage.setItem('car-listings', JSON.stringify(listings))
  return listings
}


export function setLocalListings(listings: Listing[]) {
  if (typeof window === 'undefined') return
  localStorage.setItem('car-listings', JSON.stringify(listings))
}

export async function updateLocalListing(id: string, updatedData: Partial<Listing>) {
  const listings = await getLocalListings()
  const index = listings.findIndex(item => item.id === id)
  console.log(updatedData, id)
  if (index !== -1) {
    listings[index] = { ...listings[index], ...updatedData }
    setLocalListings(listings)

    // Also persist to API
    await fetch(`/api/listings/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData),
    })
  }
}