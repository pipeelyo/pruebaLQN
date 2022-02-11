import Hook from '../hooks/hook';
import Button from '@mui/material/Button';
import COLORS from '../styles/temaConfig';
import Container from '@mui/material/Container'

const Planets = (props: any) => {
    const { people, planets } = Hook(props);

    const handlePlanets = (infoPlaneta: any) => {
        console.log('Personaje', infoPlaneta);
        
    }
    return (
        <>
            <div>
                characters
                {
                    planets.map((control) =>
                        <>
                            <Container>
                                <Button variant="outlined" onClick={() => handlePlanets(control)}>
                                    {control.name}
                                </Button>
                            </Container>
                        </>

                    )
                }
            </div>

        </>
    );
}

export default Planets;