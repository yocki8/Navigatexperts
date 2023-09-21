
function Busfilter(bus_id){

    const arr =
    [
        {
            bus_id: 1,
            curr_location: "2.78.1.90E",
            bus_stops: ["karnal","manali","karnal","kullu pete","ambala","shimla","manali"],
            bus_timing: [5,6,7,8,9,10,11],
            emission: "cng"
        },
        

        {
            bus_id:2,
            curr_location: "4.1.624.0W",
            bus_stops: ["panipat","Diwana","Samalkha","Ganaur"],
            bus_timing: [1,3,5,6],
            emission: "diesel"
        },

        {
            bus_id: 3,
            curr_location: "7.1.334.1E",
            bus_stops: ["manali","karnal","diwana","kullu","panipat","ambala","karnal"],
            bus_timing: [4,5,6,7,8,9,10],
            emission: "electric"
        }
    ]

    const uniqueCities = new Set();
    for(let x of arr)
    {
        for(let y of x.bus_stops)
        {
            uniqueCities.add(y.toLowerCase().trim());
        }
    }

    const source = document.querySelector('.source');
    const destination = document.querySelector('.destination');
    const button = document.querySelector('.button');

    button.addEventListener('click',()=>{
        const from = source.value;
        const to = destination.value;

        const data=[];

        for(let x of arr)
        {
            let sour=0,dest=0;
            for(let [stop_no,stopage] of x.bus_stops.entries())
            {
                if(stopage===from) sour = stop_no;
                if(stopage===to) dest = stop_no;
                
                if((sour || x.bus_stops[0]===from) && dest && sour<dest)
                {
                    data.push({
                        dataBus_id: x.bus_id,
                        arrival_time: x.bus_timing[sour],
                        dataBus_stops: [...x.bus_stops.slice(sour,dest+1)],
                        dataBus_timing: [...x.bus_timing.slice(sour,dest+1)]
                    });
                    sour=0;
                    dest=0;
                }
            }

        }
        
        
        data.sort((a,b)=>{ return a.arrival_time-b.arrival_time});
        console.log(data);
    })
}

export default Busfilter;