import FormData from 'form-data';
import multer from 'multer';

const upload = multer().single('file');

export default async function handler(req, res) {
    try {
        const { hotelID } = req.query;

        upload(req, res, async (err) => {
            if (err) {
                console.error('Error uploading file:', err);
                res.status(400).json({ error: 'File upload failed' });
                return;
            }

            const file = req.file
            const formdata = new FormData()
            formdata.append("file", req.body.file.buffer)

            const boundary = req.headers['content-type'].split('boundary=')[1];
            console.log(boundary)
            

            const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/hotel/photo/upload/${hotelID}`, {
                method: 'POST',
                body: formdata,
                headers: {
                    // 'Content-Type': `multipart/form-data; boundary=${boundary}`,
                    'Cookie': req.headers.cookie || ''
                },
                credentials: 'include',
            });

            const data = await response.json();
            res.status(response.status).json(data);

        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};

  
