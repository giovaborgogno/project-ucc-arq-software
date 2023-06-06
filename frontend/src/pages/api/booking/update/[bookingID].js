export default async function handler(req, res) {
    try {
        const { bookingID } = req.query;
        //   const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/hotel`, {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/booking/${bookingID}`, {
            method: 'PUT',
            body: JSON.stringify(req.body), 
            headers: {
                ...req.headers.JSON,
                'Cookie': req.headers.cookie || ''
            },
            credentials: 'include',
        });

        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}