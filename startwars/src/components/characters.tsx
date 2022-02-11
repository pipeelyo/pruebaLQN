import { useState } from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { START_WARS_IMAGE } from '../styles/temaConfig';
import Hook from '../hooks/hook';
import { infoPersons } from "../types/types";

const Characters = (props: any) => {
    const { people } = Hook(props);
    const [open, setOpen] = useState<boolean>(false);
    const [homeworld, setHomeworld] = useState<string>('');
    const [dataModal, setDataModal] = useState<Array<infoPersons>>(() =>[
        {
            birth_year: '',
            created: '',
            edited: '',
            eye_color: '',
            films: '',
            gender: '',
            hair_color: '',
            height: '',
            homeworld: '',
            mass: '',
            name: '',
            skin_color: ''
        }]
    );

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    const handleOpen = (data: any) => {
        setOpen(true);
        fetchPeople(data.homeworld)
        data.homeworld = homeworld;
        setDataModal([data]);
    };

    const fetchPeople = async (url: string) => {
        try {
            let res: any = await fetch(url);
            let data: any = await res.json();
            setHomeworld(data.name);
        } catch (e) {
            console.log('error', e);

        }

    }

    const handleClose = () => setOpen(false);

    return (
        <>
            <div style={{ marginLeft: '40%' }}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={START_WARS_IMAGE}
                        alt="StartWars"
                    />
                    {
                        people.map((control) =>
                            <>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        <Button variant="outlined" onClick={() => handleOpen(control)}>
                                            {control.name}
                                        </Button>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Creado: {control.created}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Editado: {control.edited}
                                    </Typography>
                                </CardContent>

                            </>
                        )
                    }

                    <Modal
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="keep-mounted-modal-title"
                        aria-describedby="keep-mounted-modal-description"
                    >
                        <Box sx={style}>
                            {dataModal.map((control: any) =>
                                <>
                                    
                                    <Typography variant="body2" color="text.secondary">
                                        Cumpleaños:  {control.birth_year}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        color de ojos:  {control.eye_color}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                       Genero:  {control.gender}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        color de pelo:  {control.hair_color}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Altura:  {control.height}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lugar de nacimiento:  {control.homeworld}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        peso:   {control.mass}
                                    </Typography>
                                    
                                    <Typography variant="body2" color="text.secondary">
                                        color de piel:  {control.skin_color}
                                    </Typography>
                                </>
                            )}
                        </Box>
                    </Modal>
                </Card>
            </div>

        </>
    );
}

export default Characters;