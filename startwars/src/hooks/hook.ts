import { useEffect, useState } from "react";

const Hook = (props: any) => {
    const [idMenu, setIdMenu] = useState<number>(0);
    const [people, setPeople] = useState<Array<any>>([]);
    const [planets, setPlanets] = useState<Array<any>>([]);
    
    useEffect(() => {
        fetchPeople();
        fetchPlanets();
    }, []);

    const fetchPeople = async () => {
        try {
            let res: any = await fetch('https://swapi.dev/api/people/?format=json');
            let data: any = await res.json();
            let dataResult = data.results
            setPeople(dataResult);
        } catch (e) {
            console.log('error', e);

        }

    }

    const fetchPlanets = async () => {
        let res: any = await fetch('https://swapi.dev/api/planets/?format=json');
        let data: any = res.json();
        setPlanets(data.results);
    }


    return {
        idMenu,
        setIdMenu,
        people,
        planets
    };
}

export default Hook;