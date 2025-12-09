import React, { useEffect, useState } from 'react';
import { personalDetails } from '../data';
import './Hero.css';

// GitHub Heatmap Component
const GitHubHeatmap = ({ username }) => {
    const [activity, setActivity] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadGitHubData = async () => {
            try {
                const { fetchGitHubContributions, colorToLevel } = await import('../utils/githubApi');
                const weeks = await fetchGitHubContributions();

                if (weeks) {
                    const formattedActivity = weeks.slice(-16).map(week =>
                        week.contributionDays.map(day => colorToLevel(day.color))
                    );
                    setActivity(formattedActivity);
                } else {
                    // Fallback data
                    const fallbackActivity = [];
                    for (let week = 0; week < 16; week++) {
                        const weekData = [];
                        for (let day = 0; day < 7; day++) {
                            weekData.push(Math.floor(Math.random() * 5));
                        }
                        fallbackActivity.push(weekData);
                    }
                    setActivity(fallbackActivity);
                }
            } catch (error) {
                console.error('Error loading GitHub data:', error);
            }
            setLoading(false);
        };

        loadGitHubData();
    }, [username]);

    if (loading) {
        return (
            <div className="github-heatmap">
                <div className="loading-text">Loading...</div>
            </div>
        );
    }

    return (
        <div className="github-heatmap">
            {activity.map((week, weekIdx) => (
                <div key={weekIdx} className="heatmap-week">
                    {week.map((level, dayIdx) => (
                        <div
                            key={dayIdx}
                            className={`heatmap-day level-${level}`}
                        ></div>
                    ))}
                </div>
            ))}
        </div>
    );
};

const Hero = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="hero" className="nothing-hero-grid-v2">

            {/* div1: Profile Image (2x3, starts col 2, row 2) */}
            <div className="nothing-widget div1 profile-widget">
                <img
                    src={personalDetails.profileImg}
                    alt={personalDetails.name}
                    className="hero-profile-img"
                />
                <div className="widget-overlay">
                    <div className="profile-badge">
                        <span className="badge-dot"></span>
                        OPEN TO WORK
                    </div>
                </div>
            </div>

            {/* div2: Name (2x1, starts col 4, row 2) */}
            <div className="nothing-widget div2 name-widget">
                <div className="widget-label">HELLO, I'M</div>
                <h1 className="hero-name">GOKUL</h1>
            </div>

            {/* div3: Role (1x1, starts col 6, row 2) */}
            <div className="nothing-widget div3 role-widget">
                <div className="widget-icon">⚡</div>
                <div className="role-text">AI ENGINEER</div>
            </div>

            {/* div4: Location (1x1, starts col 4, row 3) */}
            <div className="nothing-widget div4 location-widget">
                <div className="loc-icon">📍</div>
                <div className="loc-text">INDIA</div>
            </div>

            {/* div5: GitHub Heatmap (2x1, starts col 5, row 3) */}
            <div className="nothing-widget div5 heatmap-widget">
                <div className="widget-header-mini">
                    <span>GITHUB</span>
                    <span className="github-id">@TAKIGOKUL</span>
                </div>
                <GitHubHeatmap username="TAKIGOKUL" />
            </div>

            {/* div6: Status/Time (2x2, starts col 4, row 4) */}
            <div className="nothing-widget div6 status-widget">
                <div className="time-display-large">
                    {time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}
                </div>
                <div className="date-display-large">
                    {time.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }).toUpperCase()}
                </div>
                <div className="status-message">
                    <span className="status-icon">🚀</span>
                    <span>Building the Future</span>
                </div>
            </div>

            {/* div7: Socials (2x1, starts col 2, row 5) */}
            <div className="nothing-widget div7 socials-widget">
                <a href={personalDetails.socials?.linkedin} target="_blank" rel="noreferrer" className="social-btn">IN</a>
                <a href={personalDetails.socials?.github} target="_blank" rel="noreferrer" className="social-btn">GH</a>
                <a href={`mailto:${personalDetails.email}`} className="social-btn">@</a>
            </div>

            {/* div8: Gallery/Projects (1x2, starts col 6, row 4) */}
            <div className="nothing-widget div8 gallery-widget">
                <div className="dot-matrix-v">
                    {Array(6).fill(0).map((_, i) => (
                        <div key={i} className="matrix-row">
                            {Array(4).fill(0).map((_, j) => (
                                <span key={j} className="matrix-dot" style={{ animationDelay: `${(i + j) * 100}ms` }}></span>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="gallery-label">PROJECTS</div>
            </div>

        </section>
    );
};

export default Hero;
