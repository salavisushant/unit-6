let container = document.getElementById("scroll-data");

var page = 1;

const getData = () => {
    fetch(`http://localhost:3001/data?_page=${page}&_limit=15`)
        .then((data) => data.json())
        .then((res) => {
            console.log(res);
            console.log("Page:",page);
            showData(res)
        })
    
}
getData()

const showData=(data)=> {
    
    data.forEach((d) => {
        let name = document.createElement('h2');
        name.innerText = d.title;
        container.append(name);
    })
}

const infiniteScroll = () => {
    setTimeout(() => {
        page++;
        getData();
    }, 500);
}

window.addEventListener('scroll', () => {
    const {scrollHeight, scrollTop, clientHeight} = document.documentElement;
    if (scrollHeight + scrollTop >= clientHeight) {
        infiniteScroll();
    }
});