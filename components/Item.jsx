import { Paper, Button } from '@mui/material';
import Image from 'next/image';

export default function Item({ item }) {
    return (
        <Paper>
            <Image src={item.imageUrl} alt={item.title} style={{ width: "100%", height: "60vh" }} />

            <div className='descriptions' style={{ display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                <h2>{item.body}</h2>
                <Button className="CheckButton" variant='contained'>
                    Check it out!
                </Button>
            </div>


        </Paper>
    )
}