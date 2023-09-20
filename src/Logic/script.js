const bus_stops = ["manali","karnal","diwana","kullu","panipat","ambala","jind"]

const uniqueCities = new Set();
for(let x of bus_stops)
{
    uniqueCities.add(x.toLowerCase().trim());
}

console.log(uniqueCities);
