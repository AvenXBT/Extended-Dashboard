export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Api-Key, Content-Type');

    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { endpoint } = req.query;
    const apiKey = req.headers['x-api-key'];

    if (!endpoint) {
        return res.status(400).json({ error: 'Missing endpoint parameter' });
    }

    if (!apiKey) {
        return res.status(401).json({ error: 'Missing API key' });
    }

    const API_BASE = 'https://api.starknet.extended.exchange/api/v1';

    try {
        const response = await fetch(`${API_BASE}${endpoint}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey,
                'User-Agent': 'ExtendedDashboard/1.0',
                'Content-Type': 'application/json'
            }
        });

        // Get response as text first
        const text = await response.text();
        
        // Try to parse as JSON, return empty data if not valid JSON
        let data;
        try {
            data = text ? JSON.parse(text) : { data: null };
        } catch (e) {
            // If response is not JSON, return it as-is or empty
            data = { data: null, rawResponse: text || null };
        }

        if (!response.ok) {
            return res.status(response.status).json({
                error: data.error || 'API request failed',
                message: data.message || `Extended API returned ${response.status}`,
                status: response.status
            });
        }

        return res.status(200).json(data);

    } catch (error) {
        console.error('Proxy error:', error);
        return res.status(500).json({
            error: 'Proxy error',
            message: error.message || 'Failed to fetch from Extended API'
        });
    }
}
