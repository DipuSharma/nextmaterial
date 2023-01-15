import { Paper, Button } from '@mui/material';
import Image from 'next/image';

export default function Item({ item }) {
    return (
        <Paper>
            <div className='slider-container'>
                <Image src={item.imageUrl} alt={item.title} fill
                    sizes="(max-width: 768px) 30vw,
              (max-width: 1200px) 60vw,
              60vw"/>

                <div className='descriptions' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <h2 className='slider-text'>{item.body}</h2>
                    <Button className="check-button" variant='contained'>
                        Check it out!
                    </Button>
                </div>
            </div>
        </Paper>
    )
}