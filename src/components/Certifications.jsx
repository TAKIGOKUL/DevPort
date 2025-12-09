import React from 'react';
import './Certifications.css';

const Certifications = () => {
    const certifications = [
        {
            id: 1,
            title: 'AWS Certified Solutions Architect',
            issuer: 'Amazon Web Services',
            date: '2023',
            credentialId: 'AWS-SAA-2023'
        },
        {
            id: 2,
            title: 'Google Cloud Professional Developer',
            issuer: 'Google Cloud',
            date: '2023',
            credentialId: 'GCP-DEV-2023'
        },
        {
            id: 3,
            title: 'certified AI/ML Engineer',
            issuer: 'TensorFlow',
            date: '2022',
            credentialId: 'TF-ML-2022'
        }
    ];

    return (
        <section id="certifications" className="certifications-section">
            <div className="certifications-container">
                <h2 className="section-title">CERTIFICATIONS</h2>

                <div className="certs-grid">
                    {certifications.map((cert) => (
                        <div key={cert.id} className="nothing-cert-card">
                            <div className="cert-header">
                                <span className="cert-id">{cert.credentialId}</span>
                            </div>
                            <h3 className="cert-title">{cert.title}</h3>
                            <div className="cert-meta">
                                <span className="cert-issuer">{cert.issuer}</span>
                                <span className="cert-divider">•</span>
                                <span className="cert-date">{cert.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
