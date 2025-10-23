
//     // mapboxgl.accessToken = mapToken
//     // const map = new mapboxgl.Map({
//     //     container: 'map', // container ID
//     //     center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
//     //     zoom: 8 // starting zoom
//     // });

//     // console.log(coordinates)
//     // const marker=new mapboxgl.Marker({color:"red"})
//     // .setLngLat(coordinates)
//     // .setPopup(new mapboxgl.Popup({offset: 25}))
//     // .setHTML("<h1>Hello World!</h1>")
//     // .addTo(map)
//     mapboxgl.accessToken = mapToken;

// // Set default coordinates (e.g., center of India)
// const defaultCoordinates = [78.9629, 20.5937]; // [lng, lat]

// // If your listing has coordinates, use them; otherwise, use default
// const coordinates = listing.geometry ? listing.geometry.coordinates : defaultCoordinates;

// const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     center: coordinates,
//     zoom: 8
// });

// const marker = new mapboxgl.Marker({ color: "red" })
//     .setLngLat(coordinates)
//     .setPopup(new mapboxgl.Popup({ offset: 25 })
//     .setHTML("<h1>Hello World!</h1>"))
//     .addTo(map);

// console.log(coordinates);

