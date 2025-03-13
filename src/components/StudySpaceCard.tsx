import "../styles/StudySpaceCard.css";

// Define the type for a study space
interface StudySpace {
  id: number;
  name: string;
  location: string;
  occupancy: number;
  openingHours: string;
  amenities: string[];
  imageUrl: string;
}

interface StudySpaceCardProps {
  space: StudySpace;
}

export default function StudySpaceCard({ space }: StudySpaceCardProps) {
  // Function to determine occupancy status and color
  const getOccupancyStatus = (percentage: number) => {
    if (percentage < 40) {
      return { status: "Low Occupancy", className: "occupancy-low" };
    } else if (percentage < 75) {
      return { status: "Moderate Occupancy", className: "occupancy-moderate" };
    } else {
      return { status: "High Occupancy", className: "occupancy-high" };
    }
  };

  const occupancyInfo = getOccupancyStatus(space.occupancy);

  return (
    <div className="study-space-card">
      <div className="card-image-container">
        <img
          src={space.imageUrl || "/placeholder.svg"}
          alt={space.name}
          className="card-image"
        />
        <div className="occupancy-badge-container">
          <span className={`occupancy-badge ${occupancyInfo.className}`}>
            {occupancyInfo.status}
          </span>
        </div>
      </div>

      <div className="card-header">
        <h3 className="card-title">{space.name}</h3>
        <p className="card-location">{space.location}</p>
      </div>

      <div className="card-content">
        <div className="occupancy-container">
          <div className="occupancy-label-container">
            <span className="occupancy-label">Occupancy</span>
            <span className="occupancy-percentage">{space.occupancy}%</span>
          </div>
          <div className="occupancy-bar">
            <div
              className={`occupancy-fill ${occupancyInfo.className}`}
              style={{ width: `${space.occupancy}%` }}
            />
          </div>
        </div>

        <p className="opening-hours">
          <span className="label">Hours:</span> {space.openingHours}
        </p>

        <div className="amenities-container">
          {space.amenities.map((amenity, index) => (
            <span key={index} className="amenity-badge">
              {amenity}
            </span>
          ))}
        </div>
      </div>

      <div className="card-footer">
        <button className="details-button">View Details</button>
      </div>
    </div>
  );
}
