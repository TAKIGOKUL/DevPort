// GitHub GraphQL API utility to fetch contribution heatmap data

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = 'TAKIGOKUL';

export const fetchGitHubContributions = async () => {
    const query = `
        query {
            user(login: "${GITHUB_USERNAME}") {
                contributionsCollection {
                    contributionCalendar {
                        weeks {
                            contributionDays {
                                date
                                contributionCount
                                color
                            }
                        }
                    }
                }
            }
        }
    `;

    try {
        const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${GITHUB_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        });

        const data = await response.json();

        if (data.errors) {
            console.error('GitHub API errors:', data.errors);
            return null;
        }

        return data.data.user.contributionsCollection.contributionCalendar.weeks;
    } catch (error) {
        console.error('Error fetching GitHub contributions:', error);
        return null;
    }
};

// Convert GitHub color to contribution level (0-4)
export const colorToLevel = (color) => {
    const colorMap = {
        '#ebedf0': 0, // No contributions
        '#9be9a8': 1, // Low
        '#40c463': 2, // Medium-low
        '#30a14e': 3, // Medium-high
        '#216e39': 4, // High
    };
    return colorMap[color] || 0;
};
