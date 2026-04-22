import React, { useEffect, useState } from "react";

const visitData = {
  daywise: {
    label: "Today",
    profile: [6, 18, 14, 20, 17, 24, 22, 21],
    artwork: [2, 4, 5, 6, 5, 8, 7, 9],
    profileTotal: 142,
    artworkTotal: 46,
  },
  weekwise: {
    label: "This Week",
    profile: [28, 34, 39, 31, 42, 48, 44],
    artwork: [12, 16, 14, 19, 23, 27, 24],
    profileTotal: 266,
    artworkTotal: 135,
  },
  monthwise: {
    label: "This Month",
    profile: [92, 110, 104, 128, 134, 140, 152, 148],
    artwork: [38, 44, 48, 54, 61, 66, 72, 78],
    profileTotal: 1008,
    artworkTotal: 461,
  },
};

const quickLinks = [
  "Dashboard",
  "My Profile",
  "Add Awards And Exhibition",
  "My Artwork",
  "Order Offer Enquiry",
  "Refund Orders",
  "Remark View",
  "My Order Detail",
  "Blog",
  "Logout",
];

const studioSignals = [
  { label: "Exhibitions", value: "07" },
  { label: "Collectors", value: "58" },
  { label: "Open Queries", value: "11" },
];

const profileSetupSteps = [
  "Basic Information",
  "Contact Details",
  "Country",
  "Address",
  "Creative Role",
  "Online Presence",
  "Artist Bio",
  "Achievements",
  "Profile Image",
  "Review Profile",
];

const countryOptions = ["India", "United States", "United Kingdom", "Canada", "Australia"];

const stateOptions = [
  "Delhi",
  "Meghalaya",
  "Maharashtra",
  "Rajasthan",
  "Karnataka",
  "Uttar Pradesh",
  "Punjab",
  "Other",
];

const mediumOptions = [
  "Painter",
  "Mixed Media Artist",
  "Digital Artist",
  "Sculptor",
  "Photographer",
];

const genderOptions = ["Female", "Male", "Non-binary", "Prefer not to say"];

const defaultProfileData = {
  fullName: "Riya Rohilla",
  email: "riyarohilla112@gmail.com",
  mobile: "",
  gender: "",
  dateOfBirth: "",
  country: "India",
  state: "",
  city: "",
  postalCode: "",
  specialty: "Painter",
  yearsExperience: "",
  website: "",
  instagram: "",
  bio: "",
  achievements: "",
  profileImage: "",
};

const STORAGE_KEY = "ziguratss_admin_panel_state";

const defaultAwardsData = {
  awards: [],
  solo: [],
  group: [],
};

const defaultOfferEnquiries = [
  {
    id: 1,
    artworkName: "Monsoon Reverie I",
    customerName: "Aarav Mehta",
    offerPrice: 98000,
    date: "2026-04-21",
    isNew: true,
  },
  {
    id: 2,
    artworkName: "Silent Tides",
    customerName: "Naina Sharma",
    offerPrice: 64000,
    date: "2026-04-18",
    isNew: false,
  },
  {
    id: 3,
    artworkName: "Earthline Studies",
    customerName: "Kabir Singh",
    offerPrice: 121000,
    date: "2026-04-22",
    isNew: true,
  },
  {
    id: 4,
    artworkName: "Blue Archive",
    customerName: "Anika Das",
    offerPrice: 57000,
    date: "2026-04-15",
    isNew: false,
  },
];

const defaultRefundRequests = [
  {
    id: 1,
    orderId: "RF-1041",
    artworkName: "Cobalt Horizon",
    customerName: "Rhea Jain",
    reason: "Packaging damage during transit.",
    status: "Pending",
  },
  {
    id: 2,
    orderId: "RF-1034",
    artworkName: "Autumn Script",
    customerName: "Vikram Khanna",
    reason: "Size mismatch with approved framing request.",
    status: "Approved",
  },
  {
    id: 3,
    orderId: "RF-1019",
    artworkName: "Muted Bloom",
    customerName: "Sara Kapoor",
    reason: "Return request exceeded policy window.",
    status: "Rejected",
  },
];

const defaultRemarks = [
  {
    id: 1,
    author: "Gallery Curator",
    title: "Presentation quality",
    message: "Strong visual storytelling. The profile now feels premium and much easier to browse.",
    rating: 5,
  },
  {
    id: 2,
    author: "Collector Review",
    title: "Artwork detail clarity",
    message: "Collectors would benefit from one extra close-up image, but the composition is excellent.",
    rating: 4,
  },
  {
    id: 3,
    author: "Studio Team",
    title: "Response time",
    message: "Enquiry follow-up has improved, though commission FAQs could still be clearer.",
    rating: 4,
  },
];

const defaultOrderDetails = [
  {
    id: 1,
    orderId: "ZG-2401",
    artworkName: "Monsoon Reverie I",
    customerName: "Aarav Mehta",
    amount: 98000,
    date: "2026-04-20",
    status: "In Transit",
    address: "12 Residency Road, New Delhi",
    notes: "Collector requested a handwritten authenticity note.",
    items: ["Original canvas", "Certificate of authenticity", "Premium crate packaging"],
  },
  {
    id: 2,
    orderId: "ZG-2394",
    artworkName: "Silent Tides",
    customerName: "Naina Sharma",
    amount: 64000,
    date: "2026-04-14",
    status: "Processing",
    address: "77 Lake View, Bengaluru",
    notes: "Frame selection pending client confirmation.",
    items: ["Framed artwork", "Wall-hanging kit"],
  },
  {
    id: 3,
    orderId: "ZG-2380",
    artworkName: "Earthline Studies",
    customerName: "Kabir Singh",
    amount: 121000,
    date: "2026-04-10",
    status: "Delivered",
    address: "21 Civil Lines, Jaipur",
    notes: "Delivery confirmed by collector on April 12.",
    items: ["Original mixed media work", "Insurance document", "Gallery invoice"],
  },
];

function loadStoredDashboardState() {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}");
  } catch (error) {
    return {};
  }
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Unable to read file"));
    reader.readAsDataURL(file);
  });
}

function buildAreaPath(values, width, height, padding) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const safeRange = max - min || 1;
  const stepX = (width - padding * 2) / Math.max(values.length - 1, 1);

  return values
    .map((value, index) => {
      const x = padding + index * stepX;
      const y =
        height -
        padding -
        ((value - min) / safeRange) * (height - padding * 2);

      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
}

function buildFillPath(values, width, height, padding) {
  const linePath = buildAreaPath(values, width, height, padding);
  const stepX = (width - padding * 2) / Math.max(values.length - 1, 1);
  const lastX = padding + stepX * (values.length - 1);

  return `${linePath} L ${lastX} ${height - padding} L ${padding} ${height - padding} Z`;
}

function Chart({ values, accent }) {
  const width = 520;
  const height = 240;
  const padding = 24;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const safeRange = max - min || 1;
  const stepX = (width - padding * 2) / Math.max(values.length - 1, 1);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="Visitor chart"
      className="chart-svg"
    >
      {[0, 1, 2, 3].map((line) => {
        const y = padding + ((height - padding * 2) / 3) * line;
        return <line key={line} x1={padding} y1={y} x2={width - padding} y2={y} className="chart-grid" />;
      })}

      {values.map((value, index) => {
        const x = padding + index * stepX;
        const y =
          height -
          padding -
          ((value - min) / safeRange) * (height - padding * 2);

        return (
          <g key={`${value}-${index}`}>
            <line x1={x} y1={padding} x2={x} y2={height - padding} className="chart-grid vertical" />
            <circle cx={x} cy={y} r="4" fill={accent} stroke="#ffffff" strokeWidth="2" />
          </g>
        );
      })}

      <path d={buildFillPath(values, width, height, padding)} fill={accent} fillOpacity="0.16" />
      <path d={buildAreaPath(values, width, height, padding)} fill="none" stroke={accent} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function DonutMeter({ value }) {
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (value / 100) * circumference;

  return (
    <div className="donut-wrap">
      <svg viewBox="0 0 160 160" className="donut-chart" aria-hidden="true">
        <circle cx="80" cy="80" r={radius} className="donut-track" />
        <circle
          cx="80"
          cy="80"
          r={radius}
          className="donut-value"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: dashOffset,
          }}
        />
      </svg>
      <div className="donut-copy">
        <strong>{value}%</strong>
      </div>
    </div>
  );
}

function ProfilePortrait({ className = "" }) {
  return (
    <div className={`portrait-shell ${className}`.trim()} aria-hidden="true">
      <svg viewBox="0 0 180 180" className="portrait-svg">
        <defs>
          <linearGradient id="portraitBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff4d7" />
            <stop offset="100%" stopColor="#ffe0cc" />
          </linearGradient>
          <linearGradient id="portraitHair" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#23324a" />
            <stop offset="100%" stopColor="#4258a8" />
          </linearGradient>
        </defs>

        <rect x="10" y="10" width="160" height="160" rx="36" fill="url(#portraitBg)" />
        <circle cx="90" cy="72" r="34" fill="#f8caa9" />
        <path
          d="M51 74c0-25 16-43 39-43 24 0 40 18 40 41 0 8-1 14-4 20-9-8-18-13-36-13-16 0-28 4-35 14-3-5-4-12-4-19Z"
          fill="url(#portraitHair)"
        />
        <path
          d="M56 141c8-23 24-35 46-35 23 0 39 12 47 35"
          fill="none"
          stroke="#ffffff"
          strokeWidth="22"
          strokeLinecap="round"
        />
        <path
          d="M58 142c9-22 23-34 44-34s36 12 45 34"
          fill="none"
          stroke="#d9af37"
          strokeWidth="18"
          strokeLinecap="round"
        />
        <circle cx="77" cy="73" r="3.8" fill="#24324a" />
        <circle cx="103" cy="73" r="3.8" fill="#24324a" />
        <path
          d="M80 91c5 6 15 6 20 0"
          fill="none"
          stroke="#b96b5a"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
      <div className="portrait-badge">Artist</div>
    </div>
  );
}

function ProfileAvatar({ image, name, className = "" }) {
  if (image) {
    return (
      <div className={`portrait-shell ${className}`.trim()}>
        <img src={image} alt={`${name || "Artist"} profile`} className="portrait-image" />
        <div className="portrait-badge">Artist</div>
      </div>
    );
  }

  return <ProfilePortrait className={className} />;
}

function ProfileWizardModal({
  draft,
  error,
  isOpen,
  onClose,
  onFieldChange,
  onImageChange,
  onNext,
  onPrev,
  onSkip,
  onSubmit,
  stepIndex,
}) {
  if (!isOpen) {
    return null;
  }

  const isLastStep = stepIndex === profileSetupSteps.length - 1;
  const progress = ((stepIndex + 1) / profileSetupSteps.length) * 100;

  const reviewItems = [
    { label: "Full Name", value: draft.fullName || "Not added yet" },
    { label: "Email", value: draft.email || "Not added yet" },
    { label: "Mobile", value: draft.mobile || "Not added yet" },
    { label: "Gender", value: draft.gender || "Not added yet" },
    { label: "Date of Birth", value: draft.dateOfBirth || "Not added yet" },
    { label: "Country", value: draft.country || "Not added yet" },
    { label: "State", value: draft.state || "Not added yet" },
    { label: "City", value: draft.city || "Not added yet" },
    { label: "Postal Code", value: draft.postalCode || "Not added yet" },
    { label: "Medium", value: draft.specialty || "Not added yet" },
    { label: "Experience", value: draft.yearsExperience || "Not added yet" },
    { label: "Website", value: draft.website || "Not added yet" },
    { label: "Instagram", value: draft.instagram || "Not added yet" },
    { label: "Achievements", value: draft.achievements || "Not added yet" },
  ];

  return (
    <div
      className="profile-modal-overlay"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="profile-modal">
        <div className="profile-modal-header">
          <div>
            <h3>{profileSetupSteps[stepIndex]}</h3>
            <p>Step {stepIndex + 1} of {profileSetupSteps.length}</p>
          </div>

          <button type="button" className="modal-close" onClick={onClose} aria-label="Close profile setup">
            Close
          </button>
        </div>

        <div className="profile-progress-track" aria-hidden="true">
          <span className="profile-progress-value" style={{ width: `${progress}%` }} />
        </div>

        <div className="profile-modal-body">
          {stepIndex === 0 && (
            <div className="profile-form-grid">
              <label className="form-field">
                <span>Full Name</span>
                <input
                  type="text"
                  value={draft.fullName}
                  onChange={(event) => onFieldChange("fullName", event.target.value)}
                  placeholder="Enter your full name"
                />
              </label>

              <label className="form-field">
                <span>Email Address</span>
                <input
                  type="email"
                  value={draft.email}
                  onChange={(event) => onFieldChange("email", event.target.value)}
                  placeholder="Enter your email"
                />
              </label>
            </div>
          )}

          {stepIndex === 1 && (
            <div className="profile-form-grid">
              <label className="form-field">
                <span>Mobile Number</span>
                <input
                  type="tel"
                  value={draft.mobile}
                  onChange={(event) => onFieldChange("mobile", event.target.value)}
                  placeholder="Enter your mobile number"
                />
              </label>

              <label className="form-field">
                <span>Gender</span>
                <select value={draft.gender} onChange={(event) => onFieldChange("gender", event.target.value)}>
                  <option value="">Select gender</option>
                  {genderOptions.map((gender) => (
                    <option key={gender} value={gender}>
                      {gender}
                    </option>
                  ))}
                </select>
              </label>

              <label className="form-field form-field-full">
                <span>Date of Birth</span>
                <input
                  type="date"
                  value={draft.dateOfBirth}
                  onChange={(event) => onFieldChange("dateOfBirth", event.target.value)}
                />
              </label>
            </div>
          )}

          {stepIndex === 2 && (
            <div className="profile-form-grid">
              <label className="form-field form-field-full">
                <span>Country</span>
                <select
                  value={draft.country}
                  onChange={(event) => onFieldChange("country", event.target.value)}
                >
                  {countryOptions.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </label>

              <label className="form-field form-field-full">
                <span>State</span>
                <select value={draft.state} onChange={(event) => onFieldChange("state", event.target.value)}>
                  <option value="">Select state</option>
                  {stateOptions.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </label>

            </div>
          )}

          {stepIndex === 3 && (
            <div className="profile-form-grid">
              <label className="form-field">
                <span>City</span>
                <input
                  type="text"
                  value={draft.city}
                  onChange={(event) => onFieldChange("city", event.target.value)}
                  placeholder="Enter your city"
                />
              </label>

              <label className="form-field">
                <span>Postal Code</span>
                <input
                  type="text"
                  value={draft.postalCode}
                  onChange={(event) => onFieldChange("postalCode", event.target.value)}
                  placeholder="Enter postal code"
                />
              </label>
            </div>
          )}

          {stepIndex === 4 && (
            <div className="profile-form-grid">
              <label className="form-field">
                <span>Art Medium</span>
                <select
                  value={draft.specialty}
                  onChange={(event) => onFieldChange("specialty", event.target.value)}
                >
                  {mediumOptions.map((medium) => (
                    <option key={medium} value={medium}>
                      {medium}
                    </option>
                  ))}
                </select>
              </label>

              <label className="form-field">
                <span>Years of Experience</span>
                <input
                  type="text"
                  value={draft.yearsExperience}
                  onChange={(event) => onFieldChange("yearsExperience", event.target.value)}
                  placeholder="e.g. 6 years"
                />
              </label>
            </div>
          )}

          {stepIndex === 5 && (
            <div className="profile-form-grid">
              <label className="form-field">
                <span>Website</span>
                <input
                  type="url"
                  value={draft.website}
                  onChange={(event) => onFieldChange("website", event.target.value)}
                  placeholder="https://yourwebsite.com"
                />
              </label>

              <label className="form-field">
                <span>Instagram</span>
                <input
                  type="text"
                  value={draft.instagram}
                  onChange={(event) => onFieldChange("instagram", event.target.value)}
                  placeholder="@yourhandle"
                />
              </label>
            </div>
          )}

          {stepIndex === 6 && (
            <div className="profile-form-grid">
              <label className="form-field form-field-full">
                <span>Artist Bio</span>
                <textarea
                  rows="4"
                  value={draft.bio}
                  onChange={(event) => onFieldChange("bio", event.target.value)}
                  placeholder="Tell visitors about your practice, exhibitions, and creative approach."
                />
              </label>
            </div>
          )}

          {stepIndex === 7 && (
            <div className="profile-form-grid">
              <label className="form-field form-field-full">
                <span>Awards, Exhibitions, or Highlights</span>
                <textarea
                  rows="4"
                  value={draft.achievements}
                  onChange={(event) => onFieldChange("achievements", event.target.value)}
                  placeholder="Add exhibitions, awards, gallery features, or key milestones."
                />
              </label>
            </div>
          )}

          {stepIndex === 8 && (
            <div className="image-step">
              <ProfileAvatar image={draft.profileImage} name={draft.fullName} className="profile-image-preview" />

              <div className="image-step-copy">
                <h4>Upload Profile Image</h4>
                <p>
                  Add a portrait or studio photo now, and you can change it again anytime
                  from your profile page.
                </p>

                <label className="upload-button">
                  {draft.profileImage ? "Change Image" : "Upload Image"}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => onImageChange(event.target.files?.[0] || null)}
                  />
                </label>
              </div>
            </div>
          )}

          {stepIndex === 9 && (
            <div className="review-layout">
              <div className="review-hero">
                <ProfileAvatar image={draft.profileImage} name={draft.fullName} className="review-avatar" />
                <div>
                  <strong>{draft.fullName || "Artist Profile"}</strong>
                  <span>{draft.specialty || "Creative field not selected yet"}</span>
                  <p>{draft.bio || "Your artist bio will appear here after you write it."}</p>
                </div>
              </div>

              <div className="review-grid">
                {reviewItems.map((item) => (
                  <div key={item.label} className="review-card">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {error ? <p className="profile-error">{error}</p> : null}

        <div className="profile-modal-actions">
          <button
            type="button"
            className="profile-action secondary"
            onClick={onPrev}
            disabled={stepIndex === 0}
          >
            Previous
          </button>

          {isLastStep ? (
            <button type="button" className="profile-action primary" onClick={onSubmit}>
              Complete Profile
            </button>
          ) : (
            <div className="profile-modal-actions-right">
              <button type="button" className="profile-action secondary" onClick={onSkip}>
                Skip
              </button>
              <button type="button" className="profile-action primary" onClick={onNext}>
                Save & Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ProfileEmptyState({ onOpen }) {
  return (
    <section className="profile-empty">
      <div className="section-heading">
        <div>
          <h3>My Profile</h3>
          <p>
            Build your artist profile in guided steps, then review the finished version in
            one clean place.
          </p>
        </div>
      </div>

      <div className="profile-empty-card">
        <strong>Profile setup has not been completed yet.</strong>
        <p>
          Start the profile wizard to add personal details, location, creative bio, and
          your profile image.
        </p>
        <button type="button" className="profile-action primary profile-empty-button" onClick={onOpen}>
          Start Profile Setup
        </button>
      </div>
    </section>
  );
}

function ProfileOverview({ profile, onEdit, onImageChange }) {
  const infoCards = [
    {
      title: "Personal Details",
      items: [
        ["Full Name", profile.fullName || "-"],
        ["Email", profile.email || "-"],
        ["Mobile", profile.mobile || "-"],
        ["Gender", profile.gender || "-"],
        ["Date of Birth", profile.dateOfBirth || "-"],
      ],
    },
    {
      title: "Location",
      items: [
        ["Country", profile.country || "-"],
        ["State", profile.state || "-"],
        ["City", profile.city || "-"],
        ["Postal Code", profile.postalCode || "-"],
      ],
    },
    {
      title: "Artist Details",
      items: [
        ["Medium", profile.specialty || "-"],
        ["Experience", profile.yearsExperience || "-"],
        ["Website", profile.website || "-"],
        ["Instagram", profile.instagram || "-"],
      ],
    },
    {
      title: "Achievements",
      items: [
        ["Highlights", profile.achievements || "-"],
      ],
    },
  ];

  return (
    <section className="profile-overview">
      <div className="section-heading">
        <div>
          <h3>My Profile</h3>
          <p>
            Review the completed artist profile and update any details whenever you need.
          </p>
        </div>
      </div>

      <div className="profile-hero-card">
        <ProfileAvatar image={profile.profileImage} name={profile.fullName} className="profile-hero-avatar" />

        <div className="profile-hero-copy">
          <span className="panel-label">Artist Profile</span>
          <h4>{profile.fullName}</h4>
          <p>{profile.bio || "Add your artist bio to describe your practice and style."}</p>

          <div className="profile-hero-tags">
            <span>{profile.specialty || "Creative Medium"}</span>
            <span>{profile.city || "City"}, {profile.state || "State"}</span>
          </div>

          <div className="profile-hero-actions">
            <button type="button" className="profile-action primary" onClick={onEdit}>
              Edit Profile
            </button>

            <label className="profile-action secondary upload-inline">
              Change Image
              <input
                type="file"
                accept="image/*"
                onChange={(event) => onImageChange(event.target.files?.[0] || null)}
              />
            </label>
          </div>
        </div>
      </div>

      <div className="profile-info-grid">
        {infoCards.map((card) => (
          <article key={card.title} className="profile-info-card">
            <h5>{card.title}</h5>
            <div className="profile-facts">
              {card.items.map(([label, value]) => (
                <div key={label} className="profile-fact">
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function StatusBadge({ status }) {
  const tone = status.toLowerCase().replace(/\s+/g, "-");

  return <span className={`status-badge ${tone}`}>{status}</span>;
}

function ToastStack({ toasts }) {
  return (
    <div className="toast-stack" aria-live="polite" aria-atomic="true">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast-item ${toast.type || "success"}`}>
          {toast.message}
        </div>
      ))}
    </div>
  );
}

function AwardsAndExhibitionsSection({ entries, onAddEntry, showToast }) {
  const [openSections, setOpenSections] = useState({
    awards: true,
    solo: false,
    group: false,
  });
  const [forms, setForms] = useState({
    awards: { title: "", subtitle: "", year: "" },
    solo: { title: "", subtitle: "", year: "" },
    group: { title: "", subtitle: "", year: "" },
  });
  const [errors, setErrors] = useState({});

  const sections = [
    {
      key: "awards",
      title: "Awards & Prizes",
      titleLabel: "Award / Prize",
      subtitleLabel: "Presented By",
    },
    {
      key: "solo",
      title: "Solo Exhibitions",
      titleLabel: "Exhibition Name",
      subtitleLabel: "Venue / City",
    },
    {
      key: "group",
      title: "Group Exhibitions",
      titleLabel: "Exhibition Name",
      subtitleLabel: "Venue / City",
    },
  ];

  function updateForm(section, field, value) {
    setForms((current) => ({
      ...current,
      [section]: {
        ...current[section],
        [field]: value,
      },
    }));
    setErrors((current) => ({
      ...current,
      [section]: "",
    }));
  }

  function handleAdd(section, title) {
    const draft = forms[section];

    if (!draft.title.trim() || !draft.subtitle.trim() || !draft.year.trim()) {
      setErrors((current) => ({
        ...current,
        [section]: "Please complete all fields before adding a new entry.",
      }));
      return;
    }

    onAddEntry(section, {
      id: Date.now() + Math.random(),
      title: draft.title.trim(),
      subtitle: draft.subtitle.trim(),
      year: draft.year.trim(),
    });
    setForms((current) => ({
      ...current,
      [section]: { title: "", subtitle: "", year: "" },
    }));
    setErrors((current) => ({
      ...current,
      [section]: "",
    }));
    showToast(`${title} entry added successfully.`);
  }

  return (
    <section className="module-section">
      <div className="section-heading">
        <div>
          <h3>Add Awards And Exhibition</h3>
          <p>
            Capture your recognitions and exhibition history with collapsible sections and
            quick add actions.
          </p>
        </div>
      </div>

      <div className="module-stack">
        {sections.map((section) => (
          <article key={section.key} className="module-card accordion-card">
            <button
              type="button"
              className="accordion-toggle"
              onClick={() =>
                setOpenSections((current) => ({
                  ...current,
                  [section.key]: !current[section.key],
                }))
              }
            >
              <strong>{section.title}</strong>
              <span>{openSections[section.key] ? "Hide" : "Show"}</span>
            </button>

            {openSections[section.key] ? (
              <div className="accordion-body">
                <div className="profile-form-grid module-form-grid">
                  <label className="form-field animated-field">
                    <span>{section.titleLabel}</span>
                    <input
                      type="text"
                      value={forms[section.key].title}
                      onChange={(event) => updateForm(section.key, "title", event.target.value)}
                      placeholder={`Add ${section.titleLabel.toLowerCase()}`}
                    />
                  </label>

                  <label className="form-field animated-field">
                    <span>{section.subtitleLabel}</span>
                    <input
                      type="text"
                      value={forms[section.key].subtitle}
                      onChange={(event) => updateForm(section.key, "subtitle", event.target.value)}
                      placeholder={`Add ${section.subtitleLabel.toLowerCase()}`}
                    />
                  </label>

                  <label className="form-field animated-field">
                    <span>Year</span>
                    <input
                      type="text"
                      value={forms[section.key].year}
                      onChange={(event) => updateForm(section.key, "year", event.target.value)}
                      placeholder="2026"
                    />
                  </label>

                  <div className="module-action-row">
                    <button
                      type="button"
                      className="profile-action primary"
                      onClick={() => handleAdd(section.key, section.title)}
                    >
                      Add Entry
                    </button>
                  </div>
                </div>

                {errors[section.key] ? <p className="inline-error">{errors[section.key]}</p> : null}

                {entries[section.key].length > 0 ? (
                  <div className="table-shell">
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>{section.titleLabel}</th>
                          <th>{section.subtitleLabel}</th>
                          <th>Year</th>
                        </tr>
                      </thead>
                      <tbody>
                        {entries[section.key].map((item) => (
                          <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.subtitle}</td>
                            <td>{item.year}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="inline-empty">No entries added in this section yet.</div>
                )}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

function ArtworkSection({ items, onAddArtwork, onRemoveArtwork, showToast }) {
  const [showForm, setShowForm] = useState(items.length === 0);
  const [form, setForm] = useState({
    category: "Painting",
    type: "Original",
    name: "",
    image: "",
  });
  const [error, setError] = useState("");

  async function handleImageUpload(file) {
    if (!file) {
      return;
    }

    try {
      const image = await readFileAsDataUrl(file);
      setForm((current) => ({
        ...current,
        image,
      }));
      setError("");
    } catch (uploadError) {
      setError("Artwork image could not be uploaded. Please try again.");
    }
  }

  function resetForm() {
    setForm({
      category: "Painting",
      type: "Original",
      name: "",
      image: "",
    });
    setError("");
  }

  function handleAddArtwork() {
    if (!form.category.trim() || !form.type.trim() || !form.name.trim() || !form.image) {
      setError("Please complete the artwork form and upload an image before adding it.");
      return;
    }

    onAddArtwork({
      id: Date.now() + Math.random(),
      category: form.category.trim(),
      type: form.type.trim(),
      name: form.name.trim(),
      image: form.image,
    });
    resetForm();
    setShowForm(false);
    showToast("Artwork added successfully.");
  }

  return (
    <section className="module-section">
      <div className="section-heading section-heading-spread">
        <div>
          <h3>My Artwork</h3>
          <p>
            Manage your portfolio inventory with artwork previews, hover interactions, and
            quick creation controls.
          </p>
        </div>

        <button type="button" className="profile-action primary" onClick={() => setShowForm(true)}>
          Add Artwork
        </button>
      </div>

      {showForm ? (
        <article className="module-card form-card">
          <div className="profile-form-grid module-form-grid">
            <label className="form-field animated-field">
              <span>Category</span>
              <input
                type="text"
                value={form.category}
                onChange={(event) => setForm((current) => ({ ...current, category: event.target.value }))}
                placeholder="Painting"
              />
            </label>

            <label className="form-field animated-field">
              <span>Type</span>
              <input
                type="text"
                value={form.type}
                onChange={(event) => setForm((current) => ({ ...current, type: event.target.value }))}
                placeholder="Original"
              />
            </label>

            <label className="form-field form-field-full animated-field">
              <span>Artwork Name</span>
              <input
                type="text"
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                placeholder="Enter artwork title"
              />
            </label>

            <div className="artwork-upload-row">
              <label className="upload-button">
                {form.image ? "Change Image" : "Upload Image"}
                <input type="file" accept="image/*" onChange={(event) => handleImageUpload(event.target.files?.[0] || null)} />
              </label>

              {form.image ? (
                <img src={form.image} alt="Artwork preview" className="artwork-form-preview" />
              ) : (
                <div className="artwork-form-placeholder">No preview yet</div>
              )}
            </div>

            <div className="module-action-row">
              <button type="button" className="profile-action secondary" onClick={() => {
                resetForm();
                setShowForm(false);
              }}>
                Cancel
              </button>
              <button type="button" className="profile-action primary" onClick={handleAddArtwork}>
                Save Artwork
              </button>
            </div>
          </div>

          {error ? <p className="inline-error">{error}</p> : null}
        </article>
      ) : null}

      {items.length > 0 ? (
        <div className="table-shell">
          <table className="data-table artwork-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Type</th>
                <th>Name</th>
                <th>Images</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="interactive-row">
                  <td>{item.category}</td>
                  <td>{item.type}</td>
                  <td>{item.name}</td>
                  <td>
                    <div className="artwork-thumb-wrap">
                      <img src={item.image} alt={item.name} className="artwork-thumb" />
                      <div className="artwork-hover-preview">
                        <img src={item.image} alt={`${item.name} enlarged preview`} />
                      </div>
                    </div>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="table-action danger"
                      onClick={() => {
                        onRemoveArtwork(item.id);
                        showToast("Artwork removed from your list.", "info");
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="empty-state-card">
          <div className="empty-state-illustration" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <strong>No artwork has been added yet.</strong>
          <p>
            Start by adding your first artwork to populate the portfolio table and preview
            interactions.
          </p>
        </div>
      )}
    </section>
  );
}

function OrderOfferEnquirySection({ offers }) {
  const [dateFilter, setDateFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const now = new Date("2026-04-22");

  const filteredOffers = [...offers]
    .filter((offer) => {
      const offerDate = new Date(offer.date);

      if (dateFilter === "today") {
        return offer.date === "2026-04-22";
      }

      if (dateFilter === "week") {
        return (now - offerDate) / (1000 * 60 * 60 * 24) <= 7;
      }

      return true;
    })
    .sort((a, b) => {
      if (priceFilter === "low-high") {
        return a.offerPrice - b.offerPrice;
      }

      if (priceFilter === "high-low") {
        return b.offerPrice - a.offerPrice;
      }

      return 0;
    });

  return (
    <section className="module-section">
      <div className="section-heading section-heading-spread">
        <div>
          <h3>Order Offer Enquiry</h3>
          <p>
            Review incoming offers, filter them quickly, and spot newly arrived interest at
            a glance.
          </p>
        </div>

        <div className="filter-row">
          <select className="range-select" value={dateFilter} onChange={(event) => setDateFilter(event.target.value)}>
            <option value="all">All Dates</option>
            <option value="today">Today</option>
            <option value="week">Last 7 Days</option>
          </select>

          <select className="range-select" value={priceFilter} onChange={(event) => setPriceFilter(event.target.value)}>
            <option value="all">Default Price</option>
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option>
          </select>
        </div>
      </div>

      <div className="table-shell">
        <table className="data-table">
          <thead>
            <tr>
              <th>Artwork Name</th>
              <th>Customer Name</th>
              <th>Offer Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredOffers.map((offer) => (
              <tr key={offer.id} className={offer.isNew ? "new-row" : ""}>
                <td>
                  {offer.artworkName}
                  {offer.isNew ? <span className="row-chip">New</span> : null}
                </td>
                <td>{offer.customerName}</td>
                <td>{formatCurrency(offer.offerPrice)}</td>
                <td>{offer.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function RefundOrdersSection({ refunds }) {
  return (
    <section className="module-section">
      <div className="section-heading">
        <div>
          <h3>Refund Orders</h3>
          <p>
            Track refund requests with clear status badges and color-coded decisions across
            the list.
          </p>
        </div>
      </div>

      <div className="module-grid">
        {refunds.map((refund) => (
          <article key={refund.id} className="module-card request-card">
            <div className="request-card-top">
              <strong>{refund.artworkName}</strong>
              <StatusBadge status={refund.status} />
            </div>
            <span className="request-meta">{refund.orderId} • {refund.customerName}</span>
            <p>{refund.reason}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function RatingStars({ rating }) {
  return (
    <div className="rating-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < rating ? "filled" : ""}>
          ★
        </span>
      ))}
    </div>
  );
}

function RemarkViewSection({ remarks }) {
  return (
    <section className="module-section">
      <div className="section-heading">
        <div>
          <h3>Remark View</h3>
          <p>
            Read curator and collector feedback in a more visual card layout with quick
            star-based sentiment.
          </p>
        </div>
      </div>

      <div className="module-grid">
        {remarks.map((remark) => (
          <article key={remark.id} className="module-card remark-card">
            <span className="request-meta">{remark.author}</span>
            <strong>{remark.title}</strong>
            <RatingStars rating={remark.rating} />
            <p>{remark.message}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function OrderDetailsSection({ orders }) {
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <section className="module-section">
      <div className="section-heading">
        <div>
          <h3>My Order Detail</h3>
          <p>
            Expand rows for quick delivery context or open the full modal for a complete
            order summary.
          </p>
        </div>
      </div>

      <div className="table-shell">
        <table className="data-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Artwork</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <React.Fragment key={order.id}>
                <tr className="interactive-row">
                  <td>{order.orderId}</td>
                  <td>{order.artworkName}</td>
                  <td>{order.customerName}</td>
                  <td>{formatCurrency(order.amount)}</td>
                  <td><StatusBadge status={order.status} /></td>
                  <td>
                    <div className="table-action-group">
                      <button
                        type="button"
                        className="table-action"
                        onClick={() =>
                          setExpandedOrderId((current) => (current === order.id ? null : order.id))
                        }
                      >
                        {expandedOrderId === order.id ? "Collapse" : "Expand"}
                      </button>
                      <button type="button" className="table-action" onClick={() => setSelectedOrder(order)}>
                        Details
                      </button>
                    </div>
                  </td>
                </tr>

                {expandedOrderId === order.id ? (
                  <tr className="expanded-row">
                    <td colSpan="6">
                      <div className="expanded-order-card">
                        <div>
                          <span className="request-meta">Shipping Address</span>
                          <strong>{order.address}</strong>
                        </div>
                        <div>
                          <span className="request-meta">Order Notes</span>
                          <strong>{order.notes}</strong>
                        </div>
                      </div>
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {selectedOrder ? (
        <div className="detail-modal-overlay" onClick={() => setSelectedOrder(null)}>
          <div className="detail-modal" onClick={(event) => event.stopPropagation()}>
            <div className="profile-modal-header">
              <div>
                <h3>Order Details</h3>
                <p>{selectedOrder.orderId} • {selectedOrder.customerName}</p>
              </div>
              <button type="button" className="modal-close" onClick={() => setSelectedOrder(null)}>
                Close
              </button>
            </div>

            <div className="detail-grid">
              <div className="detail-card">
                <span className="request-meta">Artwork</span>
                <strong>{selectedOrder.artworkName}</strong>
              </div>
              <div className="detail-card">
                <span className="request-meta">Amount</span>
                <strong>{formatCurrency(selectedOrder.amount)}</strong>
              </div>
              <div className="detail-card">
                <span className="request-meta">Status</span>
                <strong>{selectedOrder.status}</strong>
              </div>
              <div className="detail-card">
                <span className="request-meta">Date</span>
                <strong>{selectedOrder.date}</strong>
              </div>
            </div>

            <div className="detail-list-card">
              <span className="request-meta">Included Items</span>
              <ul className="detail-list">
                {selectedOrder.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="detail-list-card">
              <span className="request-meta">Shipping Address</span>
              <strong>{selectedOrder.address}</strong>
              <p>{selectedOrder.notes}</p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function BlogSection({ blogs, onAddBlog, onDeleteBlog, showToast }) {
  const [showComposer, setShowComposer] = useState(blogs.length === 0);
  const [form, setForm] = useState({
    title: "",
    status: "Draft",
  });
  const [error, setError] = useState("");

  function handleCreateBlog() {
    if (!form.title.trim()) {
      setError("Please add a blog title before creating the entry.");
      return;
    }

    onAddBlog({
      id: Date.now() + Math.random(),
      title: form.title.trim(),
      status: form.status,
      updatedAt: "2026-04-22",
    });
    setForm({
      title: "",
      status: "Draft",
    });
    setShowComposer(false);
    setError("");
    showToast("Blog entry created successfully.");
  }

  return (
    <section className="module-section">
      <div className="section-heading section-heading-spread">
        <div>
          <h3>Blog</h3>
          <p>
            Create and manage blog entries with a simple composer and a cleaner empty-state
            experience.
          </p>
        </div>

        <button type="button" className="profile-action primary" onClick={() => setShowComposer(true)}>
          Create Blog
        </button>
      </div>

      {showComposer ? (
        <article className="module-card form-card">
          <div className="profile-form-grid module-form-grid">
            <label className="form-field form-field-full animated-field">
              <span>Blog Title</span>
              <input
                type="text"
                value={form.title}
                onChange={(event) => {
                  setForm((current) => ({ ...current, title: event.target.value }));
                  setError("");
                }}
                placeholder="Enter blog title"
              />
            </label>

            <label className="form-field animated-field">
              <span>Status</span>
              <select
                value={form.status}
                onChange={(event) => setForm((current) => ({ ...current, status: event.target.value }))}
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
              </select>
            </label>
          </div>

          {error ? <p className="inline-error">{error}</p> : null}

          <div className="module-action-row blog-action-row">
            <button type="button" className="profile-action secondary" onClick={() => setShowComposer(false)}>
              Cancel
            </button>
            <button type="button" className="profile-action primary" onClick={handleCreateBlog}>
              Save Blog
            </button>
          </div>
        </article>
      ) : null}

      {blogs.length > 0 ? (
        <div className="table-shell">
          <table className="data-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Status</th>
                <th>Updated</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id} className="interactive-row">
                  <td>{blog.title}</td>
                  <td><StatusBadge status={blog.status} /></td>
                  <td>{blog.updatedAt}</td>
                  <td>
                    <button
                      type="button"
                      className="table-action danger"
                      onClick={() => {
                        onDeleteBlog(blog.id);
                        showToast("Blog removed.", "info");
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="empty-state-card">
          <div className="empty-state-illustration blog-illustration" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <strong>No blog posts yet.</strong>
          <p>Create your first article to start building the blog section.</p>
        </div>
      )}
    </section>
  );
}

function LoggedOutScreen({ message, onLogin }) {
  return (
    <div className="logged-out-screen">
      <div className="logged-out-card">
        <span className="panel-label">Login Page</span>
        <h1>Ziguratss Admin Panel</h1>
        <p>{message || "You have been logged out successfully."}</p>
        <button type="button" className="profile-action primary" onClick={onLogin}>
          Go To Dashboard
        </button>
      </div>
    </div>
  );
}

function SectionPlaceholder({ title }) {
  return (
    <section className="profile-empty">
      <div className="section-heading">
        <div>
          <h3>{title}</h3>
          <p>This area is ready for the next dashboard module when you want to expand it.</p>
        </div>
      </div>

      <div className="profile-empty-card">
        <strong>{title} is not set up yet.</strong>
        <p>
          The main interaction added right now is the guided `My Profile` workflow with
          step-by-step details and image upload.
        </p>
      </div>
    </section>
  );
}

function App() {
  const [storedState] = useState(loadStoredDashboardState);
  const [activeSection, setActiveSection] = useState(storedState.activeSection || "Dashboard");
  const [range, setRange] = useState("daywise");
  const [profileData, setProfileData] = useState(storedState.profileData || defaultProfileData);
  const [isProfileComplete, setIsProfileComplete] = useState(Boolean(storedState.isProfileComplete));
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [profileStep, setProfileStep] = useState(0);
  const [profileError, setProfileError] = useState("");
  const [awardsData, setAwardsData] = useState(storedState.awardsData || defaultAwardsData);
  const [artworkItems, setArtworkItems] = useState(storedState.artworkItems || []);
  const [blogItems, setBlogItems] = useState(storedState.blogItems || []);
  const [toasts, setToasts] = useState([]);
  const [isLoggedOut, setIsLoggedOut] = useState(
    typeof window !== "undefined" && window.location.hash === "#/login",
  );
  const [authMessage, setAuthMessage] = useState(
    typeof window !== "undefined" && window.location.hash === "#/login"
      ? "You have been logged out successfully."
      : "",
  );
  const selected = visitData[range];
  const chartPeak = Math.max(...selected.profile);
  const profileStrength = Math.round(
    (
      [
        profileData.fullName,
        profileData.email,
        profileData.mobile,
        profileData.gender,
        profileData.dateOfBirth,
        profileData.country,
        profileData.state,
        profileData.city,
        profileData.postalCode,
        profileData.specialty,
        profileData.yearsExperience,
        profileData.website,
        profileData.instagram,
        profileData.bio,
        profileData.achievements,
        profileData.profileImage,
      ].filter(Boolean).length / 16
    ) * 100,
  );

  const dashboardStats = [
    {
      title: "My Profile",
      value: `${profileStrength}%`,
      detail: isProfileComplete ? "Profile complete" : "Profile setup",
      accent: "gold",
    },
    {
      title: "My Artwork",
      value: `${artworkItems.length}`,
      detail: artworkItems.length === 1 ? "Portfolio piece" : "Curated pieces",
      accent: "indigo",
    },
    {
      title: "My Orders Detail",
      value: `${defaultOrderDetails.length}`,
      detail: "Tracked orders",
      accent: "coral",
    },
  ];

  const sectionDescriptions = {
    Dashboard: `${selected.label} snapshot for the Ziguratss studio`,
    "My Profile": "Complete your details step by step and review the finished profile.",
    "Add Awards And Exhibition": "Organize awards and exhibitions with guided entry blocks.",
    "My Artwork": "Manage portfolio pieces, previews, and quick actions.",
    "Order Offer Enquiry": "Review new offers with filters and highlight states.",
    "Refund Orders": "Track refund requests with color-coded status badges.",
    "Remark View": "Read collector and curator feedback in a richer card layout.",
    "My Order Detail": "Expand orders or open full detail popups for deeper context.",
    Blog: "Create and manage blog entries from one clean content panel.",
    Logout: "You are being redirected to the login page.",
  };

  useEffect(() => {
    if (typeof window === "undefined" || isLoggedOut) {
      return;
    }

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        profileData,
        isProfileComplete,
        awardsData,
        artworkItems,
        blogItems,
      }),
    );
  }, [isLoggedOut, profileData, isProfileComplete, awardsData, artworkItems, blogItems]);

  function showToast(message, type = "success") {
    const id = Date.now() + Math.random();

    setToasts((current) => [...current, { id, message, type }]);

    window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id));
    }, 2600);
  }

  function updateProfileField(field, value) {
    setProfileData((current) => ({
      ...current,
      [field]: value,
    }));
    setProfileError("");
  }

  async function handleProfileImageChange(file) {
    if (!file) {
      return;
    }

    try {
      const imageData = await readFileAsDataUrl(file);
      setProfileData((current) => ({
        ...current,
        profileImage: imageData,
      }));
      setProfileError("");
    } catch (error) {
      setProfileError("Profile image could not be uploaded. Please try another file.");
    }
  }

  function validateProfileStep(step) {
    if (step === 0) {
      if (!profileData.fullName.trim() || !profileData.email.trim()) {
        return "Please complete your name and email.";
      }
    }

    if (step === 1) {
      if (!profileData.mobile.trim() || !profileData.gender.trim() || !profileData.dateOfBirth.trim()) {
        return "Please complete your contact details before continuing.";
      }
    }

    if (step === 2) {
      if (!profileData.country.trim() || !profileData.state.trim()) {
        return "Please select your country and state.";
      }
    }

    if (step === 3) {
      if (!profileData.city.trim() || !profileData.postalCode.trim()) {
        return "Please complete your city and postal code.";
      }
    }

    if (step === 4) {
      if (!profileData.specialty.trim() || !profileData.yearsExperience.trim()) {
        return "Please add your art medium and experience before continuing.";
      }
    }

    if (step === 6) {
      if (!profileData.bio.trim()) {
        return "Please add your artist bio before continuing.";
      }
    }

    return "";
  }

  function openProfileModal(step = 0) {
    setActiveSection("My Profile");
    setProfileStep(step);
    setProfileError("");
    setIsProfileModalOpen(true);
  }

  function handleProfileNext() {
    const validationError = validateProfileStep(profileStep);

    if (validationError) {
      setProfileError(validationError);
      return;
    }

    setProfileStep((current) => Math.min(current + 1, profileSetupSteps.length - 1));
    setProfileError("");
  }

  function handleProfileSkip() {
    setProfileStep((current) => Math.min(current + 1, profileSetupSteps.length - 1));
    setProfileError("");
  }

  function handleProfilePrev() {
    setProfileStep((current) => Math.max(current - 1, 0));
    setProfileError("");
  }

  function handleProfileSubmit() {
    setIsProfileComplete(true);
    setActiveSection("My Profile");
    setIsProfileModalOpen(false);
    setProfileError("");
    showToast("Profile completed successfully.");
  }

  function handleAddAwardEntry(section, entry) {
    setAwardsData((current) => ({
      ...current,
      [section]: [entry, ...current[section]],
    }));
  }

  function handleAddArtwork(entry) {
    setArtworkItems((current) => [entry, ...current]);
  }

  function handleRemoveArtwork(id) {
    setArtworkItems((current) => current.filter((item) => item.id !== id));
  }

  function handleAddBlog(blog) {
    setBlogItems((current) => [blog, ...current]);
  }

  function handleDeleteBlog(id) {
    setBlogItems((current) => current.filter((blog) => blog.id !== id));
  }

  function handleReturnToDashboard() {
    setIsLoggedOut(false);
    setAuthMessage("");
    setActiveSection("Dashboard");

    if (typeof window !== "undefined") {
      window.location.hash = "#/dashboard";
    }

    showToast("Welcome back to Ziguratss studio.");
  }

  function handleLogout() {
    setAuthMessage("You have been logged out successfully.");
    setIsLoggedOut(true);
    setActiveSection("Dashboard");
    setProfileData(defaultProfileData);
    setIsProfileComplete(false);
    setIsProfileModalOpen(false);
    setProfileStep(0);
    setProfileError("");
    setAwardsData(defaultAwardsData);
    setArtworkItems([]);
    setBlogItems([]);

    if (typeof window !== "undefined") {
      window.sessionStorage.clear();
      window.localStorage.removeItem(STORAGE_KEY);
      window.location.hash = "#/login";
    }

    showToast("You have been logged out successfully.");
  }

  function handleQuickLinkClick(link) {
    if (link === "Logout") {
      handleLogout();
      return;
    }

    setActiveSection(link);

    if (link === "My Profile" && !isProfileComplete) {
      openProfileModal(0);
    }
  }

  function renderMainContent() {
    if (activeSection === "Dashboard") {
      return (
        <>
          <div className="section-heading">
            <div>
              <h3>My Dashboard</h3>
              <p>
                A refined artist workspace with a warmer editorial feel and a more
                premium presentation than the original layout.
              </p>
            </div>
          </div>

          <div className="card-row">
            {dashboardStats.map((card) => (
              <article key={card.title} className={`dash-card ${card.accent}`}>
                <small>{card.title}</small>
                <strong>{card.value}</strong>
                <span>{card.detail}</span>
              </article>
            ))}
          </div>

          <div className="signal-row">
            {studioSignals.map((signal) => (
              <article key={signal.label} className="signal-card">
                <span>{signal.label}</span>
                <strong>{signal.value}</strong>
              </article>
            ))}
          </div>

          <section className="analytics-panel">
            <div className="analytics-topbar">
              <div>
                <h4>Visitor Insights</h4>
                <p>
                  Track how collectors are discovering your profile and artwork across
                  different time windows.
                </p>
              </div>

              <select
                className="range-select"
                aria-label="Select visitor range"
                value={range}
                onChange={(event) => setRange(event.target.value)}
              >
                <option value="daywise">Daywise</option>
                <option value="weekwise">Weekwise</option>
                <option value="monthwise">Monthwise</option>
              </select>
            </div>

            <div className="analytics-grid">
              <section className="chart-panel">
                <div className="panel-topline">
                  <div>
                    <h5>Profile Visitors Chart</h5>
                    <span>Peak engagement: {chartPeak} visitors</span>
                  </div>
                  <span>Total Profile Visitors - {selected.profileTotal}</span>
                </div>

                <Chart values={selected.profile} accent="#49a7df" />

                <div className="chart-legend" aria-hidden="true">
                  <span className="legend-dot" style={{ color: "#49a7df" }}>Total Visitors</span>
                  <span className="legend-dot" style={{ color: "#3f4a94" }}>Returning Viewers</span>
                  <span className="legend-dot" style={{ color: "#d9af37" }}>New Visitors</span>
                </div>
              </section>

              <aside className="insight-panel">
                <div className="panel-topline">
                  <div>
                    <h5>Artwork Visitors Chart</h5>
                    <span>Portfolio conversion overview</span>
                  </div>
                  <span>Total Artwork Visitors - {selected.artworkTotal}</span>
                </div>

                <div className="insight-content">
                  <DonutMeter
                    value={Math.min(
                      94,
                      Math.round((selected.artworkTotal / selected.profileTotal) * 100),
                    )}
                  />
                </div>
              </aside>
            </div>

            <div className="footer-line">
              <span>Dashboard tuned for both desktop and mobile screens.</span>
              <span>Freshened with glassmorphism panels, editorial typography, and custom SVG analytics.</span>
            </div>
          </section>
        </>
      );
    }

    if (activeSection === "My Profile") {
      if (!isProfileComplete) {
        return <ProfileEmptyState onOpen={() => openProfileModal(profileStep)} />;
      }

      return (
        <ProfileOverview
          profile={profileData}
          onEdit={() => openProfileModal(0)}
          onImageChange={handleProfileImageChange}
        />
      );
    }

    if (activeSection === "Add Awards And Exhibition") {
      return (
        <AwardsAndExhibitionsSection
          entries={awardsData}
          onAddEntry={handleAddAwardEntry}
          showToast={showToast}
        />
      );
    }

    if (activeSection === "My Artwork") {
      return (
        <ArtworkSection
          items={artworkItems}
          onAddArtwork={handleAddArtwork}
          onRemoveArtwork={handleRemoveArtwork}
          showToast={showToast}
        />
      );
    }

    if (activeSection === "Order Offer Enquiry") {
      return <OrderOfferEnquirySection offers={defaultOfferEnquiries} />;
    }

    if (activeSection === "Refund Orders") {
      return <RefundOrdersSection refunds={defaultRefundRequests} />;
    }

    if (activeSection === "Remark View") {
      return <RemarkViewSection remarks={defaultRemarks} />;
    }

    if (activeSection === "My Order Detail") {
      return <OrderDetailsSection orders={defaultOrderDetails} />;
    }

    if (activeSection === "Blog") {
      return (
        <BlogSection
          blogs={blogItems}
          onAddBlog={handleAddBlog}
          onDeleteBlog={handleDeleteBlog}
          showToast={showToast}
        />
      );
    }

    return <SectionPlaceholder title={activeSection} />;
  }

  return (
    <>
      <style>{`
        :root {
          color-scheme: light;
          --bg: #f6efe6;
          --paper: rgba(255, 255, 255, 0.84);
          --paper-strong: rgba(255, 255, 255, 0.96);
          --ink: #24324a;
          --muted: #7b8394;
          --gold: #d9af37;
          --gold-deep: #bf8d1f;
          --indigo: #3f4a94;
          --coral: #ff7b52;
          --line: rgba(36, 50, 74, 0.12);
          --glow: 0 28px 60px rgba(69, 50, 24, 0.12);
        }

        * {
          box-sizing: border-box;
        }

        html, body, #root {
          margin: 0;
          height: 100%;
          min-height: 100%;
        }

        body {
          font-family: "Avenir Next", "Trebuchet MS", "Geneva", sans-serif;
          color: var(--ink);
          background:
            radial-gradient(circle at top left, rgba(217, 175, 55, 0.14), transparent 28%),
            radial-gradient(circle at right 15% top 18%, rgba(63, 74, 148, 0.12), transparent 24%),
            linear-gradient(160deg, #fbf6ee 0%, #f3ebe2 42%, #eef2f7 100%);
          overflow-x: hidden;
        }

        button, input, select, textarea {
          font: inherit;
        }

        .app-shell {
          position: relative;
          min-height: 100dvh;
          overflow: hidden;
          padding: 22px 22px 30px;
          display: flex;
        }

        .app-shell::before,
        .app-shell::after {
          content: "";
          position: absolute;
          border-radius: 999px;
          filter: blur(10px);
          pointer-events: none;
        }

        .app-shell::before {
          width: 320px;
          height: 320px;
          top: -120px;
          left: -80px;
          background: radial-gradient(circle, rgba(255, 123, 82, 0.18), transparent 70%);
        }

        .app-shell::after {
          width: 360px;
          height: 360px;
          right: -120px;
          bottom: -140px;
          background: radial-gradient(circle, rgba(63, 74, 148, 0.16), transparent 72%);
        }
         
        .dashboard-frame {
          position: relative;
          z-index: 1;
          width: 100%;
          margin: 0;
          display: flex;
          flex-direction: column;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          color: var(--muted);
          font-size: 0.95rem;
        }

        .topbar strong {
          color: var(--ink);
          font-weight: 700;
        }

        .hero {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.64), rgba(255, 255, 255, 0.36));
          border: 1px solid rgba(255, 255, 255, 0.72);
          box-shadow: var(--glow);
          border-radius: 32px;
          padding: 34px 30px 28px;
          backdrop-filter: blur(20px);
          min-height: calc(100dvh - 94px);
          display: flex;
          flex-direction: column;
        }

        .hero-title {
          margin: 0;
          text-align: center;
          font-family: Baskerville, "Palatino Linotype", "Book Antiqua", serif;
          font-size: clamp(2.2rem, 5vw, 4.2rem);
          font-weight: 500;
          letter-spacing: 0.05em;
          color: #18243d;
        }

        .hero-divider {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 18px;
          margin: 16px auto 30px;
          max-width: 940px;
        }

        .hero-divider span {
          font-size: 0.92rem;
          text-transform: uppercase;
          letter-spacing: 0.28em;
          color: #f3a109;
          font-weight: 800;
          text-align: center;
          white-space: nowrap;
        }

        .hero-divider::before,
        .hero-divider::after {
          content: "";
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(36, 50, 74, 0.28), transparent);
        }

        .content-grid {
          display: grid;
          grid-template-columns: minmax(280px, 320px) minmax(0, 1fr);
          gap: 22px;
          align-items: stretch;
          flex: 1;
        }

        .sidebar {
          background: var(--paper-strong);
          border: 1px solid rgba(255, 255, 255, 0.85);
          border-radius: 28px;
          padding: 22px 18px;
          box-shadow: 0 22px 42px rgba(21, 32, 53, 0.08);
          height: 100%;
        }

        .profile-card {
          background:
            radial-gradient(circle at top right, rgba(217, 175, 55, 0.14), transparent 42%),
            linear-gradient(180deg, #ffffff 0%, #f8f2e8 100%);
          border-radius: 24px;
          padding: 18px;
          border: 1px solid rgba(36, 50, 74, 0.08);
        }

        .portrait-shell {
          position: relative;
          width: 132px;
          margin-bottom: 12px;
        }

        .portrait-svg {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 28px;
          box-shadow: 0 18px 28px rgba(63, 74, 148, 0.16);
        }

        .portrait-image {
          display: block;
          width: 100%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border-radius: 28px;
          box-shadow: 0 18px 28px rgba(63, 74, 148, 0.16);
        }

        .portrait-badge {
          position: absolute;
          right: -8px;
          bottom: -8px;
          padding: 7px 12px;
          border-radius: 999px;
          background: #24324a;
          color: #ffffff;
          font-size: 0.74rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          box-shadow: 0 12px 20px rgba(36, 50, 74, 0.24);
        }

        .profile-card h2 {
          margin: 16px 0 6px;
          font-size: 1.2rem;
        }

        .profile-card p {
          margin: 0;
          color: var(--muted);
          line-height: 1.5;
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 14px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(217, 175, 55, 0.13);
          color: var(--gold-deep);
          font-size: 0.88rem;
          font-weight: 700;
        }

        .status-pill::before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: currentColor;
        }

        .quick-links {
          margin-top: 20px;
        }

        .panel-label {
          margin: 0 0 14px;
          font-size: 0.82rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .quick-links nav {
          display: grid;
          gap: 10px;
        }

        .quick-link {
          text-align: left;
          border: 0;
          padding: 12px 14px;
          border-radius: 14px;
          background: transparent;
          color: var(--ink);
          transition: transform 180ms ease, background 180ms ease, color 180ms ease;
          cursor: pointer;
        }

        .quick-link:hover {
          transform: translateX(4px);
          background: rgba(36, 50, 74, 0.06);
        }

        .quick-link.active {
          background: linear-gradient(135deg, var(--gold), #e8c86d);
          color: #fff;
          box-shadow: 0 14px 24px rgba(217, 175, 55, 0.28);
        }

        .profile-empty,
        .profile-overview {
          display: grid;
          gap: 18px;
        }

        .profile-empty-card,
        .profile-hero-card,
        .profile-info-card {
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.88);
          box-shadow: 0 24px 40px rgba(21, 32, 53, 0.08);
        }

        .profile-empty-card {
          width: min(520px, 100%);
          margin: 0 auto;
          padding: 26px;
          border-radius: 28px;
          text-align: center;
        }

        .profile-empty-card strong {
          display: block;
          font-size: 1.18rem;
        }

        .profile-empty-card p {
          margin: 10px 0 0;
          color: var(--muted);
          line-height: 1.6;
          max-width: 420px;
          margin-left: auto;
          margin-right: auto;
        }

        .profile-empty-button {
          margin-top: 22px;
          min-width: 210px;
        }

        .profile-hero-card {
          display: grid;
          grid-template-columns: minmax(220px, 260px) minmax(0, 1fr);
          gap: 24px;
          padding: 26px;
          border-radius: 30px;
        }

        .profile-hero-avatar {
          width: min(240px, 100%);
          margin: 0;
        }

        .profile-hero-copy h4 {
          margin: 4px 0 10px;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-family: Baskerville, "Palatino Linotype", "Book Antiqua", serif;
          font-weight: 500;
        }

        .profile-hero-copy p {
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
          max-width: 700px;
        }

        .profile-hero-tags {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 18px;
        }

        .profile-hero-tags span {
          padding: 9px 14px;
          border-radius: 999px;
          background: rgba(36, 50, 74, 0.06);
          color: var(--ink);
          font-size: 0.9rem;
          font-weight: 700;
        }

        .profile-hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 22px;
        }

        .profile-action {
          border: 0;
          border-radius: 14px;
          padding: 13px 18px;
          cursor: pointer;
          font-weight: 700;
          transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
          text-align: center;
        }

        .profile-action:hover:not(:disabled) {
          transform: translateY(-1px);
        }

        .profile-action:disabled {
          cursor: not-allowed;
          opacity: 0.45;
        }

        .profile-action.primary,
        .upload-button {
          background: linear-gradient(135deg, #d2a92f, #e4bd42);
          color: #ffffff;
          box-shadow: 0 14px 24px rgba(217, 175, 55, 0.24);
        }

        .profile-action.secondary {
          background: rgba(36, 50, 74, 0.08);
          color: var(--ink);
        }

        .upload-inline,
        .upload-button {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .upload-inline input,
        .upload-button input {
          position: absolute;
          inset: 0;
          opacity: 0;
          cursor: pointer;
        }

        .profile-info-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .profile-info-card {
          padding: 22px;
          border-radius: 26px;
        }

        .profile-info-card h5 {
          margin: 0 0 18px;
          font-size: 1.06rem;
        }

        .profile-facts {
          display: grid;
          gap: 14px;
        }

        .profile-fact {
          padding-top: 14px;
          border-top: 1px solid rgba(36, 50, 74, 0.08);
        }

        .profile-fact:first-child {
          padding-top: 0;
          border-top: 0;
        }

        .profile-fact span,
        .review-card span,
        .review-hero span {
          display: block;
          color: var(--muted);
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .profile-fact strong,
        .review-card strong,
        .review-hero strong {
          display: block;
          margin-top: 8px;
          font-size: 1rem;
          line-height: 1.45;
        }

        .profile-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 30;
          display: grid;
          place-items: center;
          padding: 24px;
          background: rgba(15, 18, 24, 0.58);
          backdrop-filter: blur(6px);
          overflow-y: auto;
        }

        .profile-modal {
          width: min(760px, 100%);
          max-height: none;
          overflow: visible;
          padding: 28px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.97);
          box-shadow: 0 40px 80px rgba(12, 18, 30, 0.28);
        }

        .profile-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          gap: 16px;
        }

        .profile-modal-header h3 {
          margin: 0;
          font-size: clamp(1.6rem, 3vw, 2rem);
        }

        .profile-modal-header p {
          margin: 6px 0 0;
          color: var(--muted);
        }

        .modal-close {
          border: 0;
          background: transparent;
          color: var(--muted);
          cursor: pointer;
          font-weight: 700;
        }

        .profile-progress-track {
          margin: 18px 0 24px;
          width: 100%;
          height: 6px;
          border-radius: 999px;
          background: rgba(36, 50, 74, 0.1);
          overflow: hidden;
        }

        .profile-progress-value {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(135deg, #d2a92f, #e4bd42);
        }

        .profile-modal-body {
          min-height: 240px;
        }

        .profile-form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          align-items: start;
        }

        .form-field {
          display: grid;
          gap: 8px;
        }

        .form-field span {
          font-size: 0.9rem;
          font-weight: 700;
        }

        .form-field input,
        .form-field select,
        .form-field textarea {
          width: 100%;
          border: 1px solid rgba(36, 50, 74, 0.14);
          border-radius: 14px;
          background: rgba(248, 249, 252, 0.96);
          padding: 14px 15px;
          color: var(--ink);
        }

        .form-field textarea {
          resize: vertical;
          min-height: 112px;
        }

        .form-field-full {
          grid-column: 1 / -1;
        }

        .image-step {
          display: grid;
          grid-template-columns: minmax(180px, 220px) minmax(0, 1fr);
          gap: 24px;
          align-items: center;
        }

        .profile-image-preview,
        .review-avatar {
          width: min(210px, 100%);
          margin: 0;
        }

        .image-step-copy h4 {
          margin: 0;
          font-size: 1.25rem;
        }

        .image-step-copy p {
          margin: 10px 0 18px;
          color: var(--muted);
          line-height: 1.6;
        }

        .review-layout {
          display: grid;
          gap: 20px;
        }

        .review-hero {
          display: grid;
          grid-template-columns: minmax(180px, 220px) minmax(0, 1fr);
          gap: 22px;
          align-items: center;
          padding: 18px;
          border-radius: 24px;
          background: rgba(36, 50, 74, 0.04);
        }

        .review-hero p {
          margin: 10px 0 0;
          color: var(--muted);
          line-height: 1.6;
        }

        .review-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .review-card {
          padding: 16px;
          border-radius: 18px;
          background: rgba(36, 50, 74, 0.04);
        }

        .profile-error {
          margin: 20px 0 0;
          color: #b54f2b;
          font-weight: 700;
        }

        .profile-modal-actions {
          display: flex;
          justify-content: space-between;
          gap: 14px;
          margin-top: 22px;
        }

        .profile-modal-actions-right {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: end;
        }

        .profile-modal-actions .profile-action {
          min-width: 160px;
        }

        .main-column {
          display: grid;
          gap: 18px;
          align-content: start;
        }

        .section-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 14px;
        }

        .section-heading h3 {
          margin: 0;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          font-family: Baskerville, "Palatino Linotype", "Book Antiqua", serif;
          font-weight: 500;
        }

        .section-heading p {
          margin: 0;
          color: var(--muted);
          max-width: 360px;
        }

        .card-row {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .dash-card {
          position: relative;
          overflow: hidden;
          min-height: 168px;
          padding: 24px;
          border-radius: 30px;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: end;
          box-shadow: 0 24px 36px rgba(28, 36, 55, 0.18);
          isolation: isolate;
        }

        .dash-card::before {
          content: "";
          position: absolute;
          inset: auto -10% 55% auto;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.18);
          z-index: -1;
        }

        .dash-card::after {
          content: "";
          position: absolute;
          inset: 16px 16px auto auto;
          width: 52px;
          height: 52px;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.28);
          background: rgba(255, 255, 255, 0.08);
          z-index: -1;
        }

        .dash-card.gold {
          background: linear-gradient(145deg, #c69b18, #e4be46);
        }

        .dash-card.indigo {
          background: linear-gradient(145deg, #2f3c87, #5966b9);
        }

        .dash-card.coral {
          background: linear-gradient(145deg, #f56b46, #ff9868);
        }

        .dash-card small {
          font-size: 0.88rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          opacity: 0.86;
        }

        .dash-card strong {
          margin-top: 12px;
          font-size: 2rem;
          font-weight: 800;
        }

        .dash-card span {
          margin-top: 6px;
          font-size: 1rem;
        }

        .signal-row {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .signal-card {
          padding: 18px 20px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.72);
          border: 1px solid rgba(36, 50, 74, 0.08);
          box-shadow: 0 16px 24px rgba(21, 32, 53, 0.06);
        }

        .signal-card span {
          display: block;
          color: var(--muted);
          font-size: 0.9rem;
          margin-bottom: 8px;
        }

        .signal-card strong {
          font-size: 1.6rem;
        }

        .analytics-panel {
          display: grid;
          gap: 22px;
          padding: 24px;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.86);
          box-shadow: 0 28px 40px rgba(21, 32, 53, 0.08);
        }

        .analytics-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .analytics-topbar h4 {
          margin: 0;
          font-size: 1.2rem;
        }

        .analytics-topbar p {
          margin: 4px 0 0;
          color: var(--muted);
        }

        .range-select {
          padding: 12px 14px;
          border-radius: 14px;
          border: 1px solid rgba(36, 50, 74, 0.12);
          background: rgba(255, 255, 255, 0.94);
          color: var(--ink);
          min-width: 168px;
        }

        .analytics-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          align-items: stretch;
        }

        .chart-panel,
        .insight-panel {
          background: linear-gradient(180deg, rgba(250, 251, 255, 0.96), rgba(245, 241, 236, 0.92));
          border-radius: 24px;
          padding: 20px;
          border: 1px solid rgba(36, 50, 74, 0.08);
          height: 100%;
        }

        .chart-panel {
          display: flex;
          flex-direction: column;
        }

        .panel-topline {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }

        .panel-topline h5 {
          margin: 0;
          font-size: 1.08rem;
        }

        .panel-topline span {
          color: var(--muted);
          font-size: 0.92rem;
        }

        .chart-svg {
          display: block;
          width: 100%;
          height: auto;
        }

        .chart-grid {
          stroke: rgba(36, 50, 74, 0.08);
          stroke-width: 1;
        }

        .chart-grid.vertical {
          stroke-dasharray: 3 6;
        }

        .chart-legend {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 12px;
          color: var(--muted);
          font-size: 0.88rem;
        }

        .legend-dot {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .legend-dot::before {
          content: "";
          width: 12px;
          height: 12px;
          border-radius: 999px;
          background: currentColor;
        }

        .insight-panel {
          display: flex;
          flex-direction: column;
        }

        .insight-content {
          display: flex;
          flex: 1;
          flex-direction: column;
          justify-content: center;
        }

        .donut-wrap {
          position: relative;
          width: min(210px, 100%);
          margin: 0 auto;
        }

        .donut-chart {
          width: 100%;
          height: auto;
          transform: rotate(-90deg);
        }

        .donut-track,
        .donut-value {
          fill: none;
          stroke-width: 14;
        }

        .donut-track {
          stroke: rgba(36, 50, 74, 0.08);
        }

        .donut-value {
          stroke: url(#donutGradient);
          stroke-linecap: round;
          transform-origin: 50% 50%;
        }

        .donut-copy {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          text-align: center;
        }

        .donut-copy strong {
          display: block;
          font-size: 2rem;
        }

        .content-stage {
          display: grid;
          gap: 18px;
          animation: sectionReveal 260ms ease;
        }

        @keyframes sectionReveal {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .module-section,
        .module-stack {
          display: grid;
          gap: 18px;
        }

        .module-card {
          padding: 22px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.84);
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 22px 38px rgba(21, 32, 53, 0.08);
        }

        .accordion-card {
          padding: 0;
          overflow: hidden;
        }

        .accordion-toggle {
          width: 100%;
          border: 0;
          background: transparent;
          padding: 20px 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-align: left;
          cursor: pointer;
          color: var(--ink);
        }

        .accordion-toggle strong {
          font-size: 1.06rem;
        }

        .accordion-toggle span {
          color: var(--gold-deep);
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-size: 0.76rem;
        }

        .accordion-body {
          padding: 0 22px 22px;
          border-top: 1px solid rgba(36, 50, 74, 0.08);
        }

        .module-form-grid {
          margin-top: 18px;
        }

        .animated-field input,
        .animated-field select,
        .animated-field textarea {
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }

        .animated-field input:focus,
        .animated-field select:focus,
        .animated-field textarea:focus {
          outline: 0;
          transform: translateY(-1px);
          border-color: rgba(217, 175, 55, 0.68);
          box-shadow: 0 10px 20px rgba(217, 175, 55, 0.12);
        }

        .module-action-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
        }

        .blog-action-row {
          margin-top: 20px;
          padding-top: 8px;
          justify-content: flex-end;
        }

        .inline-error {
          margin: 16px 0 0;
          color: #b54f2b;
          font-weight: 700;
        }

        .inline-empty {
          margin-top: 18px;
          padding: 16px;
          border-radius: 18px;
          background: rgba(36, 50, 74, 0.04);
          color: var(--muted);
        }

        .section-heading-spread {
          justify-content: space-between;
          align-items: start;
        }

        .table-shell {
          overflow-x: auto;
          border-radius: 22px;
          border: 1px solid rgba(36, 50, 74, 0.08);
          background: rgba(255, 255, 255, 0.72);
        }

        .data-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 680px;
        }

        .data-table th,
        .data-table td {
          padding: 15px 16px;
          text-align: left;
          border-bottom: 1px solid rgba(36, 50, 74, 0.08);
          vertical-align: middle;
        }

        .data-table th {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--muted);
          background: rgba(36, 50, 74, 0.03);
        }

        .data-table tbody tr:last-child td {
          border-bottom: 0;
        }

        .interactive-row {
          transition: background 180ms ease, transform 180ms ease;
        }

        .interactive-row:hover {
          background: rgba(36, 50, 74, 0.04);
        }

        .artwork-upload-row {
          display: flex;
          gap: 18px;
          align-items: center;
          flex-wrap: wrap;
        }

        .artwork-form-preview,
        .artwork-form-placeholder {
          width: 120px;
          height: 120px;
          border-radius: 18px;
        }

        .artwork-form-preview {
          object-fit: cover;
          box-shadow: 0 14px 24px rgba(36, 50, 74, 0.12);
        }

        .artwork-form-placeholder {
          display: grid;
          place-items: center;
          background: rgba(36, 50, 74, 0.06);
          color: var(--muted);
          font-size: 0.9rem;
        }

        .artwork-thumb-wrap {
          position: relative;
          width: 60px;
          height: 60px;
        }

        .artwork-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 14px;
          box-shadow: 0 10px 18px rgba(36, 50, 74, 0.12);
        }

        .artwork-hover-preview {
          position: absolute;
          left: calc(100% + 12px);
          top: 50%;
          width: 160px;
          padding: 8px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 18px 34px rgba(21, 32, 53, 0.18);
          transform: translateY(-50%) scale(0.96);
          opacity: 0;
          pointer-events: none;
          transition: opacity 180ms ease, transform 180ms ease;
          z-index: 5;
        }

        .artwork-hover-preview img {
          width: 100%;
          display: block;
          border-radius: 12px;
        }

        .interactive-row:hover .artwork-hover-preview {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }

        .table-action {
          border: 0;
          background: rgba(36, 50, 74, 0.08);
          color: var(--ink);
          border-radius: 12px;
          padding: 10px 12px;
          cursor: pointer;
          font-weight: 700;
          transition: background 180ms ease, transform 180ms ease;
        }

        .table-action:hover {
          transform: translateY(-1px);
          background: rgba(36, 50, 74, 0.12);
        }

        .table-action.danger {
          background: rgba(255, 123, 82, 0.12);
          color: #b54f2b;
        }

        .table-action-group {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .empty-state-card {
          display: grid;
          gap: 12px;
          place-items: center;
          text-align: center;
          padding: 34px 26px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.84);
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 24px 40px rgba(21, 32, 53, 0.08);
        }

        .empty-state-card strong {
          font-size: 1.1rem;
        }

        .empty-state-card p {
          max-width: 460px;
          margin: 0;
          color: var(--muted);
          line-height: 1.6;
        }

        .empty-state-illustration {
          position: relative;
          width: 110px;
          height: 110px;
        }

        .empty-state-illustration span {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(145deg, rgba(217, 175, 55, 0.7), rgba(63, 74, 148, 0.35));
        }

        .empty-state-illustration span:nth-child(1) {
          width: 84px;
          height: 84px;
          inset: 14px auto auto 12px;
        }

        .empty-state-illustration span:nth-child(2) {
          width: 34px;
          height: 34px;
          top: 10px;
          right: 8px;
        }

        .empty-state-illustration span:nth-child(3) {
          width: 22px;
          height: 22px;
          bottom: 8px;
          right: 24px;
        }

        .filter-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .new-row {
          background: rgba(217, 175, 55, 0.08);
        }

        .row-chip,
        .request-meta {
          display: inline-block;
          color: var(--muted);
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .row-chip {
          margin-left: 10px;
          padding: 4px 8px;
          border-radius: 999px;
          background: rgba(217, 175, 55, 0.18);
          color: var(--gold-deep);
          font-weight: 800;
        }

        .module-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .request-card,
        .remark-card {
          display: grid;
          gap: 12px;
        }

        .request-card-top {
          display: flex;
          justify-content: space-between;
          align-items: start;
          gap: 12px;
        }

        .request-card p,
        .remark-card p,
        .detail-list-card p {
          margin: 0;
          color: var(--muted);
          line-height: 1.6;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 7px 12px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .status-badge.pending,
        .status-badge.draft,
        .status-badge.processing {
          background: rgba(217, 175, 55, 0.16);
          color: #a07000;
        }

        .status-badge.approved,
        .status-badge.published,
        .status-badge.delivered {
          background: rgba(29, 155, 97, 0.14);
          color: #13734a;
        }

        .status-badge.rejected {
          background: rgba(255, 123, 82, 0.14);
          color: #b54f2b;
        }

        .status-badge.in-transit {
          background: rgba(63, 74, 148, 0.14);
          color: #34418d;
        }

        .rating-stars {
          display: flex;
          gap: 4px;
          font-size: 1.1rem;
          color: rgba(36, 50, 74, 0.18);
        }

        .rating-stars .filled {
          color: var(--gold);
        }

        .expanded-row td {
          background: rgba(36, 50, 74, 0.03);
        }

        .expanded-order-card {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          padding: 6px 0;
        }

        .expanded-order-card strong,
        .detail-card strong,
        .detail-list-card strong {
          display: block;
          margin-top: 6px;
          line-height: 1.5;
        }

        .detail-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 26;
          display: grid;
          place-items: center;
          padding: 24px;
          background: rgba(15, 18, 24, 0.5);
          backdrop-filter: blur(6px);
        }

        .detail-modal {
          width: min(720px, 100%);
          padding: 24px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 34px 64px rgba(12, 18, 30, 0.28);
        }

        .detail-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 20px;
        }

        .detail-card,
        .detail-list-card {
          padding: 18px;
          border-radius: 20px;
          background: rgba(36, 50, 74, 0.04);
        }

        .detail-list-card {
          margin-top: 14px;
        }

        .detail-list {
          margin: 10px 0 0;
          padding-left: 18px;
          color: var(--muted);
          line-height: 1.7;
        }

        .toast-stack {
          position: fixed;
          top: 22px;
          right: 22px;
          z-index: 60;
          display: grid;
          gap: 10px;
        }

        .toast-item {
          min-width: 240px;
          max-width: 340px;
          padding: 14px 16px;
          border-radius: 16px;
          color: #ffffff;
          font-weight: 700;
          box-shadow: 0 18px 28px rgba(21, 32, 53, 0.18);
          animation: sectionReveal 220ms ease;
        }

        .toast-item.success {
          background: linear-gradient(135deg, #24324a, #4258a8);
        }

        .toast-item.info {
          background: linear-gradient(135deg, #d2a92f, #e4bd42);
        }

        .logged-out-screen {
          position: relative;
          z-index: 1;
          width: 100%;
          display: grid;
          place-items: center;
        }

        .logged-out-card {
          width: min(520px, 100%);
          padding: 34px 28px;
          border-radius: 32px;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 30px 60px rgba(21, 32, 53, 0.12);
          text-align: center;
        }

        .logged-out-card h1 {
          margin: 6px 0 12px;
          font-size: clamp(2rem, 4vw, 3rem);
          font-family: Baskerville, "Palatino Linotype", "Book Antiqua", serif;
          font-weight: 500;
        }

        .logged-out-card p {
          margin: 0 auto 20px;
          max-width: 420px;
          color: var(--muted);
          line-height: 1.7;
        }

        .footer-line {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          color: var(--muted);
          font-size: 0.92rem;
        }

        @media (max-width: 1080px) {
          .content-grid,
          .analytics-grid,
          .card-row,
          .profile-info-grid,
          .profile-hero-card,
          .image-step,
          .review-hero,
          .module-grid,
          .detail-grid,
          .expanded-order-card {
            grid-template-columns: 1fr;
          }

          .signal-row {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 720px) {
          .app-shell {
            padding: 14px 14px 24px;
          }

          .hero {
            padding: 24px 16px 18px;
            border-radius: 24px;
            min-height: auto;
          }

          .hero-divider {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .hero-divider::before,
          .hero-divider::after {
            display: none;
          }

          .section-heading,
          .topbar,
          .analytics-topbar,
          .panel-topline,
          .footer-line,
          .profile-modal-header,
          .profile-modal-actions,
          .profile-modal-actions-right,
          .filter-row {
            align-items: start;
            flex-direction: column;
          }

          .signal-row {
            grid-template-columns: 1fr;
          }

          .profile-form-grid,
          .review-grid {
            grid-template-columns: 1fr;
          }

          .sidebar,
          .analytics-panel,
          .chart-panel,
          .insight-panel {
            padding-left: 16px;
            padding-right: 16px;
          }

          .profile-modal {
            padding: 20px 16px;
          }

          .toast-stack {
            left: 14px;
            right: 14px;
            top: 14px;
          }

          .toast-item {
            min-width: 0;
            max-width: none;
          }
        }
      `}</style>

      <div className="app-shell">
        <svg width="0" height="0" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="donutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff7b52" />
              <stop offset="55%" stopColor="#d9af37" />
              <stop offset="100%" stopColor="#3f4a94" />
            </linearGradient>
          </defs>
        </svg>

        {isLoggedOut ? (
          <LoggedOutScreen message={authMessage} onLogin={handleReturnToDashboard} />
        ) : (
          <>
            <main className="dashboard-frame">
              <div className="topbar">
                <span>Home / <strong>{activeSection}</strong></span>
                <span>{sectionDescriptions[activeSection] || `${activeSection} workspace`}</span>
              </div>

              <section className="hero">
                <h1 className="hero-title">WELCOME TO ZIGURATSS!</h1>
                <div className="hero-divider">
                  <span>Dive Into The Sea Of Artworks</span>
                </div>

                <div className="content-grid">
                  <aside className="sidebar">
                    <div className="profile-card">
                      <ProfileAvatar image={profileData.profileImage} name={profileData.fullName} />
                      <h2>Welcome {profileData.fullName}</h2>
                      <p>{profileData.email}</p>
                      <div className="status-pill">
                        {isProfileComplete ? "Creative portfolio live" : "Profile setup in progress"}
                      </div>
                    </div>

                    <div className="quick-links">
                      <p className="panel-label">Quick Links</p>
                      <nav aria-label="Quick links">
                        {quickLinks.map((link) => (
                          <button
                            key={link}
                            type="button"
                            className={`quick-link ${activeSection === link ? "active" : ""}`}
                            onClick={() => handleQuickLinkClick(link)}
                          >
                            {link}
                          </button>
                        ))}
                      </nav>
                    </div>
                  </aside>

                  <section className="main-column">
                    <div key={activeSection} className="content-stage">
                      {renderMainContent()}
                    </div>
                  </section>
                </div>
              </section>
            </main>

            <ProfileWizardModal
              draft={profileData}
              error={profileError}
              isOpen={isProfileModalOpen}
              onClose={() => setIsProfileModalOpen(false)}
              onFieldChange={updateProfileField}
              onImageChange={handleProfileImageChange}
              onNext={handleProfileNext}
              onPrev={handleProfilePrev}
              onSkip={handleProfileSkip}
              onSubmit={handleProfileSubmit}
              stepIndex={profileStep}
            />
          </>
        )}

        <ToastStack toasts={toasts} />
      </div>
    </>
  );
}

export default App;
