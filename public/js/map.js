
mapboxgl.accessToken = mapToken;

//mapboxgl.accessToken = 'pk.eyJ1IjoiaXRzc2F1cmFiaDk4IiwiYSI6ImNtM2pvcnV1NTA1bmYybHFvOTRvcGFuejAifQ.0GzVYPhqu-nAyPmDBOvY-A';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 4 // starting zoom
});

// console.log(coordinates);

const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat(coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<p> Exact Location provided after booking  </p>`))
    .addTo(map);