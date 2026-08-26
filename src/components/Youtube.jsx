import React, { useRef } from 'react';
import { youtube } from '../data';
import { useScrollActivate } from '../hooks/useScrollActivate';
import './Youtube.css';

const Youtube = () => {
    const sectionRef = useRef(null);
    useScrollActivate(sectionRef, '.yt-video-card');

    return (
        <section id="youtube" className="youtube-section" ref={sectionRef}>
            <div className="youtube-container">
                <h2 className="section-title">TECH VLOGS &amp; CONTENT</h2>

                <a
                    href={youtube.channelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="yt-channel-banner hoverable"
                >
                    <div className="yt-channel-icon">
                        <i className="ri-youtube-fill"></i>
                    </div>
                    <div className="yt-channel-info">
                        <span className="yt-channel-name">{youtube.channelName}</span>
                        <span className="yt-channel-handle">{youtube.handle}</span>
                        <p className="yt-channel-tagline">{youtube.tagline}</p>
                    </div>
                    <span className="yt-subscribe-btn">
                        <span>Subscribe</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </a>

                <div className="yt-video-grid">
                    {youtube.videos.map((video, index) => (
                        <a
                            href={youtube.channelUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            className="yt-video-card hoverable"
                        >
                            <div className="yt-thumb">
                                <span className="yt-play-icon">
                                    <i className="ri-play-fill"></i>
                                </span>
                                <span className="yt-duration">{video.duration}</span>
                            </div>
                            <div className="yt-video-body">
                                <h3 className="yt-video-title">{video.title}</h3>
                                <p className="yt-video-desc">{video.desc}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Youtube;
