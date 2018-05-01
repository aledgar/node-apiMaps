const axios = require('axios');

let getLugarLngLat = async (descripcion) =>{

    let urlEncoded = encodeURI(descripcion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlEncoded}&key=AIzaSyCdFoPkgTa5g3tmhMwx8m4Eaf-XF-Whdeg`)

    if(resp.data.status === 'ZERO_RESULTS'){
        throw new Error(`No hay reusltados para la ciudad ${descripcion} `);
    }
         
    let location = resp.data.results[0];
    let coors = location.geometry.location;
    
    return {
        ciudad: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
    
}

module.exports = {
    getLugarLngLat
}