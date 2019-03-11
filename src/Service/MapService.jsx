import api  from '.';

export const ServiceApi = {

    addMarker: ( { name, latitude, longitude } ) => {
        let data = new FormData();
        data.append("name", name);
        data.append("latitude", latitude);
        data.append("longitude", longitude);
        return api.post("post_location", data);
    },

    // addVirtuoso: ( { name, databaseLink, file2 } ) => {
    //     let data = new FormData();
    //     data.append("name", name);
    //     data.append("baseURI", databaseLink);
    //     data.append("file2", file2);
    //     return api.post("uploadLink", data);
    // }
};