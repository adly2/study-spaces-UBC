import StudySpaceCard from "./StudySpaceCard.tsx";
import "../styles/StudySpacesList.css";

// Mock data for study spaces
const studySpaces = [
  {
    id: 1,
    name: "Irving K. Barber Learning Centre",
    location: "1961 East Mall",
    occupancy: 75, // percentage
    openingHours: "7:00 AM - 1:00 AM",
    amenities: ["Power Outlets", "Wi-Fi", "Group Study Rooms", "Silent Areas"],
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "Koerner Library",
    location: "1958 Main Mall",
    occupancy: 45,
    openingHours: "8:00 AM - 9:00 PM",
    amenities: ["Power Outlets", "Wi-Fi", "Study Carrels", "Computer Labs"],
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Nest (AMS Student Union Building)",
    location: "6133 University Blvd",
    occupancy: 90,
    openingHours: "7:00 AM - 11:00 PM",
    amenities: ["Power Outlets", "Wi-Fi", "Food Services", "Lounge Areas"],
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Life Building",
    location: "6138 Student Union Blvd",
    occupancy: 30,
    openingHours: "7:00 AM - 10:00 PM",
    amenities: ["Power Outlets", "Wi-Fi", "Food Services", "Quiet Study Areas"],
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "Woodward Library",
    location: "2198 Health Sciences Mall",
    occupancy: 60,
    openingHours: "8:00 AM - 10:00 PM",
    amenities: ["Power Outlets", "Wi-Fi", "Group Study Rooms", "Silent Areas"],
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    name: "Sauder School of Business",
    location: "2053 Main Mall",
    occupancy: 50,
    openingHours: "7:00 AM - 10:00 PM",
    amenities: ["Power Outlets", "Wi-Fi", "Group Study Rooms", "Computer Labs"],
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
];

export default function StudySpacesList() {
  return (
    <section className="study-spaces-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Live Study Space Updates</h2>
          <p className="section-description">
            Check real-time occupancy levels at popular study locations across
            campus
          </p>
        </div>

        <div className="study-spaces-grid">
          {studySpaces.map((space) => (
            <StudySpaceCard key={space.id} space={space} />
          ))}
        </div>
      </div>
    </section>
  );
}
