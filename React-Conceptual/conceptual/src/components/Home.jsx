import { useState, useEffect} from "react";



export const Home = () => {
    const [set, setData] = useState([]);

    useEffect(() => {
        getData()
    },[])


    async function getData() {
        let res = await fetch("http://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian");
        let data = await res.json();
        setData(data.meals);
        console.log(data);
    }

    return (
        <>
            {
                set.map((e) => (
                    <div key={e.idMeal}>
                        <img src={e.strMealThumb} alt=""/>
                    </div>
                ))
           }
        </>
    )
}